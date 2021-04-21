(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{468:function(module,exports,__webpack_require__){__webpack_require__(469),__webpack_require__(623),__webpack_require__(624),__webpack_require__(837),__webpack_require__(834),__webpack_require__(840),__webpack_require__(841),__webpack_require__(838),__webpack_require__(835),__webpack_require__(842),__webpack_require__(843),module.exports=__webpack_require__(822)},536:function(module,exports){},624:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(336)},822:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(336).configure)([__webpack_require__(823)],module,!1)}).call(this,__webpack_require__(187)(module))},823:function(module,exports,__webpack_require__){var map={"./components/Checkbox/Checkbox.stories.tsx":839,"./components/Radio/Radio.stories.tsx":836,"./storybook/Introduction.stories.mdx":825};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=823},825:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(8),__webpack_require__(13),__webpack_require__(20),__webpack_require__(28),__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(44),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(212);__webpack_require__(826),__webpack_require__(827),__webpack_require__(828),__webpack_require__(829),__webpack_require__(830),__webpack_require__(831),__webpack_require__(832),__webpack_require__(833);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.b,{title:"Introduction",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("style",null,"\n  .subheading {\n    --mediumdark: '#999999';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n  \n  .link-item img {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n\n  \n"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h1",{id:"domstolenes-designsystem-ui-komponenter"},"Domstolenes designsystem: UI komponenter"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,"Velkommen til Domstolenes Storybook! Her kan du se oversikten over og interagere med alle UI komponentene som ligger i vårt ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("a",{parentName:"p",href:"https://www.npmjs.com/org/norges-domstoler/dds-components",target:"_blank",rel:"nofollow noopener noreferrer"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("strong",{parentName:"a"},"komponentbibliotek")),".\nStorybook kan brukes til å finne informasjon om komponentene, testing og utvikling i isolasjon.\nVår Storybook er også integrert med designsystemets ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("a",{parentName:"p",href:"https://design.domstol.no/",target:"_blank",rel:"nofollow noopener noreferrer"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("strong",{parentName:"a"},"dokumentasjon")),", sjekk den ut for mer info om både komponentene og designsystemet."))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},826:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/code-brackets.2e1112d7.svg"},827:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/colors.a4bd0486.svg"},828:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/comments.a3859089.svg"},829:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/direction.b770f9af.svg"},830:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/flow.edad2ac1.svg"},831:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/plugin.d494b228.svg"},832:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/repo.6d496322.svg"},833:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/stackalt.dba9fbb3.svg"},836:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Radio",(function(){return Radio_stories_Radio}));__webpack_require__(8),__webpack_require__(194),__webpack_require__(28),__webpack_require__(31),__webpack_require__(17),__webpack_require__(86),__webpack_require__(35),__webpack_require__(33),__webpack_require__(42),__webpack_require__(51),__webpack_require__(9),__webpack_require__(99);var _templateObject,_templateObject2,_templateObject3,_templateObject4,react=__webpack_require__(0),react_default=__webpack_require__.n(react),styled_components_browser_esm=(__webpack_require__(13),__webpack_require__(20),__webpack_require__(285),__webpack_require__(193),__webpack_require__(119),__webpack_require__(78)),RadioGroupContext=react_default.a.createContext({}),jsx_runtime=__webpack_require__(22);function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var RadioGroup_templateObject,nextUniqueId=0,Radio_Radio=Object(react.forwardRef)((function(_ref,ref){var id=_ref.id,name=_ref.name,label=_ref.label,children=_ref.children,checked=_ref.checked,disabled=_ref.disabled,value=_ref.value,onChange=_ref.onChange,className=_ref.className,style=_ref.style,rest=_objectWithoutProperties(_ref,["id","name","label","children","checked","disabled","value","onChange","className","style"]),uniqueId=_slicedToArray(Object(react.useState)(null!=id?id:"radio-".concat(++nextUniqueId)),1)[0],radioGroup=function useRadioGroup(){return Object(react.useContext)(RadioGroupContext)}(),radioChecked=void 0!==checked?checked:function isValueEqualToGroupValue(value,group){return"number"==typeof value?value===Number(group.value):value===group.value}(value,radioGroup),radioName=null!=name?name:radioGroup.name;return Object(jsx_runtime.jsxs)(StyledRadio,{htmlFor:uniqueId,className:className,style:style,children:[Object(jsx_runtime.jsx)(Input,Object.assign({},rest,{type:"radio",id:uniqueId,name:radioName,checked:radioChecked,disabled:disabled||radioGroup.disabled,value:value,onChange:function handleChange(event){onChange&&onChange(event),radioGroup.onChange(event)},ref:ref})),Object(jsx_runtime.jsx)(Label,{children:null!=label?label:children}),Object(jsx_runtime.jsx)(Checkmark,{})]})})),StyledRadio=styled_components_browser_esm.a.label(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  padding: 0.5rem 0;\n  padding-left: 2rem;\n  margin-bottom: 0;\n  cursor: pointer;\n  font-size: 0.875rem;\n  font-family: 'Proxima Nova', Arial;\n  user-select: none;\n"]))),Checkmark=styled_components_browser_esm.a.span(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  position: absolute;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 0.75rem;\n  width: 0.75rem;\n  border: 2px solid #d2231e;\n  border-radius: 50%;\n  transition: border-color 0.3s;\n"]))),Label=styled_components_browser_esm.a.span(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n  color: #4a4a4a;\n"]))),Input=styled_components_browser_esm.a.input(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n  clip: rect(0 0 0 0);\n  position: absolute;\n  height: 0;\n  width: 0;\n  margin: 0;\n\n  ~ "," {\n    &:after {\n      content: '';\n      display: block;\n      width: 0;\n      height: 0;\n      border-radius: 50%;\n      background: #d2231e;\n      transition: all 0.3s;\n    }\n  }\n\n  :focus ~ ",":before {\n    content: '';\n    position: absolute;\n    height: 2rem;\n    width: 2rem;\n    top: calc(-0.5625);\n    left: calc(-0.5625);\n    background: #d2231e;\n    opacity: 0.2;\n    border-radius: 50%;\n  }\n\n  :checked ~ "," {\n    border: 2px solid #d2231e;\n\n    &:after {\n      width: 0.5rem;\n      height: 0.5rem;\n    }\n  }\n\n  :disabled ~ "," {\n    opacity: 0.6;\n  }\n"])),Checkmark,Checkmark,Checkmark,Checkmark);try{Radio_Radio.displayName="Radio",Radio_Radio.__docgenInfo={description:"",displayName:"Radio",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Radio/Radio.tsx#Radio"]={docgenInfo:Radio_Radio.__docgenInfo,name:"Radio",path:"src/components/Radio/Radio.tsx#Radio"})}catch(__react_docgen_typescript_loader_error){}try{StyledRadio.displayName="StyledRadio",StyledRadio.__docgenInfo={description:"",displayName:"StyledRadio",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLLabelElement | null) => void) | RefObject<HTMLLabelElement> | null | undefined"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Radio/Radio.tsx#StyledRadio"]={docgenInfo:StyledRadio.__docgenInfo,name:"StyledRadio",path:"src/components/Radio/Radio.tsx#StyledRadio"})}catch(__react_docgen_typescript_loader_error){}function RadioGroup_slicedToArray(arr,i){return function RadioGroup_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function RadioGroup_iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function RadioGroup_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return RadioGroup_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return RadioGroup_arrayLikeToArray(o,minLen)}(arr,i)||function RadioGroup_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function RadioGroup_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function RadioGroup_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function RadioGroup_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var RadioGroup_RadioGroup=function RadioGroup(_ref){var children=_ref.children,name=_ref.name,value=_ref.value,disabled=_ref.disabled,row=_ref.row,onChange=_ref.onChange,className=_ref.className,style=_ref.style,rest=RadioGroup_objectWithoutProperties(_ref,["children","name","value","disabled","row","onChange","className","style"]),_useState2=RadioGroup_slicedToArray(Object(react.useState)(value),2),groupValue=_useState2[0],setGroupValue=_useState2[1];return Object(jsx_runtime.jsx)(RadioGroupContext.Provider,{value:{name:name,value:groupValue,disabled:disabled,onChange:function handleChange(event){var target=event.target;setGroupValue(target.value),onChange&&onChange(event,target.value)}},children:Object(jsx_runtime.jsx)(StyledRadioGroup,Object.assign({role:"radiogroup",row:row,className:className,style:style},rest,{children:children}))})};RadioGroup_RadioGroup.displayName="RadioGroup",RadioGroup_RadioGroup.defaultProps={row:!1,disabled:!1};var StyledRadioGroup=styled_components_browser_esm.a.div(RadioGroup_templateObject||(RadioGroup_templateObject=function RadioGroup_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: ",";\n\n  ","\n"])),(function(_ref2){return _ref2.row?"row":"column"}),(function(_ref3){if(_ref3.row)return"".concat(StyledRadio," {\n        margin-right: 1rem;\n      }")}));try{RadioGroup_RadioGroup.displayName="RadioGroup",RadioGroup_RadioGroup.__docgenInfo={description:"",displayName:"RadioGroup",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | number"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},row:{defaultValue:{value:"false"},description:"",name:"row",required:!1,type:{name:"boolean | undefined"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>, value: any) => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Radio/RadioGroup.tsx#RadioGroup"]={docgenInfo:RadioGroup_RadioGroup.__docgenInfo,name:"RadioGroup",path:"src/components/Radio/RadioGroup.tsx#RadioGroup"})}catch(__react_docgen_typescript_loader_error){}function Radio_stories_slicedToArray(arr,i){return function Radio_stories_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function Radio_stories_iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function Radio_stories_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return Radio_stories_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Radio_stories_arrayLikeToArray(o,minLen)}(arr,i)||function Radio_stories_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Radio_stories_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Radio_stories_Radio=function Radio(){var _useState2=Radio_stories_slicedToArray(Object(react.useState)(2),2),value=_useState2[0],setValue=_useState2[1];return Object(jsx_runtime.jsxs)("div",{className:"component-container",children:[Object(jsx_runtime.jsx)("h2",{children:" Radio button"}),Object(jsx_runtime.jsx)("hr",{}),Object(jsx_runtime.jsxs)(RadioGroup_RadioGroup,{name:"test","aria-label":"test",value:value,onChange:function onChange(_event,value){setValue(value)},children:[Object(jsx_runtime.jsx)(Radio_Radio,{value:1,children:"Test 1"}),Object(jsx_runtime.jsx)(Radio_Radio,{value:2,children:"Test 2"}),Object(jsx_runtime.jsx)(Radio_Radio,{value:3,children:"Test 3"})]})]})};Radio_stories_Radio.displayName="Radio";__webpack_exports__.default={title:"Designsystem/Radio",component:Radio_Radio};Radio_stories_Radio.parameters=Object.assign({storySource:{source:'() => {\n  const [value, setValue] = useState<number>(2);\n\n  return (\n    <div className="component-container">\n      <h2> Radio button</h2>\n      <hr />\n      <RadioGroup\n        name="test"\n        aria-label="test"\n        value={value}\n        onChange={(_event: ChangeEvent<HTMLInputElement>, value: number) => {\n          setValue(value);\n        }}\n      >\n        <RadioButton value={1}>Test 1</RadioButton>\n        <RadioButton value={2}>Test 2</RadioButton>\n        <RadioButton value={3}>Test 3</RadioButton>\n      </RadioGroup>\n    </div>\n  );\n}'}},Radio_stories_Radio.parameters)},839:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Checkbox",(function(){return Checkbox_stories_Checkbox}));__webpack_require__(8),__webpack_require__(51),__webpack_require__(285),__webpack_require__(193),__webpack_require__(13),__webpack_require__(20),__webpack_require__(28),__webpack_require__(194),__webpack_require__(31),__webpack_require__(17),__webpack_require__(86),__webpack_require__(35),__webpack_require__(33),__webpack_require__(42),__webpack_require__(9),__webpack_require__(99);var _templateObject,_templateObject2,_templateObject3,react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(78),inputTokens_height="10px",inputTokens_width="10px",inputTokens_left="10px",inputTokens_border_width="2px",inputTokens_border_radius="2px",inputTokens_default={color:{border:"#4a4a4a",background:"white",marker:"#4a4a4a"},active:{border:"#4a4a4a",marker:"#4a4a4a"},focus:{border:"#4fa1ff",marker:"#4fa1ff"}},containerTokens_text_color="#4a4a4a",containerTokens_typography={font:"\n    font-family: 'Proxima Nova', Arial;\n    font-size: 14px;\n    line-height: 1;\n"},containerTokens_padding="5px 10px 5px 35px",jsx_runtime=__webpack_require__(22);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var Input=styled_components_browser_esm.a.input(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  height: 0;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  width: 0;\n"]))),Checkmark=styled_components_browser_esm.a.span(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  position: absolute;\n  top: 6px;\n  left: ",";\n  height: ",";\n  width: ",";\n  border: "," solid ",";\n  border-radius: ",";\n  &:after {\n    content: '';\n    position: absolute;\n    display: none;\n  }\n"])),inputTokens_left,inputTokens_height,inputTokens_width,inputTokens_border_width,inputTokens_default.color.border,inputTokens_border_radius),StyledCheckbox=styled_components_browser_esm.a.label(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n  position: relative;\n  cursor: pointer;\n  user-select: none;\n  color: ",";\n  ","\n  padding: ",";\n\n  input:checked ~ "," {\n    background-color: ",";\n  }\n  input:checked ~ ",":after {\n    display: block;\n  }\n  input:checked:focus ~ ",":after, input:focus ~ "," {\n    border-color: ",";\n  }\n\n  ",":after {\n    content: '';\n    display: none;\n    left: 26%;\n    top: 10%;\n    width: 2px;\n    height: 5px;\n    border: solid ",";\n    border-width: 0 2px 2px 0;\n    transform: rotate(45deg);\n  }\n\n  cursor: ",";\n"])),containerTokens_text_color,containerTokens_typography.font,containerTokens_padding,Checkmark,inputTokens_default.color.background,Checkmark,Checkmark,Checkmark,inputTokens_default.focus.marker,Checkmark,inputTokens_default.color.marker,(function(_ref){return _ref.disabled?"not-allowed":"pointer"})),nextUniqueId=0,Checkbox_Checkbox=Object(react.forwardRef)((function(_ref2,ref){var id=_ref2.id,label=_ref2.label,disabled=_ref2.disabled,className=_ref2.className,style=_ref2.style,rest=_objectWithoutProperties(_ref2,["id","label","disabled","className","style"]),uniqueId=_slicedToArray(Object(react.useState)(null!=id?id:"checkbox-".concat(nextUniqueId++)),1)[0];return Object(jsx_runtime.jsxs)(StyledCheckbox,{htmlFor:uniqueId,className:className,style:style,disabled:disabled,children:[Object(jsx_runtime.jsx)(Input,Object.assign({},rest,{id:uniqueId,type:"checkbox",ref:ref,disabled:disabled})),Object(jsx_runtime.jsx)(Checkmark,{}),label]})}));Checkbox_Checkbox.defaultProps={disabled:!1};try{Checkbox_Checkbox.displayName="Checkbox",Checkbox_Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean | undefined"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/Checkbox.tsx#Checkbox"]={docgenInfo:Checkbox_Checkbox.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox/Checkbox.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Designsystem/Checkbox",component:Checkbox_Checkbox};var Checkbox_stories_Checkbox=function Checkbox(args){return Object(jsx_runtime.jsxs)("div",{className:"component-container",children:[Object(jsx_runtime.jsx)("h2",{children:" Checkbox"}),Object(jsx_runtime.jsx)("hr",{}),Object(jsx_runtime.jsx)(Checkbox_Checkbox,Object.assign({},args,{id:"test",label:args.label||"Option"}))]})};Checkbox_stories_Checkbox.displayName="Checkbox",Checkbox_stories_Checkbox.parameters=Object.assign({storySource:{source:'(args: CheckboxProps) => (\n  <div className="component-container">\n    <h2> Checkbox</h2>\n    <hr />\n    <DDSCheckbox {...args} id="test" label={args.label || \'Option\'} />\n  </div>\n)'}},Checkbox_stories_Checkbox.parameters);try{Checkbox_stories_Checkbox.displayName="Checkbox",Checkbox_stories_Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean | undefined"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/Checkbox.stories.tsx#Checkbox"]={docgenInfo:Checkbox_stories_Checkbox.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox/Checkbox.stories.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}},843:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(13),__webpack_require__(28),__webpack_require__(47),__webpack_require__(819),__webpack_require__(38),__webpack_require__(39),__webpack_require__(820),__webpack_require__(193),__webpack_require__(821);var client_api=__webpack_require__(848),esm=__webpack_require__(5),parameters={actions:{argTypesRegex:"^on[A-Z].*"}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.b)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.c)(loader,!1)}));case"parameters":return Object(client_api.d)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.d)(v,!1);default:return console.log(key+" was not supported :( !")}}))}},[[468,2,3]]]);