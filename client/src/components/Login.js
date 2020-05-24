import React, { useState } from "react"
// import axios from "axios"

const Login = props =>{
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password };
        console.log("Welcome!", newUser);
        setHasBeenSubmitted( true );
    };

    const loginUser = (e) => {
        e.preventDefault();
        const user = { username, email, password };
        console.log("Welcome Back!", user);
        setHasBeenSubmitted( true );
    };
    
    const formMessage = () => {
        if( hasBeenSubmitted ) {
            return "Thank you for registering!";
    } else {
            return "Welcome, please register and login";
    }
    };

    return (

    //  Registration and login
        <div className ="reg_container">
            <div>
                <form onsubmit={ createUser }>
                    <div>
                        <h3 style= {{ marginTop: "40px" }}>{ formMessage() }</h3><br></br><br></br>

                        <h2>Register</h2> <br></br>
                            <div class="form-row">
                                <label> Username: </label> 
                                <input type="text" class= "form-control" placeholder= "Full name" onchange={ (e) => setUsername(e.target.value) } />
                            </div>
                            <div class="form-row">
                                <label style = {{marginTop:"40px"}}>Email Address: </label> 
                                <input type="text" class= "form-control"  placeholder= "Email" onchange={ (e) => setEmail(e.target.value) } />
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4" style = {{marginTop:"40px"}}>Password: </label>
                                    <input type="text" class= "form-control" placeholder= "Password" onchange={ (e) => setPassword(e.target.value) } />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4" style = {{marginTop:"40px"}} >Confirm Password: </label>
                                    <input type="text" class= "form-control" placeholder= "Repeat password" onchange={ (e) => setPassword(e.target.value) } />
                                </div>
                            </div>
                        <input type="submit" style={{backgroundColor:"lightblue"}} value="Create User"/> <br></br><br></br>
                    </div>
                </form>
            </div>
            <div className ="login_container">
                <form onsubmit={ loginUser }>
                    <h2>Login</h2> <br></br>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputEmail4">Email Address: </label> 
                            <input type="text" class= "form-control" placeholder="Email" onchange={ (e) => setEmail(e.target.value) } />
                        </div>
                        <div class ="form-group col-md-6">
                            <label for ="inputEmail4">Password: </label>
                            <input type ="text" class= "form-control" placeholder="Password" onchange={ (e) => setPassword(e.target.value) } />
                        </div>
                    </div>
                    <input type ="submit"  style={{backgroundColor:"lightblue"}} value="Login User"/>
                </form>
            </div>
        </div>
    )
}

export default Login