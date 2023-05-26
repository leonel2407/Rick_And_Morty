const validation = (userData) => {
    //validacion email
    const errors = {};
  if(!/\S+@\S+\.\S+/.test(userData.email)){
      errors.email = 'Por favor revisa tu email';
  }
  if(!userData.email){ 
      errors.email = 'Por favor complete este campo';
  }
  if(userData.email.length > 35){
      errors.email = 'No puede contener mas de 35 caracteres'
  }
  if(!/.*\d+.*/.test(userData.password)){
      errors.password = 'Debe de contener almenos un numero'
  }
  if(userData.password.length < 6 || userData.password.length > 10){
      errors.password = 'Debe de contener de 6 a 10 carecteres'
  }
  return errors;
}

export default validation