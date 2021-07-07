import React from 'react'
import './Login.css';
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
//styling

//end styling
const Login=({handleChange})=>{

   /* return(
        <div className='login' style={{ backgroundImage: "url(/bg.png)" ,backgroundRepeat:"no-repeat" ,backgroundAttachment: "fixed", backgroundPosition: "center"}} >
            <div className="login__logo">
                <img src="/logo.png" alt="Sans-Logo" />
            </div>
        </div>

    )*/

    const paperStyle={padding :20,height:'75vh',width:300, margin:"0px auto"}
    const avatarStyle={backgroundColor:'#eb4034'}
    const btnstyle={margin:'8px 0', background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'}

    return(
        
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Group Name' placeholder='Enter Group Name' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='#eb4034' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                    <Link href="#" onClick={()=>handleChange("event",1)} >
                        Sign Up 
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          margin: theme.spacing(3, 0, 2),
          color: '#fff'
      },
      card: {
          marginTop: '60px',
          paddingLeft: '20px',
          paddingRight: '20px',
          paddingBottom: '20px',
      },
      pointer: {
          cursor: 'pointer',
          color: 'red'
      }
}));

export default Login;