import{d as M,b as le,s as a,A as y,j as e,a as o,F as ee}from"./focus-visible-35158c22.js";import{Z as ue,a as A,l as p,Q as ce}from"./dds-core-29d22035.js";import{j as me,G as pe}from"./dds-form-b2eacd8d.js";import{g as ie}from"./dds-icons-7a922c3a.js";import{O as ge,E as he,T as g}from"./dds-typography-e761338c.js";import{B as c}from"./LocalMessage.tokens-64bf0896.js";import{T as d}from"./TextInput-39b6f215.js";import{L as re}from"./LocalMessage-515d6ad5.js";import{_ as ye}from"./tslib.es6-b1ce3a18.js";import"./index-d47b1f5a.js";var m=M.colors,$=M.border,w=le.textDefault,be={border:"".concat($.BordersDdsBorderStyleLightStrokeWeight," solid")},ve={filledLight:{backgroundColor:m.DdsColorPrimaryLightest,borderColor:m.DdsColorPrimaryLightest,color:w.textColor},filledDark:{backgroundColor:m.DdsColorPrimaryBase,borderColor:m.DdsColorPrimaryBase,color:m.DdsColorNeutralsWhite},strokeDark:{backgroundColor:m.DdsColorNeutralsWhite,borderColor:$.BordersDdsBorderStyleLightStroke,color:w.textColor},strokeLight:{backgroundColor:m.DdsColorNeutralsWhite,borderColor:$.BordersDdsBorderStyleLightStroke,color:w.textColor}},b={base:be,colors:ve},X=a.div.withConfig({displayName:"Card__Container",componentId:"sc-410ao9-0"})(["border:",";",";&::selection,*::selection{","}@media (prefers-reduced-motion:no-preference){transition:box-shadow 0.2s,border-color 0.2s;}"," ",""],b.base.border,ge(he),ue,function(r){var n=r.color;return n&&y(["color:",";background-color:",";border-color:",";"],b.colors[n].color,b.colors[n].backgroundColor,b.colors[n].borderColor)},function(r){var n=r.cardType;return n==="navigation"?y(["text-decoration:none;&:hover{","}&:focus{","}"],me,pe):n==="expandable"?y(["width:100%;box-sizing:border-box;&:not(:first-of-type){border-top:none;}"]):""}),h=function(n){var k=n.color,x=k===void 0?"filledLight":k,D=n.cardType,T=n.cardRef,z=n.children,L=n.id,F=n.className,H=n.htmlProps,B=ye(n,["color","cardType","cardRef","children","id","className","htmlProps"]);if(D==="navigation"){var de=n.href,oe=n.target;return e(X,Object.assign({},A(L,F,H,B),{cardType:D,color:x,as:"a",ref:T,href:de,target:oe,children:z}))}return e(X,Object.assign({},A(L,F,H,B),{cardType:D,color:x,as:"div",ref:T,children:z}))};h.displayName="Card";const Ne={title:"Examples/Grid"},{breakpoints:t,grid:i,spacing:s}=M,Se=a.div`
  display: grid;
  grid-template-columns: repeat(${i.DdsGridLg12801919Count}, minmax(0, 1fr));
  column-gap: ${i.DdsGridLg12801919GutterSize};
  row-gap: ${s.SizesDdsSpacingLayoutX1};
`,fe=a.div`
  grid-column: 1 / 13;
  grid-row: 1;

  border: 1px solid black;
  padding: 8px;
`,ne=a.div`
  grid-column: 4 / 13;
  grid-row: 2;

  border: 1px solid black;
`,te=a.div`
  grid-column: 1 / 4;
  grid-row: 2;

  border: 1px solid black;
`,Ce=a.div`
  grid-column: 1 / 13;
  grid-row: 3;

  border: 1px solid black;
  padding: 8px;
`,v=()=>o(Se,{children:[e(fe,{children:"GridHeader"}),o(ne,{children:[e("h1",{children:"My article"}),e("p",{children:"Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien."}),e("p",{children:"Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."})]}),o(te,{children:[e("h2",{children:"Other things"}),e("p",{children:"Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est."})]}),e(Ce,{children:"GridFooter"})]}),Ge=a.div`
  display: grid;
  grid-template-columns: repeat(${i.DdsGridLg12801919Count}, minmax(0, 1fr));
  column-gap: ${i.DdsGridLg12801919GutterSize};
  margin: ${s.SizesDdsSpacingLayoutX1} ${s.SizesDdsSpacingLayoutX3};
`,De=a.div`
  border: 1px solid black;
  padding: 8px;
`,we=a.div`
  border: 1px solid black;
  padding: 8px;
`,S=()=>o(ee,{children:[e(De,{children:"Header"}),o(Ge,{children:[o(ne,{children:[e("h1",{children:"My article"}),e("p",{children:"Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien."}),e("p",{children:"Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."})]}),o(te,{children:[e("h2",{children:"Other things"}),e("p",{children:"Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est."})]})]}),e(we,{children:"Footer"})]}),ae=a.div`
  margin-top: 64px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`,$e=a.div`
  display: grid;
  @media only screen and (min-width: ${t.DdsBreakpointXs}) {
    grid-template-columns: repeat(${i.DdsGridXs0599Count}, minmax(0, 1fr));
    gap: ${i.DdsGridXs0599GutterSize};
  }
  @media only screen and (min-width: ${t.DdsBreakpointSm}) {
    grid-template-columns: repeat(${i.DdsGridSm600959Count}, minmax(0, 1fr));
    gap: ${i.DdsGridSm600959GutterSize};
  }
  @media only screen and (min-width: ${t.DdsBreakpointMd}) {
    grid-template-columns: repeat(
      ${i.DdsGridMd9601279Count},
      minmax(0, 1fr)
    );
    gap: ${i.DdsGridMd9601279GutterSize};
  }
  @media only screen and (min-width: ${t.DdsBreakpointLg}) {
    grid-template-columns: repeat(
      ${i.DdsGridLg12801919Count},
      minmax(0, 1fr)
    );
    gap: ${i.DdsGridLg12801919GutterSize};
  }
  @media only screen and (min-width: ${t.DdsBreakpointXl}) {
    grid-template-columns: repeat(${i.DdsGridXl1920Count}, minmax(0, 1fr));
    gap: ${i.DdsGridXl1920GutterSize};
  }
  margin-left: 48px;
  margin-right: 48px;
`,u=a.div`
  @media only screen and (min-width: ${t.DdsBreakpointXs}) {
    grid-column: 1 / ${i.DdsGridXs0599Count+1};
  }
  @media only screen and (min-width: ${t.DdsBreakpointSm}) {
    grid-column: 1 / ${i.DdsGridSm600959Count+1};
  }
  @media only screen and (min-width: ${t.DdsBreakpointMd}) {
    grid-column: 1 / ${i.DdsGridMd9601279Count+1};
  }
  @media only screen and (min-width: ${t.DdsBreakpointLg}) {
    grid-column: 1 / ${i.DdsGridLg12801919Count+1};
  }
  @media only screen and (min-width: ${t.DdsBreakpointXl}) {
    grid-column: 1 / ${i.DdsGridXl1920Count+1};
  }
`,P=a.div`
  @media only screen and (min-width: ${t.DdsBreakpointXs}) {
    grid-column: 1 / ${i.DdsGridXs0599Count+1};
  }
  @media only screen and (min-width: ${t.DdsBreakpointSm}) {
    grid-column: 1 / ${i.DdsGridSm600959Count/2+1};
  }
  @media only screen and (min-width: ${t.DdsBreakpointMd}) {
    grid-column: 1 / ${i.DdsGridMd9601279Count/2+1};
  }
  @media only screen and (min-width: ${t.DdsBreakpointLg}) {
    grid-column: 1 / ${i.DdsGridLg12801919Count/2+1};
  }
  @media only screen and (min-width: ${t.DdsBreakpointXl}) {
    grid-column: 1 / ${i.DdsGridXl1920Count/2+1};
  }
`,q=a.div`
  @media only screen and (min-width: ${t.DdsBreakpointXs}) {
    grid-column: 1 / ${i.DdsGridXs0599Count+1};
  }
  @media only screen and (min-width: ${t.DdsBreakpointSm}) {
    grid-column: ${i.DdsGridSm600959Count/2+1} /
      ${i.DdsGridSm600959Count+1};
  }
  @media only screen and (min-width: ${t.DdsBreakpointMd}) {
    grid-column: ${i.DdsGridMd9601279Count/2+1} /
      ${i.DdsGridMd9601279Count+1};
  }
  @media only screen and (min-width: ${t.DdsBreakpointLg}) {
    grid-column: ${i.DdsGridLg12801919Count/2+1} /
      ${i.DdsGridLg12801919Count+1};
  }
  @media only screen and (min-width: ${t.DdsBreakpointXl}) {
    grid-column: ${i.DdsGridXl1920Count/2+1} /
      ${i.DdsGridXl1920Count+1};
  }
`,Me=a(u)`
  justify-self: end;
`,ke=a.div`
  display: grid;

  @media only screen and (min-width: ${t.DdsBreakpointXs}) {
    grid-auto-flow: row;
    row-gap: 16px;
  }

  @media only screen and (min-width: ${t.DdsBreakpointSm}) {
    grid-auto-flow: column;
    grid-template-columns: min-content auto;
    column-gap: 16px;
  }
`,f=()=>e(ee,{children:o($e,{children:[e(u,{children:e(g,{typographyType:"headingSans04",withMargins:!0,children:"Partopplysninger"})}),e(u,{children:e(re,{message:"Hva som må gjøres i dette skjemaet.",width:"100%"})}),e(u,{children:e(g,{typographyType:"headingSans03",withMargins:!0,children:"Siktede"})}),e(P,{children:e(d,{label:"Fornavn",width:"100%"})}),e(q,{children:e(d,{label:"Etternavn",width:"100%"})}),e(u,{children:e(d,{label:"Adresse",value:"Kriminellveien 3",width:"100%"})}),e(u,{children:o(ke,{children:[e(d,{label:"Postnr",width:"89px"}),e(d,{label:"Poststed",width:"100%"})]})}),e(u,{children:e(g,{typographyType:"headingSans03",withMargins:!0,children:"Forsvarer"})}),e(P,{children:e(d,{label:"Fornavn",width:"100%"})}),e(q,{children:e(d,{label:"Etternavn",width:"100%"})}),e(Me,{children:e(c,{label:"Legg til flere",purpose:"secondary",icon:ie})}),e(u,{children:o(ae,{children:[e(c,{label:"Gå til partsopplysninger",purpose:"primary"}),e(c,{label:"Send til godkjenning",purpose:"secondary"}),e(c,{label:"Avbryt",purpose:"secondary"})]})})]})}),se={[p.XSmall]:{grid:{columns:i.DdsGridXs0599Count,gap:i.DdsGridXs0599GutterSize,marginLeft:s.SizesDdsSpacingLayoutX1,marginRight:s.SizesDdsSpacingLayoutX1},all:{gridColumn:"1 / -1"},firstHalf:{gridColumn:"1 / -1"},secondHalf:{gridColumn:"1 / -1"}},[p.Small]:{grid:{columns:i.DdsGridSm600959Count,gap:i.DdsGridSm600959GutterSize,marginLeft:s.SizesDdsSpacingLayoutX1,marginRight:s.SizesDdsSpacingLayoutX1},firstHalf:{gridColumn:`1 / ${i.DdsGridSm600959Count/2+1}`},secondHalf:{gridColumn:`${i.DdsGridSm600959Count/2+1} / ${i.DdsGridSm600959Count+1}`}},[p.Medium]:{grid:{columns:i.DdsGridMd9601279Count,gap:i.DdsGridMd9601279GutterSize,marginLeft:s.SizesDdsSpacingLayoutX1,marginRight:s.SizesDdsSpacingLayoutX1},firstHalf:{gridColumn:`1 / ${i.DdsGridMd9601279Count/2+1}`},secondHalf:{gridColumn:`${i.DdsGridMd9601279Count/2+1} / ${i.DdsGridMd9601279Count+1}`}},[p.Large]:{grid:{columns:i.DdsGridLg12801919Count,gap:i.DdsGridLg12801919GutterSize,marginLeft:s.SizesDdsSpacingLayoutX1,marginRight:s.SizesDdsSpacingLayoutX1},firstHalf:{gridColumn:`1 / ${i.DdsGridLg12801919Count/2+1}`},secondHalf:{gridColumn:`${i.DdsGridLg12801919Count/2+1} / ${i.DdsGridLg12801919Count+1}`}},[p.XLarge]:{grid:{columns:i.DdsGridXl1920Count,gap:i.DdsGridXl1920GutterSize,marginLeft:s.SizesDdsSpacingLayoutX1,marginRight:s.SizesDdsSpacingLayoutX1},firstHalf:{gridColumn:`1 / ${i.DdsGridXs0599Count/2+1}`},secondHalf:{gridColumn:`${i.DdsGridXl1920Count/2+1} / ${i.DdsGridXl1920Count+1}`}}},xe=r=>{const n=se[r].grid;return{gridTemplateColumns:`repeat(${n.columns}, minmax(0, 1fr))`,gap:n.gap,marginLeft:n.marginLeft,marginRight:n.marginRight}},Te=a.div`
  display: grid;
  ${({screenSize:r})=>xe(r)}
`,l=a.div`
  grid-column: ${({screenSize:r,columnsOccupied:n})=>n==="all"?"1 / -1":se[r][n].gridColumn};
`,ze=a(l)`
  justify-self: end;
`,Le=a.div`
  display: grid;
  ${({screenSize:r})=>r===p.XSmall?y`
          grid-auto-flow: row;
          row-gap: 16px;
        `:y`
          grid-auto-flow: column;
          grid-template-columns: min-content auto;
          column-gap: 16px;
        `}
`,C=()=>{const r=ce();return o(Te,{screenSize:r,children:[e(l,{screenSize:r,columnsOccupied:"all",children:e(g,{typographyType:"headingSans04",withMargins:!0,children:"Partopplysninger"})}),e(l,{screenSize:r,columnsOccupied:"all",children:e(re,{message:"Hva som må gjøres i dette skjemaet.",width:"100%"})}),e(l,{screenSize:r,columnsOccupied:"all",children:e(g,{typographyType:"headingSans03",withMargins:!0,children:"Siktede"})}),e(l,{screenSize:r,columnsOccupied:"firstHalf",children:e(d,{label:"Fornavn",width:"100%"})}),e(l,{screenSize:r,columnsOccupied:"secondHalf",children:e(d,{label:"Etternavn",width:"100%"})}),e(l,{screenSize:r,columnsOccupied:"all",children:e(d,{label:"Adresse",value:"Kriminellveien 3",width:"100%"})}),e(l,{screenSize:r,columnsOccupied:"all",children:o(Le,{screenSize:r,children:[e(d,{label:"Postnr",width:"89px"}),e(d,{label:"Poststed",width:"100%"})]})}),e(l,{screenSize:r,columnsOccupied:"all",children:e(g,{typographyType:"headingSans03",withMargins:!0,children:"Forsvarer"})}),e(l,{screenSize:r,columnsOccupied:"firstHalf",children:e(d,{label:"Fornavn",width:"100%"})}),e(l,{screenSize:r,columnsOccupied:"secondHalf",children:e(d,{label:"Etternavn",width:"100%"})}),e(ze,{screenSize:r,columnsOccupied:"all",children:e(c,{label:"Legg til flere",purpose:"secondary",icon:ie})}),e(l,{screenSize:r,columnsOccupied:"all",children:o(ae,{children:[e(c,{label:"Gå til partsopplysninger",purpose:"primary"}),e(c,{label:"Send til godkjenning",purpose:"secondary"}),e(c,{label:"Avbryt",purpose:"secondary"})]})})]})},Fe=a.div`
  display: grid;
  gap: ${s.SizesDdsSpacingLayoutX1};
  grid-template-columns: repeat(
    auto-fit,
    minmax(${s.SizesDdsSpacingLayoutX10}, 1fr)
  );
`,G=()=>o(Fe,{children:[e(h,{cardType:"info",children:"card"}),e(h,{cardType:"info",children:"card"}),e(h,{cardType:"info",children:"card"}),e(h,{cardType:"info",children:"card"})]});var O,I,W;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <ArticlePageGrid>
      <GridHeader>GridHeader</GridHeader>
      <Article>
        <h1>My article</h1>
        <p>
          Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras
          porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed
          auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
          orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac
          ornare ex malesuada et. In vitae convallis lacus. Aliquam erat
          volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin
          eros pharetra congue. Duis ornare egestas augue ut luctus. Proin
          blandit quam nec lacus varius commodo et a urna. Ut id ornare felis,
          eget fermentum sapien.
        </p>

        <p>
          Nam vulputate diam nec tempor bibendum. Donec luctus augue eget
          malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut,
          facilisis sed est. Nam id risus quis ante semper consectetur eget
          aliquam lorem. Vivamus tristique elit dolor, sed pretium metus
          suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu
          urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt
          eget purus in interdum. Cum sociis natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </p>
      </Article>
      <Aside>
        <h2>Other things</h2>
        <p>
          Nam vulputate diam nec tempor bibendum. Donec luctus augue eget
          malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut,
          facilisis sed est.
        </p>
      </Aside>
      <GridFooter>GridFooter</GridFooter>
    </ArticlePageGrid>;
}`,...(W=(I=v.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var j,N,R;S.parameters={...S.parameters,docs:{...(j=S.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <>
      <Header>Header</Header>
      <ArticleGrid>
        <Article>
          <h1>My article</h1>
          <p>
            Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras
            porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed
            auctor cursus massa at porta. Integer ligula ipsum, tristique sit
            amet orci vel, viverra egestas ligula. Curabitur vehicula tellus
            neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam
            erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus
            sollicitudin eros pharetra congue. Duis ornare egestas augue ut
            luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id
            ornare felis, eget fermentum sapien.
          </p>

          <p>
            Nam vulputate diam nec tempor bibendum. Donec luctus augue eget
            malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus
            ut, facilisis sed est. Nam id risus quis ante semper consectetur
            eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus
            suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus
            eu urna eget velit cursus viverra quis vestibulum sem. Aliquam
            tincidunt eget purus in interdum. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus.
          </p>
        </Article>
        <Aside>
          <h2>Other things</h2>
          <p>
            Nam vulputate diam nec tempor bibendum. Donec luctus augue eget
            malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus
            ut, facilisis sed est.
          </p>
        </Aside>
      </ArticleGrid>
      <Footer>Footer</Footer>
    </>;
}`,...(R=(N=S.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var E,_,V;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <>
      <MediaFormGrid>
        <MediaFullWidth>
          <Typography typographyType="headingSans04" withMargins>
            Partopplysninger
          </Typography>
        </MediaFullWidth>
        <MediaFullWidth>
          <LocalMessage message="Hva som må gjøres i dette skjemaet." width="100%" />
        </MediaFullWidth>
        <MediaFullWidth>
          <Typography typographyType="headingSans03" withMargins>
            Siktede
          </Typography>
        </MediaFullWidth>
        <MediaFirstHalf>
          <TextInput label="Fornavn" width="100%" />
        </MediaFirstHalf>
        <MediaSecondHalf>
          <TextInput label="Etternavn" width="100%" />
        </MediaSecondHalf>
        <MediaFullWidth>
          <TextInput label="Adresse" value="Kriminellveien 3" width="100%" />
        </MediaFullWidth>
        <MediaFullWidth>
          <MediaPostContainer>
            <TextInput label="Postnr" width="89px" />
            <TextInput label="Poststed" width="100%" />
          </MediaPostContainer>
        </MediaFullWidth>
        <MediaFullWidth>
          <Typography typographyType="headingSans03" withMargins>
            Forsvarer
          </Typography>
        </MediaFullWidth>
        <MediaFirstHalf>
          <TextInput label="Fornavn" width="100%" />
        </MediaFirstHalf>
        <MediaSecondHalf>
          <TextInput label="Etternavn" width="100%" />
        </MediaSecondHalf>
        <ToRight>
          <Button label="Legg til flere" purpose="secondary" icon={PlusIcon} />
        </ToRight>
        <MediaFullWidth>
          <BottomButtons>
            <Button label="Gå til partsopplysninger" purpose="primary" />
            <Button label="Send til godkjenning" purpose="secondary" />
            <Button label="Avbryt" purpose="secondary" />
          </BottomButtons>
        </MediaFullWidth>
      </MediaFormGrid>
    </>;
}`,...(V=(_=f.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var K,U,Q;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  const screenSize = useScreenSize();
  return <HooksGrid screenSize={screenSize}>
      <GridChild screenSize={screenSize} columnsOccupied="all">
        <Typography typographyType="headingSans04" withMargins>
          Partopplysninger
        </Typography>
      </GridChild>
      <GridChild screenSize={screenSize} columnsOccupied="all">
        <LocalMessage message="Hva som må gjøres i dette skjemaet." width="100%" />
      </GridChild>
      <GridChild screenSize={screenSize} columnsOccupied="all">
        <Typography typographyType="headingSans03" withMargins>
          Siktede
        </Typography>
      </GridChild>
      <GridChild screenSize={screenSize} columnsOccupied="firstHalf">
        <TextInput label="Fornavn" width="100%" />
      </GridChild>
      <GridChild screenSize={screenSize} columnsOccupied="secondHalf">
        <TextInput label="Etternavn" width="100%" />
      </GridChild>
      <GridChild screenSize={screenSize} columnsOccupied="all">
        <TextInput label="Adresse" value="Kriminellveien 3" width="100%" />
      </GridChild>
      <GridChild screenSize={screenSize} columnsOccupied="all">
        <HooksPostContainer screenSize={screenSize}>
          <TextInput label="Postnr" width="89px" />
          <TextInput label="Poststed" width="100%" />
        </HooksPostContainer>
      </GridChild>
      <GridChild screenSize={screenSize} columnsOccupied="all">
        <Typography typographyType="headingSans03" withMargins>
          Forsvarer
        </Typography>
      </GridChild>
      <GridChild screenSize={screenSize} columnsOccupied="firstHalf">
        <TextInput label="Fornavn" width="100%" />
      </GridChild>
      <GridChild screenSize={screenSize} columnsOccupied="secondHalf">
        <TextInput label="Etternavn" width="100%" />
      </GridChild>
      <HooksFullWidthToRight screenSize={screenSize} columnsOccupied="all">
        <Button label="Legg til flere" purpose="secondary" icon={PlusIcon} />
      </HooksFullWidthToRight>
      <GridChild screenSize={screenSize} columnsOccupied="all">
        <BottomButtons>
          <Button label="Gå til partsopplysninger" purpose="primary" />
          <Button label="Send til godkjenning" purpose="secondary" />
          <Button label="Avbryt" purpose="secondary" />
        </BottomButtons>
      </GridChild>
    </HooksGrid>;
}`,...(Q=(U=C.parameters)==null?void 0:U.docs)==null?void 0:Q.source}}};var Z,J,Y;G.parameters={...G.parameters,docs:{...(Z=G.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <AutolayoutGrid>
      <Card cardType="info">card</Card>
      <Card cardType="info">card</Card>
      <Card cardType="info">card</Card>
      <Card cardType="info">card</Card>
    </AutolayoutGrid>;
}`,...(Y=(J=G.parameters)==null?void 0:J.docs)==null?void 0:Y.source}}};const Re=["ArticlePage","ArticleOnlySimpleGrid","FormWithMedia","FormWithHooks","Autolayout"];export{S as ArticleOnlySimpleGrid,v as ArticlePage,G as Autolayout,C as FormWithHooks,f as FormWithMedia,Re as __namedExportsOrder,Ne as default};
//# sourceMappingURL=Grid.stories-5829b08b.js.map
