import{j as e,a as o,F as h}from"./focus-visible-c2e9b88d.js";import{M as l,C as i,e as s,A as g,P as y}from"./chunk-PCJTTTQV-a67c1498.js";import{p as c,S as m,M as f,F as p}from"./storybook-components-c9cbefc3.js";import{T as k}from"./Typography.stories-4314cbd4.js";import{u as a}from"./index-bda0bad7.js";import{L as n}from"./Link-668412b7.js";import"./index-ebeaab24.js";import"./iframe-b2bf83f2.js";import"../sb-preview/runtime.js";import"./index-72bda2b9.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./Typography-9f10a259.js";import"./Typography.utils-99dd1e07.js";import"./focusVisible-75802ac7.js";import"./selection-fae9d0a8.js";import"./color-a12930ac.js";import"./BaseComponentProps-bb0d5515.js";function d(t){const r=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",strong:"strong",h3:"h3"},a(),t.components);return o(h,{children:[e(l,{of:k}),`
`,e(r.h1,{id:"typography",children:"Typography"}),`
`,e(c,{docsHref:"https://design.domstol.no/987b33f71/p/3718e2-typography",githubHref:"https://github.com/domstolene/designsystem/tree/master/components/src/components/Typography"}),`
`,e(r.h2,{id:"introduksjon",children:"Introduksjon"}),`
`,o(r.p,{children:[e(r.code,{children:"<Typography />"}),` er en code-only komponent som ikke har en tilsvarende Figma komponent.
Den bruker oversikten over typografistiler definert i `,e(n,{href:"https://design.domstol.no/987b33f71/p/63b944-typografi/b/21516f",children:"Typografi | Stiler og bruk"}),` til å gi tekst riktig styling.
Hver stil har et default HTML element det blir rendered som. Den kan eventuelt overskrives med en annen HTML tag hvis default ikke passer.`]}),`
`,o(r.p,{children:[e(r.strong,{children:"OBS!"})," I de fleste tilfeller bør du bruke en av våre deterministiske typografikomponenter, som returnerer en spesifikk HTML tag: ",e(n,{href:"https://design.domstol.no/987b33f71/p/473d57-caption/b/52a7b4",children:"Caption"}),", ",e(n,{href:"https://design.domstol.no/987b33f71/p/76b220-heading/b/30ecca",children:"Heading"}),", ",e(n,{href:"https://design.domstol.no/987b33f71/p/49dc3f-label/b/102e70",children:"Label"}),", ",e(n,{href:"https://design.domstol.no/987b33f71/p/829771-legend/b/15b037",children:"Legend"}),", ",e(n,{href:"https://design.domstol.no/987b33f71/p/411e45-link/b/674f25",children:"Link"}),", ",e(n,{href:"https://design.domstol.no/987b33f71/p/883067-paragraph/b/70f5e1",children:"Paragraph"}),`.
`,e(r.code,{children:"<Typography />"})," bør brukes kun når disse komponentene ikke er tilstrekkelige."]}),`
`,e(r.h2,{id:"demo",children:"Demo"}),`
`,e(i,{children:e(s,{id:"dds-components-typography-overview-typography-types--body"})}),`
`,e(i,{children:e(s,{id:"dds-components-typography-overview-typography-types--headings"})}),`
`,e(i,{children:e(s,{id:"dds-components-typography-overview-typography-types--leads"})}),`
`,e(i,{children:e(s,{id:"dds-components-typography-overview-typography-types--supporting"})}),`
`,e(i,{children:e(s,{id:"dds-components-typography-overview-typography-types--link"})}),`
`,e(i,{children:e(s,{id:"dds-components-typography-typography--default"})}),`
`,e(m,{href:`${f}dds-components-typography-typography`}),`
`,e(r.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
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
`,e(r.h2,{id:"api",children:"API"}),`
`,e(g,{story:y}),`
`,o(r.p,{children:[`I tillegg støttes native HTML-attributter som er en del av
`,e(r.code,{children:"HTMLAttributes<HTMLElement>"}),`-interface,
`,e(r.code,{children:"AnchorHTMLAttributes<HTMLAnchorElement>"}),`-interface eller
`,e(r.code,{children:"LabelHTMLAttributes<HTMLLabelElement>"}),"-interface i ",e(r.code,{children:"htmlProps"}),`.
`,e(r.code,{children:"style"}),"-prop kan settes både på toppnivå og i ",e(r.code,{children:"htmlProps"}),`, og blir slått
sammen av komponenten.`]}),`
`,e(r.h3,{id:"types",children:"Types"}),`
`,e(p,{code:`type TypographyInteractionStyling = {
  hover?: CSSProperties;
  active?: CSSProperties;
  };`}),`
`,e(r.h3,{id:"med-styled-components",children:"Med styled-components"}),`
`,o(r.p,{children:["Hvis du bruker styled components til å style ",e(r.code,{children:"<Typography />"})," videre og skal bruke ",e(r.code,{children:"as"})," prop, bruk ",e(r.code,{children:"forwardedAs"})," prop istedenfor:"]}),`
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
`,e(r.h3,{id:"bruk-av-typografi-tokens",children:"Bruk av typografi-tokens"}),`
`,o(r.p,{children:[`Det er også mulig å bruke typografi-tokens direkte.
`,e(r.strong,{children:"OBS!"})," dette bør gjøres kun hvis det er umulig å bruke ",e(r.code,{children:"<Typography />"}),`-komponenten eller andre typografikomponenter.
Se `,e(n,{href:"https://design.domstol.no/987b33f71/p/63b944-typografi/b/34fc66",children:"Typografi tokens i kode"}),` for bruk.
Husk å sette deg inn i retningslinjer for spacing under `,e(n,{href:"https://design.domstol.no/987b33f71/p/63b944-typografi/t/1459ef",children:"Bruk av tokens i tekster med typografisk hierarki"}),"."]})]})}function F(t={}){const{wrapper:r}=Object.assign({},a(),t.components);return r?e(r,Object.assign({},t,{children:e(d,t)})):d(t)}export{F as default};
//# sourceMappingURL=Typography-38ed6bb6.js.map
