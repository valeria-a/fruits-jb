import { useState } from "react"

const Name = (props) => {

    const [name, setName] = useState('Guest')

    const handleSubmit = (event) => {
        event.preventDefault()
        props.setSubmittedName(name)
        setName('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Your name:</label>
            <input type="text" value={name} 
                onChange={(event) => {
                    setName(event.target.value)
                }}/>
            <button type="submit">OK</button>
            <br />
            <p>{`You inserted: ${name}`}</p>
        </form>
    )
}
export default Name