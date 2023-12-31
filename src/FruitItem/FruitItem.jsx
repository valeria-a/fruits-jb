import Love from '../Love/Love';
import './FruitItem.css'

const FruitItem = ({fruit, counterCallback}) => {
    console.log('Rendering FruitItem', fruit)

    // const {fruit} = props

    // props.fruit
    // props['fruit']

    // props = {fruit: 'apple', name: 'Gal', city: 'Tel Aviv'}
    // const {fruit, name} = props
    // console.log(fruit, name)
    //fruit = 'apple'
    //name = 'Gal'


    return(
        <li>
            <p style={{flexGrow: 1}}>{fruit}</p>
            <Love counterCallback={counterCallback}/>
        </li>
    )
}

export default FruitItem;
