import{j as e,b as o,F as h}from"./focus-visible-17f12d09.js";import{M as l,e as i,f as s,g,P as y}from"./index-c0e0960b.js";import{p as c,S as m,M as f,F as p}from"./storybook-components-b7b7a39c.js";import{T as k}from"./Typography.stories-b9c968a7.js";import{u as a}from"./index-09fac16e.js";import{L as r}from"./Link-a3416982.js";import"./index-c6dae603.js";import"./iframe-6efa2ccf.js";import"../sb-preview/runtime.js";import"./index-519f2600.js";import"./index-eb008d06.js";import"./Typography-ddbe86f6.js";import"./Typography.utils-3c68477b.js";import"./focusVisible-bd00be70.js";import"./selection-dced972e.js";import"./color-0daeea22.js";import"./BaseComponentProps-bb0d5515.js";function d(t){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",strong:"strong",h3:"h3"},a(),t.components);return o(h,{children:[e(l,{of:k}),`
`,e(n.h1,{id:"typography",children:"Typography"}),`
`,e(c,{docsHref:"https://design.domstol.no/987b33f71/p/3718e2-typography",githubHref:"https://github.com/domstolene/designsystem/tree/master/components/src/components/Typography"}),`
`,e(n.h2,{id:"introduksjon",children:"Introduksjon"}),`
`,o(n.p,{children:[e(n.code,{children:"<Typography />"}),` er en code-only komponent som ikke har en tilsvarende Figma komponent.
Den bruker oversikten over typografistiler definert i `,e(r,{href:"https://design.domstol.no/987b33f71/p/63b944-typografi/b/21516f",children:"Typografi | Stiler og bruk"}),` til å gi tekst riktig styling.
Hver stil har et default HTML element det blir rendered som. Den kan eventuelt overskrives med en annen HTML tag hvis default ikke passer.`]}),`
`,o(n.p,{children:[e(n.strong,{children:"OBS!"})," I de fleste tilfeller bør du bruke en av våre deterministiske typografikomponenter, som returnerer en spesifikk HTML tag: ",e(r,{href:"https://design.domstol.no/987b33f71/p/473d57-caption/b/52a7b4",children:"Caption"}),", ",e(r,{href:"https://design.domstol.no/987b33f71/p/76b220-heading/b/30ecca",children:"Heading"}),", ",e(r,{href:"https://design.domstol.no/987b33f71/p/49dc3f-label/b/102e70",children:"Label"}),", ",e(r,{href:"https://design.domstol.no/987b33f71/p/829771-legend/b/15b037",children:"Legend"}),", ",e(r,{href:"https://design.domstol.no/987b33f71/p/411e45-link/b/674f25",children:"Link"}),", ",e(r,{href:"https://design.domstol.no/987b33f71/p/883067-paragraph/b/70f5e1",children:"Paragraph"}),`.
`,e(n.code,{children:"<Typography />"})," bør brukes kun når disse komponentene ikke er tilstrekkelige."]}),`
`,e(n.h2,{id:"demo",children:"Demo"}),`
`,e(i,{children:e(s,{id:"dds-components-typography-overview-typography-types--body"})}),`
`,e(i,{children:e(s,{id:"dds-components-typography-overview-typography-types--headings"})}),`
`,e(i,{children:e(s,{id:"dds-components-typography-overview-typography-types--leads"})}),`
`,e(i,{children:e(s,{id:"dds-components-typography-overview-typography-types--supporting"})}),`
`,e(i,{children:e(s,{id:"dds-components-typography-overview-typography-types--link"})}),`
`,e(i,{children:e(s,{id:"dds-components-typography-typography--default"})}),`
`,e(m,{href:`${f}dds-components-typography-typography`}),`
`,e(n.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,e(p,{code:`import { Typography } from '@norges-domstoler/dds-components';

<Typography typographyType="headingSans06" withMargins>
  Vitne
</Typography>
<Typography typographyType="leadSans03" withMargins>
  Et vitne har sett, hørt eller erfart noe av betydning for en rettssak. Denne
  siden er for deg som skal vitne i en straffesak eller en sivil sak.
</Typography>
<Typography typographyType="headingSans05" as="h2" withMargins>
  Hvorfor vitne?
</Typography>
<Typography typographyType="bodySerif02" withMargins>
  Vitner er svært viktige for rettssikkerheten i samfunnet. Du har fått en
  innkalling (kalles stevning) til saken fordi partene eller retten mener du
  kjenner til noe som kan være viktig for retten å vite. Du har plikt til å møte
  opp i tråd med innkallingen og forklare deg for retten.
</Typography>
`}),`
`,e(n.h2,{id:"api",children:"API"}),`
`,e(g,{story:y}),`
`,o(n.p,{children:[`I tillegg støttes native HTML-attributter som er en del av
`,e(n.code,{children:"HTMLAttributes<HTMLElement>"}),`-interface,
`,e(n.code,{children:"AnchorHTMLAttributes<HTMLAnchorElement>"}),`-interface eller
`,e(n.code,{children:"LabelHTMLAttributes<HTMLLabelElement>"}),"-interface i ",e(n.code,{children:"htmlProps"}),`.
`,e(n.code,{children:"style"}),"-prop kan settes både på toppnivå og i ",e(n.code,{children:"htmlProps"}),`, og blir slått
sammen av komponenten.`]}),`
`,e(n.h3,{id:"types",children:"Types"}),`
`,e(p,{code:`type TypographyInteractionStyling = {
  hover?: CSSProperties;
  active?: CSSProperties;
  };`}),`
`,e(n.h3,{id:"med-styled-components",children:"Med styled-components"}),`
`,o(n.p,{children:["Hvis du bruker styled components til å style ",e(n.code,{children:"<Typography />"})," videre og skal bruke ",e(n.code,{children:"as"})," prop, bruk ",e(n.code,{children:"forwardedAs"})," prop istedenfor:"]}),`
`,e(p,{code:`
  import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
  import { Typography } from '@norges-domstoler/dds-components';

const Label = styled(Typography)\` padding-left: \${ddsBaseTokens.spacing.SizesDdsSpacingLocalX05};\`;

export const StyledLabel = ({ label }) => {

return (

<Label forwardedAs="span" typographyType="supportingStyleLabel01">
  {label}
</Label>
); }; `}),`
`,e(n.h3,{id:"bruk-av-typografi-tokens",children:"Bruk av typografi-tokens"}),`
`,o(n.p,{children:[`Det er også mulig å bruke typografi-tokens direkte.
`,e(n.strong,{children:"OBS!"})," dette bør gjøres kun hvis det er umulig å bruke ",e(n.code,{children:"<Typography />"}),`-komponenten eller andre typografikomponenter.
Se `,e(r,{href:"https://design.domstol.no/987b33f71/p/63b944-typografi/b/34fc66",children:"Typografi tokens i kode"}),` for bruk.
Husk å sette deg inn i retningslinjer for spacing under `,e(r,{href:"https://design.domstol.no/987b33f71/p/63b944-typografi/t/1459ef",children:"Bruk av tokens i tekster med typografisk hierarki"}),"."]})]})}function x(t={}){const{wrapper:n}=Object.assign({},a(),t.components);return n?e(n,Object.assign({},t,{children:e(d,t)})):d(t)}export{x as default};
//# sourceMappingURL=Typography-5a0a6b79.js.map
