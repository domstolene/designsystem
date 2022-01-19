import { useEffect, RefObject } from 'react';

export function useOnClickOutside(
  ref: RefObject<any>,
  handler: Function,
  triggerRef?: RefObject<any>
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const triggerRefCheck = !triggerRef
        ? true
        : triggerRef &&
          triggerRef.current !== null &&
          !triggerRef.current.contains(event.target as Node)
        ? true
        : false;

      if (
        ref &&
        ref.current !== null &&
        !ref.current.contains(event.target as Node) &&
        triggerRefCheck
      ) {
        console.log('do sth');
        handler(event);
      } else {
        console.log('do nothhing:', ref, ref.current !== null);
      }
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

// export function useOnClickOutside2(
//   ref: RefObject<any> | RefObject<any>[],
//   handler: Function,
//   triggerRef?: RefObject<any>
// ) {
//   useEffect(() => {
//     const listener = (event: MouseEvent | TouchEvent) => {
//       const refs = Array.isArray(ref) ? ref : [ref];
//       const triggerRefCheck = !triggerRef
//         ? true
//         : triggerRef &&
//           triggerRef.current !== null &&
//           !triggerRef.current.contains(event.target as Node)
//         ? true
//         : false;

//       if (
//         ref &&
//         ref.current !== null &&
//         !ref.current.contains(event.target as Node) &&
//         triggerRefCheck
//       ) {
//         console.log('do sth');
//         handler(event);
//       } else {
//         console.log('do nothhing:', ref, ref.current !== null);
//       }
//     };
//     document.addEventListener('mousedown', listener);
//     document.addEventListener('touchstart', listener);
//     return () => {
//       document.removeEventListener('mousedown', listener);
//       document.removeEventListener('touchstart', listener);
//     };
//   }, [ref, handler]);
// }
