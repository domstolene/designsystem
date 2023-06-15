import{j as e,b as t,F as h}from"./focus-visible-17f12d09.js";import{M as l,e as o,f as i,g as s,P as m}from"./index-f5116957.js";import{S as c}from"./index-ad7d97f2.js";import{p as u,S as g,M as k,F as p}from"./storybook-components-54c9cf1b.js";import{S as f}from"./Search.stories-29345541.js";import{u as d}from"./index-09fac16e.js";import"./index-c6dae603.js";import"./iframe-439f8b57.js";import"../sb-preview/runtime.js";import"./index-519f2600.js";import"./index-eb008d06.js";import"./Typography.utils-3c68477b.js";import"./focusVisible-bd00be70.js";import"./removeListStyling-80ec5e55.js";import"./OverflowMenuItem-7faee782.js";import"./text-20d7ad40.js";import"./normalize-f756ee4b.js";import"./useCombinedRefs-764cd8e8.js";import"./BaseComponentProps-bb0d5515.js";import"./Icon-a968456f.js";import"./Paper-19f1cdc7.js";import"./selection-dced972e.js";import"./visibilityTransition-86c3da85.js";import"./scrollbarStyling-27f949d7.js";import"./ScrollableContainer.tokens-3dce5c89.js";import"./Typography-ddbe86f6.js";import"./color-0daeea22.js";import"./useRoveFocus-01d68aa4.js";import"./idGenerator-c29473b2.js";import"./Input.styles-b4f9abd1.js";import"./Input.tokens-b59eb2e2.js";import"./hover-cea7b82c.js";import"./danger-18d99756.js";import"./search-90af096b.js";import"./SvgWrapper-0812a1f2.js";import"./Button-4fdfc19e.js";import"./Button.tokens-82906d32.js";import"./Spinner-7298b3ed.js";import"./Label-f2e173db.js";import"./RequiredMarker-e4206fe2.js";import"./VisuallyHidden-68635a7d.js";import"./closeSmall-48b5218e.js";import"./Input.utils-c0cbaed7.js";import"./InputMessage-ec06a7ed.js";import"./error-f74b99a0.js";import"./useOnClickOutside-08b83e6f.js";import"./useOnKeyDown-77bae070.js";import"./searchFilter-4f5edf43.js";function a(n){const r=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ul:"ul",li:"li",strong:"strong",h3:"h3",h4:"h4"},d(),n.components);return t(h,{children:[e(l,{of:f}),`
`,e(r.h1,{id:"search",children:"Search"}),`
`,e(u,{docsHref:"https://design.domstol.no/987b33f71/p/207165-search/b/875fab",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=1461%3A0",githubHref:"https://github.com/domstolene/designsystem/tree/master/components/src/components/Search"}),`
`,e(r.h2,{id:"demo",children:"Demo"}),`
`,e(o,{children:e(i,{id:"dds-components-search--default"})}),`
`,e(o,{children:e(i,{id:"dds-components-search--with-button"})}),`
`,e(o,{children:e(i,{height:"470px",id:"dds-components-search--with-suggestions"})}),`
`,e(g,{href:`${k}dds-components-search`}),`
`,e(r.h2,{id:"oversikt",children:"Oversikt"}),`
`,t(r.p,{children:[e(r.code,{children:"<Search>"})," er en komponent som tilsvarer ",e(r.code,{children:'<input type="search">'}),` og kan vise en søkeknapp hvis ønsket.
I tillegg finnes det følgende subkomponenter:`]}),`
`,t(r.ul,{children:[`
`,t(r.li,{children:[e(r.strong,{children:e(r.code,{children:"<Search.AutocompleteWrapper>"})})," - wrapper for ",e(r.code,{children:"<Search>"}),` som håndterer autocomplete-funksjonalitet hvis er ønsket.
Den rendrer en liste med forslag under søkefeltet basert på brukerens input.
Støtter en rekke custom props.`]}),`
`,t(r.li,{children:[e(r.strong,{children:e(r.code,{children:"<Search.Suggestions>"})}),` - selve listen med forslag.
Brukes i `,e(r.code,{children:"<Search.AutocompleteWrapper>"}),", men kan brukes uten wrapper hvis konsumenten skal håndtere oppførselen selv."]}),`
`]}),`
`,e(r.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,e(p,{code:`import { Search } from '@norges-domstoler/dds-components';

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
`,e(r.h2,{id:"api",children:"API"}),`
`,e(r.h3,{id:"search-1",children:"Search"}),`
`,e(r.p,{children:"Søkefeltet."}),`
`,e(s,{story:m}),`
`,t(r.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",e(r.code,{children:"InputHTMLAttributes<HTMLInputElement>"}),"-interface."]}),`
`,e(r.h4,{id:"types",children:"Types"}),`
`,e(p,{code:`type ButtonProps = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  label?: string;
  loading?: boolean;
  } & ButtonHTMLAttributes<HTMLButtonElement>;`}),`
`,e(r.h3,{id:"searchautocompletewrapper",children:"Search.AutocompleteWrapper"}),`
`,e(r.p,{children:"En wrapper som håndterer autocomplete-funksjonalitet."}),`
`,e(s,{of:c.AutocompleteWrapper}),`
`,e(r.h4,{id:"types-1",children:"Types"}),`
`,e(p,{code:`
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
`,e(r.h3,{id:"searchsuggestions",children:"Search.Suggestions"}),`
`,e(r.p,{children:"Liste med forslag. Håndterer tastaturfokus internt."}),`
`,e(s,{of:c.Suggestions}),`
`,e(r.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,t(r.ul,{children:[`
`,t(r.li,{children:["Mens resultater lastes inn bør det indikeres til brukeren. Hvis det brukes en søkeknapp gjøres det via ",e(r.code,{children:"loading"})," i ",e(r.code,{children:"buttonProps"}),". Hvis søkeknappen ikke brukes bør det gjøres med ",e(r.code,{children:"<Spinner />"}),` i resultatlista.
$$`]}),`
`]})]})}function le(n={}){const{wrapper:r}=Object.assign({},d(),n.components);return r?e(r,Object.assign({},n,{children:e(a,n)})):a(n)}export{le as default};
//# sourceMappingURL=Search-b024c70c.js.map
