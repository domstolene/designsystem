import{a as g}from"./jsx-runtime-e43ccb36.js";import{d as v,a as y,s as L,n as a}from"./ddsReferenceTokens-fe3c594e.js";import{s as D,g as b}from"./BaseComponentProps-b46a4458.js";import"./index-1b03fe98.js";import"./Caption-a006c5bc.js";import"./Heading-3ac6a2d9.js";import"./Label-60a960ab.js";import"./Legend-bad3d4ec.js";import"./Link-bef7f478.js";import"./Paragraph-f6678e05.js";import"./TextOverflowEllipsis-c2a9fc8f.js";import{a as T,d as x}from"./Typography-9d6edb9c.js";import{h as B,b as E}from"./Input.styles-c3e229ec.js";const{colors:r,border:l}=v,{textDefault:s}=y,$={border:`${l.BordersDdsBorderStyleLightStrokeWeight} solid`},S={filledLight:{backgroundColor:r.DdsColorPrimaryLightest,borderColor:r.DdsColorPrimaryLightest,color:s.textColor},filledDark:{backgroundColor:r.DdsColorPrimaryBase,borderColor:r.DdsColorPrimaryBase,color:r.DdsColorNeutralsWhite},strokeDark:{backgroundColor:r.DdsColorNeutralsWhite,borderColor:l.BordersDdsBorderStyleLightStroke,color:s.textColor},strokeLight:{backgroundColor:r.DdsColorNeutralsWhite,borderColor:l.BordersDdsBorderStyleLightStroke,color:s.textColor}},o={base:$,colors:S},h=L.div`
  border: ${o.base.border};
  ${T(x)};
  &::selection,
  *::selection {
    ${D}
  }
  @media (prefers-reduced-motion: no-preference) {
    transition:
      box-shadow 0.2s,
      border-color 0.2s;
  }
  ${({color:e})=>e&&a`
      color: ${o.colors[e].color};
      background-color: ${o.colors[e].backgroundColor};
      border-color: ${o.colors[e].borderColor};
    `}
  ${({cardType:e})=>e==="navigation"?a`
          text-decoration: none;
          &:hover {
            ${B}
          }
          &:focus {
            ${E}
          }
        `:e==="expandable"?a`
          width: 100%;
          box-sizing: border-box;
          &:not(:first-of-type) {
            border-top: none;
          }
        `:""}
`,n=e=>{const{color:i="filledLight",cardType:t,cardRef:d,children:c,id:m,className:u,htmlProps:p,...f}=e;if(t==="navigation"){const{href:C,target:k}=e;return g(h,{...b(m,u,p,f),cardType:t,color:i,as:"a",ref:d,href:C,target:k,children:c})}return g(h,{...b(m,u,p,f),cardType:t,color:i,as:"div",ref:d,children:c})};n.displayName="Card";try{n.displayName="Card",n.__docgenInfo={description:"",displayName:"Card",props:{color:{defaultValue:null,description:"Fargepalett i komponenten.",name:"color",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"filledDark"'},{value:'"filledLight"'},{value:'"strokeDark"'},{value:'"strokeLight"'}]}},cardRef:{defaultValue:null,description:"Referanse til komponenten.",name:"cardRef",required:!1,type:{name:"RefObject<HTMLDivElement> | RefObject<HTMLAnchorElement> | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement> | HTMLAttributes<HTMLAnchorElement> | undefined"}},cardType:{defaultValue:null,description:"Spesifiserer funksjonalitet og formål med komponenten. **OBS!** ved `'navigation'` må `href` oppgis. Ved `'expandable'` må alle `<Card />` grupperte sammen ligge egen `<div>` container.",name:"cardType",required:!0,type:{name:"enum",value:[{value:'"navigation"'},{value:'"info"'},{value:'"expandable"'}]}}}}}catch{}export{n as C};
//# sourceMappingURL=Card-89918b7f.js.map
