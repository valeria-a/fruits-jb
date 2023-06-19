import { useState } from "react";
import './Love.css'

const Love = () => {

    const [isLoved, setLoved] = useState(false)
    console.log('Rendering Love', isLoved)

    const handleClick = () => {
        console.log('clicked! changing isLoved from', isLoved, !isLoved)
        setLoved(!isLoved)
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

            { isLoved

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
            }

            <p>{isLoved ? 'Love' : "Don't love"}</p>

            
        </>
    )
}

export default Love;