import{a as b,j as K}from"./jsx-runtime-e43ccb36.js";import{s as m,d as p,n as G,a as B}from"./ddsReferenceTokens-cf345c8b.js";import{r as l}from"./index-1b03fe98.js";const v=m.svg`
  display: inline-block;
  flex-shrink: 0;
  position: relative;
  text-align: center;
  vertical-align: middle;
`,R=m.g`
  transition: transform 0.2s linear;
  transform: ${({isUp:e})=>e?"translateY(3px)":"translateY(0)"};
`,T=m.path`
  transition: transform 0.2s linear;
  transform-origin: 1px 1px;
  transform: ${({isUp:e})=>e?"rotate(-90deg) translateY(0)":"rotate(0) translateY(0)"};
`,V=m.path`
  transition: transform 0.2s linear;
  transform-origin: 7px 1px;
  transform: ${({isUp:e})=>e?"rotate(90deg) translateY(0)":"rotate(0) translateY(0)"};
`;try{v.displayName="SvgChevron",v.__docgenInfo={description:"",displayName:"SvgChevron",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}try{R.displayName="SvgChevronlGroup",R.__docgenInfo={description:"",displayName:"SvgChevronlGroup",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}try{T.displayName="SvgChevronlLeft",T.__docgenInfo={description:"",displayName:"SvgChevronlLeft",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}try{V.displayName="SvgChevronlRight",V.__docgenInfo={description:"",displayName:"SvgChevronlRight",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}const $="M 1 0 L 5 4 C 5 4 5 4 5 4 L 4 5 C 4 5 4 5 4 5 C 4 5 4 5 4 5 L 0 1 C 0 1 0 1 0 1 L 1 0 C 1 0 1 0 1 0 C 1 0 1 0 1 0 L 1 0 Z",X="M 3 4 L 7 0 L 8 1 C 8 1 8 1 8 1 L 4 5 L 3 4 C 3 4 3 4 3 4 L 3 4 Z",I=({isUp:e,height:t="5px",width:n="8px"})=>b(v,{viewBox:"0 0 8 5",width:n,height:t,fill:"currentColor",isUp:e,children:K(R,{isUp:e,children:[b(T,{d:$,isUp:e}),b(V,{d:X,isUp:e})]})});try{I.displayName="AnimatedChevronUpDown",I.__docgenInfo={description:"",displayName:"AnimatedChevronUpDown",props:{isUp:{defaultValue:null,description:"",name:"isUp",required:!1,type:{name:"boolean | undefined"}},height:{defaultValue:{value:"5px"},description:"",name:"height",required:!1,type:{name:"Height<string> | undefined"}},width:{defaultValue:{value:"8px"},description:"",name:"width",required:!1,type:{name:"Width<string> | undefined"}}}}}catch{}const{colors:N}=p,Y={color:N.DdsColorNeutralsGray9,backgroundColor:N.DdsColorTertiaryLightest},q=e=>G`
    @media (prefers-reduced-motion: no-preference) {
      transition:
        visibility 0.4s,
        opacity 0.2s;
    }
    visibility: ${e?"visible":"hidden"};
    opacity: ${e?1:0};
  `;try{q.displayName="visibilityTransition",q.__docgenInfo={description:"",displayName:"visibilityTransition",props:{valueOf:{defaultValue:null,description:"Returns the primitive value of the specified object.",name:"valueOf",required:!1,type:{name:"() => boolean"}}}}}catch{}const{colors:J,borderRadius:Z,font:Q}=p,ee={backgroundColor:J.DdsColorNeutralsWhite,borderRadius:Z.RadiiDdsBorderRadius1Radius,fontFamily:Q.DdsFontBodySans01FontFamily},y={paper:ee},{outerShadow:f,border:g}=p,te=e=>{switch(e){case 1:return f.DdsShadow1Onlight;case 2:return f.DdsShadow2Onlight;case 3:return f.DdsShadow3Onlight;case 4:return f.DdsShadow4Onlight}},ne=e=>{switch(e){case"light":return`${g.BordersDdsBorderStyleLightStrokeWeight} solid ${g.BordersDdsBorderStyleLightStroke}`;case"dark":return`${g.BordersDdsBorderStyleDarkStrokeWeight} solid ${g.BordersDdsBorderStyleDarkStroke}`}},x=m.div`
  box-sizing: border-box;
  margin: 0;
  background-color: ${y.paper.backgroundColor};
  font-family: ${y.paper.fontFamily};
  border-radius: ${y.paper.borderRadius};
  &::selection,
  *::selection {
    ${Y}
  }
  ${({elevation:e})=>e&&G`
      box-shadow: ${te(e)};
    `}
  border: ${({border:e})=>e?ne(e):"none"}
`;try{x.displayName="Paper",x.__docgenInfo={description:"",displayName:"Paper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}const re=m.span`
  color: ${p.colors.DdsColorDangerBase};
`,he=()=>b(re,{children:"*"});function M(...e){return l.useCallback(t=>{e.forEach(n=>{typeof n=="function"?n(t):n&&typeof n=="object"&&(n.current=t)})},e)}try{M.displayName="useCombinedRef",M.__docgenInfo={description:`Kombinerer refs for et element.
Eksempel på bruk:
\`\`\`
const MyComponent = forwardRef<HTMLDivElement, Props>((props, ref) => {

 const itemRef = useRef<HTMLDivElement>(null);
 const combinedRef = useCombinedRef(ref, itemRef);

 return <div ref={combinedRef}>innhold</div>
});
\`\`\``,displayName:"useCombinedRef",props:{length:{defaultValue:null,description:"Gets or sets the length of the array. This is a number one higher than the highest index in the array.",name:"length",required:!0,type:{name:"number"}},toString:{defaultValue:null,description:"Returns a string representation of an array.",name:"toString",required:!1,type:{name:"() => string"}},toLocaleString:{defaultValue:null,description:"Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.",name:"toLocaleString",required:!1,type:{name:"() => string"}},pop:{defaultValue:null,description:`Removes the last element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.`,name:"pop",required:!0,type:{name:"() => Ref<T> | undefined"}},push:{defaultValue:null,description:`Appends new elements to the end of an array, and returns the new length of the array.
@param items New elements to add to the array.`,name:"push",required:!0,type:{name:"(...items: Ref<T>[]) => number"}},concat:{defaultValue:null,description:`Combines two or more arrays.
This method returns a new array without modifying any existing arrays.
@param items Additional arrays and/or items to add to the end of the array.
@param items Additional arrays and/or items to add to the end of the array.`,name:"concat",required:!0,type:{name:"{ (...items: ConcatArray<Ref<T>>[]): Ref<T>[]; (...items: (Ref<T> | ConcatArray<Ref<T>>)[]): Ref<T>[]; }"}},join:{defaultValue:null,description:`Adds all the elements of an array into a string, separated by the specified separator string.
@param separator A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.`,name:"join",required:!0,type:{name:"(separator?: string | undefined) => string"}},reverse:{defaultValue:null,description:`Reverses the elements in an array in place.
This method mutates the array and returns a reference to the same array.`,name:"reverse",required:!0,type:{name:"() => Ref<T>[]"}},shift:{defaultValue:null,description:`Removes the first element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.`,name:"shift",required:!0,type:{name:"() => Ref<T> | undefined"}},slice:{defaultValue:null,description:`Returns a copy of a section of an array.
For both start and end, a negative index can be used to indicate an offset from the end of the array.
For example, -2 refers to the second to last element of the array.
@param start The beginning index of the specified portion of the array.
If start is undefined, then the slice begins at index 0.
@param end The end index of the specified portion of the array. This is exclusive of the element at the index 'end'.
If end is undefined, then the slice extends to the end of the array.`,name:"slice",required:!0,type:{name:"(start?: number | undefined, end?: number | undefined) => Ref<T>[]"}},sort:{defaultValue:null,description:`Sorts an array in place.
This method mutates the array and returns a reference to the same array.
@param compareFn Function used to determine the order of the elements. It is expected to return
a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
\`\`\`ts
[11,2,22,1].sort((a, b) => a - b)
\`\`\``,name:"sort",required:!0,type:{name:"(compareFn?: ((a: Ref<T>, b: Ref<T>) => number) | undefined) => Ref<T>[]"}},splice:{defaultValue:null,description:`Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
@param start The zero-based location in the array from which to start removing elements.
@param deleteCount The number of elements to remove.
@returns An array containing the elements that were deleted.
@param start The zero-based location in the array from which to start removing elements.
@param deleteCount The number of elements to remove.
@param items Elements to insert into the array in place of the deleted elements.
@returns An array containing the elements that were deleted.`,name:"splice",required:!0,type:{name:"{ (start: number, deleteCount?: number | undefined): Ref<T>[]; (start: number, deleteCount: number, ...items: Ref<T>[]): Ref<T>[]; }"}},unshift:{defaultValue:null,description:`Inserts new elements at the start of an array, and returns the new length of the array.
@param items Elements to insert at the start of the array.`,name:"unshift",required:!0,type:{name:"(...items: Ref<T>[]) => number"}},indexOf:{defaultValue:null,description:`Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
@param searchElement The value to locate in the array.
@param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.`,name:"indexOf",required:!0,type:{name:"(searchElement: Ref<T>, fromIndex?: number | undefined) => number"}},lastIndexOf:{defaultValue:null,description:`Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.
@param searchElement The value to locate in the array.
@param fromIndex The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array.`,name:"lastIndexOf",required:!0,type:{name:"(searchElement: Ref<T>, fromIndex?: number | undefined) => number"}},every:{defaultValue:null,description:`Determines whether all the members of an array satisfy the specified test.
@param predicate A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.
@param thisArg An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.
@param predicate A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.
@param thisArg An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.`,name:"every",required:!0,type:{name:"{ <S extends Ref<T>>(predicate: (value: Ref<T>, index: number, array: Ref<T>[]) => value is S, thisArg?: any): this is S[]; (predicate: (value: Ref<T>, index: number, array: Ref<T>[]) => unknown, thisArg?: any): boolean; }"}},some:{defaultValue:null,description:`Determines whether the specified callback function returns true for any element of an array.
@param predicate A function that accepts up to three arguments. The some method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value true, or until the end of the array.
@param thisArg An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.`,name:"some",required:!0,type:{name:"(predicate: (value: Ref<T>, index: number, array: Ref<T>[]) => unknown, thisArg?: any) => boolean"}},forEach:{defaultValue:null,description:`Performs the specified action for each element in an array.
@param callbackfn A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
@param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.`,name:"forEach",required:!0,type:{name:"(callbackfn: (value: Ref<T>, index: number, array: Ref<T>[]) => void, thisArg?: any) => void"}},map:{defaultValue:null,description:`Calls a defined callback function on each element of an array, and returns an array that contains the results.
@param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
@param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.`,name:"map",required:!0,type:{name:"<U>(callbackfn: (value: Ref<T>, index: number, array: Ref<T>[]) => U, thisArg?: any) => U[]"}},filter:{defaultValue:null,description:`Returns the elements of an array that meet the condition specified in a callback function.
@param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
@param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
@param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
@param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.`,name:"filter",required:!0,type:{name:"{ <S extends Ref<T>>(predicate: (value: Ref<T>, index: number, array: Ref<T>[]) => value is S, thisArg?: any): S[]; (predicate: (value: Ref<T>, index: number, array: Ref<T>[]) => unknown, thisArg?: any): Ref<...>[]; }"}},reduce:{defaultValue:null,description:`Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
@param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
@param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
@param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
@param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.`,name:"reduce",required:!0,type:{name:"{ (callbackfn: (previousValue: Ref<T>, currentValue: Ref<T>, currentIndex: number, array: Ref<T>[]) => Ref<T>): Ref<T>; (callbackfn: (previousValue: Ref<T>, currentValue: Ref<...>, currentIndex: number, array: Ref<...>[]) => Ref<...>, initialValue: Ref<...>): Ref<...>; <U>(callbackfn: (previousValue: U, currentValue..."}},reduceRight:{defaultValue:null,description:`Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
@param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
@param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
@param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
@param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.`,name:"reduceRight",required:!0,type:{name:"{ (callbackfn: (previousValue: Ref<T>, currentValue: Ref<T>, currentIndex: number, array: Ref<T>[]) => Ref<T>): Ref<T>; (callbackfn: (previousValue: Ref<T>, currentValue: Ref<...>, currentIndex: number, array: Ref<...>[]) => Ref<...>, initialValue: Ref<...>): Ref<...>; <U>(callbackfn: (previousValue: U, currentValue..."}},find:{defaultValue:null,description:`Returns the value of the first element in the array where predicate is true, and undefined
otherwise.
@param predicate find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.
@param thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.`,name:"find",required:!0,type:{name:"{ <S extends Ref<T>>(predicate: (value: Ref<T>, index: number, obj: Ref<T>[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: Ref<T>, index: number, obj: Ref<...>[]) => unknown, thisArg?: any): Ref<...> | undefined; }"}},findIndex:{defaultValue:null,description:`Returns the index of the first element in the array where predicate is true, and -1
otherwise.
@param predicate find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.
@param thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.`,name:"findIndex",required:!0,type:{name:"(predicate: (value: Ref<T>, index: number, obj: Ref<T>[]) => unknown, thisArg?: any) => number"}},fill:{defaultValue:null,description:"Changes all array elements from `start` to `end` index to a static `value` and returns the modified array\n@param value value to fill array section with\n@param start index to start filling the array at. If start is negative, it is treated as\nlength+start where length is the length of the array.\n@param end index to stop filling the array at. If end is negative, it is treated as\nlength+end.",name:"fill",required:!0,type:{name:"(value: Ref<T>, start?: number | undefined, end?: number | undefined) => Ref<T>[]"}},copyWithin:{defaultValue:null,description:`Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target
@param target If target is negative, it is treated as length+target where length is the
length of the array.
@param start If start is negative, it is treated as length+start. If end is negative, it
is treated as length+end.
@param end If not specified, length of the this object is used as its default value.`,name:"copyWithin",required:!0,type:{name:"(target: number, start: number, end?: number | undefined) => Ref<T>[]"}},entries:{defaultValue:null,description:"Returns an iterable of key, value pairs for every entry in the array",name:"entries",required:!0,type:{name:"() => IterableIterator<[number, Ref<T>]>"}},keys:{defaultValue:null,description:"Returns an iterable of keys in the array",name:"keys",required:!0,type:{name:"() => IterableIterator<number>"}},values:{defaultValue:null,description:"Returns an iterable of values in the array",name:"values",required:!0,type:{name:"() => IterableIterator<Ref<T>>"}},includes:{defaultValue:null,description:`Determines whether an array includes a certain element, returning true or false as appropriate.
@param searchElement The element to search for.
@param fromIndex The position in this array at which to begin searching for searchElement.`,name:"includes",required:!0,type:{name:"(searchElement: Ref<T>, fromIndex?: number | undefined) => boolean"}},flatMap:{defaultValue:null,description:`Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.
@param callback A function that accepts up to three arguments. The flatMap method calls the
callback function one time for each element in the array.
@param thisArg An object to which the this keyword can refer in the callback function. If
thisArg is omitted, undefined is used as the this value.`,name:"flatMap",required:!0,type:{name:"<U, This = undefined>(callback: (this: This, value: Ref<T>, index: number, array: Ref<T>[]) => U | readonly U[], thisArg?: This | undefined) => U[]"}},flat:{defaultValue:null,description:`Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.
@param depth The maximum recursion depth`,name:"flat",required:!0,type:{name:"<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]"}},"__@iterator@357":{defaultValue:null,description:"Iterator",name:"__@iterator@357",required:!0,type:{name:"() => IterableIterator<Ref<T>>"}},"__@unscopables@1438":{defaultValue:null,description:`Is an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.`,name:"__@unscopables@1438",required:!0,type:{name:"{ [x: number]: boolean | undefined; length?: boolean | undefined; toString?: boolean | undefined; toLocaleString?: boolean | undefined; pop?: boolean | undefined; push?: boolean | undefined; ... 29 more ...; at?: boolean | undefined; }"}},at:{defaultValue:null,description:`Takes an integer value and returns the item at that index,
allowing for positive and negative integers.
Negative integers count back from the last item in the array.`,name:"at",required:!0,type:{name:"(index: number) => Ref<T> | undefined"}}}}}catch{}const fe=(e,t)=>`${e}-${t}`,D=e=>{const t=e.filter(Boolean);return t.length>0?t.join(" "):void 0};try{D.displayName="spaceSeparatedIdListGenerator",D.__docgenInfo={description:"",displayName:"spaceSeparatedIdListGenerator",props:{length:{defaultValue:null,description:"Gets or sets the length of the array. This is a number one higher than the highest index in the array.",name:"length",required:!0,type:{name:"number"}},toString:{defaultValue:null,description:"Returns a string representation of an array.",name:"toString",required:!1,type:{name:"() => string"}},toLocaleString:{defaultValue:null,description:"Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.",name:"toLocaleString",required:!1,type:{name:"() => string"}},pop:{defaultValue:null,description:`Removes the last element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.`,name:"pop",required:!0,type:{name:"() => string | undefined"}},push:{defaultValue:null,description:`Appends new elements to the end of an array, and returns the new length of the array.
@param items New elements to add to the array.`,name:"push",required:!0,type:{name:"(...items: (string | undefined)[]) => number"}},concat:{defaultValue:null,description:`Combines two or more arrays.
This method returns a new array without modifying any existing arrays.
@param items Additional arrays and/or items to add to the end of the array.
@param items Additional arrays and/or items to add to the end of the array.`,name:"concat",required:!0,type:{name:"{ (...items: ConcatArray<string | undefined>[]): (string | undefined)[]; (...items: (string | ConcatArray<string | undefined> | undefined)[]): (string | undefined)[]; }"}},join:{defaultValue:null,description:`Adds all the elements of an array into a string, separated by the specified separator string.
@param separator A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.`,name:"join",required:!0,type:{name:"(separator?: string | undefined) => string"}},reverse:{defaultValue:null,description:`Reverses the elements in an array in place.
This method mutates the array and returns a reference to the same array.`,name:"reverse",required:!0,type:{name:"() => (string | undefined)[]"}},shift:{defaultValue:null,description:`Removes the first element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.`,name:"shift",required:!0,type:{name:"() => string | undefined"}},slice:{defaultValue:null,description:`Returns a copy of a section of an array.
For both start and end, a negative index can be used to indicate an offset from the end of the array.
For example, -2 refers to the second to last element of the array.
@param start The beginning index of the specified portion of the array.
If start is undefined, then the slice begins at index 0.
@param end The end index of the specified portion of the array. This is exclusive of the element at the index 'end'.
If end is undefined, then the slice extends to the end of the array.`,name:"slice",required:!0,type:{name:"(start?: number | undefined, end?: number | undefined) => (string | undefined)[]"}},sort:{defaultValue:null,description:`Sorts an array in place.
This method mutates the array and returns a reference to the same array.
@param compareFn Function used to determine the order of the elements. It is expected to return
a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
\`\`\`ts
[11,2,22,1].sort((a, b) => a - b)
\`\`\``,name:"sort",required:!0,type:{name:"(compareFn?: ((a: string | undefined, b: string | undefined) => number) | undefined) => (string | undefined)[]"}},splice:{defaultValue:null,description:`Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
@param start The zero-based location in the array from which to start removing elements.
@param deleteCount The number of elements to remove.
@returns An array containing the elements that were deleted.
@param start The zero-based location in the array from which to start removing elements.
@param deleteCount The number of elements to remove.
@param items Elements to insert into the array in place of the deleted elements.
@returns An array containing the elements that were deleted.`,name:"splice",required:!0,type:{name:"{ (start: number, deleteCount?: number | undefined): (string | undefined)[]; (start: number, deleteCount: number, ...items: (string | undefined)[]): (string | undefined)[]; }"}},unshift:{defaultValue:null,description:`Inserts new elements at the start of an array, and returns the new length of the array.
@param items Elements to insert at the start of the array.`,name:"unshift",required:!0,type:{name:"(...items: (string | undefined)[]) => number"}},indexOf:{defaultValue:null,description:`Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
@param searchElement The value to locate in the array.
@param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.`,name:"indexOf",required:!0,type:{name:"(searchElement: string | undefined, fromIndex?: number | undefined) => number"}},lastIndexOf:{defaultValue:null,description:`Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.
@param searchElement The value to locate in the array.
@param fromIndex The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array.`,name:"lastIndexOf",required:!0,type:{name:"(searchElement: string | undefined, fromIndex?: number | undefined) => number"}},every:{defaultValue:null,description:`Determines whether all the members of an array satisfy the specified test.
@param predicate A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.
@param thisArg An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.
@param predicate A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.
@param thisArg An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.`,name:"every",required:!0,type:{name:"{ <S extends string | undefined>(predicate: (value: string | undefined, index: number, array: (string | undefined)[]) => value is S, thisArg?: any): this is S[]; (predicate: (value: string | undefined, index: number, array: (string | undefined)[]) => unknown, thisArg?: any): boolean; }"}},some:{defaultValue:null,description:`Determines whether the specified callback function returns true for any element of an array.
@param predicate A function that accepts up to three arguments. The some method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value true, or until the end of the array.
@param thisArg An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.`,name:"some",required:!0,type:{name:"(predicate: (value: string | undefined, index: number, array: (string | undefined)[]) => unknown, thisArg?: any) => boolean"}},forEach:{defaultValue:null,description:`Performs the specified action for each element in an array.
@param callbackfn A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
@param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.`,name:"forEach",required:!0,type:{name:"(callbackfn: (value: string | undefined, index: number, array: (string | undefined)[]) => void, thisArg?: any) => void"}},map:{defaultValue:null,description:`Calls a defined callback function on each element of an array, and returns an array that contains the results.
@param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
@param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.`,name:"map",required:!0,type:{name:"<U>(callbackfn: (value: string | undefined, index: number, array: (string | undefined)[]) => U, thisArg?: any) => U[]"}},filter:{defaultValue:null,description:`Returns the elements of an array that meet the condition specified in a callback function.
@param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
@param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
@param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
@param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.`,name:"filter",required:!0,type:{name:"{ <S extends string | undefined>(predicate: (value: string | undefined, index: number, array: (string | undefined)[]) => value is S, thisArg?: any): S[]; (predicate: (value: string | undefined, index: number, array: (string | undefined)[]) => unknown, thisArg?: any): (string | undefined)[]; }"}},reduce:{defaultValue:null,description:`Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
@param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
@param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
@param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
@param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.`,name:"reduce",required:!0,type:{name:"{ (callbackfn: (previousValue: string | undefined, currentValue: string | undefined, currentIndex: number, array: (string | undefined)[]) => string | undefined): string | undefined; (callbackfn: (previousValue: string | undefined, currentValue: string | undefined, currentIndex: number, array: (string | undefined)[])..."}},reduceRight:{defaultValue:null,description:`Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
@param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
@param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
@param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
@param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.`,name:"reduceRight",required:!0,type:{name:"{ (callbackfn: (previousValue: string | undefined, currentValue: string | undefined, currentIndex: number, array: (string | undefined)[]) => string | undefined): string | undefined; (callbackfn: (previousValue: string | undefined, currentValue: string | undefined, currentIndex: number, array: (string | undefined)[])..."}},find:{defaultValue:null,description:`Returns the value of the first element in the array where predicate is true, and undefined
otherwise.
@param predicate find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.
@param thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.`,name:"find",required:!0,type:{name:"{ <S extends string | undefined>(predicate: (value: string | undefined, index: number, obj: (string | undefined)[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: string | undefined, index: number, obj: (string | undefined)[]) => unknown, thisArg?: any): string | undefined; }"}},findIndex:{defaultValue:null,description:`Returns the index of the first element in the array where predicate is true, and -1
otherwise.
@param predicate find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.
@param thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.`,name:"findIndex",required:!0,type:{name:"(predicate: (value: string | undefined, index: number, obj: (string | undefined)[]) => unknown, thisArg?: any) => number"}},fill:{defaultValue:null,description:"Changes all array elements from `start` to `end` index to a static `value` and returns the modified array\n@param value value to fill array section with\n@param start index to start filling the array at. If start is negative, it is treated as\nlength+start where length is the length of the array.\n@param end index to stop filling the array at. If end is negative, it is treated as\nlength+end.",name:"fill",required:!0,type:{name:"(value: string | undefined, start?: number | undefined, end?: number | undefined) => (string | undefined)[]"}},copyWithin:{defaultValue:null,description:`Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target
@param target If target is negative, it is treated as length+target where length is the
length of the array.
@param start If start is negative, it is treated as length+start. If end is negative, it
is treated as length+end.
@param end If not specified, length of the this object is used as its default value.`,name:"copyWithin",required:!0,type:{name:"(target: number, start: number, end?: number | undefined) => (string | undefined)[]"}},entries:{defaultValue:null,description:"Returns an iterable of key, value pairs for every entry in the array",name:"entries",required:!0,type:{name:"() => IterableIterator<[number, string | undefined]>"}},keys:{defaultValue:null,description:"Returns an iterable of keys in the array",name:"keys",required:!0,type:{name:"() => IterableIterator<number>"}},values:{defaultValue:null,description:"Returns an iterable of values in the array",name:"values",required:!0,type:{name:"() => IterableIterator<string | undefined>"}},includes:{defaultValue:null,description:`Determines whether an array includes a certain element, returning true or false as appropriate.
@param searchElement The element to search for.
@param fromIndex The position in this array at which to begin searching for searchElement.`,name:"includes",required:!0,type:{name:"(searchElement: string | undefined, fromIndex?: number | undefined) => boolean"}},flatMap:{defaultValue:null,description:`Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.
@param callback A function that accepts up to three arguments. The flatMap method calls the
callback function one time for each element in the array.
@param thisArg An object to which the this keyword can refer in the callback function. If
thisArg is omitted, undefined is used as the this value.`,name:"flatMap",required:!0,type:{name:"<U, This = undefined>(callback: (this: This, value: string | undefined, index: number, array: (string | undefined)[]) => U | readonly U[], thisArg?: This | undefined) => U[]"}},flat:{defaultValue:null,description:`Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.
@param depth The maximum recursion depth`,name:"flat",required:!0,type:{name:"<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]"}},"__@iterator@357":{defaultValue:null,description:"Iterator",name:"__@iterator@357",required:!0,type:{name:"() => IterableIterator<string | undefined>"}},"__@unscopables@1438":{defaultValue:null,description:`Is an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.`,name:"__@unscopables@1438",required:!0,type:{name:"{ [x: number]: boolean | undefined; length?: boolean | undefined; toString?: boolean | undefined; toLocaleString?: boolean | undefined; pop?: boolean | undefined; push?: boolean | undefined; ... 29 more ...; at?: boolean | undefined; }"}},at:{defaultValue:null,description:`Takes an integer value and returns the item at that index,
allowing for positive and negative integers.
Negative integers count back from the last item in the array.`,name:"at",required:!0,type:{name:"(index: number) => string | undefined"}}}}}catch{}function S(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}try{S.displayName="getScrollbarSize",S.__docgenInfo={description:"",displayName:"getScrollbarSize",props:{URL:{defaultValue:null,description:`Sets or gets the URL for the current document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/URL)`,name:"URL",required:!0,type:{name:"string"}},alinkColor:{defaultValue:null,description:`Sets or gets the color of all active links in the document.
@deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/alinkColor)`,name:"alinkColor",required:!0,type:{name:"string"}},all:{defaultValue:null,description:`Returns a reference to the collection of elements contained by the object.
@deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/all)`,name:"all",required:!0,type:{name:"HTMLAllCollection"}},anchors:{defaultValue:null,description:`Retrieves a collection of all a objects that have a name and/or id property. Objects in this collection are in HTML source order.
@deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/anchors)`,name:"anchors",required:!0,type:{name:"HTMLCollectionOf<HTMLAnchorElement>"}},applets:{defaultValue:null,description:`Retrieves a collection of all applet objects in the document.
@deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/applets)`,name:"applets",required:!0,type:{name:"HTMLCollection"}},bgColor:{defaultValue:null,description:`Deprecated. Sets or retrieves a value that indicates the background color behind the object.
@deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/bgColor)`,name:"bgColor",required:!0,type:{name:"string"}},body:{defaultValue:null,description:`Specifies the beginning and end of the document body.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/body)`,name:"body",required:!0,type:{name:"HTMLElement"}},characterSet:{defaultValue:null,description:`Returns document's encoding.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/characterSet)`,name:"characterSet",required:!0,type:{name:"string"}},charset:{defaultValue:null,description:`Gets or sets the character set used to encode the object.
@deprecated This is a legacy alias of \`characterSet\`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/characterSet)`,name:"charset",required:!0,type:{name:"string"}},compatMode:{defaultValue:null,description:`Gets a value that indicates whether standards-compliant mode is switched on for the object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/compatMode)`,name:"compatMode",required:!0,type:{name:"string"}},contentType:{defaultValue:null,description:`Returns document's content type.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/contentType)`,name:"contentType",required:!0,type:{name:"string"}},cookie:{defaultValue:null,description:`Returns the HTTP cookies that apply to the Document. If there are no cookies or cookies can't be applied to this resource, the empty string will be returned.

Can be set, to add a new cookie to the element's set of HTTP cookies.

If the contents are sandboxed into a unique origin (e.g. in an iframe with the sandbox attribute), a "SecurityError" DOMException will be thrown on getting and setting.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/cookie)`,name:"cookie",required:!0,type:{name:"string"}},currentScript:{defaultValue:null,description:`Returns the script element, or the SVG script element, that is currently executing, as long as the element represents a classic script. In the case of reentrant script execution, returns the one that most recently started executing amongst those that have not yet finished executing.

Returns null if the Document is not currently executing a script or SVG script element (e.g., because the running script is an event handler, or a timeout), or if the currently executing script or SVG script element represents a module script.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/currentScript)`,name:"currentScript",required:!0,type:{name:"HTMLOrSVGScriptElement | null"}},defaultView:{defaultValue:null,description:`Returns the Window object of the active document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/defaultView)`,name:"defaultView",required:!0,type:{name:"(Window & typeof globalThis) | null"}},designMode:{defaultValue:null,description:`Sets or gets a value that indicates whether the document can be edited.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/designMode)`,name:"designMode",required:!0,type:{name:"string"}},dir:{defaultValue:null,description:`Sets or retrieves a value that indicates the reading order of the object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/dir)`,name:"dir",required:!0,type:{name:"string"}},doctype:{defaultValue:null,description:`Gets an object representing the document type declaration associated with the current document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/doctype)`,name:"doctype",required:!0,type:{name:"DocumentType | null"}},documentElement:{defaultValue:null,description:`Gets a reference to the root node of the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/documentElement)`,name:"documentElement",required:!0,type:{name:"HTMLElement"}},documentURI:{defaultValue:null,description:`Returns document's URL.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/documentURI)`,name:"documentURI",required:!0,type:{name:"string"}},domain:{defaultValue:null,description:`Sets or gets the security domain of the document.
@deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/domain)`,name:"domain",required:!0,type:{name:"string"}},embeds:{defaultValue:null,description:`Retrieves a collection of all embed objects in the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/embeds)`,name:"embeds",required:!0,type:{name:"HTMLCollectionOf<HTMLEmbedElement>"}},fgColor:{defaultValue:null,description:`Sets or gets the foreground (text) color of the document.
@deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/fgColor)`,name:"fgColor",required:!0,type:{name:"string"}},forms:{defaultValue:null,description:`Retrieves a collection, in source order, of all form objects in the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/forms)`,name:"forms",required:!0,type:{name:"HTMLCollectionOf<HTMLFormElement>"}},fullscreen:{defaultValue:null,description:"@deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/fullscreen)",name:"fullscreen",required:!0,type:{name:"boolean"}},fullscreenEnabled:{defaultValue:null,description:`Returns true if document has the ability to display elements fullscreen and fullscreen is supported, or false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/fullscreenEnabled)`,name:"fullscreenEnabled",required:!0,type:{name:"boolean"}},head:{defaultValue:null,description:`Returns the head element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/head)`,name:"head",required:!0,type:{name:"HTMLHeadElement"}},hidden:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/hidden)",name:"hidden",required:!0,type:{name:"boolean"}},images:{defaultValue:null,description:`Retrieves a collection, in source order, of img objects in the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/images)`,name:"images",required:!0,type:{name:"HTMLCollectionOf<HTMLImageElement>"}},implementation:{defaultValue:null,description:`Gets the implementation object of the current document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/implementation)`,name:"implementation",required:!0,type:{name:"DOMImplementation"}},inputEncoding:{defaultValue:null,description:`Returns the character encoding used to create the webpage that is loaded into the document object.
@deprecated This is a legacy alias of \`characterSet\`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/characterSet)`,name:"inputEncoding",required:!0,type:{name:"string"}},lastModified:{defaultValue:null,description:`Gets the date that the page was last modified, if the page supplies one.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/lastModified)`,name:"lastModified",required:!0,type:{name:"string"}},linkColor:{defaultValue:null,description:`Sets or gets the color of the document links.
@deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/linkColor)`,name:"linkColor",required:!0,type:{name:"string"}},links:{defaultValue:null,description:`Retrieves a collection of all a objects that specify the href property and all area objects in the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/links)`,name:"links",required:!0,type:{name:"HTMLCollectionOf<HTMLAnchorElement | HTMLAreaElement>"}},location:{defaultValue:null,description:`Contains information about the current URL.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/location)`,name:"location",required:!0,type:{name:"Location"}},onfullscreenchange:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/fullscreenchange_event)",name:"onfullscreenchange",required:!0,type:{name:"((this: Document, ev: Event) => any) | null"}},onfullscreenerror:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/fullscreenerror_event)",name:"onfullscreenerror",required:!0,type:{name:"((this: Document, ev: Event) => any) | null"}},onpointerlockchange:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/pointerlockchange_event)",name:"onpointerlockchange",required:!0,type:{name:"((this: Document, ev: Event) => any) | null"}},onpointerlockerror:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/pointerlockerror_event)",name:"onpointerlockerror",required:!0,type:{name:"((this: Document, ev: Event) => any) | null"}},onreadystatechange:{defaultValue:null,description:`Fires when the state of the object has changed.
@param ev The event

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/readystatechange_event)`,name:"onreadystatechange",required:!0,type:{name:"((this: Document, ev: Event) => any) | null"}},onvisibilitychange:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/visibilitychange_event)",name:"onvisibilitychange",required:!0,type:{name:"((this: Document, ev: Event) => any) | null"}},ownerDocument:{defaultValue:null,description:`Returns the node document. Returns null for documents.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/ownerDocument)`,name:"ownerDocument",required:!0,type:{name:"null"}},pictureInPictureEnabled:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/pictureInPictureEnabled)",name:"pictureInPictureEnabled",required:!0,type:{name:"boolean"}},plugins:{defaultValue:null,description:`Return an HTMLCollection of the embed elements in the Document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/plugins)`,name:"plugins",required:!0,type:{name:"HTMLCollectionOf<HTMLEmbedElement>"}},readyState:{defaultValue:null,description:`Retrieves a value that indicates the current state of the object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/readyState)`,name:"readyState",required:!0,type:{name:"enum",value:[{value:'"loading"'},{value:'"interactive"'},{value:'"complete"'}]}},referrer:{defaultValue:null,description:`Gets the URL of the location that referred the user to the current page.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/referrer)`,name:"referrer",required:!0,type:{name:"string"}},rootElement:{defaultValue:null,description:"@deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/rootElement)",name:"rootElement",required:!0,type:{name:"SVGSVGElement | null"}},scripts:{defaultValue:null,description:`Retrieves a collection of all script objects in the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/scripts)`,name:"scripts",required:!0,type:{name:"HTMLCollectionOf<HTMLScriptElement>"}},scrollingElement:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/scrollingElement)",name:"scrollingElement",required:!0,type:{name:"Element | null"}},timeline:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/timeline)",name:"timeline",required:!0,type:{name:"DocumentTimeline"}},title:{defaultValue:null,description:`Contains the title of the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/title)`,name:"title",required:!0,type:{name:"string"}},visibilityState:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/visibilityState)",name:"visibilityState",required:!0,type:{name:"enum",value:[{value:'"hidden"'},{value:'"visible"'}]}},vlinkColor:{defaultValue:null,description:`Sets or gets the color of the links that the user has visited.
@deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/vlinkColor)`,name:"vlinkColor",required:!0,type:{name:"string"}},adoptNode:{defaultValue:null,description:`Moves node from another document and returns it.

If node is a document, throws a "NotSupportedError" DOMException or, if node is a shadow root, throws a "HierarchyRequestError" DOMException.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/adoptNode)`,name:"adoptNode",required:!0,type:{name:"<T extends Node>(node: T) => T"}},captureEvents:{defaultValue:null,description:"@deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/captureEvents)",name:"captureEvents",required:!0,type:{name:"() => void"}},caretRangeFromPoint:{defaultValue:null,description:"@deprecated",name:"caretRangeFromPoint",required:!0,type:{name:"(x: number, y: number) => Range | null"}},clear:{defaultValue:null,description:"@deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/clear)",name:"clear",required:!0,type:{name:"() => void"}},close:{defaultValue:null,description:`Closes an output stream and forces the sent data to display.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/close)`,name:"close",required:!0,type:{name:"() => void"}},createAttribute:{defaultValue:null,description:`Creates an attribute object with a specified name.
@param name String that sets the attribute object's name.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createAttribute)`,name:"createAttribute",required:!0,type:{name:"(localName: string) => Attr"}},createAttributeNS:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createAttributeNS)",name:"createAttributeNS",required:!0,type:{name:"(namespace: string | null, qualifiedName: string) => Attr"}},createCDATASection:{defaultValue:null,description:`Returns a CDATASection node whose data is data.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createCDATASection)`,name:"createCDATASection",required:!0,type:{name:"(data: string) => CDATASection"}},createComment:{defaultValue:null,description:`Creates a comment object with the specified data.
@param data Sets the comment object's data.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createComment)`,name:"createComment",required:!0,type:{name:"(data: string) => Comment"}},createDocumentFragment:{defaultValue:null,description:`Creates a new document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createDocumentFragment)`,name:"createDocumentFragment",required:!0,type:{name:"() => DocumentFragment"}},createElement:{defaultValue:null,description:`Creates an instance of the element for the specified tag.
@param tagName The name of an element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createElement)
@deprecated`,name:"createElement",required:!0,type:{name:"{ <K extends keyof HTMLElementTagNameMap>(tagName: K, options?: ElementCreationOptions | undefined): HTMLElementTagNameMap[K]; <K extends keyof HTMLElementDeprecatedTagNameMap>(tagName: K, options?: ElementCreationOptions | undefined): HTMLElementDeprecatedTagNameMap[K]; (tagName: string, options?: ElementCreationOp..."}},createElementNS:{defaultValue:null,description:`Returns an element with namespace namespace. Its namespace prefix will be everything before ":" (U+003E) in qualifiedName or null. Its local name will be everything after ":" (U+003E) in qualifiedName or qualifiedName.

If localName does not match the Name production an "InvalidCharacterError" DOMException will be thrown.

If one of the following conditions is true a "NamespaceError" DOMException will be thrown:

localName does not match the QName production.
Namespace prefix is not null and namespace is the empty string.
Namespace prefix is "xml" and namespace is not the XML namespace.
qualifiedName or namespace prefix is "xmlns" and namespace is not the XMLNS namespace.
namespace is the XMLNS namespace and neither qualifiedName nor namespace prefix is "xmlns".

When supplied, options's is can be used to create a customized built-in element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createElementNS)`,name:"createElementNS",required:!0,type:{name:'{ (namespaceURI: "http://www.w3.org/1999/xhtml", qualifiedName: string): HTMLElement; <K extends keyof SVGElementTagNameMap>(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: K): SVGElementTagNameMap[K]; (namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: string): SVGElement; <K extends keyof MathML...'}},createEvent:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createEvent)",name:"createEvent",required:!0,type:{name:'{ (eventInterface: "AnimationEvent"): AnimationEvent; (eventInterface: "AnimationPlaybackEvent"): AnimationPlaybackEvent; (eventInterface: "AudioProcessingEvent"): AudioProcessingEvent; (eventInterface: "BeforeUnloadEvent"): BeforeUnloadEvent; (eventInterface: "BlobEvent"): BlobEvent; (eventInterface: "ClipboardEven...'}},createNodeIterator:{defaultValue:null,description:`Creates a NodeIterator object that you can use to traverse filtered lists of nodes or elements in a document.
@param root The root element or node to start traversing on.
@param whatToShow The type of nodes or elements to appear in the node list
@param filter A custom NodeFilter function to use. For more information, see filter. Use null for no filter.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createNodeIterator)`,name:"createNodeIterator",required:!0,type:{name:"(root: Node, whatToShow?: number | undefined, filter?: NodeFilter | null | undefined) => NodeIterator"}},createProcessingInstruction:{defaultValue:null,description:`Returns a ProcessingInstruction node whose target is target and data is data. If target does not match the Name production an "InvalidCharacterError" DOMException will be thrown. If data contains "?>" an "InvalidCharacterError" DOMException will be thrown.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createProcessingInstruction)`,name:"createProcessingInstruction",required:!0,type:{name:"(target: string, data: string) => ProcessingInstruction"}},createRange:{defaultValue:null,description:`Returns an empty range object that has both of its boundary points positioned at the beginning of the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createRange)`,name:"createRange",required:!0,type:{name:"() => Range"}},createTextNode:{defaultValue:null,description:`Creates a text string from the specified value.
@param data String that specifies the nodeValue property of the text node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createTextNode)`,name:"createTextNode",required:!0,type:{name:"(data: string) => Text"}},createTreeWalker:{defaultValue:null,description:`Creates a TreeWalker object that you can use to traverse filtered lists of nodes or elements in a document.
@param root The root element or node to start traversing on.
@param whatToShow The type of nodes or elements to appear in the node list. For more information, see whatToShow.
@param filter A custom NodeFilter function to use.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createTreeWalker)`,name:"createTreeWalker",required:!0,type:{name:"(root: Node, whatToShow?: number | undefined, filter?: NodeFilter | null | undefined) => TreeWalker"}},execCommand:{defaultValue:null,description:`Executes a command on the current document, current selection, or the given range.
@param commandId String that specifies the command to execute. This command can be any of the command identifiers that can be executed in script.
@param showUI Display the user interface, defaults to false.
@param value Value to assign.
@deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/execCommand)`,name:"execCommand",required:!0,type:{name:"(commandId: string, showUI?: boolean | undefined, value?: string | undefined) => boolean"}},exitFullscreen:{defaultValue:null,description:`Stops document's fullscreen element from being displayed fullscreen and resolves promise when done.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/exitFullscreen)`,name:"exitFullscreen",required:!0,type:{name:"() => Promise<void>"}},exitPictureInPicture:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/exitPictureInPicture)",name:"exitPictureInPicture",required:!0,type:{name:"() => Promise<void>"}},exitPointerLock:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/exitPointerLock)",name:"exitPointerLock",required:!0,type:{name:"() => void"}},getElementById:{defaultValue:null,description:`Returns a reference to the first object with the specified value of the ID attribute.
@param elementId String that specifies the ID value.`,name:"getElementById",required:!0,type:{name:"(elementId: string) => HTMLElement | null"}},getElementsByClassName:{defaultValue:null,description:`Returns a HTMLCollection of the elements in the object on which the method was invoked (a document or an element) that have all the classes given by classNames. The classNames argument is interpreted as a space-separated list of classes.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/getElementsByClassName)`,name:"getElementsByClassName",required:!0,type:{name:"(classNames: string) => HTMLCollectionOf<Element>"}},getElementsByName:{defaultValue:null,description:`Gets a collection of objects based on the value of the NAME or ID attribute.
@param elementName Gets a collection of objects based on the value of the NAME or ID attribute.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/getElementsByName)`,name:"getElementsByName",required:!0,type:{name:"(elementName: string) => NodeListOf<HTMLElement>"}},getElementsByTagName:{defaultValue:null,description:`Retrieves a collection of objects based on the specified element name.
@param name Specifies the name of an element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/getElementsByTagName)
@deprecated`,name:"getElementsByTagName",required:!0,type:{name:"{ <K extends keyof HTMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementTagNameMap[K]>; <K extends keyof SVGElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<...>; <K extends keyof MathMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<...>; <K extends keyof HTMLElementDeprecatedTagNameMa..."}},getElementsByTagNameNS:{defaultValue:null,description:`If namespace and localName are "*" returns a HTMLCollection of all descendant elements.

If only namespace is "*" returns a HTMLCollection of all descendant elements whose local name is localName.

If only localName is "*" returns a HTMLCollection of all descendant elements whose namespace is namespace.

Otherwise, returns a HTMLCollection of all descendant elements whose namespace is namespace and local name is localName.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/getElementsByTagNameNS)`,name:"getElementsByTagNameNS",required:!0,type:{name:'{ (namespaceURI: "http://www.w3.org/1999/xhtml", localName: string): HTMLCollectionOf<HTMLElement>; (namespaceURI: "http://www.w3.org/2000/svg", localName: string): HTMLCollectionOf<...>; (namespaceURI: "http://www.w3.org/1998/Math/MathML", localName: string): HTMLCollectionOf<...>; (namespace: string | null, localN...'}},getSelection:{defaultValue:null,description:`Returns an object representing the current selection of the document that is loaded into the object displaying a webpage.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/getSelection)`,name:"getSelection",required:!0,type:{name:"() => Selection | null"}},hasFocus:{defaultValue:null,description:`Gets a value indicating whether the object currently has focus.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/hasFocus)`,name:"hasFocus",required:!0,type:{name:"() => boolean"}},hasStorageAccess:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/hasStorageAccess)",name:"hasStorageAccess",required:!0,type:{name:"() => Promise<boolean>"}},importNode:{defaultValue:null,description:`Returns a copy of node. If deep is true, the copy also includes the node's descendants.

If node is a document or a shadow root, throws a "NotSupportedError" DOMException.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/importNode)`,name:"importNode",required:!0,type:{name:"<T extends Node>(node: T, deep?: boolean | undefined) => T"}},open:{defaultValue:null,description:`Opens a new window and loads a document specified by a given URL. Also, opens a new window that uses the url parameter and the name parameter to collect the output of the write method and the writeln method.
@param url Specifies a MIME type for the document.
@param name Specifies the name of the window. This name is used as the value for the TARGET attribute on a form or an anchor element.
@param features Contains a list of items separated by commas. Each item consists of an option and a value, separated by an equals sign (for example, "fullscreen=yes, toolbar=yes"). The following values are supported.
@param replace Specifies whether the existing entry for the document is replaced in the history list.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/open)`,name:"open",required:!0,type:{name:"{ (unused1?: string | undefined, unused2?: string | undefined): Document; (url: string | URL, name: string, features: string): Window | null; }"}},queryCommandEnabled:{defaultValue:null,description:`Returns a Boolean value that indicates whether a specified command can be successfully executed using execCommand, given the current state of the document.
@param commandId Specifies a command identifier.
@deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/queryCommandEnabled)`,name:"queryCommandEnabled",required:!0,type:{name:"(commandId: string) => boolean"}},queryCommandIndeterm:{defaultValue:null,description:`Returns a Boolean value that indicates whether the specified command is in the indeterminate state.
@param commandId String that specifies a command identifier.
@deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/queryCommandIndeterm)`,name:"queryCommandIndeterm",required:!0,type:{name:"(commandId: string) => boolean"}},queryCommandState:{defaultValue:null,description:`Returns a Boolean value that indicates the current state of the command.
@param commandId String that specifies a command identifier.
@deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/queryCommandState)`,name:"queryCommandState",required:!0,type:{name:"(commandId: string) => boolean"}},queryCommandSupported:{defaultValue:null,description:`Returns a Boolean value that indicates whether the current command is supported on the current range.
@param commandId Specifies a command identifier.
@deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/queryCommandSupported)`,name:"queryCommandSupported",required:!0,type:{name:"(commandId: string) => boolean"}},queryCommandValue:{defaultValue:null,description:`Returns the current value of the document, range, or current selection for the given command.
@param commandId String that specifies a command identifier.
@deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/queryCommandValue)`,name:"queryCommandValue",required:!0,type:{name:"(commandId: string) => string"}},releaseEvents:{defaultValue:null,description:"@deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/releaseEvents)",name:"releaseEvents",required:!0,type:{name:"() => void"}},requestStorageAccess:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/requestStorageAccess)",name:"requestStorageAccess",required:!0,type:{name:"() => Promise<void>"}},write:{defaultValue:null,description:`Writes one or more HTML expressions to a document in the specified window.
@param content Specifies the text and HTML tags to write.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/write)`,name:"write",required:!0,type:{name:"(...text: string[]) => void"}},writeln:{defaultValue:null,description:`Writes one or more HTML expressions, followed by a carriage return, to a document in the specified window.
@param content The text and HTML tags to write.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/writeln)`,name:"writeln",required:!0,type:{name:"(...text: string[]) => void"}},addEventListener:{defaultValue:null,description:`Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)`,name:"addEventListener",required:!0,type:{name:"{ <K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions | undefined): void; (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | ... 1 more ... | undefined): void; }"}},removeEventListener:{defaultValue:null,description:`Removes the event listener in target's event listener list with the same type, callback, and options.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)`,name:"removeEventListener",required:!0,type:{name:"{ <K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions | undefined): void; (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | ... 1 more ... | undefined): void; }"}},baseURI:{defaultValue:null,description:`Returns node's node document's document base URL.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/baseURI)`,name:"baseURI",required:!0,type:{name:"string"}},childNodes:{defaultValue:null,description:`Returns the children.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/childNodes)`,name:"childNodes",required:!0,type:{name:"NodeListOf<ChildNode>"}},firstChild:{defaultValue:null,description:`Returns the first child.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/firstChild)`,name:"firstChild",required:!0,type:{name:"ChildNode | null"}},isConnected:{defaultValue:null,description:`Returns true if node is connected and false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/isConnected)`,name:"isConnected",required:!0,type:{name:"boolean"}},lastChild:{defaultValue:null,description:`Returns the last child.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/lastChild)`,name:"lastChild",required:!0,type:{name:"ChildNode | null"}},nextSibling:{defaultValue:null,description:`Returns the next sibling.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/nextSibling)`,name:"nextSibling",required:!0,type:{name:"ChildNode | null"}},nodeName:{defaultValue:null,description:`Returns a string appropriate for the type of node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/nodeName)`,name:"nodeName",required:!0,type:{name:"string"}},nodeType:{defaultValue:null,description:`Returns the type of node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/nodeType)`,name:"nodeType",required:!0,type:{name:"number"}},nodeValue:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/nodeValue)",name:"nodeValue",required:!0,type:{name:"string | null"}},parentElement:{defaultValue:null,description:`Returns the parent element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/parentElement)`,name:"parentElement",required:!0,type:{name:"HTMLElement | null"}},parentNode:{defaultValue:null,description:`Returns the parent.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/parentNode)`,name:"parentNode",required:!0,type:{name:"ParentNode | null"}},previousSibling:{defaultValue:null,description:`Returns the previous sibling.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/previousSibling)`,name:"previousSibling",required:!0,type:{name:"ChildNode | null"}},textContent:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/textContent)",name:"textContent",required:!0,type:{name:"string | null"}},appendChild:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/appendChild)",name:"appendChild",required:!0,type:{name:"<T extends Node>(node: T) => T"}},cloneNode:{defaultValue:null,description:`Returns a copy of node. If deep is true, the copy also includes the node's descendants.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/cloneNode)`,name:"cloneNode",required:!0,type:{name:"(deep?: boolean | undefined) => Node"}},compareDocumentPosition:{defaultValue:null,description:`Returns a bitmask indicating the position of other relative to node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/compareDocumentPosition)`,name:"compareDocumentPosition",required:!0,type:{name:"(other: Node) => number"}},contains:{defaultValue:null,description:`Returns true if other is an inclusive descendant of node, and false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/contains)`,name:"contains",required:!0,type:{name:"(other: Node | null) => boolean"}},getRootNode:{defaultValue:null,description:`Returns node's root.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/getRootNode)`,name:"getRootNode",required:!0,type:{name:"(options?: GetRootNodeOptions | undefined) => Node"}},hasChildNodes:{defaultValue:null,description:`Returns whether node has children.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/hasChildNodes)`,name:"hasChildNodes",required:!0,type:{name:"() => boolean"}},insertBefore:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/insertBefore)",name:"insertBefore",required:!0,type:{name:"<T extends Node>(node: T, child: Node | null) => T"}},isDefaultNamespace:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/isDefaultNamespace)",name:"isDefaultNamespace",required:!0,type:{name:"(namespace: string | null) => boolean"}},isEqualNode:{defaultValue:null,description:`Returns whether node and otherNode have the same properties.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/isEqualNode)`,name:"isEqualNode",required:!0,type:{name:"(otherNode: Node | null) => boolean"}},isSameNode:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/isSameNode)",name:"isSameNode",required:!0,type:{name:"(otherNode: Node | null) => boolean"}},lookupNamespaceURI:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/lookupNamespaceURI)",name:"lookupNamespaceURI",required:!0,type:{name:"(prefix: string | null) => string | null"}},lookupPrefix:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/lookupPrefix)",name:"lookupPrefix",required:!0,type:{name:"(namespace: string | null) => string | null"}},normalize:{defaultValue:null,description:`Removes empty exclusive Text nodes and concatenates the data of remaining contiguous exclusive Text nodes into the first of their nodes.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/normalize)`,name:"normalize",required:!0,type:{name:"() => void"}},removeChild:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/removeChild)",name:"removeChild",required:!0,type:{name:"<T extends Node>(child: T) => T"}},replaceChild:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/replaceChild)",name:"replaceChild",required:!0,type:{name:"<T extends Node>(node: Node, child: T) => T"}},ELEMENT_NODE:{defaultValue:null,description:"node is an element.",name:"ELEMENT_NODE",required:!0,type:{name:"1"}},ATTRIBUTE_NODE:{defaultValue:null,description:"",name:"ATTRIBUTE_NODE",required:!0,type:{name:"2"}},TEXT_NODE:{defaultValue:null,description:"node is a Text node.",name:"TEXT_NODE",required:!0,type:{name:"3"}},CDATA_SECTION_NODE:{defaultValue:null,description:"node is a CDATASection node.",name:"CDATA_SECTION_NODE",required:!0,type:{name:"4"}},ENTITY_REFERENCE_NODE:{defaultValue:null,description:"",name:"ENTITY_REFERENCE_NODE",required:!0,type:{name:"5"}},ENTITY_NODE:{defaultValue:null,description:"",name:"ENTITY_NODE",required:!0,type:{name:"6"}},PROCESSING_INSTRUCTION_NODE:{defaultValue:null,description:"node is a ProcessingInstruction node.",name:"PROCESSING_INSTRUCTION_NODE",required:!0,type:{name:"7"}},COMMENT_NODE:{defaultValue:null,description:"node is a Comment node.",name:"COMMENT_NODE",required:!0,type:{name:"8"}},DOCUMENT_NODE:{defaultValue:null,description:"node is a document.",name:"DOCUMENT_NODE",required:!0,type:{name:"9"}},DOCUMENT_TYPE_NODE:{defaultValue:null,description:"node is a doctype.",name:"DOCUMENT_TYPE_NODE",required:!0,type:{name:"10"}},DOCUMENT_FRAGMENT_NODE:{defaultValue:null,description:"node is a DocumentFragment node.",name:"DOCUMENT_FRAGMENT_NODE",required:!0,type:{name:"11"}},NOTATION_NODE:{defaultValue:null,description:"",name:"NOTATION_NODE",required:!0,type:{name:"12"}},DOCUMENT_POSITION_DISCONNECTED:{defaultValue:null,description:"Set when node and other are not in the same tree.",name:"DOCUMENT_POSITION_DISCONNECTED",required:!0,type:{name:"1"}},DOCUMENT_POSITION_PRECEDING:{defaultValue:null,description:"Set when other is preceding node.",name:"DOCUMENT_POSITION_PRECEDING",required:!0,type:{name:"2"}},DOCUMENT_POSITION_FOLLOWING:{defaultValue:null,description:"Set when other is following node.",name:"DOCUMENT_POSITION_FOLLOWING",required:!0,type:{name:"4"}},DOCUMENT_POSITION_CONTAINS:{defaultValue:null,description:"Set when other is an ancestor of node.",name:"DOCUMENT_POSITION_CONTAINS",required:!0,type:{name:"8"}},DOCUMENT_POSITION_CONTAINED_BY:{defaultValue:null,description:"Set when other is a descendant of node.",name:"DOCUMENT_POSITION_CONTAINED_BY",required:!0,type:{name:"16"}},DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:{defaultValue:null,description:"",name:"DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC",required:!0,type:{name:"32"}},dispatchEvent:{defaultValue:null,description:`Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)`,name:"dispatchEvent",required:!0,type:{name:"(event: Event) => boolean"}},activeElement:{defaultValue:null,description:`Returns the deepest element in the document through which or to which key events are being routed. This is, roughly speaking, the focused element in the document.

For the purposes of this API, when a child browsing context is focused, its container is focused in the parent browsing context. For example, if the user moves the focus to a text control in an iframe, the iframe is the element returned by the activeElement API in the iframe's node document.

Similarly, when the focused element is in a different node tree than documentOrShadowRoot, the element returned will be the host that's located in the same node tree as documentOrShadowRoot if documentOrShadowRoot is a shadow-including inclusive ancestor of the focused element, and null if not.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/activeElement)`,name:"activeElement",required:!0,type:{name:"Element | null"}},adoptedStyleSheets:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/adoptedStyleSheets)",name:"adoptedStyleSheets",required:!0,type:{name:"CSSStyleSheet[]"}},fullscreenElement:{defaultValue:null,description:`Returns document's fullscreen element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/fullscreenElement)`,name:"fullscreenElement",required:!0,type:{name:"Element | null"}},pictureInPictureElement:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/pictureInPictureElement)",name:"pictureInPictureElement",required:!0,type:{name:"Element | null"}},pointerLockElement:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/pointerLockElement)",name:"pointerLockElement",required:!0,type:{name:"Element | null"}},styleSheets:{defaultValue:null,description:`Retrieves a collection of styleSheet objects representing the style sheets that correspond to each instance of a link or style object in the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/styleSheets)`,name:"styleSheets",required:!0,type:{name:"StyleSheetList"}},elementFromPoint:{defaultValue:null,description:`Returns the element for the specified x coordinate and the specified y coordinate.
@param x The x-offset
@param y The y-offset`,name:"elementFromPoint",required:!0,type:{name:"(x: number, y: number) => Element | null"}},elementsFromPoint:{defaultValue:null,description:"",name:"elementsFromPoint",required:!0,type:{name:"(x: number, y: number) => Element[]"}},getAnimations:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/getAnimations)",name:"getAnimations",required:!0,type:{name:"() => Animation[]"}},fonts:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/fonts)",name:"fonts",required:!0,type:{name:"FontFaceSet"}},onabort:{defaultValue:null,description:`Fires when the user aborts the download.
@param ev The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/abort_event)`,name:"onabort",required:!0,type:{name:"((this: GlobalEventHandlers, ev: UIEvent) => any) | null"}},onanimationcancel:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationcancel_event)",name:"onanimationcancel",required:!0,type:{name:"((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null"}},onanimationend:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationend_event)",name:"onanimationend",required:!0,type:{name:"((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null"}},onanimationiteration:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationiteration_event)",name:"onanimationiteration",required:!0,type:{name:"((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null"}},onanimationstart:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationstart_event)",name:"onanimationstart",required:!0,type:{name:"((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null"}},onauxclick:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/auxclick_event)",name:"onauxclick",required:!0,type:{name:"((this: GlobalEventHandlers, ev: MouseEvent) => any) | null"}},onbeforeinput:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/beforeinput_event)",name:"onbeforeinput",required:!0,type:{name:"((this: GlobalEventHandlers, ev: InputEvent) => any) | null"}},onblur:{defaultValue:null,description:`Fires when the object loses the input focus.
@param ev The focus event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/blur_event)`,name:"onblur",required:!0,type:{name:"((this: GlobalEventHandlers, ev: FocusEvent) => any) | null"}},oncancel:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/cancel_event)",name:"oncancel",required:!0,type:{name:"((this: GlobalEventHandlers, ev: Event) => any) | null"}},oncanplay:{defaultValue:null,description:`Occurs when playback is possible, but would require further buffering.
@param ev The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplay_event)`,name:"oncanplay",required:!0,type:{name:"((this: GlobalEventHandlers, ev: Event) => any) | null"}},oncanplaythrough:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplaythrough_event)",name:"oncanplaythrough",required:!0,type:{name:"((this: GlobalEventHandlers, ev: Event) => any) | null"}},onchange:{defaultValue:null,description:`Fires when the contents of the object or selection have changed.
@param ev The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/change_event)`,name:"onchange",required:!0,type:{name:"((this: GlobalEventHandlers, ev: Event) => any) | null"}},onclick:{defaultValue:null,description:`Fires when the user clicks the left mouse button on the object
@param ev The mouse event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/click_event)`,name:"onclick",required:!0,type:{name:"((this: GlobalEventHandlers, ev: MouseEvent) => any) | null"}},onclose:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/close_event)",name:"onclose",required:!0,type:{name:"((this: GlobalEventHandlers, ev: Event) => any) | null"}},oncontextmenu:{defaultValue:null,description:`Fires when the user clicks the right mouse button in the client area, opening the context menu.
@param ev The mouse event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event)`,name:"oncontextmenu",required:!0,type:{name:"((this: GlobalEventHandlers, ev: MouseEvent) => any) | null"}},oncopy:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/copy_event)",name:"oncopy",required:!0,type:{name:"((this: GlobalEventHandlers, ev: ClipboardEvent) => any) | null"}},oncuechange:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTrackElement/cuechange_event)",name:"oncuechange",required:!0,type:{name:"((this: GlobalEventHandlers, ev: Event) => any) | null"}},oncut:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/cut_event)",name:"oncut",required:!0,type:{name:"((this: GlobalEventHandlers, ev: ClipboardEvent) => any) | null"}},ondblclick:{defaultValue:null,description:`Fires when the user double-clicks the object.
@param ev The mouse event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/dblclick_event)`,name:"ondblclick",required:!0,type:{name:"((this: GlobalEventHandlers, ev: MouseEvent) => any) | null"}},ondrag:{defaultValue:null,description:`Fires on the source object continuously during a drag operation.
@param ev The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/drag_event)`,name:"ondrag",required:!0,type:{name:"((this: GlobalEventHandlers, ev: DragEvent) => any) | null"}},ondragend:{defaultValue:null,description:`Fires on the source object when the user releases the mouse at the close of a drag operation.
@param ev The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragend_event)`,name:"ondragend",required:!0,type:{name:"((this: GlobalEventHandlers, ev: DragEvent) => any) | null"}},ondragenter:{defaultValue:null,description:`Fires on the target element when the user drags the object to a valid drop target.
@param ev The drag event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragenter_event)`,name:"ondragenter",required:!0,type:{name:"((this: GlobalEventHandlers, ev: DragEvent) => any) | null"}},ondragleave:{defaultValue:null,description:`Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.
@param ev The drag event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragleave_event)`,name:"ondragleave",required:!0,type:{name:"((this: GlobalEventHandlers, ev: DragEvent) => any) | null"}},ondragover:{defaultValue:null,description:`Fires on the target element continuously while the user drags the object over a valid drop target.
@param ev The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragover_event)`,name:"ondragover",required:!0,type:{name:"((this: GlobalEventHandlers, ev: DragEvent) => any) | null"}},ondragstart:{defaultValue:null,description:`Fires on the source object when the user starts to drag a text selection or selected object.
@param ev The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragstart_event)`,name:"ondragstart",required:!0,type:{name:"((this: GlobalEventHandlers, ev: DragEvent) => any) | null"}},ondrop:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/drop_event)",name:"ondrop",required:!0,type:{name:"((this: GlobalEventHandlers, ev: DragEvent) => any) | null"}},ondurationchange:{defaultValue:null,description:`Occurs when the duration attribute is updated.
@param ev The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/durationchange_event)`,name:"ondurationchange",required:!0,type:{name:"((this: GlobalEventHandlers, ev: Event) => any) | null"}},onemptied:{defaultValue:null,description:`Occurs when the media element is reset to its initial state.
@param ev The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/emptied_event)`,name:"onemptied",required:!0,type:{name:"((this: GlobalEventHandlers, ev: Event) => any) | null"}},onended:{defaultValue:null,description:`Occurs when the end of playback is reached.
@param ev The event

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ended_event)`,name:"onended",required:!0,type:{name:"((this: GlobalEventHandlers, ev: Event) => any) | null"}},onerror:{defaultValue:null,description:`Fires when an error occurs during object loading.
@param ev The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/error_event)`,name:"onerror",required:!0,type:{name:"OnErrorEventHandler"}},onfocus:{defaultValue:null,description:`Fires when the object receives focus.
@param ev The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/focus_event)`,name:"onfocus",required:!0,type:{name:"((this: GlobalEventHandlers, ev: FocusEvent) => any) | null"}},onformdata:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/formdata_event)",name:"onformdata",required:!0,type:{name:"((this: GlobalEventHandlers, ev: FormDataEvent) => any) | null"}},ongotpointercapture:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/gotpointercapture_event)",name:"ongotpointercapture",required:!0,type:{name:"((this: GlobalEventHandlers, ev: PointerEvent) => any) | null"}},oninput:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/input_event)",name:"oninput",required:!0,type:{name:"((this: GlobalEventHandlers, ev: Event) => any) | null"}},oninvalid:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/invalid_event)",name:"oninvalid",required:!0,type:{name:"((this: GlobalEventHandlers, ev: Event) => any) | null"}},onkeydown:{defaultValue:null,description:`Fires when the user presses a key.
@param ev The keyboard event

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keydown_event)`,name:"onkeydown",required:!0,type:{name:"((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null"}},onkeypress:{defaultValue:null,description:`Fires when the user presses an alphanumeric key.
@param ev The event.
@deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keypress_event)`,name:"onkeypress",required:!0,type:{name:"((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null"}},onkeyup:{defaultValue:null,description:`Fires when the user releases a key.
@param ev The keyboard event

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keyup_event)`,name:"onkeyup",required:!0,type:{name:"((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null"}},onload:{defaultValue:null,description:`Fires immediately after the browser loads the object.
@param ev The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGElement/load_event)`,name:"onload",required:!0,type:{name:"((this: GlobalEventHandlers, ev: Event) => any) | null"}},onloadeddata:{defaultValue:null,description:`Occurs when media data is loaded at the current playback position.
@param ev The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadeddata_event)`,name:"onloadeddata",required:!0,type:{name:"((this: GlobalEventHandlers, ev: Event) => any) | null"}},onloadedmetadata:{defaultValue:null,description:`Occurs when the duration and dimensions of the media have been determined.
@param ev The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadedmetadata_event)`,name:"onloadedmetadata",required:!0,type:{name:"((this: GlobalEventHandlers, ev: Event) => any) | null"}},onloadstart:{defaultValue:null,description:`Occurs when Internet Explorer begins looking for media data.
@param ev The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadstart_event)`,name:"onloadstart",required:!0,type:{name:"((this: GlobalEventHandlers, ev: Event) => any) | null"}},onlostpointercapture:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/lostpointercapture_event)",name:"onlostpointercapture",required:!0,type:{name:"((this: GlobalEventHandlers, ev: PointerEvent) => any) | null"}},onmousedown:{defaultValue:null,description:`Fires when the user clicks the object with either mouse button.
@param ev The mouse event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mousedown_event)`,name:"onmousedown",required:!0,type:{name:"((this: GlobalEventHandlers, ev: MouseEvent) => any) | null"}},onmouseenter:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseenter_event)",name:"onmouseenter",required:!0,type:{name:"((this: GlobalEventHandlers, ev: MouseEvent) => any) | null"}},onmouseleave:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseleave_event)",name:"onmouseleave",required:!0,type:{name:"((this: GlobalEventHandlers, ev: MouseEvent) => any) | null"}},onmousemove:{defaultValue:null,description:`Fires when the user moves the mouse over the object.
@param ev The mouse event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mousemove_event)`,name:"onmousemove",required:!0,type:{name:"((this: GlobalEventHandlers, ev: MouseEvent) => any) | null"}},onmouseout:{defaultValue:null,description:`Fires when the user moves the mouse pointer outside the boundaries of the object.
@param ev The mouse event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseout_event)`,name:"onmouseout",required:!0,type:{name:"((this: GlobalEventHandlers, ev: MouseEvent) => any) | null"}},onmouseover:{defaultValue:null,description:`Fires when the user moves the mouse pointer into the object.
@param ev The mouse event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseover_event)`,name:"onmouseover",required:!0,type:{name:"((this: GlobalEventHandlers, ev: MouseEvent) => any) | null"}},onmouseup:{defaultValue:null,description:`Fires when the user releases a mouse button while the mouse is over the object.
@param ev The mouse event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseup_event)`,name:"onmouseup",required:!0,type:{name:"((this: GlobalEventHandlers, ev: MouseEvent) => any) | null"}},onpaste:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/paste_event)",name:"onpaste",required:!0,type:{name:"((this: GlobalEventHandlers, ev: ClipboardEvent) => any) | null"}},onpause:{defaultValue:null,description:`Occurs when playback is paused.
@param ev The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/pause_event)`,name:"onpause",required:!0,type:{name:"((this: GlobalEventHandlers, ev: Event) => any) | null"}},onplay:{defaultValue:null,description:`Occurs when the play method is requested.
@param ev The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/play_event)`,name:"onplay",required:!0,type:{name:"((this: GlobalEventHandlers, ev: Event) => any) | null"}},onplaying:{defaultValue:null,description:`Occurs when the audio or video has started playing.
@param ev The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/playing_event)`,name:"onplaying",required:!0,type:{name:"((this: GlobalEventHandlers, ev: Event) => any) | null"}},onpointercancel:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointercancel_event)",name:"onpointercancel",required:!0,type:{name:"((this: GlobalEventHandlers, ev: PointerEvent) => any) | null"}},onpointerdown:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerdown_event)",name:"onpointerdown",required:!0,type:{name:"((this: GlobalEventHandlers, ev: PointerEvent) => any) | null"}},onpointerenter:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerenter_event)",name:"onpointerenter",required:!0,type:{name:"((this: GlobalEventHandlers, ev: PointerEvent) => any) | null"}},onpointerleave:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerleave_event)",name:"onpointerleave",required:!0,type:{name:"((this: GlobalEventHandlers, ev: PointerEvent) => any) | null"}},onpointermove:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointermove_event)",name:"onpointermove",required:!0,type:{name:"((this: GlobalEventHandlers, ev: PointerEvent) => any) | null"}},onpointerout:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerout_event)",name:"onpointerout",required:!0,type:{name:"((this: GlobalEventHandlers, ev: PointerEvent) => any) | null"}},onpointerover:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerover_event)",name:"onpointerover",required:!0,type:{name:"((this: GlobalEventHandlers, ev: PointerEvent) => any) | null"}},onpointerup:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerup_event)",name:"onpointerup",required:!0,type:{name:"((this: GlobalEventHandlers, ev: PointerEvent) => any) | null"}},onprogress:{defaultValue:null,description:`Occurs to indicate progress while downloading media data.
@param ev The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/progress_event)`,name:"onprogress",required:!0,type:{name:"((this: GlobalEventHandlers, ev: ProgressEvent<EventTarget>) => any) | null"}},onratechange:{defaultValue:null,description:`Occurs when the playback rate is increased or decreased.
@param ev The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ratechange_event)`,name:"onratechange",required:!0,type:{name:"((this: GlobalEventHandlers, ev: Event) => any) | null"}},onreset:{defaultValue:null,description:`Fires when the user resets a form.
@param ev The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/reset_event)`,name:"onreset",required:!0,type:{name:"((this: GlobalEventHandlers, ev: Event) => any) | null"}},onresize:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement/resize_event)",name:"onresize",required:!0,type:{name:"((this: GlobalEventHandlers, ev: UIEvent) => any) | null"}},onscroll:{defaultValue:null,description:`Fires when the user repositions the scroll box in the scroll bar on the object.
@param ev The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/scroll_event)`,name:"onscroll",required:!0,type:{name:"((this: GlobalEventHandlers, ev: Event) => any) | null"}},onscrollend:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/scrollend_event)",name:"onscrollend",required:!0,type:{name:"((this: GlobalEventHandlers, ev: Event) => any) | null"}},onsecuritypolicyviolation:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/securitypolicyviolation_event)",name:"onsecuritypolicyviolation",required:!0,type:{name:"((this: GlobalEventHandlers, ev: SecurityPolicyViolationEvent) => any) | null"}},onseeked:{defaultValue:null,description:`Occurs when the seek operation ends.
@param ev The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeked_event)`,name:"onseeked",required:!0,type:{name:"((this: GlobalEventHandlers, ev: Event) => any) | null"}},onseeking:{defaultValue:null,description:`Occurs when the current playback position is moved.
@param ev The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeking_event)`,name:"onseeking",required:!0,type:{name:"((this: GlobalEventHandlers, ev: Event) => any) | null"}},onselect:{defaultValue:null,description:`Fires when the current selection changes.
@param ev The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/select_event)`,name:"onselect",required:!0,type:{name:"((this: GlobalEventHandlers, ev: Event) => any) | null"}},onselectionchange:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/selectionchange_event)",name:"onselectionchange",required:!0,type:{name:"((this: GlobalEventHandlers, ev: Event) => any) | null"}},onselectstart:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/selectstart_event)",name:"onselectstart",required:!0,type:{name:"((this: GlobalEventHandlers, ev: Event) => any) | null"}},onslotchange:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSlotElement/slotchange_event)",name:"onslotchange",required:!0,type:{name:"((this: GlobalEventHandlers, ev: Event) => any) | null"}},onstalled:{defaultValue:null,description:`Occurs when the download has stopped.
@param ev The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/stalled_event)`,name:"onstalled",required:!0,type:{name:"((this: GlobalEventHandlers, ev: Event) => any) | null"}},onsubmit:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/submit_event)",name:"onsubmit",required:!0,type:{name:"((this: GlobalEventHandlers, ev: SubmitEvent) => any) | null"}},onsuspend:{defaultValue:null,description:`Occurs if the load operation has been intentionally halted.
@param ev The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/suspend_event)`,name:"onsuspend",required:!0,type:{name:"((this: GlobalEventHandlers, ev: Event) => any) | null"}},ontimeupdate:{defaultValue:null,description:`Occurs to indicate the current playback position.
@param ev The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/timeupdate_event)`,name:"ontimeupdate",required:!0,type:{name:"((this: GlobalEventHandlers, ev: Event) => any) | null"}},ontoggle:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDetailsElement/toggle_event)",name:"ontoggle",required:!0,type:{name:"((this: GlobalEventHandlers, ev: Event) => any) | null"}},ontouchcancel:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchcancel_event)",name:"ontouchcancel",required:!1,type:{name:"((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined"}},ontouchend:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchend_event)",name:"ontouchend",required:!1,type:{name:"((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined"}},ontouchmove:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchmove_event)",name:"ontouchmove",required:!1,type:{name:"((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined"}},ontouchstart:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchstart_event)",name:"ontouchstart",required:!1,type:{name:"((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined"}},ontransitioncancel:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitioncancel_event)",name:"ontransitioncancel",required:!0,type:{name:"((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null"}},ontransitionend:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionend_event)",name:"ontransitionend",required:!0,type:{name:"((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null"}},ontransitionrun:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionrun_event)",name:"ontransitionrun",required:!0,type:{name:"((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null"}},ontransitionstart:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionstart_event)",name:"ontransitionstart",required:!0,type:{name:"((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null"}},onvolumechange:{defaultValue:null,description:`Occurs when the volume is changed, or playback is muted or unmuted.
@param ev The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/volumechange_event)`,name:"onvolumechange",required:!0,type:{name:"((this: GlobalEventHandlers, ev: Event) => any) | null"}},onwaiting:{defaultValue:null,description:`Occurs when playback stops because the next frame of a video resource is not available.
@param ev The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/waiting_event)`,name:"onwaiting",required:!0,type:{name:"((this: GlobalEventHandlers, ev: Event) => any) | null"}},onwebkitanimationend:{defaultValue:null,description:"@deprecated This is a legacy alias of `onanimationend`.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationend_event)",name:"onwebkitanimationend",required:!0,type:{name:"((this: GlobalEventHandlers, ev: Event) => any) | null"}},onwebkitanimationiteration:{defaultValue:null,description:"@deprecated This is a legacy alias of `onanimationiteration`.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationiteration_event)",name:"onwebkitanimationiteration",required:!0,type:{name:"((this: GlobalEventHandlers, ev: Event) => any) | null"}},onwebkitanimationstart:{defaultValue:null,description:"@deprecated This is a legacy alias of `onanimationstart`.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationstart_event)",name:"onwebkitanimationstart",required:!0,type:{name:"((this: GlobalEventHandlers, ev: Event) => any) | null"}},onwebkittransitionend:{defaultValue:null,description:"@deprecated This is a legacy alias of `ontransitionend`.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionend_event)",name:"onwebkittransitionend",required:!0,type:{name:"((this: GlobalEventHandlers, ev: Event) => any) | null"}},onwheel:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/wheel_event)",name:"onwheel",required:!0,type:{name:"((this: GlobalEventHandlers, ev: WheelEvent) => any) | null"}},childElementCount:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/childElementCount)",name:"childElementCount",required:!0,type:{name:"number"}},children:{defaultValue:null,description:`Returns the child elements.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/children)`,name:"children",required:!0,type:{name:"HTMLCollection"}},firstElementChild:{defaultValue:null,description:`Returns the first child that is an element, and null otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/firstElementChild)`,name:"firstElementChild",required:!0,type:{name:"Element | null"}},lastElementChild:{defaultValue:null,description:`Returns the last child that is an element, and null otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/lastElementChild)`,name:"lastElementChild",required:!0,type:{name:"Element | null"}},append:{defaultValue:null,description:`Inserts nodes after the last child of node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/append)`,name:"append",required:!0,type:{name:"(...nodes: (string | Node)[]) => void"}},prepend:{defaultValue:null,description:`Inserts nodes before the first child of node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/prepend)`,name:"prepend",required:!0,type:{name:"(...nodes: (string | Node)[]) => void"}},querySelector:{defaultValue:null,description:`Returns the first element that is a descendant of node that matches selectors.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/querySelector)
@deprecated`,name:"querySelector",required:!0,type:{name:"{ <K extends keyof HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K] | null; <K extends keyof SVGElementTagNameMap>(selectors: K): SVGElementTagNameMap[K] | null; <K extends keyof MathMLElementTagNameMap>(selectors: K): MathMLElementTagNameMap[K] | null; <K extends keyof HTMLElementDeprecatedTagNameMap>..."}},querySelectorAll:{defaultValue:null,description:`Returns all element descendants of node that match selectors.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/querySelectorAll)
@deprecated`,name:"querySelectorAll",required:!0,type:{name:"{ <K extends keyof HTMLElementTagNameMap>(selectors: K): NodeListOf<HTMLElementTagNameMap[K]>; <K extends keyof SVGElementTagNameMap>(selectors: K): NodeListOf<...>; <K extends keyof MathMLElementTagNameMap>(selectors: K): NodeListOf<...>; <K extends keyof HTMLElementDeprecatedTagNameMap>(selectors: K): NodeListOf<...."}},replaceChildren:{defaultValue:null,description:`Replace all children of node with nodes, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/replaceChildren)`,name:"replaceChildren",required:!0,type:{name:"(...nodes: (string | Node)[]) => void"}},createExpression:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createExpression)",name:"createExpression",required:!0,type:{name:"(expression: string, resolver?: XPathNSResolver | null | undefined) => XPathExpression"}},createNSResolver:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createNSResolver)",name:"createNSResolver",required:!0,type:{name:"(nodeResolver: Node) => Node"}},evaluate:{defaultValue:null,description:"[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/evaluate)",name:"evaluate",required:!0,type:{name:"(expression: string, contextNode: Node, resolver?: XPathNSResolver | null | undefined, type?: number | undefined, result?: XPathResult | null | undefined) => XPathResult"}}}}}catch{}const ge=(e,t)=>e*.01*t,C=e=>e.charAt(0).toUpperCase()+e.slice(1);try{C.displayName="firstLetterToUpperCase",C.__docgenInfo={description:"",displayName:"firstLetterToUpperCase",props:{toString:{defaultValue:null,description:"Returns a string representation of a string.",name:"toString",required:!1,type:{name:"() => string"}},charAt:{defaultValue:null,description:`Returns the character at the specified index.
@param pos The zero-based index of the desired character.`,name:"charAt",required:!0,type:{name:"(pos: number) => string"}},charCodeAt:{defaultValue:null,description:`Returns the Unicode value of the character at the specified location.
@param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.`,name:"charCodeAt",required:!0,type:{name:"(index: number) => number"}},concat:{defaultValue:null,description:`Returns a string that contains the concatenation of two or more strings.
@param strings The strings to append to the end of the string.`,name:"concat",required:!0,type:{name:"(...strings: string[]) => string"}},indexOf:{defaultValue:null,description:`Returns the position of the first occurrence of a substring.
@param searchString The substring to search for in the string
@param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.`,name:"indexOf",required:!0,type:{name:"(searchString: string, position?: number | undefined) => number"}},lastIndexOf:{defaultValue:null,description:`Returns the last occurrence of a substring in the string.
@param searchString The substring to search for.
@param position The index at which to begin searching. If omitted, the search begins at the end of the string.`,name:"lastIndexOf",required:!0,type:{name:"(searchString: string, position?: number | undefined) => number"}},localeCompare:{defaultValue:null,description:`Determines whether two strings are equivalent in the current locale.
Determines whether two strings are equivalent in the current or specified locale.
@param that String to compare to target string
@param that String to compare to target string
@param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details.
@param options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.`,name:"localeCompare",required:!0,type:{name:"{ (that: string): number; (that: string, locales?: string | string[] | undefined, options?: CollatorOptions | undefined): number; }"}},match:{defaultValue:null,description:`Matches a string with a regular expression, and returns an array containing the results of that search.
Matches a string or an object that supports being matched against, and returns an array
containing the results of that search, or null if no matches are found.
@param regexp A variable name or string literal containing the regular expression pattern and flags.
@param matcher An object that supports being matched against.`,name:"match",required:!0,type:{name:"{ (regexp: string | RegExp): RegExpMatchArray | null; (matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null; }"}},replace:{defaultValue:null,description:`Replaces text in a string, using a regular expression or search string.
Passes a string and {@linkcode replaceValue} to the \`[Symbol.replace]\` method on {@linkcode searchValue}. This method is expected to implement its own replacement algorithm.
Replaces text in a string, using an object that supports replacement within a string.
@param searchValue A string or regular expression to search for.
@param replaceValue A string containing the text to replace. When the {@linkcode searchValue } is a \`RegExp\`, all matches are replaced if the \`g\` flag is set (or only those matches at the beginning, if the \`y\` flag is also present). Otherwise, only the first match of {@linkcode searchValue } is replaced.
@param searchValue A string to search for.
@param replacer A function that returns the replacement text.
@param searchValue An object that supports searching for and replacing matches within a string.
@param replaceValue The replacement text.
@param searchValue A object can search for and replace matches within a string.
@param replacer A function that returns the replacement text.`,name:"replace",required:!0,type:{name:"{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { ...; }, replaceValue: string): string; (searchValue: { ...; }, replacer: (substring: string, ...args: any[]) => string): string; }"}},search:{defaultValue:null,description:`Finds the first substring match in a regular expression search.
@param regexp The regular expression pattern and applicable flags.
@param searcher An object which supports searching within a string.`,name:"search",required:!0,type:{name:"{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }"}},slice:{defaultValue:null,description:`Returns a section of a string.
@param start The index to the beginning of the specified portion of stringObj.
@param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.
If this value is not specified, the substring continues to the end of stringObj.`,name:"slice",required:!0,type:{name:"(start?: number | undefined, end?: number | undefined) => string"}},split:{defaultValue:null,description:`Split a string into substrings using the specified separator and return them as an array.
@param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
@param limit A value used to limit the number of elements returned in the array.
@param splitter An object that can split a string.
@param limit A value used to limit the number of elements returned in the array.`,name:"split",required:!0,type:{name:"{ (separator: string | RegExp, limit?: number | undefined): string[]; (splitter: { [Symbol.split](string: string, limit?: number | undefined): string[]; }, limit?: number | undefined): string[]; }"}},substring:{defaultValue:null,description:`Returns the substring at the specified location within a String object.
@param start The zero-based index number indicating the beginning of the substring.
@param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.
If end is omitted, the characters from start through the end of the original string are returned.`,name:"substring",required:!0,type:{name:"(start: number, end?: number | undefined) => string"}},toLowerCase:{defaultValue:null,description:"Converts all the alphabetic characters in a string to lowercase.",name:"toLowerCase",required:!0,type:{name:"() => string"}},toLocaleLowerCase:{defaultValue:null,description:"Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.",name:"toLocaleLowerCase",required:!0,type:{name:"(locales?: string | string[] | undefined) => string"}},toUpperCase:{defaultValue:null,description:"Converts all the alphabetic characters in a string to uppercase.",name:"toUpperCase",required:!0,type:{name:"() => string"}},toLocaleUpperCase:{defaultValue:null,description:"Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.",name:"toLocaleUpperCase",required:!0,type:{name:"(locales?: string | string[] | undefined) => string"}},trim:{defaultValue:null,description:"Removes the leading and trailing white space and line terminator characters from a string.",name:"trim",required:!0,type:{name:"() => string"}},length:{defaultValue:null,description:"Returns the length of a String object.",name:"length",required:!0,type:{name:"number"}},substr:{defaultValue:null,description:`Gets a substring beginning at the specified location and having the specified length.
@deprecated A legacy feature for browser compatibility
@param from The starting position of the desired substring. The index of the first character in the string is zero.
@param length The number of characters to include in the returned substring.`,name:"substr",required:!0,type:{name:"(from: number, length?: number | undefined) => string"}},valueOf:{defaultValue:null,description:"Returns the primitive value of the specified object.",name:"valueOf",required:!1,type:{name:"() => string"}},codePointAt:{defaultValue:null,description:`Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point
value of the UTF-16 encoded code point starting at the string element at position pos in
the String resulting from converting this object to a String.
If there is no element at that position, the result is undefined.
If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.`,name:"codePointAt",required:!0,type:{name:"(pos: number) => number | undefined"}},includes:{defaultValue:null,description:`Returns true if searchString appears as a substring of the result of converting this
object to a String, at one or more positions that are
greater than or equal to position; otherwise, returns false.
@param searchString search string
@param position If position is undefined, 0 is assumed, so as to search all of the String.`,name:"includes",required:!0,type:{name:"(searchString: string, position?: number | undefined) => boolean"}},endsWith:{defaultValue:null,description:`Returns true if the sequence of elements of searchString converted to a String is the
same as the corresponding elements of this object (converted to a String) starting at
endPosition – length(this). Otherwise returns false.`,name:"endsWith",required:!0,type:{name:"(searchString: string, endPosition?: number | undefined) => boolean"}},normalize:{defaultValue:null,description:`Returns the String value result of normalizing the string into the normalization form
named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.
@param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
is "NFC"
@param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
is "NFC"`,name:"normalize",required:!0,type:{name:'{ (form: "NFC" | "NFD" | "NFKC" | "NFKD"): string; (form?: string | undefined): string; }'}},repeat:{defaultValue:null,description:`Returns a String value that is made from count copies appended together. If count is 0,
the empty string is returned.
@param count number of copies to append`,name:"repeat",required:!0,type:{name:"(count: number) => string"}},startsWith:{defaultValue:null,description:`Returns true if the sequence of elements of searchString converted to a String is the
same as the corresponding elements of this object (converted to a String) starting at
position. Otherwise returns false.`,name:"startsWith",required:!0,type:{name:"(searchString: string, position?: number | undefined) => boolean"}},anchor:{defaultValue:null,description:"Returns an `<a>` HTML anchor element and sets the name attribute to the text value\n@deprecated A legacy feature for browser compatibility\n@param name",name:"anchor",required:!0,type:{name:"(name: string) => string"}},big:{defaultValue:null,description:"Returns a `<big>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"big",required:!0,type:{name:"() => string"}},blink:{defaultValue:null,description:"Returns a `<blink>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"blink",required:!0,type:{name:"() => string"}},bold:{defaultValue:null,description:"Returns a `<b>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"bold",required:!0,type:{name:"() => string"}},fixed:{defaultValue:null,description:"Returns a `<tt>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"fixed",required:!0,type:{name:"() => string"}},fontcolor:{defaultValue:null,description:"Returns a `<font>` HTML element and sets the color attribute value\n@deprecated A legacy feature for browser compatibility",name:"fontcolor",required:!0,type:{name:"(color: string) => string"}},fontsize:{defaultValue:null,description:"Returns a `<font>` HTML element and sets the size attribute value\n@deprecated A legacy feature for browser compatibility\n@deprecated A legacy feature for browser compatibility",name:"fontsize",required:!0,type:{name:"{ (size: number): string; (size: string): string; }"}},italics:{defaultValue:null,description:"Returns an `<i>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"italics",required:!0,type:{name:"() => string"}},link:{defaultValue:null,description:"Returns an `<a>` HTML element and sets the href attribute value\n@deprecated A legacy feature for browser compatibility",name:"link",required:!0,type:{name:"(url: string) => string"}},small:{defaultValue:null,description:"Returns a `<small>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"small",required:!0,type:{name:"() => string"}},strike:{defaultValue:null,description:"Returns a `<strike>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"strike",required:!0,type:{name:"() => string"}},sub:{defaultValue:null,description:"Returns a `<sub>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"sub",required:!0,type:{name:"() => string"}},sup:{defaultValue:null,description:"Returns a `<sup>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"sup",required:!0,type:{name:"() => string"}},padStart:{defaultValue:null,description:`Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
The padding is applied from the start (left) of the current string.
@param maxLength The length of the resulting string once the current string has been padded.
If this parameter is smaller than the current string's length, the current string will be returned as it is.
@param fillString The string to pad the current string with.
If this string is too long, it will be truncated and the left-most part will be applied.
The default value for this parameter is " " (U+0020).`,name:"padStart",required:!0,type:{name:"(maxLength: number, fillString?: string | undefined) => string"}},padEnd:{defaultValue:null,description:`Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
The padding is applied from the end (right) of the current string.
@param maxLength The length of the resulting string once the current string has been padded.
If this parameter is smaller than the current string's length, the current string will be returned as it is.
@param fillString The string to pad the current string with.
If this string is too long, it will be truncated and the left-most part will be applied.
The default value for this parameter is " " (U+0020).`,name:"padEnd",required:!0,type:{name:"(maxLength: number, fillString?: string | undefined) => string"}},trimEnd:{defaultValue:null,description:"Removes the trailing white space and line terminator characters from a string.",name:"trimEnd",required:!0,type:{name:"() => string"}},trimStart:{defaultValue:null,description:"Removes the leading white space and line terminator characters from a string.",name:"trimStart",required:!0,type:{name:"() => string"}},trimLeft:{defaultValue:null,description:"Removes the leading white space and line terminator characters from a string.\n@deprecated A legacy feature for browser compatibility. Use `trimStart` instead",name:"trimLeft",required:!0,type:{name:"() => string"}},trimRight:{defaultValue:null,description:"Removes the trailing white space and line terminator characters from a string.\n@deprecated A legacy feature for browser compatibility. Use `trimEnd` instead",name:"trimRight",required:!0,type:{name:"() => string"}},matchAll:{defaultValue:null,description:`Matches a string with a regular expression, and returns an iterable of matches
containing the results of that search.
@param regexp A variable name or string literal containing the regular expression pattern and flags.`,name:"matchAll",required:!0,type:{name:"(regexp: RegExp) => IterableIterator<RegExpMatchArray>"}},"__@iterator@357":{defaultValue:null,description:"Iterator",name:"__@iterator@357",required:!0,type:{name:"() => IterableIterator<string>"}},at:{defaultValue:null,description:`Takes an integer value and returns the item at that index,
allowing for positive and negative integers.
Negative integers count back from the last item in the array.`,name:"at",required:!0,type:{name:"(index: number) => string | undefined"}}}}}catch{}const{colors:s}=p,{textDefault:ae}=B,U=(e,t,n)=>{if(t==="decimal"&&n==="hex8"){const r=Number(e);if(typeof r!="number"||r>1||r<0)return"";const a=Math.round(255*(Math.round(r*100)/100)).toString(16);return a.length===1?"0"+a:a}if(t==="hex8"&&n==="decimal"){const r=new RegExp(/^[0-9a-fA-F]+$/).test(e.toString());return e.toString().length>2||r===!1?"":Math.round(parseInt(e.toString(),16)/256*100)/100}},k=e=>{const t=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),r=parseInt(e.slice(5,7),16),a=e.length===9?e.slice(7,9):"ff";return`rgba(${t}, ${n}, ${r}, ${U(a,"hex8","decimal")})`},ie=e=>e.replace(/\s/g,"").match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),P=e=>{const t=ie(e),n=((t==null?void 0:t[4])??"").trim();return t?"#"+(parseInt(t[1])|256).toString(16).slice(1)+(parseInt(t[2])|256).toString(16).slice(1)+(parseInt(t[3])|256).toString(16).slice(1)+U(n,"decimal","hex8"):""},be=(e,t)=>!e.startsWith("rgba(")||!e.endsWith(")")?"":e.replace(/[\d.]+\)$/g,t.toString()+")"),se={interactive:s.DdsColorInteractiveBase,primary:s.DdsColorPrimaryBase,danger:s.DdsColorDangerBase,success:s.DdsColorSuccessBase,warning:s.DdsColorWarningBase,onLight:ae.textColor,onDark:s.DdsColorNeutralsWhite,gray1:s.DdsColorNeutralsGray1,gray2:s.DdsColorNeutralsGray2,gray3:s.DdsColorNeutralsGray3,gray4:s.DdsColorNeutralsGray4,gray5:s.DdsColorNeutralsGray5,gray6:s.DdsColorNeutralsGray6,gray7:s.DdsColorNeutralsGray7,gray8:s.DdsColorNeutralsGray8,gray9:s.DdsColorNeutralsGray9},oe=["interactive","primary","danger","success","warning","onLight","onDark","gray1","gray2","gray3","gray4","gray5","gray6","gray7","gray8","gray9"];function w(e){return oe.indexOf(e)!==-1}const _=e=>w(e)?se[e]:e;try{w.displayName="isTextColor",w.__docgenInfo={description:"",displayName:"isTextColor",props:{toString:{defaultValue:null,description:"Returns a string representation of a string.",name:"toString",required:!1,type:{name:"() => string"}},charAt:{defaultValue:null,description:`Returns the character at the specified index.
@param pos The zero-based index of the desired character.`,name:"charAt",required:!0,type:{name:"(pos: number) => string"}},charCodeAt:{defaultValue:null,description:`Returns the Unicode value of the character at the specified location.
@param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.`,name:"charCodeAt",required:!0,type:{name:"(index: number) => number"}},concat:{defaultValue:null,description:`Returns a string that contains the concatenation of two or more strings.
@param strings The strings to append to the end of the string.`,name:"concat",required:!0,type:{name:"(...strings: string[]) => string"}},indexOf:{defaultValue:null,description:`Returns the position of the first occurrence of a substring.
@param searchString The substring to search for in the string
@param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.`,name:"indexOf",required:!0,type:{name:"(searchString: string, position?: number | undefined) => number"}},lastIndexOf:{defaultValue:null,description:`Returns the last occurrence of a substring in the string.
@param searchString The substring to search for.
@param position The index at which to begin searching. If omitted, the search begins at the end of the string.`,name:"lastIndexOf",required:!0,type:{name:"(searchString: string, position?: number | undefined) => number"}},localeCompare:{defaultValue:null,description:`Determines whether two strings are equivalent in the current locale.
Determines whether two strings are equivalent in the current or specified locale.
@param that String to compare to target string
@param that String to compare to target string
@param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details.
@param options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.`,name:"localeCompare",required:!0,type:{name:"{ (that: string): number; (that: string, locales?: string | string[] | undefined, options?: CollatorOptions | undefined): number; }"}},match:{defaultValue:null,description:`Matches a string with a regular expression, and returns an array containing the results of that search.
Matches a string or an object that supports being matched against, and returns an array
containing the results of that search, or null if no matches are found.
@param regexp A variable name or string literal containing the regular expression pattern and flags.
@param matcher An object that supports being matched against.`,name:"match",required:!0,type:{name:"{ (regexp: string | RegExp): RegExpMatchArray | null; (matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null; }"}},replace:{defaultValue:null,description:`Replaces text in a string, using a regular expression or search string.
Passes a string and {@linkcode replaceValue} to the \`[Symbol.replace]\` method on {@linkcode searchValue}. This method is expected to implement its own replacement algorithm.
Replaces text in a string, using an object that supports replacement within a string.
@param searchValue A string or regular expression to search for.
@param replaceValue A string containing the text to replace. When the {@linkcode searchValue } is a \`RegExp\`, all matches are replaced if the \`g\` flag is set (or only those matches at the beginning, if the \`y\` flag is also present). Otherwise, only the first match of {@linkcode searchValue } is replaced.
@param searchValue A string to search for.
@param replacer A function that returns the replacement text.
@param searchValue An object that supports searching for and replacing matches within a string.
@param replaceValue The replacement text.
@param searchValue A object can search for and replace matches within a string.
@param replacer A function that returns the replacement text.`,name:"replace",required:!0,type:{name:"{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { ...; }, replaceValue: string): string; (searchValue: { ...; }, replacer: (substring: string, ...args: any[]) => string): string; }"}},search:{defaultValue:null,description:`Finds the first substring match in a regular expression search.
@param regexp The regular expression pattern and applicable flags.
@param searcher An object which supports searching within a string.`,name:"search",required:!0,type:{name:"{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }"}},slice:{defaultValue:null,description:`Returns a section of a string.
@param start The index to the beginning of the specified portion of stringObj.
@param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.
If this value is not specified, the substring continues to the end of stringObj.`,name:"slice",required:!0,type:{name:"(start?: number | undefined, end?: number | undefined) => string"}},split:{defaultValue:null,description:`Split a string into substrings using the specified separator and return them as an array.
@param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
@param limit A value used to limit the number of elements returned in the array.
@param splitter An object that can split a string.
@param limit A value used to limit the number of elements returned in the array.`,name:"split",required:!0,type:{name:"{ (separator: string | RegExp, limit?: number | undefined): string[]; (splitter: { [Symbol.split](string: string, limit?: number | undefined): string[]; }, limit?: number | undefined): string[]; }"}},substring:{defaultValue:null,description:`Returns the substring at the specified location within a String object.
@param start The zero-based index number indicating the beginning of the substring.
@param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.
If end is omitted, the characters from start through the end of the original string are returned.`,name:"substring",required:!0,type:{name:"(start: number, end?: number | undefined) => string"}},toLowerCase:{defaultValue:null,description:"Converts all the alphabetic characters in a string to lowercase.",name:"toLowerCase",required:!0,type:{name:"() => string"}},toLocaleLowerCase:{defaultValue:null,description:"Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.",name:"toLocaleLowerCase",required:!0,type:{name:"(locales?: string | string[] | undefined) => string"}},toUpperCase:{defaultValue:null,description:"Converts all the alphabetic characters in a string to uppercase.",name:"toUpperCase",required:!0,type:{name:"() => string"}},toLocaleUpperCase:{defaultValue:null,description:"Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.",name:"toLocaleUpperCase",required:!0,type:{name:"(locales?: string | string[] | undefined) => string"}},trim:{defaultValue:null,description:"Removes the leading and trailing white space and line terminator characters from a string.",name:"trim",required:!0,type:{name:"() => string"}},length:{defaultValue:null,description:"Returns the length of a String object.",name:"length",required:!0,type:{name:"number"}},substr:{defaultValue:null,description:`Gets a substring beginning at the specified location and having the specified length.
@deprecated A legacy feature for browser compatibility
@param from The starting position of the desired substring. The index of the first character in the string is zero.
@param length The number of characters to include in the returned substring.`,name:"substr",required:!0,type:{name:"(from: number, length?: number | undefined) => string"}},valueOf:{defaultValue:null,description:"Returns the primitive value of the specified object.",name:"valueOf",required:!1,type:{name:"() => string"}},codePointAt:{defaultValue:null,description:`Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point
value of the UTF-16 encoded code point starting at the string element at position pos in
the String resulting from converting this object to a String.
If there is no element at that position, the result is undefined.
If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.`,name:"codePointAt",required:!0,type:{name:"(pos: number) => number | undefined"}},includes:{defaultValue:null,description:`Returns true if searchString appears as a substring of the result of converting this
object to a String, at one or more positions that are
greater than or equal to position; otherwise, returns false.
@param searchString search string
@param position If position is undefined, 0 is assumed, so as to search all of the String.`,name:"includes",required:!0,type:{name:"(searchString: string, position?: number | undefined) => boolean"}},endsWith:{defaultValue:null,description:`Returns true if the sequence of elements of searchString converted to a String is the
same as the corresponding elements of this object (converted to a String) starting at
endPosition – length(this). Otherwise returns false.`,name:"endsWith",required:!0,type:{name:"(searchString: string, endPosition?: number | undefined) => boolean"}},normalize:{defaultValue:null,description:`Returns the String value result of normalizing the string into the normalization form
named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.
@param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
is "NFC"
@param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
is "NFC"`,name:"normalize",required:!0,type:{name:'{ (form: "NFC" | "NFD" | "NFKC" | "NFKD"): string; (form?: string | undefined): string; }'}},repeat:{defaultValue:null,description:`Returns a String value that is made from count copies appended together. If count is 0,
the empty string is returned.
@param count number of copies to append`,name:"repeat",required:!0,type:{name:"(count: number) => string"}},startsWith:{defaultValue:null,description:`Returns true if the sequence of elements of searchString converted to a String is the
same as the corresponding elements of this object (converted to a String) starting at
position. Otherwise returns false.`,name:"startsWith",required:!0,type:{name:"(searchString: string, position?: number | undefined) => boolean"}},anchor:{defaultValue:null,description:"Returns an `<a>` HTML anchor element and sets the name attribute to the text value\n@deprecated A legacy feature for browser compatibility\n@param name",name:"anchor",required:!0,type:{name:"(name: string) => string"}},big:{defaultValue:null,description:"Returns a `<big>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"big",required:!0,type:{name:"() => string"}},blink:{defaultValue:null,description:"Returns a `<blink>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"blink",required:!0,type:{name:"() => string"}},bold:{defaultValue:null,description:"Returns a `<b>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"bold",required:!0,type:{name:"() => string"}},fixed:{defaultValue:null,description:"Returns a `<tt>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"fixed",required:!0,type:{name:"() => string"}},fontcolor:{defaultValue:null,description:"Returns a `<font>` HTML element and sets the color attribute value\n@deprecated A legacy feature for browser compatibility",name:"fontcolor",required:!0,type:{name:"(color: string) => string"}},fontsize:{defaultValue:null,description:"Returns a `<font>` HTML element and sets the size attribute value\n@deprecated A legacy feature for browser compatibility\n@deprecated A legacy feature for browser compatibility",name:"fontsize",required:!0,type:{name:"{ (size: number): string; (size: string): string; }"}},italics:{defaultValue:null,description:"Returns an `<i>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"italics",required:!0,type:{name:"() => string"}},link:{defaultValue:null,description:"Returns an `<a>` HTML element and sets the href attribute value\n@deprecated A legacy feature for browser compatibility",name:"link",required:!0,type:{name:"(url: string) => string"}},small:{defaultValue:null,description:"Returns a `<small>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"small",required:!0,type:{name:"() => string"}},strike:{defaultValue:null,description:"Returns a `<strike>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"strike",required:!0,type:{name:"() => string"}},sub:{defaultValue:null,description:"Returns a `<sub>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"sub",required:!0,type:{name:"() => string"}},sup:{defaultValue:null,description:"Returns a `<sup>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"sup",required:!0,type:{name:"() => string"}},padStart:{defaultValue:null,description:`Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
The padding is applied from the start (left) of the current string.
@param maxLength The length of the resulting string once the current string has been padded.
If this parameter is smaller than the current string's length, the current string will be returned as it is.
@param fillString The string to pad the current string with.
If this string is too long, it will be truncated and the left-most part will be applied.
The default value for this parameter is " " (U+0020).`,name:"padStart",required:!0,type:{name:"(maxLength: number, fillString?: string | undefined) => string"}},padEnd:{defaultValue:null,description:`Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
The padding is applied from the end (right) of the current string.
@param maxLength The length of the resulting string once the current string has been padded.
If this parameter is smaller than the current string's length, the current string will be returned as it is.
@param fillString The string to pad the current string with.
If this string is too long, it will be truncated and the left-most part will be applied.
The default value for this parameter is " " (U+0020).`,name:"padEnd",required:!0,type:{name:"(maxLength: number, fillString?: string | undefined) => string"}},trimEnd:{defaultValue:null,description:"Removes the trailing white space and line terminator characters from a string.",name:"trimEnd",required:!0,type:{name:"() => string"}},trimStart:{defaultValue:null,description:"Removes the leading white space and line terminator characters from a string.",name:"trimStart",required:!0,type:{name:"() => string"}},trimLeft:{defaultValue:null,description:"Removes the leading white space and line terminator characters from a string.\n@deprecated A legacy feature for browser compatibility. Use `trimStart` instead",name:"trimLeft",required:!0,type:{name:"() => string"}},trimRight:{defaultValue:null,description:"Removes the trailing white space and line terminator characters from a string.\n@deprecated A legacy feature for browser compatibility. Use `trimEnd` instead",name:"trimRight",required:!0,type:{name:"() => string"}},matchAll:{defaultValue:null,description:`Matches a string with a regular expression, and returns an iterable of matches
containing the results of that search.
@param regexp A variable name or string literal containing the regular expression pattern and flags.`,name:"matchAll",required:!0,type:{name:"(regexp: RegExp) => IterableIterator<RegExpMatchArray>"}},"__@iterator@357":{defaultValue:null,description:"Iterator",name:"__@iterator@357",required:!0,type:{name:"() => IterableIterator<string>"}},at:{defaultValue:null,description:`Takes an integer value and returns the item at that index,
allowing for positive and negative integers.
Negative integers count back from the last item in the array.`,name:"at",required:!0,type:{name:"(index: number) => string | undefined"}}}}}catch{}try{k.displayName="hexToRGBA",k.__docgenInfo={description:"",displayName:"hexToRGBA",props:{toString:{defaultValue:null,description:"Returns a string representation of a string.",name:"toString",required:!1,type:{name:"() => string"}},charAt:{defaultValue:null,description:`Returns the character at the specified index.
@param pos The zero-based index of the desired character.`,name:"charAt",required:!0,type:{name:"(pos: number) => string"}},charCodeAt:{defaultValue:null,description:`Returns the Unicode value of the character at the specified location.
@param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.`,name:"charCodeAt",required:!0,type:{name:"(index: number) => number"}},concat:{defaultValue:null,description:`Returns a string that contains the concatenation of two or more strings.
@param strings The strings to append to the end of the string.`,name:"concat",required:!0,type:{name:"(...strings: string[]) => string"}},indexOf:{defaultValue:null,description:`Returns the position of the first occurrence of a substring.
@param searchString The substring to search for in the string
@param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.`,name:"indexOf",required:!0,type:{name:"(searchString: string, position?: number | undefined) => number"}},lastIndexOf:{defaultValue:null,description:`Returns the last occurrence of a substring in the string.
@param searchString The substring to search for.
@param position The index at which to begin searching. If omitted, the search begins at the end of the string.`,name:"lastIndexOf",required:!0,type:{name:"(searchString: string, position?: number | undefined) => number"}},localeCompare:{defaultValue:null,description:`Determines whether two strings are equivalent in the current locale.
Determines whether two strings are equivalent in the current or specified locale.
@param that String to compare to target string
@param that String to compare to target string
@param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details.
@param options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.`,name:"localeCompare",required:!0,type:{name:"{ (that: string): number; (that: string, locales?: string | string[] | undefined, options?: CollatorOptions | undefined): number; }"}},match:{defaultValue:null,description:`Matches a string with a regular expression, and returns an array containing the results of that search.
Matches a string or an object that supports being matched against, and returns an array
containing the results of that search, or null if no matches are found.
@param regexp A variable name or string literal containing the regular expression pattern and flags.
@param matcher An object that supports being matched against.`,name:"match",required:!0,type:{name:"{ (regexp: string | RegExp): RegExpMatchArray | null; (matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null; }"}},replace:{defaultValue:null,description:`Replaces text in a string, using a regular expression or search string.
Passes a string and {@linkcode replaceValue} to the \`[Symbol.replace]\` method on {@linkcode searchValue}. This method is expected to implement its own replacement algorithm.
Replaces text in a string, using an object that supports replacement within a string.
@param searchValue A string or regular expression to search for.
@param replaceValue A string containing the text to replace. When the {@linkcode searchValue } is a \`RegExp\`, all matches are replaced if the \`g\` flag is set (or only those matches at the beginning, if the \`y\` flag is also present). Otherwise, only the first match of {@linkcode searchValue } is replaced.
@param searchValue A string to search for.
@param replacer A function that returns the replacement text.
@param searchValue An object that supports searching for and replacing matches within a string.
@param replaceValue The replacement text.
@param searchValue A object can search for and replace matches within a string.
@param replacer A function that returns the replacement text.`,name:"replace",required:!0,type:{name:"{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { ...; }, replaceValue: string): string; (searchValue: { ...; }, replacer: (substring: string, ...args: any[]) => string): string; }"}},search:{defaultValue:null,description:`Finds the first substring match in a regular expression search.
@param regexp The regular expression pattern and applicable flags.
@param searcher An object which supports searching within a string.`,name:"search",required:!0,type:{name:"{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }"}},slice:{defaultValue:null,description:`Returns a section of a string.
@param start The index to the beginning of the specified portion of stringObj.
@param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.
If this value is not specified, the substring continues to the end of stringObj.`,name:"slice",required:!0,type:{name:"(start?: number | undefined, end?: number | undefined) => string"}},split:{defaultValue:null,description:`Split a string into substrings using the specified separator and return them as an array.
@param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
@param limit A value used to limit the number of elements returned in the array.
@param splitter An object that can split a string.
@param limit A value used to limit the number of elements returned in the array.`,name:"split",required:!0,type:{name:"{ (separator: string | RegExp, limit?: number | undefined): string[]; (splitter: { [Symbol.split](string: string, limit?: number | undefined): string[]; }, limit?: number | undefined): string[]; }"}},substring:{defaultValue:null,description:`Returns the substring at the specified location within a String object.
@param start The zero-based index number indicating the beginning of the substring.
@param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.
If end is omitted, the characters from start through the end of the original string are returned.`,name:"substring",required:!0,type:{name:"(start: number, end?: number | undefined) => string"}},toLowerCase:{defaultValue:null,description:"Converts all the alphabetic characters in a string to lowercase.",name:"toLowerCase",required:!0,type:{name:"() => string"}},toLocaleLowerCase:{defaultValue:null,description:"Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.",name:"toLocaleLowerCase",required:!0,type:{name:"(locales?: string | string[] | undefined) => string"}},toUpperCase:{defaultValue:null,description:"Converts all the alphabetic characters in a string to uppercase.",name:"toUpperCase",required:!0,type:{name:"() => string"}},toLocaleUpperCase:{defaultValue:null,description:"Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.",name:"toLocaleUpperCase",required:!0,type:{name:"(locales?: string | string[] | undefined) => string"}},trim:{defaultValue:null,description:"Removes the leading and trailing white space and line terminator characters from a string.",name:"trim",required:!0,type:{name:"() => string"}},length:{defaultValue:null,description:"Returns the length of a String object.",name:"length",required:!0,type:{name:"number"}},substr:{defaultValue:null,description:`Gets a substring beginning at the specified location and having the specified length.
@deprecated A legacy feature for browser compatibility
@param from The starting position of the desired substring. The index of the first character in the string is zero.
@param length The number of characters to include in the returned substring.`,name:"substr",required:!0,type:{name:"(from: number, length?: number | undefined) => string"}},valueOf:{defaultValue:null,description:"Returns the primitive value of the specified object.",name:"valueOf",required:!1,type:{name:"() => string"}},codePointAt:{defaultValue:null,description:`Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point
value of the UTF-16 encoded code point starting at the string element at position pos in
the String resulting from converting this object to a String.
If there is no element at that position, the result is undefined.
If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.`,name:"codePointAt",required:!0,type:{name:"(pos: number) => number | undefined"}},includes:{defaultValue:null,description:`Returns true if searchString appears as a substring of the result of converting this
object to a String, at one or more positions that are
greater than or equal to position; otherwise, returns false.
@param searchString search string
@param position If position is undefined, 0 is assumed, so as to search all of the String.`,name:"includes",required:!0,type:{name:"(searchString: string, position?: number | undefined) => boolean"}},endsWith:{defaultValue:null,description:`Returns true if the sequence of elements of searchString converted to a String is the
same as the corresponding elements of this object (converted to a String) starting at
endPosition – length(this). Otherwise returns false.`,name:"endsWith",required:!0,type:{name:"(searchString: string, endPosition?: number | undefined) => boolean"}},normalize:{defaultValue:null,description:`Returns the String value result of normalizing the string into the normalization form
named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.
@param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
is "NFC"
@param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
is "NFC"`,name:"normalize",required:!0,type:{name:'{ (form: "NFC" | "NFD" | "NFKC" | "NFKD"): string; (form?: string | undefined): string; }'}},repeat:{defaultValue:null,description:`Returns a String value that is made from count copies appended together. If count is 0,
the empty string is returned.
@param count number of copies to append`,name:"repeat",required:!0,type:{name:"(count: number) => string"}},startsWith:{defaultValue:null,description:`Returns true if the sequence of elements of searchString converted to a String is the
same as the corresponding elements of this object (converted to a String) starting at
position. Otherwise returns false.`,name:"startsWith",required:!0,type:{name:"(searchString: string, position?: number | undefined) => boolean"}},anchor:{defaultValue:null,description:"Returns an `<a>` HTML anchor element and sets the name attribute to the text value\n@deprecated A legacy feature for browser compatibility\n@param name",name:"anchor",required:!0,type:{name:"(name: string) => string"}},big:{defaultValue:null,description:"Returns a `<big>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"big",required:!0,type:{name:"() => string"}},blink:{defaultValue:null,description:"Returns a `<blink>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"blink",required:!0,type:{name:"() => string"}},bold:{defaultValue:null,description:"Returns a `<b>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"bold",required:!0,type:{name:"() => string"}},fixed:{defaultValue:null,description:"Returns a `<tt>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"fixed",required:!0,type:{name:"() => string"}},fontcolor:{defaultValue:null,description:"Returns a `<font>` HTML element and sets the color attribute value\n@deprecated A legacy feature for browser compatibility",name:"fontcolor",required:!0,type:{name:"(color: string) => string"}},fontsize:{defaultValue:null,description:"Returns a `<font>` HTML element and sets the size attribute value\n@deprecated A legacy feature for browser compatibility\n@deprecated A legacy feature for browser compatibility",name:"fontsize",required:!0,type:{name:"{ (size: number): string; (size: string): string; }"}},italics:{defaultValue:null,description:"Returns an `<i>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"italics",required:!0,type:{name:"() => string"}},link:{defaultValue:null,description:"Returns an `<a>` HTML element and sets the href attribute value\n@deprecated A legacy feature for browser compatibility",name:"link",required:!0,type:{name:"(url: string) => string"}},small:{defaultValue:null,description:"Returns a `<small>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"small",required:!0,type:{name:"() => string"}},strike:{defaultValue:null,description:"Returns a `<strike>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"strike",required:!0,type:{name:"() => string"}},sub:{defaultValue:null,description:"Returns a `<sub>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"sub",required:!0,type:{name:"() => string"}},sup:{defaultValue:null,description:"Returns a `<sup>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"sup",required:!0,type:{name:"() => string"}},padStart:{defaultValue:null,description:`Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
The padding is applied from the start (left) of the current string.
@param maxLength The length of the resulting string once the current string has been padded.
If this parameter is smaller than the current string's length, the current string will be returned as it is.
@param fillString The string to pad the current string with.
If this string is too long, it will be truncated and the left-most part will be applied.
The default value for this parameter is " " (U+0020).`,name:"padStart",required:!0,type:{name:"(maxLength: number, fillString?: string | undefined) => string"}},padEnd:{defaultValue:null,description:`Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
The padding is applied from the end (right) of the current string.
@param maxLength The length of the resulting string once the current string has been padded.
If this parameter is smaller than the current string's length, the current string will be returned as it is.
@param fillString The string to pad the current string with.
If this string is too long, it will be truncated and the left-most part will be applied.
The default value for this parameter is " " (U+0020).`,name:"padEnd",required:!0,type:{name:"(maxLength: number, fillString?: string | undefined) => string"}},trimEnd:{defaultValue:null,description:"Removes the trailing white space and line terminator characters from a string.",name:"trimEnd",required:!0,type:{name:"() => string"}},trimStart:{defaultValue:null,description:"Removes the leading white space and line terminator characters from a string.",name:"trimStart",required:!0,type:{name:"() => string"}},trimLeft:{defaultValue:null,description:"Removes the leading white space and line terminator characters from a string.\n@deprecated A legacy feature for browser compatibility. Use `trimStart` instead",name:"trimLeft",required:!0,type:{name:"() => string"}},trimRight:{defaultValue:null,description:"Removes the trailing white space and line terminator characters from a string.\n@deprecated A legacy feature for browser compatibility. Use `trimEnd` instead",name:"trimRight",required:!0,type:{name:"() => string"}},matchAll:{defaultValue:null,description:`Matches a string with a regular expression, and returns an iterable of matches
containing the results of that search.
@param regexp A variable name or string literal containing the regular expression pattern and flags.`,name:"matchAll",required:!0,type:{name:"(regexp: RegExp) => IterableIterator<RegExpMatchArray>"}},"__@iterator@357":{defaultValue:null,description:"Iterator",name:"__@iterator@357",required:!0,type:{name:"() => IterableIterator<string>"}},at:{defaultValue:null,description:`Takes an integer value and returns the item at that index,
allowing for positive and negative integers.
Negative integers count back from the last item in the array.`,name:"at",required:!0,type:{name:"(index: number) => string | undefined"}}}}}catch{}try{P.displayName="RGBToHex",P.__docgenInfo={description:"",displayName:"RGBToHex",props:{toString:{defaultValue:null,description:"Returns a string representation of a string.",name:"toString",required:!1,type:{name:"() => string"}},charAt:{defaultValue:null,description:`Returns the character at the specified index.
@param pos The zero-based index of the desired character.`,name:"charAt",required:!0,type:{name:"(pos: number) => string"}},charCodeAt:{defaultValue:null,description:`Returns the Unicode value of the character at the specified location.
@param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.`,name:"charCodeAt",required:!0,type:{name:"(index: number) => number"}},concat:{defaultValue:null,description:`Returns a string that contains the concatenation of two or more strings.
@param strings The strings to append to the end of the string.`,name:"concat",required:!0,type:{name:"(...strings: string[]) => string"}},indexOf:{defaultValue:null,description:`Returns the position of the first occurrence of a substring.
@param searchString The substring to search for in the string
@param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.`,name:"indexOf",required:!0,type:{name:"(searchString: string, position?: number | undefined) => number"}},lastIndexOf:{defaultValue:null,description:`Returns the last occurrence of a substring in the string.
@param searchString The substring to search for.
@param position The index at which to begin searching. If omitted, the search begins at the end of the string.`,name:"lastIndexOf",required:!0,type:{name:"(searchString: string, position?: number | undefined) => number"}},localeCompare:{defaultValue:null,description:`Determines whether two strings are equivalent in the current locale.
Determines whether two strings are equivalent in the current or specified locale.
@param that String to compare to target string
@param that String to compare to target string
@param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details.
@param options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.`,name:"localeCompare",required:!0,type:{name:"{ (that: string): number; (that: string, locales?: string | string[] | undefined, options?: CollatorOptions | undefined): number; }"}},match:{defaultValue:null,description:`Matches a string with a regular expression, and returns an array containing the results of that search.
Matches a string or an object that supports being matched against, and returns an array
containing the results of that search, or null if no matches are found.
@param regexp A variable name or string literal containing the regular expression pattern and flags.
@param matcher An object that supports being matched against.`,name:"match",required:!0,type:{name:"{ (regexp: string | RegExp): RegExpMatchArray | null; (matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null; }"}},replace:{defaultValue:null,description:`Replaces text in a string, using a regular expression or search string.
Passes a string and {@linkcode replaceValue} to the \`[Symbol.replace]\` method on {@linkcode searchValue}. This method is expected to implement its own replacement algorithm.
Replaces text in a string, using an object that supports replacement within a string.
@param searchValue A string or regular expression to search for.
@param replaceValue A string containing the text to replace. When the {@linkcode searchValue } is a \`RegExp\`, all matches are replaced if the \`g\` flag is set (or only those matches at the beginning, if the \`y\` flag is also present). Otherwise, only the first match of {@linkcode searchValue } is replaced.
@param searchValue A string to search for.
@param replacer A function that returns the replacement text.
@param searchValue An object that supports searching for and replacing matches within a string.
@param replaceValue The replacement text.
@param searchValue A object can search for and replace matches within a string.
@param replacer A function that returns the replacement text.`,name:"replace",required:!0,type:{name:"{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { ...; }, replaceValue: string): string; (searchValue: { ...; }, replacer: (substring: string, ...args: any[]) => string): string; }"}},search:{defaultValue:null,description:`Finds the first substring match in a regular expression search.
@param regexp The regular expression pattern and applicable flags.
@param searcher An object which supports searching within a string.`,name:"search",required:!0,type:{name:"{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }"}},slice:{defaultValue:null,description:`Returns a section of a string.
@param start The index to the beginning of the specified portion of stringObj.
@param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.
If this value is not specified, the substring continues to the end of stringObj.`,name:"slice",required:!0,type:{name:"(start?: number | undefined, end?: number | undefined) => string"}},split:{defaultValue:null,description:`Split a string into substrings using the specified separator and return them as an array.
@param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
@param limit A value used to limit the number of elements returned in the array.
@param splitter An object that can split a string.
@param limit A value used to limit the number of elements returned in the array.`,name:"split",required:!0,type:{name:"{ (separator: string | RegExp, limit?: number | undefined): string[]; (splitter: { [Symbol.split](string: string, limit?: number | undefined): string[]; }, limit?: number | undefined): string[]; }"}},substring:{defaultValue:null,description:`Returns the substring at the specified location within a String object.
@param start The zero-based index number indicating the beginning of the substring.
@param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.
If end is omitted, the characters from start through the end of the original string are returned.`,name:"substring",required:!0,type:{name:"(start: number, end?: number | undefined) => string"}},toLowerCase:{defaultValue:null,description:"Converts all the alphabetic characters in a string to lowercase.",name:"toLowerCase",required:!0,type:{name:"() => string"}},toLocaleLowerCase:{defaultValue:null,description:"Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.",name:"toLocaleLowerCase",required:!0,type:{name:"(locales?: string | string[] | undefined) => string"}},toUpperCase:{defaultValue:null,description:"Converts all the alphabetic characters in a string to uppercase.",name:"toUpperCase",required:!0,type:{name:"() => string"}},toLocaleUpperCase:{defaultValue:null,description:"Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.",name:"toLocaleUpperCase",required:!0,type:{name:"(locales?: string | string[] | undefined) => string"}},trim:{defaultValue:null,description:"Removes the leading and trailing white space and line terminator characters from a string.",name:"trim",required:!0,type:{name:"() => string"}},length:{defaultValue:null,description:"Returns the length of a String object.",name:"length",required:!0,type:{name:"number"}},substr:{defaultValue:null,description:`Gets a substring beginning at the specified location and having the specified length.
@deprecated A legacy feature for browser compatibility
@param from The starting position of the desired substring. The index of the first character in the string is zero.
@param length The number of characters to include in the returned substring.`,name:"substr",required:!0,type:{name:"(from: number, length?: number | undefined) => string"}},valueOf:{defaultValue:null,description:"Returns the primitive value of the specified object.",name:"valueOf",required:!1,type:{name:"() => string"}},codePointAt:{defaultValue:null,description:`Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point
value of the UTF-16 encoded code point starting at the string element at position pos in
the String resulting from converting this object to a String.
If there is no element at that position, the result is undefined.
If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.`,name:"codePointAt",required:!0,type:{name:"(pos: number) => number | undefined"}},includes:{defaultValue:null,description:`Returns true if searchString appears as a substring of the result of converting this
object to a String, at one or more positions that are
greater than or equal to position; otherwise, returns false.
@param searchString search string
@param position If position is undefined, 0 is assumed, so as to search all of the String.`,name:"includes",required:!0,type:{name:"(searchString: string, position?: number | undefined) => boolean"}},endsWith:{defaultValue:null,description:`Returns true if the sequence of elements of searchString converted to a String is the
same as the corresponding elements of this object (converted to a String) starting at
endPosition – length(this). Otherwise returns false.`,name:"endsWith",required:!0,type:{name:"(searchString: string, endPosition?: number | undefined) => boolean"}},normalize:{defaultValue:null,description:`Returns the String value result of normalizing the string into the normalization form
named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.
@param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
is "NFC"
@param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
is "NFC"`,name:"normalize",required:!0,type:{name:'{ (form: "NFC" | "NFD" | "NFKC" | "NFKD"): string; (form?: string | undefined): string; }'}},repeat:{defaultValue:null,description:`Returns a String value that is made from count copies appended together. If count is 0,
the empty string is returned.
@param count number of copies to append`,name:"repeat",required:!0,type:{name:"(count: number) => string"}},startsWith:{defaultValue:null,description:`Returns true if the sequence of elements of searchString converted to a String is the
same as the corresponding elements of this object (converted to a String) starting at
position. Otherwise returns false.`,name:"startsWith",required:!0,type:{name:"(searchString: string, position?: number | undefined) => boolean"}},anchor:{defaultValue:null,description:"Returns an `<a>` HTML anchor element and sets the name attribute to the text value\n@deprecated A legacy feature for browser compatibility\n@param name",name:"anchor",required:!0,type:{name:"(name: string) => string"}},big:{defaultValue:null,description:"Returns a `<big>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"big",required:!0,type:{name:"() => string"}},blink:{defaultValue:null,description:"Returns a `<blink>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"blink",required:!0,type:{name:"() => string"}},bold:{defaultValue:null,description:"Returns a `<b>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"bold",required:!0,type:{name:"() => string"}},fixed:{defaultValue:null,description:"Returns a `<tt>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"fixed",required:!0,type:{name:"() => string"}},fontcolor:{defaultValue:null,description:"Returns a `<font>` HTML element and sets the color attribute value\n@deprecated A legacy feature for browser compatibility",name:"fontcolor",required:!0,type:{name:"(color: string) => string"}},fontsize:{defaultValue:null,description:"Returns a `<font>` HTML element and sets the size attribute value\n@deprecated A legacy feature for browser compatibility\n@deprecated A legacy feature for browser compatibility",name:"fontsize",required:!0,type:{name:"{ (size: number): string; (size: string): string; }"}},italics:{defaultValue:null,description:"Returns an `<i>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"italics",required:!0,type:{name:"() => string"}},link:{defaultValue:null,description:"Returns an `<a>` HTML element and sets the href attribute value\n@deprecated A legacy feature for browser compatibility",name:"link",required:!0,type:{name:"(url: string) => string"}},small:{defaultValue:null,description:"Returns a `<small>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"small",required:!0,type:{name:"() => string"}},strike:{defaultValue:null,description:"Returns a `<strike>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"strike",required:!0,type:{name:"() => string"}},sub:{defaultValue:null,description:"Returns a `<sub>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"sub",required:!0,type:{name:"() => string"}},sup:{defaultValue:null,description:"Returns a `<sup>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"sup",required:!0,type:{name:"() => string"}},padStart:{defaultValue:null,description:`Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
The padding is applied from the start (left) of the current string.
@param maxLength The length of the resulting string once the current string has been padded.
If this parameter is smaller than the current string's length, the current string will be returned as it is.
@param fillString The string to pad the current string with.
If this string is too long, it will be truncated and the left-most part will be applied.
The default value for this parameter is " " (U+0020).`,name:"padStart",required:!0,type:{name:"(maxLength: number, fillString?: string | undefined) => string"}},padEnd:{defaultValue:null,description:`Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
The padding is applied from the end (right) of the current string.
@param maxLength The length of the resulting string once the current string has been padded.
If this parameter is smaller than the current string's length, the current string will be returned as it is.
@param fillString The string to pad the current string with.
If this string is too long, it will be truncated and the left-most part will be applied.
The default value for this parameter is " " (U+0020).`,name:"padEnd",required:!0,type:{name:"(maxLength: number, fillString?: string | undefined) => string"}},trimEnd:{defaultValue:null,description:"Removes the trailing white space and line terminator characters from a string.",name:"trimEnd",required:!0,type:{name:"() => string"}},trimStart:{defaultValue:null,description:"Removes the leading white space and line terminator characters from a string.",name:"trimStart",required:!0,type:{name:"() => string"}},trimLeft:{defaultValue:null,description:"Removes the leading white space and line terminator characters from a string.\n@deprecated A legacy feature for browser compatibility. Use `trimStart` instead",name:"trimLeft",required:!0,type:{name:"() => string"}},trimRight:{defaultValue:null,description:"Removes the trailing white space and line terminator characters from a string.\n@deprecated A legacy feature for browser compatibility. Use `trimEnd` instead",name:"trimRight",required:!0,type:{name:"() => string"}},matchAll:{defaultValue:null,description:`Matches a string with a regular expression, and returns an iterable of matches
containing the results of that search.
@param regexp A variable name or string literal containing the regular expression pattern and flags.`,name:"matchAll",required:!0,type:{name:"(regexp: RegExp) => IterableIterator<RegExpMatchArray>"}},"__@iterator@357":{defaultValue:null,description:"Iterator",name:"__@iterator@357",required:!0,type:{name:"() => IterableIterator<string>"}},at:{defaultValue:null,description:`Takes an integer value and returns the item at that index,
allowing for positive and negative integers.
Negative integers count back from the last item in the array.`,name:"at",required:!0,type:{name:"(index: number) => string | undefined"}}}}}catch{}try{_.displayName="getTextColor",_.__docgenInfo={description:"",displayName:"getTextColor",props:{toString:{defaultValue:null,description:"Returns a string representation of a string.",name:"toString",required:!1,type:{name:"() => string"}},charAt:{defaultValue:null,description:`Returns the character at the specified index.
@param pos The zero-based index of the desired character.`,name:"charAt",required:!0,type:{name:"(pos: number) => string"}},charCodeAt:{defaultValue:null,description:`Returns the Unicode value of the character at the specified location.
@param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.`,name:"charCodeAt",required:!0,type:{name:"(index: number) => number"}},concat:{defaultValue:null,description:`Returns a string that contains the concatenation of two or more strings.
@param strings The strings to append to the end of the string.`,name:"concat",required:!0,type:{name:"(...strings: string[]) => string"}},indexOf:{defaultValue:null,description:`Returns the position of the first occurrence of a substring.
@param searchString The substring to search for in the string
@param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.`,name:"indexOf",required:!0,type:{name:"(searchString: string, position?: number | undefined) => number"}},lastIndexOf:{defaultValue:null,description:`Returns the last occurrence of a substring in the string.
@param searchString The substring to search for.
@param position The index at which to begin searching. If omitted, the search begins at the end of the string.`,name:"lastIndexOf",required:!0,type:{name:"(searchString: string, position?: number | undefined) => number"}},localeCompare:{defaultValue:null,description:`Determines whether two strings are equivalent in the current locale.
Determines whether two strings are equivalent in the current or specified locale.
@param that String to compare to target string
@param that String to compare to target string
@param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details.
@param options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.`,name:"localeCompare",required:!0,type:{name:"{ (that: string): number; (that: string, locales?: string | string[] | undefined, options?: CollatorOptions | undefined): number; }"}},match:{defaultValue:null,description:`Matches a string with a regular expression, and returns an array containing the results of that search.
Matches a string or an object that supports being matched against, and returns an array
containing the results of that search, or null if no matches are found.
@param regexp A variable name or string literal containing the regular expression pattern and flags.
@param matcher An object that supports being matched against.`,name:"match",required:!0,type:{name:"{ (regexp: string | RegExp): RegExpMatchArray | null; (matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null; }"}},replace:{defaultValue:null,description:`Replaces text in a string, using a regular expression or search string.
Passes a string and {@linkcode replaceValue} to the \`[Symbol.replace]\` method on {@linkcode searchValue}. This method is expected to implement its own replacement algorithm.
Replaces text in a string, using an object that supports replacement within a string.
@param searchValue A string or regular expression to search for.
@param replaceValue A string containing the text to replace. When the {@linkcode searchValue } is a \`RegExp\`, all matches are replaced if the \`g\` flag is set (or only those matches at the beginning, if the \`y\` flag is also present). Otherwise, only the first match of {@linkcode searchValue } is replaced.
@param searchValue A string to search for.
@param replacer A function that returns the replacement text.
@param searchValue An object that supports searching for and replacing matches within a string.
@param replaceValue The replacement text.
@param searchValue A object can search for and replace matches within a string.
@param replacer A function that returns the replacement text.`,name:"replace",required:!0,type:{name:"{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { ...; }, replaceValue: string): string; (searchValue: { ...; }, replacer: (substring: string, ...args: any[]) => string): string; }"}},search:{defaultValue:null,description:`Finds the first substring match in a regular expression search.
@param regexp The regular expression pattern and applicable flags.
@param searcher An object which supports searching within a string.`,name:"search",required:!0,type:{name:"{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }"}},slice:{defaultValue:null,description:`Returns a section of a string.
@param start The index to the beginning of the specified portion of stringObj.
@param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.
If this value is not specified, the substring continues to the end of stringObj.`,name:"slice",required:!0,type:{name:"(start?: number | undefined, end?: number | undefined) => string"}},split:{defaultValue:null,description:`Split a string into substrings using the specified separator and return them as an array.
@param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
@param limit A value used to limit the number of elements returned in the array.
@param splitter An object that can split a string.
@param limit A value used to limit the number of elements returned in the array.`,name:"split",required:!0,type:{name:"{ (separator: string | RegExp, limit?: number | undefined): string[]; (splitter: { [Symbol.split](string: string, limit?: number | undefined): string[]; }, limit?: number | undefined): string[]; }"}},substring:{defaultValue:null,description:`Returns the substring at the specified location within a String object.
@param start The zero-based index number indicating the beginning of the substring.
@param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.
If end is omitted, the characters from start through the end of the original string are returned.`,name:"substring",required:!0,type:{name:"(start: number, end?: number | undefined) => string"}},toLowerCase:{defaultValue:null,description:"Converts all the alphabetic characters in a string to lowercase.",name:"toLowerCase",required:!0,type:{name:"() => string"}},toLocaleLowerCase:{defaultValue:null,description:"Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.",name:"toLocaleLowerCase",required:!0,type:{name:"(locales?: string | string[] | undefined) => string"}},toUpperCase:{defaultValue:null,description:"Converts all the alphabetic characters in a string to uppercase.",name:"toUpperCase",required:!0,type:{name:"() => string"}},toLocaleUpperCase:{defaultValue:null,description:"Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.",name:"toLocaleUpperCase",required:!0,type:{name:"(locales?: string | string[] | undefined) => string"}},trim:{defaultValue:null,description:"Removes the leading and trailing white space and line terminator characters from a string.",name:"trim",required:!0,type:{name:"() => string"}},length:{defaultValue:null,description:"Returns the length of a String object.",name:"length",required:!0,type:{name:"number"}},substr:{defaultValue:null,description:`Gets a substring beginning at the specified location and having the specified length.
@deprecated A legacy feature for browser compatibility
@param from The starting position of the desired substring. The index of the first character in the string is zero.
@param length The number of characters to include in the returned substring.`,name:"substr",required:!0,type:{name:"(from: number, length?: number | undefined) => string"}},valueOf:{defaultValue:null,description:"Returns the primitive value of the specified object.",name:"valueOf",required:!1,type:{name:"() => string"}},codePointAt:{defaultValue:null,description:`Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point
value of the UTF-16 encoded code point starting at the string element at position pos in
the String resulting from converting this object to a String.
If there is no element at that position, the result is undefined.
If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.`,name:"codePointAt",required:!0,type:{name:"(pos: number) => number | undefined"}},includes:{defaultValue:null,description:`Returns true if searchString appears as a substring of the result of converting this
object to a String, at one or more positions that are
greater than or equal to position; otherwise, returns false.
@param searchString search string
@param position If position is undefined, 0 is assumed, so as to search all of the String.`,name:"includes",required:!0,type:{name:"(searchString: string, position?: number | undefined) => boolean"}},endsWith:{defaultValue:null,description:`Returns true if the sequence of elements of searchString converted to a String is the
same as the corresponding elements of this object (converted to a String) starting at
endPosition – length(this). Otherwise returns false.`,name:"endsWith",required:!0,type:{name:"(searchString: string, endPosition?: number | undefined) => boolean"}},normalize:{defaultValue:null,description:`Returns the String value result of normalizing the string into the normalization form
named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.
@param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
is "NFC"
@param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
is "NFC"`,name:"normalize",required:!0,type:{name:'{ (form: "NFC" | "NFD" | "NFKC" | "NFKD"): string; (form?: string | undefined): string; }'}},repeat:{defaultValue:null,description:`Returns a String value that is made from count copies appended together. If count is 0,
the empty string is returned.
@param count number of copies to append`,name:"repeat",required:!0,type:{name:"(count: number) => string"}},startsWith:{defaultValue:null,description:`Returns true if the sequence of elements of searchString converted to a String is the
same as the corresponding elements of this object (converted to a String) starting at
position. Otherwise returns false.`,name:"startsWith",required:!0,type:{name:"(searchString: string, position?: number | undefined) => boolean"}},anchor:{defaultValue:null,description:"Returns an `<a>` HTML anchor element and sets the name attribute to the text value\n@deprecated A legacy feature for browser compatibility\n@param name",name:"anchor",required:!0,type:{name:"(name: string) => string"}},big:{defaultValue:null,description:"Returns a `<big>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"big",required:!0,type:{name:"() => string"}},blink:{defaultValue:null,description:"Returns a `<blink>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"blink",required:!0,type:{name:"() => string"}},bold:{defaultValue:null,description:"Returns a `<b>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"bold",required:!0,type:{name:"() => string"}},fixed:{defaultValue:null,description:"Returns a `<tt>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"fixed",required:!0,type:{name:"() => string"}},fontcolor:{defaultValue:null,description:"Returns a `<font>` HTML element and sets the color attribute value\n@deprecated A legacy feature for browser compatibility",name:"fontcolor",required:!0,type:{name:"(color: string) => string"}},fontsize:{defaultValue:null,description:"Returns a `<font>` HTML element and sets the size attribute value\n@deprecated A legacy feature for browser compatibility\n@deprecated A legacy feature for browser compatibility",name:"fontsize",required:!0,type:{name:"{ (size: number): string; (size: string): string; }"}},italics:{defaultValue:null,description:"Returns an `<i>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"italics",required:!0,type:{name:"() => string"}},link:{defaultValue:null,description:"Returns an `<a>` HTML element and sets the href attribute value\n@deprecated A legacy feature for browser compatibility",name:"link",required:!0,type:{name:"(url: string) => string"}},small:{defaultValue:null,description:"Returns a `<small>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"small",required:!0,type:{name:"() => string"}},strike:{defaultValue:null,description:"Returns a `<strike>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"strike",required:!0,type:{name:"() => string"}},sub:{defaultValue:null,description:"Returns a `<sub>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"sub",required:!0,type:{name:"() => string"}},sup:{defaultValue:null,description:"Returns a `<sup>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"sup",required:!0,type:{name:"() => string"}},padStart:{defaultValue:null,description:`Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
The padding is applied from the start (left) of the current string.
@param maxLength The length of the resulting string once the current string has been padded.
If this parameter is smaller than the current string's length, the current string will be returned as it is.
@param fillString The string to pad the current string with.
If this string is too long, it will be truncated and the left-most part will be applied.
The default value for this parameter is " " (U+0020).`,name:"padStart",required:!0,type:{name:"(maxLength: number, fillString?: string | undefined) => string"}},padEnd:{defaultValue:null,description:`Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
The padding is applied from the end (right) of the current string.
@param maxLength The length of the resulting string once the current string has been padded.
If this parameter is smaller than the current string's length, the current string will be returned as it is.
@param fillString The string to pad the current string with.
If this string is too long, it will be truncated and the left-most part will be applied.
The default value for this parameter is " " (U+0020).`,name:"padEnd",required:!0,type:{name:"(maxLength: number, fillString?: string | undefined) => string"}},trimEnd:{defaultValue:null,description:"Removes the trailing white space and line terminator characters from a string.",name:"trimEnd",required:!0,type:{name:"() => string"}},trimStart:{defaultValue:null,description:"Removes the leading white space and line terminator characters from a string.",name:"trimStart",required:!0,type:{name:"() => string"}},trimLeft:{defaultValue:null,description:"Removes the leading white space and line terminator characters from a string.\n@deprecated A legacy feature for browser compatibility. Use `trimStart` instead",name:"trimLeft",required:!0,type:{name:"() => string"}},trimRight:{defaultValue:null,description:"Removes the trailing white space and line terminator characters from a string.\n@deprecated A legacy feature for browser compatibility. Use `trimEnd` instead",name:"trimRight",required:!0,type:{name:"() => string"}},matchAll:{defaultValue:null,description:`Matches a string with a regular expression, and returns an iterable of matches
containing the results of that search.
@param regexp A variable name or string literal containing the regular expression pattern and flags.`,name:"matchAll",required:!0,type:{name:"(regexp: RegExp) => IterableIterator<RegExpMatchArray>"}},"__@iterator@357":{defaultValue:null,description:"Iterator",name:"__@iterator@357",required:!0,type:{name:"() => IterableIterator<string>"}},at:{defaultValue:null,description:`Takes an integer value and returns the item at that index,
allowing for positive and negative integers.
Negative integers count back from the last item in the array.`,name:"at",required:!0,type:{name:"(index: number) => string | undefined"}}}}}catch{}function le(e){return e&&e.current?e.current.querySelectorAll('a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'):[]}function A(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}function ye(e,t){return new RegExp(`(?:^|[\\s-(])${A(t.toLowerCase())}`).test(e.toLowerCase())}try{A.displayName="escapeRegexCharacters",A.__docgenInfo={description:"",displayName:"escapeRegexCharacters",props:{toString:{defaultValue:null,description:"Returns a string representation of a string.",name:"toString",required:!1,type:{name:"() => string"}},charAt:{defaultValue:null,description:`Returns the character at the specified index.
@param pos The zero-based index of the desired character.`,name:"charAt",required:!0,type:{name:"(pos: number) => string"}},charCodeAt:{defaultValue:null,description:`Returns the Unicode value of the character at the specified location.
@param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.`,name:"charCodeAt",required:!0,type:{name:"(index: number) => number"}},concat:{defaultValue:null,description:`Returns a string that contains the concatenation of two or more strings.
@param strings The strings to append to the end of the string.`,name:"concat",required:!0,type:{name:"(...strings: string[]) => string"}},indexOf:{defaultValue:null,description:`Returns the position of the first occurrence of a substring.
@param searchString The substring to search for in the string
@param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.`,name:"indexOf",required:!0,type:{name:"(searchString: string, position?: number | undefined) => number"}},lastIndexOf:{defaultValue:null,description:`Returns the last occurrence of a substring in the string.
@param searchString The substring to search for.
@param position The index at which to begin searching. If omitted, the search begins at the end of the string.`,name:"lastIndexOf",required:!0,type:{name:"(searchString: string, position?: number | undefined) => number"}},localeCompare:{defaultValue:null,description:`Determines whether two strings are equivalent in the current locale.
Determines whether two strings are equivalent in the current or specified locale.
@param that String to compare to target string
@param that String to compare to target string
@param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details.
@param options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.`,name:"localeCompare",required:!0,type:{name:"{ (that: string): number; (that: string, locales?: string | string[] | undefined, options?: CollatorOptions | undefined): number; }"}},match:{defaultValue:null,description:`Matches a string with a regular expression, and returns an array containing the results of that search.
Matches a string or an object that supports being matched against, and returns an array
containing the results of that search, or null if no matches are found.
@param regexp A variable name or string literal containing the regular expression pattern and flags.
@param matcher An object that supports being matched against.`,name:"match",required:!0,type:{name:"{ (regexp: string | RegExp): RegExpMatchArray | null; (matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null; }"}},replace:{defaultValue:null,description:`Replaces text in a string, using a regular expression or search string.
Passes a string and {@linkcode replaceValue} to the \`[Symbol.replace]\` method on {@linkcode searchValue}. This method is expected to implement its own replacement algorithm.
Replaces text in a string, using an object that supports replacement within a string.
@param searchValue A string or regular expression to search for.
@param replaceValue A string containing the text to replace. When the {@linkcode searchValue } is a \`RegExp\`, all matches are replaced if the \`g\` flag is set (or only those matches at the beginning, if the \`y\` flag is also present). Otherwise, only the first match of {@linkcode searchValue } is replaced.
@param searchValue A string to search for.
@param replacer A function that returns the replacement text.
@param searchValue An object that supports searching for and replacing matches within a string.
@param replaceValue The replacement text.
@param searchValue A object can search for and replace matches within a string.
@param replacer A function that returns the replacement text.`,name:"replace",required:!0,type:{name:"{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { ...; }, replaceValue: string): string; (searchValue: { ...; }, replacer: (substring: string, ...args: any[]) => string): string; }"}},search:{defaultValue:null,description:`Finds the first substring match in a regular expression search.
@param regexp The regular expression pattern and applicable flags.
@param searcher An object which supports searching within a string.`,name:"search",required:!0,type:{name:"{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }"}},slice:{defaultValue:null,description:`Returns a section of a string.
@param start The index to the beginning of the specified portion of stringObj.
@param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.
If this value is not specified, the substring continues to the end of stringObj.`,name:"slice",required:!0,type:{name:"(start?: number | undefined, end?: number | undefined) => string"}},split:{defaultValue:null,description:`Split a string into substrings using the specified separator and return them as an array.
@param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
@param limit A value used to limit the number of elements returned in the array.
@param splitter An object that can split a string.
@param limit A value used to limit the number of elements returned in the array.`,name:"split",required:!0,type:{name:"{ (separator: string | RegExp, limit?: number | undefined): string[]; (splitter: { [Symbol.split](string: string, limit?: number | undefined): string[]; }, limit?: number | undefined): string[]; }"}},substring:{defaultValue:null,description:`Returns the substring at the specified location within a String object.
@param start The zero-based index number indicating the beginning of the substring.
@param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.
If end is omitted, the characters from start through the end of the original string are returned.`,name:"substring",required:!0,type:{name:"(start: number, end?: number | undefined) => string"}},toLowerCase:{defaultValue:null,description:"Converts all the alphabetic characters in a string to lowercase.",name:"toLowerCase",required:!0,type:{name:"() => string"}},toLocaleLowerCase:{defaultValue:null,description:"Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.",name:"toLocaleLowerCase",required:!0,type:{name:"(locales?: string | string[] | undefined) => string"}},toUpperCase:{defaultValue:null,description:"Converts all the alphabetic characters in a string to uppercase.",name:"toUpperCase",required:!0,type:{name:"() => string"}},toLocaleUpperCase:{defaultValue:null,description:"Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.",name:"toLocaleUpperCase",required:!0,type:{name:"(locales?: string | string[] | undefined) => string"}},trim:{defaultValue:null,description:"Removes the leading and trailing white space and line terminator characters from a string.",name:"trim",required:!0,type:{name:"() => string"}},length:{defaultValue:null,description:"Returns the length of a String object.",name:"length",required:!0,type:{name:"number"}},substr:{defaultValue:null,description:`Gets a substring beginning at the specified location and having the specified length.
@deprecated A legacy feature for browser compatibility
@param from The starting position of the desired substring. The index of the first character in the string is zero.
@param length The number of characters to include in the returned substring.`,name:"substr",required:!0,type:{name:"(from: number, length?: number | undefined) => string"}},valueOf:{defaultValue:null,description:"Returns the primitive value of the specified object.",name:"valueOf",required:!1,type:{name:"() => string"}},codePointAt:{defaultValue:null,description:`Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point
value of the UTF-16 encoded code point starting at the string element at position pos in
the String resulting from converting this object to a String.
If there is no element at that position, the result is undefined.
If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.`,name:"codePointAt",required:!0,type:{name:"(pos: number) => number | undefined"}},includes:{defaultValue:null,description:`Returns true if searchString appears as a substring of the result of converting this
object to a String, at one or more positions that are
greater than or equal to position; otherwise, returns false.
@param searchString search string
@param position If position is undefined, 0 is assumed, so as to search all of the String.`,name:"includes",required:!0,type:{name:"(searchString: string, position?: number | undefined) => boolean"}},endsWith:{defaultValue:null,description:`Returns true if the sequence of elements of searchString converted to a String is the
same as the corresponding elements of this object (converted to a String) starting at
endPosition – length(this). Otherwise returns false.`,name:"endsWith",required:!0,type:{name:"(searchString: string, endPosition?: number | undefined) => boolean"}},normalize:{defaultValue:null,description:`Returns the String value result of normalizing the string into the normalization form
named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.
@param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
is "NFC"
@param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
is "NFC"`,name:"normalize",required:!0,type:{name:'{ (form: "NFC" | "NFD" | "NFKC" | "NFKD"): string; (form?: string | undefined): string; }'}},repeat:{defaultValue:null,description:`Returns a String value that is made from count copies appended together. If count is 0,
the empty string is returned.
@param count number of copies to append`,name:"repeat",required:!0,type:{name:"(count: number) => string"}},startsWith:{defaultValue:null,description:`Returns true if the sequence of elements of searchString converted to a String is the
same as the corresponding elements of this object (converted to a String) starting at
position. Otherwise returns false.`,name:"startsWith",required:!0,type:{name:"(searchString: string, position?: number | undefined) => boolean"}},anchor:{defaultValue:null,description:"Returns an `<a>` HTML anchor element and sets the name attribute to the text value\n@deprecated A legacy feature for browser compatibility\n@param name",name:"anchor",required:!0,type:{name:"(name: string) => string"}},big:{defaultValue:null,description:"Returns a `<big>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"big",required:!0,type:{name:"() => string"}},blink:{defaultValue:null,description:"Returns a `<blink>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"blink",required:!0,type:{name:"() => string"}},bold:{defaultValue:null,description:"Returns a `<b>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"bold",required:!0,type:{name:"() => string"}},fixed:{defaultValue:null,description:"Returns a `<tt>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"fixed",required:!0,type:{name:"() => string"}},fontcolor:{defaultValue:null,description:"Returns a `<font>` HTML element and sets the color attribute value\n@deprecated A legacy feature for browser compatibility",name:"fontcolor",required:!0,type:{name:"(color: string) => string"}},fontsize:{defaultValue:null,description:"Returns a `<font>` HTML element and sets the size attribute value\n@deprecated A legacy feature for browser compatibility\n@deprecated A legacy feature for browser compatibility",name:"fontsize",required:!0,type:{name:"{ (size: number): string; (size: string): string; }"}},italics:{defaultValue:null,description:"Returns an `<i>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"italics",required:!0,type:{name:"() => string"}},link:{defaultValue:null,description:"Returns an `<a>` HTML element and sets the href attribute value\n@deprecated A legacy feature for browser compatibility",name:"link",required:!0,type:{name:"(url: string) => string"}},small:{defaultValue:null,description:"Returns a `<small>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"small",required:!0,type:{name:"() => string"}},strike:{defaultValue:null,description:"Returns a `<strike>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"strike",required:!0,type:{name:"() => string"}},sub:{defaultValue:null,description:"Returns a `<sub>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"sub",required:!0,type:{name:"() => string"}},sup:{defaultValue:null,description:"Returns a `<sup>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"sup",required:!0,type:{name:"() => string"}},padStart:{defaultValue:null,description:`Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
The padding is applied from the start (left) of the current string.
@param maxLength The length of the resulting string once the current string has been padded.
If this parameter is smaller than the current string's length, the current string will be returned as it is.
@param fillString The string to pad the current string with.
If this string is too long, it will be truncated and the left-most part will be applied.
The default value for this parameter is " " (U+0020).`,name:"padStart",required:!0,type:{name:"(maxLength: number, fillString?: string | undefined) => string"}},padEnd:{defaultValue:null,description:`Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
The padding is applied from the end (right) of the current string.
@param maxLength The length of the resulting string once the current string has been padded.
If this parameter is smaller than the current string's length, the current string will be returned as it is.
@param fillString The string to pad the current string with.
If this string is too long, it will be truncated and the left-most part will be applied.
The default value for this parameter is " " (U+0020).`,name:"padEnd",required:!0,type:{name:"(maxLength: number, fillString?: string | undefined) => string"}},trimEnd:{defaultValue:null,description:"Removes the trailing white space and line terminator characters from a string.",name:"trimEnd",required:!0,type:{name:"() => string"}},trimStart:{defaultValue:null,description:"Removes the leading white space and line terminator characters from a string.",name:"trimStart",required:!0,type:{name:"() => string"}},trimLeft:{defaultValue:null,description:"Removes the leading white space and line terminator characters from a string.\n@deprecated A legacy feature for browser compatibility. Use `trimStart` instead",name:"trimLeft",required:!0,type:{name:"() => string"}},trimRight:{defaultValue:null,description:"Removes the trailing white space and line terminator characters from a string.\n@deprecated A legacy feature for browser compatibility. Use `trimEnd` instead",name:"trimRight",required:!0,type:{name:"() => string"}},matchAll:{defaultValue:null,description:`Matches a string with a regular expression, and returns an iterable of matches
containing the results of that search.
@param regexp A variable name or string literal containing the regular expression pattern and flags.`,name:"matchAll",required:!0,type:{name:"(regexp: RegExp) => IterableIterator<RegExpMatchArray>"}},"__@iterator@357":{defaultValue:null,description:"Iterator",name:"__@iterator@357",required:!0,type:{name:"() => IterableIterator<string>"}},at:{defaultValue:null,description:`Takes an integer value and returns the item at that index,
allowing for positive and negative integers.
Negative integers count back from the last item in the array.`,name:"at",required:!0,type:{name:"(index: number) => string | undefined"}}}}}catch{}function L(e){const t=l.useRef(null);return l.useEffect(()=>{function n(a){if(a.key!=="Tab"||!e||!t.current)return;const i=le(t),u=i[0],o=i[i.length-1];!a.shiftKey&&document.activeElement===o&&(u.focus(),a.preventDefault()),a.shiftKey&&document.activeElement===u&&(o.focus(),a.preventDefault())}const r=t.current;return r&&e&&(r.focus(),r.addEventListener("keydown",n)),()=>{r==null||r.removeEventListener("keydown",n)}},[e]),t}try{L.displayName="useFocusTrap",L.__docgenInfo={description:`Fanger fokus i en loop inni et element. Typisk bruk:
\`\`\`
const MyComponent = (props) => {

 const componentRef = useFocusTrap<HTMLDivElement>(props.isOpen);

 return props.isOpen ? <div ref={componentRef}><button>click</button></div> : null;

}
\`\`\``,displayName:"useFocusTrap",props:{valueOf:{defaultValue:null,description:"Returns the primitive value of the specified object.",name:"valueOf",required:!1,type:{name:"() => boolean"}}}}}catch{}const z=(e,t)=>{const[n,r]=l.useState(!1);return l.useEffect(()=>{let a;return e&&!n?r(!0):!e&&n&&(a=setTimeout(()=>r(!1),t)),()=>{clearTimeout(a)}},[t,e,n]),n};try{z.displayName="useMountTransition",z.__docgenInfo={description:`Tillater effekter og animasjoner å bli gjennomført like etter et element blir lagt til eller like før det blir fjernet fra DOM.
Typisk bruk:
\`\`\`
// CSS
.component {
 transition: opacity 0.2s;
 opacity: 0;
}

.transitionedIn.mounted {
 opacity: 1;
}

const MyComponent = (props) => {

const hasTransitionedIn = useMountTransition(props.isMounted, 500);

 return props.isMounted || hasTransitionedIn ? (
 <div
 className={\`component \${hasTransitionedIn && 'transitionedIn'} \${props.isMounted && 'mounted'}\`}
 >
   innhold
 </div>)
: null;

}
\`\`\``,displayName:"useMountTransition",props:{}}}catch{}function W(e,t){l.useEffect(()=>{const n=r=>{const a=Array.isArray(e)?e:[e];let i=r.target;for(;i;){if(a.indexOf(i)!=-1)return;i=i.parentNode}t(r)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}},[e,t])}try{W.displayName="useOnClickOutside",W.__docgenInfo={description:`Kjører logikk når brukeren klikker utenfor et element, f.eks at elementet fjernes fra DOM.
Typisk bruk:
\`\`\`
const [isOpen, setOpen] = useState(true);
const ref = useRef<HTMLElement>(null);
useOnClickOutside(ref, () => setOpen(false));

return <div ref={ref}>innhold</div>
\`\`\``,displayName:"useOnClickOutside",props:{}}}catch{}const H=(e,t)=>{l.useEffect(()=>{const n=r=>{(Array.isArray(e)?e:[e]).indexOf(r.key)!==-1&&t(r)};return document.addEventListener("keydown",n,!0),()=>{document.removeEventListener("keydown",n,!0)}},[t])};try{H.displayName="useOnKeyDown",H.__docgenInfo={description:`Kjører logikk når en spesifisert tast blir trykt ned.
Typisk bruk:
\`\`\`
const [isOpen, setOpen] = useState(true);
const ref = useRef<HTMLElement>(null);
useOnKeyDown(['Escape', 'Esc'], () => setOpen(false));

return isOpen ? <div>innhold</div> : null;
\`\`\``,displayName:"useOnKeyDown",props:{}}}catch{}const E=e=>e.key!==void 0;function O(e,t,n="column"){const[r,a]=l.useState(-1),i=n==="row"?"ArrowRight":"ArrowDown",u=n==="row"?"ArrowLeft":"ArrowUp",o=l.useCallback(d=>{!e||!E(d)||(t&&a(-1),d.key===i?(d.preventDefault(),a(r===e-1?0:r+1)):d.key===u&&(d.preventDefault(),a(r!==-1?r===0?e-1:r-1:e-1)))},[e,r,a,t]);return l.useEffect(()=>(document.addEventListener("keydown",o,!1),()=>{document.removeEventListener("keydown",o,!1)}),[o]),[r,a]}try{O.displayName="useRoveFocus",O.__docgenInfo={description:`Bytter fokus mellom elementer i en gruppe med piltaster og ikke Tab, og looper fokus i gruppen. Typisk bruk:
\`\`\`
import elements from './elements';
import RoveItem from './RoveItem';

const MyComponent = () => {
 const [focus, setFocus] = useRoveFocus(elements.length);

 return (
 <ul>
   {elements.map((element, index) => (
   <li key={element}>
     <RoveItem index={index} focus={focus === index} setFocus={setFocus}>{element.name}</RoveItem>
   </li>
   ))}
 </ul>)
}
\`\`\``,displayName:"useRoveFocus",props:{}}}catch{}try{E.displayName="isKeyboardEvent",E.__docgenInfo={description:"",displayName:"isKeyboardEvent",props:{bubbles:{defaultValue:null,description:`Returns true or false depending on how event was initialized. True if event goes through its target's ancestors in reverse tree order, and false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/bubbles)`,name:"bubbles",required:!0,type:{name:"boolean"}},cancelBubble:{defaultValue:null,description:"@deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/cancelBubble)",name:"cancelBubble",required:!0,type:{name:"boolean"}},cancelable:{defaultValue:null,description:`Returns true or false depending on how event was initialized. Its return value does not always carry meaning, but true can indicate that part of the operation during which event was dispatched, can be canceled by invoking the preventDefault() method.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/cancelable)`,name:"cancelable",required:!0,type:{name:"boolean"}},composed:{defaultValue:null,description:`Returns true or false depending on how event was initialized. True if event invokes listeners past a ShadowRoot node that is the root of its target, and false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/composed)`,name:"composed",required:!0,type:{name:"boolean"}},currentTarget:{defaultValue:null,description:`Returns the object whose event listener's callback is currently being invoked.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/currentTarget)`,name:"currentTarget",required:!0,type:{name:"EventTarget | (EventTarget & Element) | null"}},defaultPrevented:{defaultValue:null,description:`Returns true if preventDefault() was invoked successfully to indicate cancelation, and false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/defaultPrevented)`,name:"defaultPrevented",required:!0,type:{name:"boolean"}},eventPhase:{defaultValue:null,description:`Returns the event's phase, which is one of NONE, CAPTURING_PHASE, AT_TARGET, and BUBBLING_PHASE.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/eventPhase)`,name:"eventPhase",required:!0,type:{name:"number"}},isTrusted:{defaultValue:null,description:`Returns true if event was dispatched by the user agent, and false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/isTrusted)`,name:"isTrusted",required:!0,type:{name:"boolean"}},returnValue:{defaultValue:null,description:"@deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/returnValue)",name:"returnValue",required:!0,type:{name:"boolean"}},srcElement:{defaultValue:null,description:"@deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/srcElement)",name:"srcElement",required:!0,type:{name:"EventTarget | null"}},target:{defaultValue:null,description:`Returns the object to which event is dispatched (its target).

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/target)`,name:"target",required:!0,type:{name:"EventTarget | null"}},timeStamp:{defaultValue:null,description:`Returns the event's timestamp as the number of milliseconds measured relative to the time origin.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/timeStamp)`,name:"timeStamp",required:!0,type:{name:"number"}},type:{defaultValue:null,description:`Returns the type of event, e.g. "click", "hashchange", or "submit".

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/type)`,name:"type",required:!0,type:{name:"string"}},composedPath:{defaultValue:null,description:`Returns the invocation target objects of event's path (objects on which listeners will be invoked), except for any nodes in shadow trees of which the shadow root's mode is "closed" that are not reachable from event's currentTarget.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/composedPath)`,name:"composedPath",required:!0,type:{name:"() => EventTarget[]"}},initEvent:{defaultValue:null,description:"@deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/initEvent)",name:"initEvent",required:!0,type:{name:"(type: string, bubbles?: boolean | undefined, cancelable?: boolean | undefined) => void"}},preventDefault:{defaultValue:null,description:`If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/preventDefault)`,name:"preventDefault",required:!0,type:{name:"(() => void) | (() => void)"}},stopImmediatePropagation:{defaultValue:null,description:`Invoking this method prevents event from reaching any registered event listeners after the current one finishes running and, when dispatched in a tree, also prevents event from reaching any other objects.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/stopImmediatePropagation)`,name:"stopImmediatePropagation",required:!0,type:{name:"() => void"}},stopPropagation:{defaultValue:null,description:`When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/stopPropagation)`,name:"stopPropagation",required:!0,type:{name:"(() => void) | (() => void)"}},NONE:{defaultValue:null,description:"",name:"NONE",required:!0,type:{name:"0"}},CAPTURING_PHASE:{defaultValue:null,description:"",name:"CAPTURING_PHASE",required:!0,type:{name:"1"}},AT_TARGET:{defaultValue:null,description:"",name:"AT_TARGET",required:!0,type:{name:"2"}},BUBBLING_PHASE:{defaultValue:null,description:"",name:"BUBBLING_PHASE",required:!0,type:{name:"3"}}}}}catch{}const{breakpoints:h}=p;var c=(e=>(e[e.XSmall=0]="XSmall",e[e.Small=1]="Small",e[e.Medium=2]="Medium",e[e.Large=3]="Large",e[e.XLarge=4]="XLarge",e))(c||{});const ue=[[4,`only screen and (min-width: ${h.DdsBreakpointXl})`],[3,`only screen and (min-width: ${h.DdsBreakpointLg})`],[2,`only screen and (min-width: ${h.DdsBreakpointMd})`],[1,`only screen and (min-width: ${h.DdsBreakpointSm})`],[0,`only screen and (min-width: ${h.DdsBreakpointXs})`]],j=function(){const[e,t]=l.useState(3);return l.useEffect(()=>{function n(){for(const[r,a]of ue)if(window.matchMedia(a).matches){t(r);return}}return n(),window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e};try{j.displayName="useScreenSize",j.__docgenInfo={description:`Sjekker skjermstørrelsen basert på brekkpunkter definerte i designsystemet. Eksempel på bruk:
\`\`\`
const MyComponent = () => {
 const screenSize = useScreenSize();
 const isSmallScreen = screenSize === ScreenSize.Small;

 return <div className={isSmallScreen && 'smallDiv'} >innhold</div>
}
\`\`\``,displayName:"useScreenSize",props:{}}}catch{}const F=e=>{switch(e){case c.XLarge:return"xl";case c.Large:return"lg";case c.Medium:return"md";case c.Small:return"sm";case c.XSmall:return"xs"}};try{F.displayName="getLiteralScreenSize",F.__docgenInfo={description:"",displayName:"getLiteralScreenSize",props:{toString:{defaultValue:null,description:`Returns a string representation of an object.
@param radix Specifies a radix for converting numeric values to strings. This value is only used for numbers.`,name:"toString",required:!1,type:{name:"(radix?: number | undefined) => string"}},toFixed:{defaultValue:null,description:`Returns a string representing a number in fixed-point notation.
@param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.`,name:"toFixed",required:!0,type:{name:"(fractionDigits?: number | undefined) => string"}},toExponential:{defaultValue:null,description:`Returns a string containing a number represented in exponential notation.
@param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.`,name:"toExponential",required:!0,type:{name:"(fractionDigits?: number | undefined) => string"}},toPrecision:{defaultValue:null,description:`Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
@param precision Number of significant digits. Must be in the range 1 - 21, inclusive.`,name:"toPrecision",required:!0,type:{name:"(precision?: number | undefined) => string"}},valueOf:{defaultValue:null,description:"Returns the primitive value of the specified object.",name:"valueOf",required:!1,type:{name:"() => number"}},toLocaleString:{defaultValue:null,description:`Converts a number to a string by using the current or specified locale.
@param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
@param options An object that contains one or more properties that specify comparison options.
@param locales A locale string, array of locale strings, Intl.Locale object, or array of Intl.Locale objects that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
@param options An object that contains one or more properties that specify comparison options.`,name:"toLocaleString",required:!1,type:{name:"{ (locales?: string | string[] | undefined, options?: NumberFormatOptions | undefined): string; (locales?: LocalesArgument, options?: NumberFormatOptions | undefined): string; }"}}}}}catch{}const de=(...e)=>e.filter(Boolean).join(" "),ve=(e,t,n,r)=>{if(typeof t=="string"||r!=null){const{id:a,className:i,...u}=n??{},o=e??a,d=de(t,i);return{...r,...u,...d&&{className:d},...o&&{id:o}}}else{const{id:a,className:i,...u}=t??{},o=e??a;return{...n,...u,...i&&{className:i},...o&&{id:o}}}};export{I as A,x as P,he as R,c as S,_ as a,M as b,ge as c,fe as d,W as e,H as f,ve as g,O as h,D as i,de as j,L as k,z as l,F as m,be as n,le as o,ye as p,Y as s,j as u,q as v};
//# sourceMappingURL=BaseComponentProps-217bcb03.js.map
