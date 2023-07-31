import{a as e,j as r,F as l}from"./focus-visible-8467fd8b.js";import{M as p,C as o,e as s,A as i,P as m}from"./chunk-PCJTTTQV-aabcbb96.js";import{S as a}from"./index-c988e8d8.js";import{p as u,S as g,M as k,F as c}from"./storybook-components-76b2a6b1.js";import{S as f}from"./Search.stories-a46fd88b.js";import{u as h}from"./index-6fa374d0.js";import"./index-d47b1f5a.js";import"./iframe-59584ab4.js";import"../sb-preview/runtime.js";import"./index-db9ff070.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./dds-core-b89b291f.js";import"./dds-form-9dbc5b3d.js";import"./dds-typography-4e6445f7.js";import"./dds-icons-f9255b51.js";import"./renderInputMessage-6d8b7416.js";import"./InputMessage-f11a61e2.js";import"./OverflowMenuItem-5d18c7ac.js";import"./scrollbarStyling-b67d8d39.js";import"./ScrollableContainer.tokens-a52bc549.js";import"./Button-ca35c045.js";import"./Button.tokens-f3dda1de.js";import"./Spinner-28eec8a8.js";import"./VisuallyHidden-0fcd4355.js";function d(t){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ul:"ul",li:"li",strong:"strong",h3:"h3",h4:"h4"},h(),t.components);return r(l,{children:[e(p,{of:f}),`
`,e(n.h1,{id:"search",children:"Search"}),`
`,e(u,{docsHref:"https://design.domstol.no/987b33f71/p/207165-search/b/875fab",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=1461%3A0",githubHref:"https://github.com/domstolene/designsystem/tree/master/components/src/components/Search"}),`
`,e(n.h2,{id:"demo",children:"Demo"}),`
`,e(o,{children:e(s,{id:"dds-components-search--default"})}),`
`,e(o,{children:e(s,{id:"dds-components-search--with-button"})}),`
`,e(o,{children:e(s,{height:"470px",id:"dds-components-search--with-suggestions"})}),`
`,e(g,{href:`${k}dds-components-search`}),`
`,e(n.h2,{id:"oversikt",children:"Oversikt"}),`
`,r(n.p,{children:[e(n.code,{children:"<Search>"})," er en komponent som tilsvarer ",e(n.code,{children:'<input type="search">'}),` og kan vise en søkeknapp hvis ønsket.
I tillegg finnes det følgende subkomponenter:`]}),`
`,r(n.ul,{children:[`
`,r(n.li,{children:[e(n.strong,{children:e(n.code,{children:"<Search.AutocompleteWrapper>"})})," - wrapper for ",e(n.code,{children:"<Search>"}),` som håndterer autocomplete-funksjonalitet hvis er ønsket.
Den rendrer en liste med forslag under søkefeltet basert på brukerens input.
Støtter en rekke custom props.`]}),`
`,r(n.li,{children:[e(n.strong,{children:e(n.code,{children:"<Search.Suggestions>"})}),` - selve listen med forslag.
Brukes i `,e(n.code,{children:"<Search.AutocompleteWrapper>"}),", men kan brukes uten wrapper hvis konsumenten skal håndtere oppførselen selv."]}),`
`]}),`
`,e(n.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,e(c,{code:`import { Search } from '@norges-domstoler/dds-components';

const handleSearch = () => {

$$
// code
}

const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
$if( e.key == 'Enter' ){
  $$handleSearch();
$}
};



<Search onKeyPress={handleKeyPress} />



<Search
  onKeyPress={handleKeyPress}
  buttonProps={{ onClick: () => handleSearch() }}
/>



<Search.AutocompleteWrapper>
  <Search onKeyPress={handleKeyPress} />
</Search.AutocompleteWrapper>

`}),`
`,e(n.h2,{id:"api",children:"API"}),`
`,e(n.h3,{id:"search-1",children:"Search"}),`
`,e(n.p,{children:"Søkefeltet."}),`
`,e(i,{story:m}),`
`,r(n.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",e(n.code,{children:"InputHTMLAttributes<HTMLInputElement>"}),"-interface."]}),`
`,e(n.h4,{id:"types",children:"Types"}),`
`,e(c,{code:`type ButtonProps = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  label?: string;
  loading?: boolean;
  } & ButtonHTMLAttributes<HTMLButtonElement>;`}),`
`,e(n.h3,{id:"searchautocompletewrapper",children:"Search.AutocompleteWrapper"}),`
`,e(n.p,{children:"En wrapper som håndterer autocomplete-funksjonalitet."}),`
`,e(i,{of:a.AutocompleteWrapper}),`
`,e(n.h4,{id:"types-1",children:"Types"}),`
`,e(c,{code:`
  type WeightedSearchData = {
  array: {
   text: string;
   relevance: number;
  };
  sortFunction?: (a: WeightedValue, b: WeightedValue) => number;
  };

type SearchData = {
$$array: string[];
$$sortFunction?: (a: string, b: string) => number;
};`}),`
`,e(n.h3,{id:"searchsuggestions",children:"Search.Suggestions"}),`
`,e(n.p,{children:"Liste med forslag. Håndterer tastaturfokus internt."}),`
`,e(i,{of:a.Suggestions}),`
`,e(n.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,r(n.ul,{children:[`
`,r(n.li,{children:["Mens resultater lastes inn bør det indikeres til brukeren. Hvis det brukes en søkeknapp gjøres det via ",e(n.code,{children:"loading"})," i ",e(n.code,{children:"buttonProps"}),". Hvis søkeknappen ikke brukes bør det gjøres med ",e(n.code,{children:"<Spinner />"}),` i resultatlista.
$$`]}),`
`]})]})}function X(t={}){const{wrapper:n}=Object.assign({},h(),t.components);return n?e(n,Object.assign({},t,{children:e(d,t)})):d(t)}export{X as default};
//# sourceMappingURL=Search-f92a6969.js.map
