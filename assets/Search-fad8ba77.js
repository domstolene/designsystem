import{a as e,j as r,F as l}from"./ddsReferenceTokens-f1d35829.js";import{M as p,C as o,e as s,A as i,P as m}from"./chunk-PCJTTTQV-c281e3f8.js";import{S as c}from"./index-45112774.js";import{p as u,S as g,M as k,F as a}from"./storybook-components-97b79dd9.js";import{S as f}from"./Search.stories-bd5c5456.js";import{u as h}from"./index-6fa374d0.js";import"./index-d47b1f5a.js";import"./iframe-7f3cecf9.js";import"../sb-preview/runtime.js";import"./index-db9ff070.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./dds-core-c67132cd.js";import"./dds-form-9b45fc8d.js";import"./dds-typography-cc6cb429.js";import"./dds-icons-265d9665.js";import"./renderInputMessage-d83d5631.js";import"./InputMessage-e040ee1d.js";import"./OverflowMenuItem-c1dda316.js";import"./scrollbarStyling-5cc839fb.js";import"./ScrollableContainer.tokens-c202eeaf.js";import"./Button-aa30c63f.js";import"./Button.tokens-d278b944.js";import"./Spinner-dd54de98.js";import"./VisuallyHidden-15b316c1.js";import"./focus-visible-bfce03b6.js";function d(t){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ul:"ul",li:"li",strong:"strong",h3:"h3",h4:"h4"},h(),t.components);return r(l,{children:[e(p,{of:f}),`
`,e(n.h1,{id:"search",children:"Search"}),`
`,e(u,{docsHref:"https://design.domstol.no/987b33f71/p/207165-search/b/875fab",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=1461%3A0",githubHref:"https://github.com/domstolene/designsystem/tree/main/packages/components/src/components/Search"}),`
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
`,e(a,{code:`import { Search } from '@norges-domstoler/dds-components';

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
`,e(a,{code:`type ButtonProps = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  label?: string;
  loading?: boolean;
  } & ButtonHTMLAttributes<HTMLButtonElement>;`}),`
`,e(n.h3,{id:"searchautocompletewrapper",children:"Search.AutocompleteWrapper"}),`
`,e(n.p,{children:"En wrapper som håndterer autocomplete-funksjonalitet."}),`
`,e(i,{of:c.AutocompleteWrapper}),`
`,e(n.h4,{id:"types-1",children:"Types"}),`
`,e(a,{code:`
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
`,e(i,{of:c.Suggestions}),`
`,e(n.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,r(n.ul,{children:[`
`,r(n.li,{children:["Mens resultater lastes inn bør det indikeres til brukeren. Hvis det brukes en søkeknapp gjøres det via ",e(n.code,{children:"loading"})," i ",e(n.code,{children:"buttonProps"}),". Hvis søkeknappen ikke brukes bør det gjøres med ",e(n.code,{children:"<Spinner />"}),` i resultatlista.
$$`]}),`
`]})]})}function _(t={}){const{wrapper:n}=Object.assign({},h(),t.components);return n?e(n,Object.assign({},t,{children:e(d,t)})):d(t)}export{_ as default};
//# sourceMappingURL=Search-fad8ba77.js.map
