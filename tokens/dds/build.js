const StyleDictionary = require('style-dictionary');

console.log('Build started...');
console.log('\n==============================================');

function fileHeader(options, commentStyle) {
  var to_ret = '';
  // for backward compatibility we need to have the user explicitly hide them
  var showFileHeader = (options) ? options.showFileHeader : true;
  if (showFileHeader) {
    if (commentStyle === 'short') {
      to_ret += '\n';
      to_ret += '// Do not edit directly\n';
      to_ret += '// Generated on ' + new Date().toUTCString() + '\n';
      to_ret += '\n';
    } else {
      to_ret += '/**\n';
      to_ret += ' * Do not edit directly\n';
      to_ret += ' * Generated on ' + new Date().toUTCString() + '\n';
      to_ret += ' */\n\n';
    }
  }

  return to_ret;
}

// CUSTOM TRANFORMS

StyleDictionary.registerTransform({
  name: 'pixel/px',
  type: 'value',
  matcher: function(prop) {
      // here we are using a custom attribute, declared in the property, to match the values where apply the transform
      return prop.unit === 'pixel' || prop.unit === 'pixels';
  },
  transformer: function(prop) {
      return `${prop.value}px`;
  }
});

StyleDictionary.registerTransform({
    name: '%/em',
    type: 'value',
    matcher: function(prop) {
        return prop.unit === 'percent' && prop.attributes.category === '$dds-font';
    },
    transformer: function(prop) {
        return `${prop.value/100}em`;
    }
  });

StyleDictionary.registerTransform({
    name: 'fontFamily/string',
    type: 'value',
    matcher: function(prop) {
        return prop.type === 'string' && prop.fontValue === 'fontFamily';
    },
    transformer: function(prop) {
        return `'${prop.value}'`;
    }
});

//TRANSFORM EXAMPLES

// StyleDictionary.registerTransform({
//   name: 'hexRGB/hexARGB',
//   type: 'value',
//   matcher: function(prop) {
//       return prop.group === 'color';
//   },
//   transformer: function(prop) {
//       // for sake of simplicity, in this example we assume colors are always in the format #xxxxxx
//       return prop.value.replace(/^#/,'#FF');
//   }
// });

// StyleDictionary.registerTransform({
//   name: 'unitless/dp-sp',
//   type: 'value',
//   matcher: function(prop) {
//       return prop.group === 'typography' || prop.group === 'spacing';
//   },
//   transformer: function(prop) {
//       // in Android font sizes are expressed in "sp" units
//       let unit = (prop.group === 'typography') ? 'sp' : 'dp';
//       return `${prop.value}${unit}`;
//   }
// });



// REGISTER THE CUSTOM TRANFORM GROUPS

// if you want to see what a pre-defined group contains, uncomment the next line:
// console.log(StyleDictionary.transformGroup['group_name']);

StyleDictionary.registerTransformGroup({
  name: 'custom/js',
  transforms: StyleDictionary.transformGroup['js'].concat(['%/em'])
});

StyleDictionary.registerTransformGroup({
  name: 'custom/css',
  transforms: StyleDictionary.transformGroup['css'].concat(['pixel/px', '%/em', 'fontFamily/string'])
});

StyleDictionary.registerTransformGroup({
    name: 'custom/scss',
    transforms: StyleDictionary.transformGroup['scss'].concat(['pixel/px', '%/em', 'fontFamily/string'])
  });

// REGISTER A CUSTOM FORMAT (example)

// StyleDictionary.registerFormat({
//   name: 'custom/android/xml',
//   formatter: function(dictionary) {
//     return dictionary.allProperties.map(function(prop) {
//       return `<item name="${prop.name}">${prop.value}</item>`;
//     }).join('\n');
//   }
// });

StyleDictionary.registerFormat({
  name: 'custom/javascript/es6',
  formatter: function(dictionary) {
    return fileHeader(this.options) + dictionary.allProperties.map(token => {
        let output = `export const ${token.name} = ${JSON.stringify(token.value)};`;
        if(token.unit === 'pixel' || token.unit === 'pixels') {
          output = `export const ${token.name} = "${token.value}px";\nexport const ${token.name}NumberPx = ${token.value};`;
        }
        if(token.comment) {
          output += ` // ${token.comment}`;
        }
        return output;
      }).join(`\n`);
  }
})

StyleDictionary.registerFormat({
  name: 'javascript/objectExported',
  formatter: function(dictionary) {
    return `${fileHeader(this.options)} export const ${(this.name || 'ddsStyles')} = ${JSON.stringify(dictionary.properties, null, 2)};`;
  }
})

// APPLY THE CONFIGURATION
// IMPORTANT: the registration of custom transforms
// needs to be done _before_ applying the configuration
StyleDictionaryExtended = StyleDictionary.extend(__dirname + '/config.json');


// FINALLY, BUILD ALL THE PLATFORMS
StyleDictionaryExtended.buildAllPlatforms();


console.log('\n==============================================');
console.log('\nBuild completed!');