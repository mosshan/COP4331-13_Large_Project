import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './CSS/SignUp.css';
// import {Button} from './Button';

function SignUp() {

    /* For input from User*/
     var signUser; /* username */
     var signEmail; /* email */
     var signPass; /* password */
     var confirmPass; /*confirm password */

    const app_name = 'cop4331-8'
    function buildPath(route)
    {
        if (process.env.NODE_ENV === 'production') 
        {
            return 'https://' + app_name +  '.herokuapp.com/' + route;
        }
        else
        {        
            return 'http://localhost:5000/' + route;
        }
    }

    const [message,setMessage] = useState('');

    const doSignUp = async event => {
        

        event.preventDefault();
    
        var objs = {userName:signUser.value, email:signEmail.value, password:signPass.value};
        var js = JSON.stringify(objs);

        try
        {    
            const response = await fetch(buildPath('api/register'),
                {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

            var res = JSON.parse(await response.text());

            if( res.error === '' )
            {
                // var user = {firstName:res.firstName,lastName:res.lastName,id:res.id}
                // localStorage.setItem('user_data', JSON.stringify(user));

                setMessage('');
                window.location.href = '/login';
            }
            else
            {
                setMessage('Error creating account');
            }
        }
        catch(e)
        {
            alert(e.toString());
            return;
        }   
    } 
    
    /*creates function doSignUp */

    return(

        <div class="hero-container">

        <form onSubmit={doSignUp} class="sign-up-div">
            <span id="inner-title" class="inner-title">Sign Up</span>
            <input type="text" class="sign-up-input" placeholder="Username" ref={(c) => signUser = c} /><br />
            <input type="text" class="sign-up-input" placeholder="Email"ref={(c) => signEmail = c} /><br />
            <input type="password" class="sign-up-input" placeholder="Password"ref={(c) => signPass = c}  /><br />
            <input type="password" class="sign-up-input" placeholder="Comfirm Password" ref={(c) => confirmPass = c}  /><br />
            <input type="submit" class="register-button" value = "Create Account" onClick={doSignUp} />
            <label class="existed-acc"> Already have an Account? </label>
            <input type="submit" class="register-button" value = "Log In" onClick={doSignUp} />
            <span>{message}</span>
        </form>  
        
        </div>
      ); 
}

export default SignUp;