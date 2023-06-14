const i=(...o)=>o.filter(Boolean).join(" "),m=(o,a,r,l)=>{if(typeof a=="string"||l!=null){const{id:e,className:t,...c}=r??{},s=o??e,p=i(a,t);return{...l,...c,...p&&{className:p},...s&&{id:s}}}else{const{id:e,className:t,...c}=a??{},s=o??e;return{...r,...c,...t&&{className:t},...s&&{id:s}}}};export{m as g,i as j};
//# sourceMappingURL=BaseComponentProps-bb0d5515.js.map
