import{a as e,j as r,F as h}from"./jsx-runtime-e43ccb36.js";import{M as l,C as o,b as i,A as s,P as m}from"./chunk-HLWAVYOI-144285ef.js";import{S as c}from"./index-ba392fc5.js";import{C as u,L as g,c as a}from"./StoryTemplate-cf6f14af.js";import{S as k}from"./constants-69754a51.js";import{S}from"./Search.stories-75b65965.js";import{u as p}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-4f2d4b01.js";import"../sb-preview/runtime.js";import"./index-6d191f71.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./BaseComponentProps-5f9a30f8.js";import"./ddsReferenceTokens-a28ebf03.js";import"./Input.styles-61cf55a8.js";import"./Caption-f392befe.js";import"./TextOverflowEllipsis-6cc9a60a.js";import"./Typography-2f5b7ed6.js";import"./Heading-ad44a14c.js";import"./Label-2f40b05d.js";import"./Legend-4a50a7d7.js";import"./Link-53575534.js";import"./Paragraph-ea3f8ca3.js";import"./libraryAdd-6466b337.js";import"./Icon-317ea463.js";import"./renderInputMessage-97b0a90b.js";import"./InputMessage-d83a6a24.js";import"./removeListStyling-80ec5e55.js";import"./OverflowMenuItem-6489ab66.js";import"./normalize-f756ee4b.js";import"./scrollbarStyling-c2e6e782.js";import"./ScrollableContainer.tokens-fec9d215.js";import"./VisuallyHidden-ecf884b0.js";import"./Button-98671548.js";import"./Button.tokens-48945bc8.js";import"./Spinner-e224c804.js";function d(t){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ul:"ul",li:"li",strong:"strong",h3:"h3",h4:"h4"},p(),t.components);return r(h,{children:[e(l,{of:S}),`
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
//# sourceMappingURL=Search-c31196ec.js.map
