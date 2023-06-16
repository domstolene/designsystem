import{j as e,a as t,F as h}from"./focus-visible-c2e9b88d.js";import{M as l,C as o,e as i,A as s,P as m}from"./chunk-PCJTTTQV-a67c1498.js";import{S as c}from"./index-08797c9c.js";import{p as u,S as g,M as k,F as p}from"./storybook-components-c9cbefc3.js";import{S as f}from"./Search.stories-505dfa97.js";import{u as d}from"./index-bda0bad7.js";import"./index-ebeaab24.js";import"./iframe-b2bf83f2.js";import"../sb-preview/runtime.js";import"./index-72bda2b9.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./Typography.utils-99dd1e07.js";import"./focusVisible-75802ac7.js";import"./removeListStyling-80ec5e55.js";import"./OverflowMenuItem-09e2a28b.js";import"./text-20d7ad40.js";import"./normalize-f756ee4b.js";import"./useCombinedRefs-40b11bb4.js";import"./BaseComponentProps-bb0d5515.js";import"./Icon-819df738.js";import"./Paper-12ce52e7.js";import"./selection-fae9d0a8.js";import"./visibilityTransition-933c6349.js";import"./scrollbarStyling-a46ac0ea.js";import"./ScrollableContainer.tokens-4d8ec996.js";import"./Typography-9f10a259.js";import"./color-a12930ac.js";import"./useRoveFocus-1974dcb0.js";import"./idGenerator-c29473b2.js";import"./Input.styles-0a1e38a8.js";import"./Input.tokens-0612e464.js";import"./hover-d616d034.js";import"./danger-157ad055.js";import"./search-6a19762a.js";import"./SvgWrapper-cd7fa512.js";import"./Button-2e74127f.js";import"./Button.tokens-a196263c.js";import"./Spinner-deb75053.js";import"./Label-ec3ecd5b.js";import"./RequiredMarker-326a4040.js";import"./VisuallyHidden-9c195a2c.js";import"./closeSmall-b6c9ae01.js";import"./Input.utils-f888acf1.js";import"./InputMessage-bb06ca10.js";import"./error-e0532677.js";import"./useOnClickOutside-1aed2959.js";import"./useOnKeyDown-4552d984.js";import"./searchFilter-4f5edf43.js";function a(n){const r=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ul:"ul",li:"li",strong:"strong",h3:"h3",h4:"h4"},d(),n.components);return t(h,{children:[e(l,{of:f}),`
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
`]})]})}function ue(n={}){const{wrapper:r}=Object.assign({},d(),n.components);return r?e(r,Object.assign({},n,{children:e(a,n)})):a(n)}export{ue as default};
//# sourceMappingURL=Search-ec0c6bd1.js.map
