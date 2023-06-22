import { useState } from "react";
import './Love.css'

const Love = ({counterCallback}) => {

    const [isLoved, setLoved] = useState(false)
    console.log('Rendering Love', isLoved)

    const handleClick = () => {
        console.log('clicked! changing isLoved from', isLoved, !isLoved)
        setLoved(!isLoved) // just scheduling the update
        // setLoved(prev => !prev)
        // counterCallback = setCounter from App (function)
        counterCallback((prevCounter) => {
            //React injects the prev (previous state value)
            if (isLoved) {
                return prevCounter - 1
            } else {
                return prevCounter + 1
            }
        }
        )


    }

    let buttonToRender = null
    if (isLoved) {
        buttonToRender = 
            <button onClick={handleClick} className="love-btn">
                &#10084;&#65039;
            </button>
    } else {
        buttonToRender = 
            <button onClick={handleClick} className="love-btn">
                &#129293;
            </button>
    }

    let textClass = ""
    if (isLoved) {
        textClass = "red-btn"
    }

    return (
        <>

            {/* <button onClick={handleClick} className="love-btn">&#129293;</button> */}


            {/* { isLoved &&
                //red heart
                <button onClick={handleClick} className="love-btn">
                    &#10084;&#65039;
                </button>
            }
            { !isLoved &&
                //white heart
                <button onClick={handleClick} className="love-btn">
                    &#129293;
                </button>
            } */}

            {/*condition ?  code if true : code if false*/}

            {/* { isLoved

            ?
                //red heart
                <button onClick={handleClick} className="love-btn">
                    &#10084;&#65039;
                </button>

            :
                //white heart
                <button onClick={handleClick} className="love-btn">
                    &#129293;
                </button>
            } */}

            {buttonToRender}

            {/* <p className={isLoved ? "red-btn" : ""}>
                {isLoved ? 'Love' : "Don't love"}
            </p> */}

            {/* <p className={textClass}>
                {isLoved ? 'Love' : "Don't love"}
            </p> */}

            {/* <p style={{color: isLoved ? 'red' : 'black'}}>
                {isLoved ? 'Love' : "Don't love"}
            </p>

            {isLoved &&
                <p>GREAT</p>
            } */}

            
        </>
    )
}

export default Love;