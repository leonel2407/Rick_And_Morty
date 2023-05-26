const validation = (userData, errors, setErrors) => {
    //validacion email
    if (!userData.email) {
      setErrors({...errors, email:'Por favor complete este campo'})
    } else if(userData.email.length > 35) {
      setErrors({...errors, email:'No puede contener mas de 35 caracteres'})
    }else if(!/\S+@\S+\.\S+/.test(userData.email)){
      setErrors({ ...errors,email: 'Por favor revisa tu email'})
    }else {setErrors({ ...errors,email: ''})}

     if(!/^.{6,10}$/.test(userData.password)){
        setErrors({...errors, password:'Debe de contener de 6 a 10 carecteres'})
    } else if (!/\d+/.test(userData.password)){
        setErrors({...errors, password:'Debe de contener almenos un numero'})
    } else {
        setErrors({...errors, password:''})
    }
}

export default validation