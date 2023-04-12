import validation from "./validation"
import { useState } from "react"

const Form = ({login}) => {

    const [userData, setuserData] = useState({
        email:'',
        password:'',
    })
    
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        const Property = event.target.name
        const value = event.target.value
    setuserData({...userData,[Property]: value})
    validation({...userData,[Property]: value}, errors, setErrors)
}
   const handleOnSubmit = (event) => {
    event.preventDefault()
    login(userData)
 }
 

    return(
        <form onSubmit={handleOnSubmit}>
          
               <label htmlFor="email">Email:</label>
               <input name="email" type="email" placeholder="ingrese su mail" value={userData.email} onChange={handleChange}/>
               <p>{errors.email}</p>
               <hr></hr>
            
               <label htmlFor="password">Password:</label>
               <input name="password" type="password" placeholder="ingrese su Password" value={userData.password} onChange={handleChange}/> 
               <p>{errors.password}</p>
            <button>Submit</button>
        </form>
    )
}
export default Form