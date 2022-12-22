import { useState } from "react"

export default function Form(props){

    // sets a state for our form data
    const [formData, setFormData] = useState({searchterm: ""})

    //! Handles form Change
    const handleChange = (event) => {

        //! the 3 dots makes a copy of the existing formData
        // takes the formData and makes the target name = the target value
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        // Prevents the browser from refreshing
        event.preventDefault()

        // gets the data
        props.moviesearch(formData.searchterm)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="searchterm" value={formData.searchterm} onChange={handleChange}/>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}
