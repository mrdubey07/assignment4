import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import LoginCss from '../Css/LoginPageCss.module.css';
import Input from '../ReUsable/Input';

function LoginForm() {
    
    const [checkEmail, setCheckEmail] = useState(false);
    const [checkPassword, setCheckPassword] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const navigate = useNavigate();

    const errorMsg = {
        email: 'Please enter a valid email',
        password: 'Password cannot be blank'
    }

    const emailChangeHandler = (e) =>{
        console.log(e.target.value);
        let x = e.target.value;
        let pattern = new RegExp(/^(('[\w-\s]+')|([\w-]+(?:\.[\w-]+)*)|('[\w-\s]+')([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        
        if(x.match(pattern)){
        setCheckEmail(true);
        setErrorEmail(false);
        }
        else{
        setCheckEmail(false);
        }
    }

    const passwordChangeHandler = (e) =>{
        let x = e.target.value;
        let y = x.trim();
        if(y !== ''){
        setCheckPassword(true);
        setErrorPassword(false);
        }else{
        setCheckPassword(false);
        }
    }

    const onSubmitHandler = (e) => {
        if(!checkEmail){
        setErrorEmail(true);
        e.preventDefault();
        }
        if(!checkPassword){
        setErrorPassword(true);
        e.preventDefault();
        }
        
        if(checkEmail ){
            if(checkPassword){
                navigate('/dashboard');
            }
        }
        // e.preventDefault();
    }

    return (
        <form onSubmit={onSubmitHandler} className={LoginCss.login}>
        <div className={LoginCss.email}>
            <Input htmlFor="email" classNamelabel={LoginCss.emaillabel} value="Email" 
            type="email" autofocus={true} onChange={emailChangeHandler}  className={checkEmail ? LoginCss.inputemail : LoginCss.error} autoFocus placeholder='email' name='email' />
            {errorEmail ? <span className={LoginCss.span}>{errorMsg.email}</span> : ''}
        </div>


        <div className={LoginCss.password}> 

        <Input htmlFor="password" classNamelabel={LoginCss.passwordlabel} value="Password" 
        type="password" placeholder='password' onChange={passwordChangeHandler} className={checkPassword ? LoginCss.inputpassword : LoginCss.error}  name="password" id="password" />
            {errorPassword ? <span className={LoginCss.span}>{errorMsg.password}</span> : ''}
        </div>

        <div className={LoginCss.submit}>
            <input type="submit" value="Login" />
        </div>
        </form>
    )
    }

export default LoginForm