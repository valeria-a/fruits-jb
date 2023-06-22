import { FRUITS_LIST } from "../data"

// const Summary = (props) => {

//     const totalFruits = FRUITS_LIST.length

//     return(
//         <>
//             {totalFruits === props.counter ?
//                 <p>You like all the fruits</p>
//                 : props.counter === 0 ?
//                     <p>You don't like any fruit</p>
//                     :
//                     <p>{`You like: ${props.counter} fruits`}</p>
//             }
//         </>
//     )
// }

const Summary = (props) => {

    const totalFruits = FRUITS_LIST.length

    const nameToDisplay = props.submittedName ? props.submittedName : 'You'

    let itemToDisplay = null
    if (totalFruits === props.counter) {
        itemToDisplay = <p>{`${nameToDisplay} like all the fruits`}</p>
    } else if (props.counter === 0) {
        itemToDisplay = <p>{`${nameToDisplay} don't like any fruit`}</p>
    } else {
        itemToDisplay = <p>{`${nameToDisplay} like: ${props.counter} fruits`}</p>
    }

    return(
        <>
            {itemToDisplay}
        </>
    )
}
export default Summary