import{d as o,b as e}from"./focus-visible-c2e9b88d.js";const{colors:r}=o,{textDefault:t}=e,d=(a,s)=>a.slice(0,5)!=="rgba("||a.slice(-1)!==")"?"":a.replace(/[\d\.]+\)$/g,s.toString()+")"),n={interactive:r.DdsColorInteractiveBase,primary:r.DdsColorPrimaryBase,danger:r.DdsColorDangerBase,success:r.DdsColorSuccessBase,warning:r.DdsColorWarningBase,onLight:t.textColor,onDark:r.DdsColorNeutralsWhite,gray1:r.DdsColorNeutralsGray1,gray2:r.DdsColorNeutralsGray2,gray3:r.DdsColorNeutralsGray3,gray4:r.DdsColorNeutralsGray4,gray5:r.DdsColorNeutralsGray5,gray6:r.DdsColorNeutralsGray6,gray7:r.DdsColorNeutralsGray7,gray8:r.DdsColorNeutralsGray8,gray9:r.DdsColorNeutralsGray9},g=["interactive","primary","danger","success","warning","onLight","onDark","gray1","gray2","gray3","gray4","gray5","gray6","gray7","gray8","gray9"];function l(a){return g.indexOf(a)!==-1}const i=a=>l(a)?n[a]:a;export{d as c,i as g};
//# sourceMappingURL=color-a12930ac.js.map