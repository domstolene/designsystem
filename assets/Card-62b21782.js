import{d as v,b as y,s as L,A as a,a as g}from"./ddsReferenceTokens-ceb64027.js";import{s as D,g as b}from"./BaseComponentProps-d435d0d0.js";import"./index-1b03fe98.js";import"./Caption-d066edab.js";import"./Heading-d8600f49.js";import"./Label-10c93eb5.js";import"./Legend-0cba57ca.js";import"./Link-7a88da71.js";import"./Paragraph-5ad16720.js";import"./TextOverflowEllipsis-e584ab25.js";import{a as T,d as x}from"./Typography-56baa34a.js";import{h as B,b as E}from"./Input.styles-82cfcbdb.js";const{colors:r,border:l}=v,{textDefault:s}=y,$={border:`${l.BordersDdsBorderStyleLightStrokeWeight} solid`},S={filledLight:{backgroundColor:r.DdsColorPrimaryLightest,borderColor:r.DdsColorPrimaryLightest,color:s.textColor},filledDark:{backgroundColor:r.DdsColorPrimaryBase,borderColor:r.DdsColorPrimaryBase,color:r.DdsColorNeutralsWhite},strokeDark:{backgroundColor:r.DdsColorNeutralsWhite,borderColor:l.BordersDdsBorderStyleLightStroke,color:s.textColor},strokeLight:{backgroundColor:r.DdsColorNeutralsWhite,borderColor:l.BordersDdsBorderStyleLightStroke,color:s.textColor}},o={base:$,colors:S},h=L.div`
  border: ${o.base.border};
  ${T(x)};
  &::selection,
  *::selection {
    ${D}
  }
  @media (prefers-reduced-motion: no-preference) {
    transition: box-shadow 0.2s, border-color 0.2s;
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
`,n=e=>{const{color:d="filledLight",cardType:t,cardRef:i,children:c,id:u,className:m,htmlProps:p,...f}=e;if(t==="navigation"){const{href:C,target:k}=e;return g(h,{...b(u,m,p,f),cardType:t,color:d,as:"a",ref:i,href:C,target:k,children:c})}return g(h,{...b(u,m,p,f),cardType:t,color:d,as:"div",ref:i,children:c})};n.displayName="Card";try{n.displayName="Card",n.__docgenInfo={description:"",displayName:"Card",props:{color:{defaultValue:null,description:"Fargepalett i komponenten.",name:"color",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"filledDark"'},{value:'"filledLight"'},{value:'"strokeDark"'},{value:'"strokeLight"'}]}},cardRef:{defaultValue:null,description:"Referanse til komponenten.",name:"cardRef",required:!1,type:{name:"RefObject<HTMLDivElement> | RefObject<HTMLAnchorElement> | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement> | HTMLAttributes<HTMLAnchorElement> | undefined"}},cardType:{defaultValue:null,description:"Spesifiserer funksjonalitet og formål med komponenten. **OBS!** ved `'navigation'` må `href` oppgis. Ved `'expandable'` må alle `<Card />` grupperte sammen ligge egen `<div>` container.",name:"cardType",required:!0,type:{name:"enum",value:[{value:'"info"'},{value:'"navigation"'},{value:'"expandable"'}]}}}}}catch{}export{n as C};
//# sourceMappingURL=Card-62b21782.js.map
