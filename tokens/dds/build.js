const StyleDictionary = require('style-dictionary');

console.log('Build started...');
console.log('\n==============================================');


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
        return prop.unit === 'percent';
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
        return `"${prop.value}"`;
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
  transforms: StyleDictionary.transformGroup['js'].concat(['pixel/px', '%/em'])
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


// APPLY THE CONFIGURATION
// IMPORTANT: the registration of custom transforms
// needs to be done _before_ applying the configuration
StyleDictionaryExtended = StyleDictionary.extend(__dirname + '/config.json');


// FINALLY, BUILD ALL THE PLATFORMS
StyleDictionaryExtended.buildAllPlatforms();


console.log('\n==============================================');
console.log('\nBuild completed!');