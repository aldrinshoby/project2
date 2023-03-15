import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react'; 
import { useFormInputValidation } from 'react-form-input-validation';
const Login = () => { 
    //var[sname,setsname]=useState();
   //const cap_name=(e)=>{
    //setsname(sname=(e.target.value)) 
   //console.log(sname)
   // } 
   const[fields,errors,form]=useFormInputValidation({
    email_address:"",
    password:""
},
{ 
 email_address:"required|email",
 password:"required"

}) 
  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div>
        <h1>WELCOME TO LOGIN</h1>
        <br/>
      <TextField 
      value={fields.email_address} 
      onBlur={form.handleBlurEvent}
      onChange ={form.handleChangeEvent}
        name='email_address' 
        label="email address"
        id="outlined-error" 
        helperText={errors.email_address?errors.email_address:""}
      /><br></br>
      <TextField
onBlur={form.handleBlurEvent}
onChange ={form.handleChangeEvent}

        name='password'
        label="password"
        //id="outlined-error-helper-text"
        helperText={errors.password?errors.password:""}
      />
    </div>
    </Box>
  )
}

export default Login
