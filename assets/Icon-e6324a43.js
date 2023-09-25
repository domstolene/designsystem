import{s as y,j as v,a as s,d as r}from"./ddsReferenceTokens-647ce456.js";import{g as S}from"./BaseComponentProps-a100791d.js";import"./index-ebeaab24.js";const a=24,u=`${a}px`,z=y.svg.attrs(({height:e,width:t,fill:n})=>({height:e||u,width:t||u,fill:n||"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${a} ${a}`}))`
  display: inline-block;
  transition: fill 0.2s;
  flex-shrink: 0;
`;function o(e){const{title:t,children:n,...i}=e;return v(z,{...i,children:[t&&s("title",{children:t}),n]})}try{o.displayName="SvgWrapper",o.__docgenInfo={description:"",displayName:"SvgWrapper",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}}}}}catch{}function p(e){return s(o,{...e,children:s("path",{d:"M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"})})}try{p.displayName="OpenExternalIcon",p.__docgenInfo={description:"",displayName:"OpenExternalIcon",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}}}}}catch{}const I=e=>{switch(e){case"small":return r.iconSizes.DdsIconsizeSmall;case"medium":return r.iconSizes.DdsIconsizeMedium;case"large":return r.iconSizes.DdsIconsizeLarge;case"inherit":return"1em";default:return r.iconSizes.DdsIconsizeMedium}};function l(e){const{id:t,iconSize:n="medium",color:i="currentcolor",icon:m,className:f,htmlProps:c={},...g}=e,{title:h,"aria-hidden":_=!0}=c,d=I(n);return m({...S(t,f,c,g),title:h,height:d,width:d,fill:i,"aria-hidden":_})}l.displayName="Icon";try{l.displayName="Icon",l.__docgenInfo={description:"",displayName:"Icon",props:{icon:{defaultValue:null,description:"Ikonet importert fra `@norges-domstoler/dds-components`.",name:"icon",required:!0,type:{name:"SvgIcon"}},iconSize:{defaultValue:null,description:"Størrelsen på ikonet.",name:"iconSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},color:{defaultValue:null,description:"Fargen på ikonet.",name:"color",required:!1,type:{name:"Color | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<SVGSVGElement> | undefined"}}}}}catch{}export{l as I,p as O,o as S};
//# sourceMappingURL=Icon-e6324a43.js.map
