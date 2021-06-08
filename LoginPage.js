import React from 'react';

const Login = () => {
    return (
        <>
            <section className="sign-in">
                <div className="container mt-5">
                    <div className="signin-content">
                        <div className="signin-form">
                            <h2 className="form-title"> Login </h2>

                            <form className="login-form" id="login-form">
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i className="zmdi zmdi-account material-icons-name"></i>
                                    </label>
                                    <input type="text" name="name" id="name" autoComplete="off" placeholder="Name"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i className="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off" placeholder="Password"/>
                                </div>
                            </form>   
                            <div className="form-group">
                                    <input type="submit" name="signin" id="signin" className="form-submit" value="LOGIN"></input>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        </>
    )
}