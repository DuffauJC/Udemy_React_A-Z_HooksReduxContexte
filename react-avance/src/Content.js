import React from 'react'

// export default function Content(props) {
//     console.log('mise à jour');
//     return (
//         <div className='content'>
//             {/* {props.children} */}
//         </div>
//     )
// }


// memorise si y'a changements de props, évite les mise à jour inutile
 function Content(props) {
    console.log('mise à jour');
    return (
        <div className='content'>
         
            <h1>{props.num}</h1>
        </div>
    )
} 
export default React.memo(Content)