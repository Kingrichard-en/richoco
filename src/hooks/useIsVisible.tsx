// import { useEffect, useState } from "react";

// export function useIsVisible(ref) {
//   const [isIntersecting, setIntersecting] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) =>
//       setIntersecting(entry.isIntersecting)
//     );

//     observer.observe(ref.current);
//     return () => {
//       observer.disconnect();
//     };
//   }, [ref]);

//   return isIntersecting;
// }
import React from 'react'

interface useIsVisibleProps {

}

export const useIsVisible: React.FC<useIsVisibleProps> = ({}) => {
        return (<div>ih</div>);
}
export default useIsVisible