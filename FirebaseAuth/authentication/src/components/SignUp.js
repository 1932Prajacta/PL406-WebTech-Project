import React, {useEffect, useState} from 'react';
import {Container, CssBaseline, Avatar, Typography, 
    Button, Grid, Link, CardContent} from '@material-ui/core';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import fire from './fire';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/SignUp.css';


const SignUp = (props) => {
    //const classes 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    //const {email, setEmail,password, setPassword,confirmPassword, setConfirmPassword}
    
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleConfirmPassowerd = (event) => {
        setConfirmPassword(event.target.value);
    }
    const handleSignUp = () => {
        fire.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(response => {
                if(response) {
                    props.toggle();
                    toast.success('User Registered Successfully');
                }
            }).catch((error) => {
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        toast.error(error.message);
                        break;
                    case 'auth/invalid-email': 
                        toast.error(error.message);                    
                        break;
                    case 'auth/weak-password':
                        toast.error(error.message);
                        break;
                }
            });
    }

    useEffect(() => {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            if(value !== password) {
                return false;
            }
            return true;
        });
        return () => {
            ValidatorForm.removeValidationRule('isPasswordMatch');
        }
    }, [password])
    return (
        <Container component="main" maxWidth="xs">
            <div className="card">
                <CardContent>
                    <ToastContainer/>
                    <CssBaseline/>
                    <div className="paper">
                        <Avatar className="avatar">
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign Up
                        </Typography>
                        <ValidatorForm 
                         onSubmit={handleSignUp}
                         className="form">
                        <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Email"
                                onChange={handleEmail}
                                name="email"
                                value={email}
                                validators={['required', 'isEmail']}
                                errorMessages={['this field is required', 'email is not valid']}
                                autoComplete='off'
                            />
                            <br/>
                            <TextValidator
                                variant="outlined"
                                fullWidth
                                label="Password"
                                onChange={handlePassword}
                                name="password"
                                type="password"
                                value={password}
                                validators={['required']}
                                errorMessages={['this field is required']}
                                autoComplete="off"
                            />
                            <br/>
                            <TextValidator
                                variant="outlined"
                                label="Confirm password"
                                fullWidth
                                onChange={handleConfirmPassowerd}
                                name="confirmPassword"
                                type="password"
                                validators={['isPasswordMatch', 'required']}
                                errorMessages={['password mismatch', 'this field is required']}
                                value={confirmPassword}
                                autoComplete="off"
                            />
                             <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                className="submit"
                            >
                                Sign Up
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link 
                                    onClick={props.toggle}
                                    className="pointer"
                                    variant="body2"
                                    >
                                        Already have an account? Sign In
                                    </Link>
                                </Grid>
                            </Grid>
                        </ValidatorForm>
                    </div>
                </CardContent>
            </div>
        </Container>
    );
}

export default SignUp;



