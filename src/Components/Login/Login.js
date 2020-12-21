import React from 'react'
import './Login.css'


function Login() {
    return (
        <div class="container">
            <div class="row">
                <div class="container">
                    <h1 class="text-center login-title">Sign in to Spotify Blockchain</h1>
                    <div class="account-wall">
                        <img class="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                            alt="" />
                        <form class="form-signin">
                            <input type="text" class="form-control" placeholder="Email" required autofocus />
                            <input type="password" class="form-control" placeholder="Password" required />
                            <button class="btn btn-lg btn-primary btn-block" type="submit">
                                Sign in</button>
                            <label class="checkbox pull-left">
                                <input type="checkbox" value="remember-me" style={{ marginRight: "5px" }} />
                                                Remember me
                            </label>
                            <div>

                            <a href="/" class="pull-right need-help">Need help? </a><span class="clearfix"></span>
                            </div>
                        </form>
                    </div>
                    <a href="/" class="text-center new-account">Create an account </a>
                </div>
            </div>
        </div>
    )
}

export default Login;
