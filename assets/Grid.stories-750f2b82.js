import{j as d,a as e,F as P}from"./jsx-runtime-e43ccb36.js";import{s as t,n as f,d as E}from"./ddsReferenceTokens-fe3c594e.js";import{T as a}from"./TextInput-0a799169.js";import{P as O}from"./libraryAdd-7dde1b65.js";import{C as g}from"./Card-0049d7f7.js";import{T as p}from"./Typography-9d6edb9c.js";import{L as I}from"./LocalMessage-a7a44b10.js";import{B as o}from"./Button-d52fd726.js";import{S as m,u as V}from"./BaseComponentProps-b46a4458.js";import"./index-1b03fe98.js";import"./Caption-a006c5bc.js";import"./TextOverflowEllipsis-c2a9fc8f.js";import"./Heading-3ac6a2d9.js";import"./Label-60a960ab.js";import"./Legend-bad3d4ec.js";import"./Link-bef7f478.js";import"./Paragraph-f6678e05.js";import"./Input.styles-c3e229ec.js";import"./Input.utils-1d79ab61.js";import"./renderInputMessage-5502d01a.js";import"./InputMessage-40038efc.js";import"./Icon-23caff97.js";import"./icon-aa5b86b3.js";import"./LocalMessage.tokens-e6955d57.js";import"./Button.tokens-f2748afe.js";import"./normalize-f756ee4b.js";import"./Spinner-c9e13f0c.js";const Ae={title:"Examples/Grid"},{breakpoints:n,grid:i,spacing:s}=E,K=t.div`
  display: grid;
  grid-template-columns: repeat(${i.DdsGridLg12801919Count}, minmax(0, 1fr));
  column-gap: ${i.DdsGridLg12801919GutterSize};
  row-gap: ${s.SizesDdsSpacingLayoutX1};
`,U=t.div`
  grid-column: 1 / 13;
  grid-row: 1;

  border: 1px solid black;
  padding: 8px;
`,W=t.div`
  grid-column: 4 / 13;
  grid-row: 2;

  border: 1px solid black;
`,j=t.div`
  grid-column: 1 / 4;
  grid-row: 2;

  border: 1px solid black;
`,_=t.div`
  grid-column: 1 / 13;
  grid-row: 3;

  border: 1px solid black;
  padding: 8px;
`,h=()=>d(K,{children:[e(U,{children:"GridHeader"}),d(W,{children:[e("h1",{children:"My article"}),e("p",{children:"Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien."}),e("p",{children:"Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."})]}),d(j,{children:[e("h2",{children:"Other things"}),e("p",{children:"Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est."})]}),e(_,{children:"GridFooter"})]}),J=t.div`
  display: grid;
  grid-template-columns: repeat(${i.DdsGridLg12801919Count}, minmax(0, 1fr));
  column-gap: ${i.DdsGridLg12801919GutterSize};
  margin: ${s.SizesDdsSpacingLayoutX1} ${s.SizesDdsSpacingLayoutX3};
`,Q=t.div`
  border: 1px solid black;
  padding: 8px;
`,Y=t.div`
  border: 1px solid black;
  padding: 8px;
`,y=()=>d(P,{children:[e(Q,{children:"Header"}),d(J,{children:[d(W,{children:[e("h1",{children:"My article"}),e("p",{children:"Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien."}),e("p",{children:"Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."})]}),d(j,{children:[e("h2",{children:"Other things"}),e("p",{children:"Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est."})]})]}),e(Y,{children:"Footer"})]}),R=t.div`
  margin-top: 64px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`,Z=t.div`
  display: grid;
  @media only screen and (min-width: ${n.DdsBreakpointXs}) {
    grid-template-columns: repeat(${i.DdsGridXs0599Count}, minmax(0, 1fr));
    gap: ${i.DdsGridXs0599GutterSize};
  }
  @media only screen and (min-width: ${n.DdsBreakpointSm}) {
    grid-template-columns: repeat(${i.DdsGridSm600959Count}, minmax(0, 1fr));
    gap: ${i.DdsGridSm600959GutterSize};
  }
  @media only screen and (min-width: ${n.DdsBreakpointMd}) {
    grid-template-columns: repeat(
      ${i.DdsGridMd9601279Count},
      minmax(0, 1fr)
    );
    gap: ${i.DdsGridMd9601279GutterSize};
  }
  @media only screen and (min-width: ${n.DdsBreakpointLg}) {
    grid-template-columns: repeat(
      ${i.DdsGridLg12801919Count},
      minmax(0, 1fr)
    );
    gap: ${i.DdsGridLg12801919GutterSize};
  }
  @media only screen and (min-width: ${n.DdsBreakpointXl}) {
    grid-template-columns: repeat(${i.DdsGridXl1920Count}, minmax(0, 1fr));
    gap: ${i.DdsGridXl1920GutterSize};
  }
  margin-left: 48px;
  margin-right: 48px;
`,u=t.div`
  @media only screen and (min-width: ${n.DdsBreakpointXs}) {
    grid-column: 1 / ${i.DdsGridXs0599Count+1};
  }
  @media only screen and (min-width: ${n.DdsBreakpointSm}) {
    grid-column: 1 / ${i.DdsGridSm600959Count+1};
  }
  @media only screen and (min-width: ${n.DdsBreakpointMd}) {
    grid-column: 1 / ${i.DdsGridMd9601279Count+1};
  }
  @media only screen and (min-width: ${n.DdsBreakpointLg}) {
    grid-column: 1 / ${i.DdsGridLg12801919Count+1};
  }
  @media only screen and (min-width: ${n.DdsBreakpointXl}) {
    grid-column: 1 / ${i.DdsGridXl1920Count+1};
  }
`,b=t.div`
  @media only screen and (min-width: ${n.DdsBreakpointXs}) {
    grid-column: 1 / ${i.DdsGridXs0599Count+1};
  }
  @media only screen and (min-width: ${n.DdsBreakpointSm}) {
    grid-column: 1 / ${i.DdsGridSm600959Count/2+1};
  }
  @media only screen and (min-width: ${n.DdsBreakpointMd}) {
    grid-column: 1 / ${i.DdsGridMd9601279Count/2+1};
  }
  @media only screen and (min-width: ${n.DdsBreakpointLg}) {
    grid-column: 1 / ${i.DdsGridLg12801919Count/2+1};
  }
  @media only screen and (min-width: ${n.DdsBreakpointXl}) {
    grid-column: 1 / ${i.DdsGridXl1920Count/2+1};
  }
`,D=t.div`
  @media only screen and (min-width: ${n.DdsBreakpointXs}) {
    grid-column: 1 / ${i.DdsGridXs0599Count+1};
  }
  @media only screen and (min-width: ${n.DdsBreakpointSm}) {
    grid-column: ${i.DdsGridSm600959Count/2+1} /
      ${i.DdsGridSm600959Count+1};
  }
  @media only screen and (min-width: ${n.DdsBreakpointMd}) {
    grid-column: ${i.DdsGridMd9601279Count/2+1} /
      ${i.DdsGridMd9601279Count+1};
  }
  @media only screen and (min-width: ${n.DdsBreakpointLg}) {
    grid-column: ${i.DdsGridLg12801919Count/2+1} /
      ${i.DdsGridLg12801919Count+1};
  }
  @media only screen and (min-width: ${n.DdsBreakpointXl}) {
    grid-column: ${i.DdsGridXl1920Count/2+1} /
      ${i.DdsGridXl1920Count+1};
  }
`,ee=t(u)`
  justify-self: end;
`,ie=t.div`
  display: grid;

  @media only screen and (min-width: ${n.DdsBreakpointXs}) {
    grid-auto-flow: row;
    row-gap: 16px;
  }

  @media only screen and (min-width: ${n.DdsBreakpointSm}) {
    grid-auto-flow: column;
    grid-template-columns: min-content auto;
    column-gap: 16px;
  }
`,S=()=>e(P,{children:d(Z,{children:[e(u,{children:e(p,{typographyType:"headingSans04",withMargins:!0,children:"Partopplysninger"})}),e(u,{children:e(I,{message:"Hva som må gjøres i dette skjemaet.",width:"100%"})}),e(u,{children:e(p,{typographyType:"headingSans03",withMargins:!0,children:"Siktede"})}),e(b,{children:e(a,{label:"Fornavn",width:"100%"})}),e(D,{children:e(a,{label:"Etternavn",width:"100%"})}),e(u,{children:e(a,{label:"Adresse",value:"Kriminellveien 3",width:"100%"})}),e(u,{children:d(ie,{children:[e(a,{label:"Postnr",width:"89px"}),e(a,{label:"Poststed",width:"100%"})]})}),e(u,{children:e(p,{typographyType:"headingSans03",withMargins:!0,children:"Forsvarer"})}),e(b,{children:e(a,{label:"Fornavn",width:"100%"})}),e(D,{children:e(a,{label:"Etternavn",width:"100%"})}),e(ee,{children:e(o,{label:"Legg til flere",purpose:"secondary",icon:O})}),e(u,{children:d(R,{children:[e(o,{label:"Gå til partsopplysninger",purpose:"primary"}),e(o,{label:"Send til godkjenning",purpose:"secondary"}),e(o,{label:"Avbryt",purpose:"secondary"})]})})]})}),N={[m.XSmall]:{grid:{columns:i.DdsGridXs0599Count,gap:i.DdsGridXs0599GutterSize,marginLeft:s.SizesDdsSpacingLayoutX1,marginRight:s.SizesDdsSpacingLayoutX1},all:{gridColumn:"1 / -1"},firstHalf:{gridColumn:"1 / -1"},secondHalf:{gridColumn:"1 / -1"}},[m.Small]:{grid:{columns:i.DdsGridSm600959Count,gap:i.DdsGridSm600959GutterSize,marginLeft:s.SizesDdsSpacingLayoutX1,marginRight:s.SizesDdsSpacingLayoutX1},firstHalf:{gridColumn:`1 / ${i.DdsGridSm600959Count/2+1}`},secondHalf:{gridColumn:`${i.DdsGridSm600959Count/2+1} / ${i.DdsGridSm600959Count+1}`}},[m.Medium]:{grid:{columns:i.DdsGridMd9601279Count,gap:i.DdsGridMd9601279GutterSize,marginLeft:s.SizesDdsSpacingLayoutX1,marginRight:s.SizesDdsSpacingLayoutX1},firstHalf:{gridColumn:`1 / ${i.DdsGridMd9601279Count/2+1}`},secondHalf:{gridColumn:`${i.DdsGridMd9601279Count/2+1} / ${i.DdsGridMd9601279Count+1}`}},[m.Large]:{grid:{columns:i.DdsGridLg12801919Count,gap:i.DdsGridLg12801919GutterSize,marginLeft:s.SizesDdsSpacingLayoutX1,marginRight:s.SizesDdsSpacingLayoutX1},firstHalf:{gridColumn:`1 / ${i.DdsGridLg12801919Count/2+1}`},secondHalf:{gridColumn:`${i.DdsGridLg12801919Count/2+1} / ${i.DdsGridLg12801919Count+1}`}},[m.XLarge]:{grid:{columns:i.DdsGridXl1920Count,gap:i.DdsGridXl1920GutterSize,marginLeft:s.SizesDdsSpacingLayoutX1,marginRight:s.SizesDdsSpacingLayoutX1},firstHalf:{gridColumn:`1 / ${i.DdsGridXs0599Count/2+1}`},secondHalf:{gridColumn:`${i.DdsGridXl1920Count/2+1} / ${i.DdsGridXl1920Count+1}`}}},re=r=>{const c=N[r].grid;return{gridTemplateColumns:`repeat(${c.columns}, minmax(0, 1fr))`,gap:c.gap,marginLeft:c.marginLeft,marginRight:c.marginRight}},ne=t.div`
  display: grid;
  ${({screenSize:r})=>re(r)}
`,l=t.div`
  grid-column: ${({screenSize:r,columnsOccupied:c})=>c==="all"?"1 / -1":N[r][c].gridColumn};
`,te=t(l)`
  justify-self: end;
`,se=t.div`
  display: grid;
  ${({screenSize:r})=>r===m.XSmall?f`
          grid-auto-flow: row;
          row-gap: 16px;
        `:f`
          grid-auto-flow: column;
          grid-template-columns: min-content auto;
          column-gap: 16px;
        `}
`,v=()=>{const r=V();return d(ne,{screenSize:r,children:[e(l,{screenSize:r,columnsOccupied:"all",children:e(p,{typographyType:"headingSans04",withMargins:!0,children:"Partopplysninger"})}),e(l,{screenSize:r,columnsOccupied:"all",children:e(I,{message:"Hva som må gjøres i dette skjemaet.",width:"100%"})}),e(l,{screenSize:r,columnsOccupied:"all",children:e(p,{typographyType:"headingSans03",withMargins:!0,children:"Siktede"})}),e(l,{screenSize:r,columnsOccupied:"firstHalf",children:e(a,{label:"Fornavn",width:"100%"})}),e(l,{screenSize:r,columnsOccupied:"secondHalf",children:e(a,{label:"Etternavn",width:"100%"})}),e(l,{screenSize:r,columnsOccupied:"all",children:e(a,{label:"Adresse",value:"Kriminellveien 3",width:"100%"})}),e(l,{screenSize:r,columnsOccupied:"all",children:d(se,{screenSize:r,children:[e(a,{label:"Postnr",width:"89px"}),e(a,{label:"Poststed",width:"100%"})]})}),e(l,{screenSize:r,columnsOccupied:"all",children:e(p,{typographyType:"headingSans03",withMargins:!0,children:"Forsvarer"})}),e(l,{screenSize:r,columnsOccupied:"firstHalf",children:e(a,{label:"Fornavn",width:"100%"})}),e(l,{screenSize:r,columnsOccupied:"secondHalf",children:e(a,{label:"Etternavn",width:"100%"})}),e(te,{screenSize:r,columnsOccupied:"all",children:e(o,{label:"Legg til flere",purpose:"secondary",icon:O})}),e(l,{screenSize:r,columnsOccupied:"all",children:d(R,{children:[e(o,{label:"Gå til partsopplysninger",purpose:"primary"}),e(o,{label:"Send til godkjenning",purpose:"secondary"}),e(o,{label:"Avbryt",purpose:"secondary"})]})})]})},ae=t.div`
  display: grid;
  gap: ${s.SizesDdsSpacingLayoutX1};
  grid-template-columns: repeat(
    auto-fit,
    minmax(${s.SizesDdsSpacingLayoutX10}, 1fr)
  );
`,G=()=>d(ae,{children:[e(g,{cardType:"info",children:"card"}),e(g,{cardType:"info",children:"card"}),e(g,{cardType:"info",children:"card"}),e(g,{cardType:"info",children:"card"})]});var C,w,$;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
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
}`,...($=(w=h.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};var M,z,T;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
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
}`,...(T=(z=y.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var x,k,F;S.parameters={...S.parameters,docs:{...(x=S.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
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
}`,...(F=(k=S.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var H,L,A;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
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
}`,...(A=(L=v.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var X,B,q;G.parameters={...G.parameters,docs:{...(X=G.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <AutolayoutGrid>
      <Card cardType="info">card</Card>
      <Card cardType="info">card</Card>
      <Card cardType="info">card</Card>
      <Card cardType="info">card</Card>
    </AutolayoutGrid>;
}`,...(q=(B=G.parameters)==null?void 0:B.docs)==null?void 0:q.source}}};const Xe=["ArticlePage","ArticleOnlySimpleGrid","FormWithMedia","FormWithHooks","Autolayout"];export{y as ArticleOnlySimpleGrid,h as ArticlePage,G as Autolayout,v as FormWithHooks,S as FormWithMedia,Xe as __namedExportsOrder,Ae as default};
//# sourceMappingURL=Grid.stories-750f2b82.js.map
