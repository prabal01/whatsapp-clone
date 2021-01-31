import React from "react";
import "./Login.css";
import {Button} from "@material-ui/core"
import { auth, provider } from "../../firebase";
function Login(){
    const signIn=(e)=>{
       auth.signInWithPopup(provider).then((result)=>console.log(result)).catch((error)=>alert(error.messages));
    }

    return (
        <div classname="login">
            <div className="login__container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/598px-WhatsApp.svg.png" alt=""/>
                <div className="login__text">
                    <h1>Sign In</h1>
                </div>
                <Button onClick={signIn}  > Sign In With Google 
                </Button>

            </div>
        </div>
    )
}

export default Login