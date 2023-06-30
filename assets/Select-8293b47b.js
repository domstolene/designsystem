import{d as So,b as mo,s as R,A as C,j as y,a as i}from"./focus-visible-8467fd8b.js";import{R as ho,r as Do}from"./index-d47b1f5a.js";import{S as $o,c as Co}from"./react-select.esm-e7f8527d.js";import{i as D,U as fo,m as A,n as vo}from"./dds-icons-57b6044b.js";import{Q as Ro,W as yo,N as xo,E as T}from"./dds-core-b89b291f.js";import{B as G,h as zo,F as Lo,k as Q,w as Io}from"./dds-form-9dbc5b3d.js";import{O as p,M as wo}from"./dds-typography-4e6445f7.js";import{s as P}from"./scrollbarStyling-b67d8d39.js";import{g as v}from"./icon-aa5b86b3.js";import{r as Xo}from"./renderInputMessage-0780c203.js";const{colors:a,spacing:r,borderRadius:h,border:ko}=So,{textDefault:W}=mo,H={medium:"supportingStylePlaceholderText01",small:"supportingStylePlaceholderText02",tiny:"supportingStylePlaceholderText03"},g={control:G,option:G,placeholder:H,noOptionsMessage:H,groupHeading:"supportingStyleHelperText01",multiValueLabel:"bodySans01"},Mo={borderRadius:h.RadiiDdsBorderRadius1Radius,border:`${ko.BordersDdsBorderStyleLightStrokeWeight} solid`,borderColor:a.DdsColorNeutralsGray5,backgroundColor:a.DdsColorNeutralsWhite,color:a.DdsColorNeutralsGray9,disabled:{backgroundColor:a.DdsColorNeutralsGray1,borderColor:a.DdsColorNeutralsGray5},readOnly:{borderColor:"transparent",backgroundColor:"transparent"},isMulti:{sizes:{medium:{padding:`${r.SizesDdsSpacingLocalX075} ${r.SizesDdsSpacingLocalX05} ${r.SizesDdsSpacingLocalX075} ${r.SizesDdsSpacingLocalX075}`},small:{padding:`${r.SizesDdsSpacingLocalX05} ${r.SizesDdsSpacingLocalX05} ${r.SizesDdsSpacingLocalX05} ${r.SizesDdsSpacingLocalX075}`},tiny:{padding:`${r.SizesDdsSpacingLocalX025} ${r.SizesDdsSpacingLocalX05}`}}},sizes:{medium:{padding:`${r.SizesDdsSpacingLocalX075} ${r.SizesDdsSpacingLocalX05} ${r.SizesDdsSpacingLocalX075} ${r.SizesDdsSpacingLocalX075}`},small:{padding:`${r.SizesDdsSpacingLocalX05} ${r.SizesDdsSpacingLocalX05} ${r.SizesDdsSpacingLocalX05} ${r.SizesDdsSpacingLocalX075}`},tiny:{padding:`${r.SizesDdsSpacingLocalX025} ${r.SizesDdsSpacingLocalX05} ${r.SizesDdsSpacingLocalX025} ${r.SizesDdsSpacingLocalX05}`}}},Vo={color:a.DdsColorNeutralsGray6},_o={base:{color:a.DdsColorNeutralsGray6},hover:{color:a.DdsColorInteractiveBase},readOnly:{color:"transparent"}},No={base:{color:a.DdsColorNeutralsGray6},hover:{color:a.DdsColorInteractiveBase}},Oo={color:a.DdsColorNeutralsGray6},Bo={border:"1px solid",borderColor:a.DdsColorInteractiveBase,backgroundColor:a.DdsColorNeutralsWhite,borderRadius:h.RadiiDdsBorderRadius1Radius,marginTop:r.SizesDdsSpacingLocalX025,marginBottom:r.SizesDdsSpacingLocalX025},To={color:a.DdsColorNeutralsGray7,padding:`${r.SizesDdsSpacingLocalX05}  ${r.SizesDdsSpacingLocalX075} ${r.SizesDdsSpacingLocalX0125} ${r.SizesDdsSpacingLocalX075}`},Go={base:{gap:r.SizesDdsSpacingLocalX05,padding:`${r.SizesDdsSpacingLocalX075}`,backgroundColor:a.DdsColorNeutralsWhite},hover:{color:W.textColor,backgroundColor:a.DdsColorInteractiveLightest},focus:{color:W.textColor,backgroundColor:a.DdsColorInteractiveLightest},selected:{backgroundColor:a.DdsColorNeutralsWhite}},Po={padding:`${r.SizesDdsSpacingLocalX05} ${r.SizesDdsSpacingLocalX1}`,color:a.DdsColorNeutralsGray6},Wo={borderRadius:h.RadiiDdsBorderRadius1Radius,backgroundColor:a.DdsColorNeutralsGray2},Ho={padding:`0 ${r.SizesDdsSpacingLocalX025}`,color:a.DdsColorNeutralsGray9},qo={base:{color:a.DdsColorNeutralsGray9,padding:`0 ${r.SizesDdsSpacingLocalX025}`,borderTopRightRadius:h.RadiiDdsBorderRadius1Radius,borderBottomRightRadius:h.RadiiDdsBorderRadius1Radius},hover:{color:a.DdsColorNeutralsWhite,backgroundColor:a.DdsColorInteractiveBase,boxShadow:`inset 0 0 0 1px ${a.DdsColorNeutralsGray9}`}},Eo={isMulti:{gap:r.SizesDdsSpacingLocalX025}},jo={marginRight:r.SizesDdsSpacingLocalX05},U={control:Mo,dropdownIndicator:_o,placeholder:Vo,menu:Bo,groupHeading:To,option:Go,valueContainer:Eo,multiValue:Wo,multiValueLabel:Ho,multiValueRemove:qo,noOptionsMessage:Po,clearIndicator:No,loadingIndicator:Oo,icon:jo},{control:l,menu:c,groupHeading:q,option:t,dropdownIndicator:f,loadingIndicator:Fo,clearIndicator:E,multiValue:Ao,multiValueLabel:j,multiValueRemove:m,noOptionsMessage:F,placeholder:Qo,icon:Uo,valueContainer:Yo}=U,n="dds-select";function Jo(o,e){return e?l.isMulti.sizes[o].padding:l.sizes[o].padding}const Ko=R.div`
  margin: 0;
  width: ${({width:o})=>o};
  position: relative;

  *::selection {
    ${Ro}
  }

  ${({componentSize:o,isMulti:e})=>C`
    .${n}__control {
      padding: ${Jo(o,e)};
      ${p(g.control[o],!0)}
    }
    .${n}__option {
      ${p(g.option[o],!0)}
    }
    .${n}__placeholder {
      ${p(g.placeholder[o])}
    }
    .${n}__menu-notice--no-options {
      ${p(g.noOptionsMessage[o])}
    }
  `}

  ${({errorMessage:o})=>o&&C`
      .${n}__control {
        ${zo}
      }
      .${n}__control:hover {
        ${Lo}
      }
      .${n}__control:focus-within {
        ${Q}
      }
    `}

  &:hover
    .${n}__dropdown-indicator,
    &:focus-within
    .${n}__dropdown-indicator {
    color: ${f.hover.color};
  }

  ${({isDisabled:o,readOnly:e})=>e?C`
          .${n}__control {
            border-color: ${l.readOnly.borderColor};
            background-color: ${l.readOnly.backgroundColor};
          }
          .${n}__dropdown-indicator,
            &:hover
            .${n}__dropdown-indicator {
            color: ${f.readOnly.color};
          }
        `:o?C`
          cursor: not-allowed;
          .${n}__control {
            border-color: ${l.disabled.borderColor};
            background-color: ${l.disabled.backgroundColor};
          }
          &:hover .${n}__dropdown-indicator {
            color: ${f.base.color};
          }
        `:""}
`,Zo=R.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  box-sizing: border-box;
  max-width: 100%;
`,or=R(D)`
  margin-right: ${Uo.marginRight};
`,rr=()=>({control:()=>({position:"relative",display:"flex",alignItems:"center",flexWrap:"wrap",borderRadius:l.borderRadius,border:l.border,borderColor:l.borderColor,backgroundColor:l.backgroundColor,transition:"box-shadow 0.2s, border-color 0.2s","&:hover":{...Io},"&:focus-within":{...Q}}),placeholder:o=>({...o,color:Qo.color,margin:0}),input:o=>({...o,margin:0,padding:0}),indicatorSeparator:()=>({}),dropdownIndicator:(o,e)=>({display:"inline-flex",transform:e.selectProps.menuIsOpen?"rotate(180deg)":"","@media (prefers-reduced-motion: no-preference)":{transition:"color 0.2s, transform 0.2s"},padding:0,color:f.base.color}),valueContainer:(o,e)=>({...o,...e.selectProps.isMulti&&{gap:Yo.isMulti.gap},padding:0}),singleValue:()=>({gridArea:"1/1/2/3",overflow:"hidden",boxSizing:"border-box"}),multiValue:()=>({boxSizing:"border-box",minWidth:0,display:"flex",borderRadius:Ao.borderRadius,backgroundColor:U.multiValue.backgroundColor}),multiValueLabel:o=>({...o,padding:j.padding,...p(g.multiValueLabel),color:j.color}),multiValueRemove:(o,e)=>e.selectProps.isDisabled?{display:"none"}:{boxSizing:"border-box",display:"flex",alignItems:"center","@media (prefers-reduced-motion: no-preference)":{transition:"color 0.2s, background-color 0.2s, box-shadow 0.2s"},color:m.base.color,padding:m.base.padding,borderTopRightRadius:m.base.borderTopRightRadius,borderBottomRightRadius:m.base.borderBottomRightRadius,"&:hover":{boxShadow:m.hover.boxShadow}},menu:o=>({...o,zIndex:100,transition:"0.2s",width:"calc(100% + 2px)",transform:"translate(-1px)",boxShadow:` 0 0 0 1px ${c.borderColor}`,border:c.border,borderColor:c.borderColor,backgroundColor:c.backgroundColor,borderRadius:c.borderRadius,marginTop:c.marginTop,marginBottom:c.marginBottom}),group:()=>({boxSizing:"border-box"}),groupHeading:()=>({...p(g.groupHeading),color:q.color,padding:q.padding}),menuList:()=>({maxHeight:"300px",overflowY:"auto",position:"relative",boxSizing:"border-box",...P.webkit,...P.firefox}),option:(o,e)=>({...o,cursor:"pointer",display:"flex",alignItems:"center",gap:t.base.gap,padding:t.base.padding,backgroundColor:t.base.backgroundColor,"@media (prefers-reduced-motion: no-preference)":{transition:"color 0.2s, background-color 0.2s"},"&:hover":{color:t.hover.color,backgroundColor:t.hover.backgroundColor},...e.isSelected&&{backgroundColor:t.selected.backgroundColor},...e.isFocused&&{color:t.focus.color,backgroundColor:t.focus.backgroundColor}}),noOptionsMessage:()=>({padding:F.padding,color:F.color}),clearIndicator:()=>({display:"inline-flex",color:E.base.color,"@media (prefers-reduced-motion: no-preference)":{transition:"color 0.2s"},"&:hover":{color:E.hover.color}}),loadingIndicator:o=>({...o,padding:0,color:Fo.color})}),{Option:Y,NoOptionsMessage:er,Input:ar,SingleValue:ir,ClearIndicator:sr,DropdownIndicator:nr,MultiValueRemove:lr,Control:dr}=Co,Mr=(...o)=>o.map(e=>({label:e,value:e})),tr=(o,e)=>y(Y,{...o,children:[o.isSelected&&i(D,{icon:fo,iconSize:v(e)}),o.children]}),cr=(o,e)=>i(Y,{...o,children:i(e,{...o})}),ur=(o,e,d)=>i(ir,{...o,children:i(Zo,{id:e,children:d?i(d,{...o}):o.children})}),pr=o=>i(er,{...o,children:"Ingen treff"}),gr=(o,e)=>i(sr,{...o,children:i(D,{icon:A,iconSize:v(e)})}),br=o=>i(lr,{...o,children:i(D,{icon:A,iconSize:"small"})}),Sr=(o,e)=>i(nr,{...o,children:i(D,{icon:vo,iconSize:v(e)})}),mr=(o,e,d)=>i(ar,{...o,"aria-invalid":e,"aria-describedby":d}),hr=(o,e,d)=>y(dr,{...o,children:[d&&i(or,{icon:d,iconSize:v(e)}),o.children]}),Dr="320px",$r=(o,e)=>o||(e?"-- Velg en eller flere --":"-- Velg fra listen --"),Cr=(o,e)=>{const{id:d,label:x,componentSize:b="medium",errorMessage:$,tip:z,required:L,"aria-required":I,readOnly:w,options:J,isMulti:S,value:K,icon:Z,defaultValue:oo,width:ro=Dr,closeMenuOnSelect:X,className:eo,style:ao,isDisabled:k,isClearable:io=!0,placeholder:so,customOptionElement:M,customSingleValueElement:no,...lo}=o,to=Do.useId(),u=d??`${to}-select`,V=S?void 0:`${u}-singleValue`,co=!!x,_=!!$,uo=!!(L||I),N=T(u,"tip"),O=T(u,"errorMessage"),po={width:ro,componentSize:b,errorMessage:$,isDisabled:k,readOnly:w,isMulti:S,className:eo,style:ao},go={options:J,value:K,defaultValue:oo,isDisabled:k||w,isClearable:io,placeholder:$r(so,S),closeMenuOnSelect:X||!S,isMulti:S,inputId:u,name:u,classNamePrefix:n,styles:rr(),filterOption:(s,B)=>{const{label:bo}=s;return yo(bo,B)||B===""},components:{Option:M?s=>cr(s,M):s=>tr(s,b),NoOptionsMessage:pr,Input:s=>mr({...s,"aria-required":I},_,xo([V,z?N:void 0,$?O:void 0])),SingleValue:s=>ur(s,V,no),ClearIndicator:s=>gr(s,b),DropdownIndicator:s=>Sr(s,b),MultiValueRemove:br,Control:s=>hr(s,b,Z)},"aria-invalid":_?!0:void 0,required:L,...lo};return y(Ko,{...po,children:[co&&i(wo,{htmlFor:u,showRequiredStyling:uo,children:x}),i($o,{...go,ref:e}),Xo(z,N,$,O)]})},fr=ho.forwardRef(Cr);fr.displayName="Select";export{fr as S,Mr as c};
//# sourceMappingURL=Select-8293b47b.js.map
