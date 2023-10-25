import{a as e,j as r,F as h}from"./jsx-runtime-e43ccb36.js";import{M as l,C as o,b as i,A as s,P as m}from"./chunk-HLWAVYOI-6f356e5e.js";import{S as c}from"./index-5ee6840e.js";import{C as u,L as g,c as a}from"./StoryTemplate-6502379c.js";import{S as k}from"./constants-69754a51.js";import{S}from"./Search.stories-7a320871.js";import{u as p}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-457e83b5.js";import"../sb-preview/runtime.js";import"./index-6d191f71.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./BaseComponentProps-b6ad9f7d.js";import"./ddsReferenceTokens-a28ebf03.js";import"./Input.styles-97d4f19a.js";import"./Caption-d810b87c.js";import"./TextOverflowEllipsis-6cc9a60a.js";import"./Typography-d13ef156.js";import"./Heading-0c5437bc.js";import"./Label-05114518.js";import"./Legend-9969638c.js";import"./Link-c264ab95.js";import"./Paragraph-88055bd8.js";import"./libraryAdd-72c0bfa3.js";import"./Icon-eb542f51.js";import"./renderInputMessage-4f5fcc5d.js";import"./InputMessage-235fa100.js";import"./removeListStyling-80ec5e55.js";import"./OverflowMenuItem-7e972be0.js";import"./normalize-f756ee4b.js";import"./scrollbarStyling-c2e6e782.js";import"./ScrollableContainer.tokens-fec9d215.js";import"./VisuallyHidden-e3800c53.js";import"./Button-ba8adec5.js";import"./Button.tokens-aa4a9c73.js";import"./Spinner-842be24a.js";function d(t){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ul:"ul",li:"li",strong:"strong",h3:"h3",h4:"h4"},p(),t.components);return r(h,{children:[e(l,{of:S}),`
`,e(n.h1,{id:"search",children:"Search"}),`
`,e(u,{docsHref:"https://design.domstol.no/987b33f71/p/207165-search/b/875fab",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=1461%3A0",githubHref:"https://github.com/domstolene/designsystem/tree/main/packages/components/src/components/Search"}),`
`,e(n.h2,{id:"demo",children:"Demo"}),`
`,e(o,{children:e(i,{id:"dds-components-search--default"})}),`
`,e(o,{children:e(i,{id:"dds-components-search--with-button"})}),`
`,e(o,{children:e(i,{height:"470px",id:"dds-components-search--with-suggestions"})}),`
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
`,e(s,{story:m}),`
`,r(n.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",e(n.code,{children:"InputHTMLAttributes<HTMLInputElement>"}),"-interface."]}),`
`,e(n.h4,{id:"types",children:"Types"}),`
`,e(a,{code:`type ButtonProps = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  label?: string;
  loading?: boolean;
  } & ButtonHTMLAttributes<HTMLButtonElement>;`}),`
`,e(n.h3,{id:"searchautocompletewrapper",children:"Search.AutocompleteWrapper"}),`
`,e(n.p,{children:"En wrapper som håndterer autocomplete-funksjonalitet."}),`
`,e(s,{of:c.AutocompleteWrapper}),`
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
`,e(s,{of:c.Suggestions}),`
`,e(n.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,r(n.ul,{children:[`
`,r(n.li,{children:["Mens resultater lastes inn bør det indikeres til brukeren. Hvis det brukes en søkeknapp gjøres det via ",e(n.code,{children:"loading"})," i ",e(n.code,{children:"buttonProps"}),". Hvis søkeknappen ikke brukes bør det gjøres med ",e(n.code,{children:"<Spinner />"}),` i resultatlista.
$$`]}),`
`]})]})}function ne(t={}){const{wrapper:n}=Object.assign({},p(),t.components);return n?e(n,Object.assign({},t,{children:e(d,t)})):d(t)}export{ne as default};
//# sourceMappingURL=Search-f622e34f.js.map
