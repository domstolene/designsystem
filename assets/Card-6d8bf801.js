import{_ as x}from"./tslib.es6-49c71693.js";import{d as v,b as T,s as B,A as t,a as g}from"./ddsReferenceTokens-f1d35829.js";import{Q as p,a as u}from"./dds-core-c67132cd.js";import{O as L,A as N}from"./dds-typography-cc6cb429.js";import{P,R as S}from"./dds-form-9b45fc8d.js";var o=v.colors,s=v.border,l=T.textDefault,_={border:"".concat(s.BordersDdsBorderStyleLightStrokeWeight," solid")},R={filledLight:{backgroundColor:o.DdsColorPrimaryLightest,borderColor:o.DdsColorPrimaryLightest,color:l.textColor},filledDark:{backgroundColor:o.DdsColorPrimaryBase,borderColor:o.DdsColorPrimaryBase,color:o.DdsColorNeutralsWhite},strokeDark:{backgroundColor:o.DdsColorNeutralsWhite,borderColor:s.BordersDdsBorderStyleLightStroke,color:l.textColor},strokeLight:{backgroundColor:o.DdsColorNeutralsWhite,borderColor:s.BordersDdsBorderStyleLightStroke,color:l.textColor}},a={base:_,colors:R},y=B.div.withConfig({displayName:"Card__Container",componentId:"sc-410ao9-0"})(["border:",";",";&::selection,*::selection{","}@media (prefers-reduced-motion:no-preference){transition:box-shadow 0.2s,border-color 0.2s;}"," ",""],a.base.border,L(N),p,function(e){var r=e.color;return r&&t(["color:",";background-color:",";border-color:",";"],a.colors[r].color,a.colors[r].backgroundColor,a.colors[r].borderColor)},function(e){var r=e.cardType;return r==="navigation"?t(["text-decoration:none;&:hover{","}&:focus{","}"],P,S):r==="expandable"?t(["width:100%;box-sizing:border-box;&:not(:first-of-type){border-top:none;}"]):""}),A=function(r){var c=r.color,i=c===void 0?"filledLight":c,d=r.cardType,n=r.cardRef,b=r.children,C=r.id,f=r.className,h=r.htmlProps,m=x(r,["color","cardType","cardRef","children","id","className","htmlProps"]);if(d==="navigation"){var k=r.href,D=r.target;return g(y,Object.assign({},u(C,f,h,m),{cardType:d,color:i,as:"a",ref:n,href:k,target:D,children:b}))}return g(y,Object.assign({},u(C,f,h,m),{cardType:d,color:i,as:"div",ref:n,children:b}))};A.displayName="Card";export{A as C};
//# sourceMappingURL=Card-6d8bf801.js.map
