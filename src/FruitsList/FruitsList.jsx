import FruitItem from "../FruitItem/FruitItem"

const FruitsList = () => {

    return(
        <ul>
            <FruitItem fruit='Apple' name='Gal' city='Tel Aviv'/>
            <FruitItem fruit='Banana'/>
            <FruitItem fruit='Orange'/>
        </ul>
    )

}
export default FruitsList