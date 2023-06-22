import FruitItem from "../FruitItem/FruitItem"
import { FRUITS_LIST } from "../data"

const FruitsList = (props) => {

    console.log(FRUITS_LIST)


    const items = FRUITS_LIST.map((fruit) => {
        return <FruitItem 
            fruit={fruit} 
            counterCallback={props.counterCallback}/>
    })

    return(
        <ul style={{width: '20%'}}>
            {items}
        </ul>
    )

}
export default FruitsList