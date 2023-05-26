import validation from "./validation"
import style from './form.module.css'
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
    setErrors(validation({...userData,[Property]: value}))
}
   const handleOnSubmit = (event) => {
    event.preventDefault()
    login(userData)
 }
 

    return(
        <form onSubmit={handleOnSubmit} className={style.container}>
            <div className={style.box}>
               <label htmlFor="email">Email:</label>
               <input name="email" type="email" placeholder="ingrese su mail" value={userData.email} onChange={handleChange}/>
               {errors.email && <p style={{ color: "red"}}>{errors.email}</p>}
               <label htmlFor="password">Password:</label>
               <input name="password" type="password" placeholder="ingrese su Password" value={userData.password} onChange={handleChange}/> 
               {errors.password && <p style={{ color: "red"}}>{errors.password}</p>}
               <button>Submit</button>
            </div>
        </form>
    )
}
export default Form