import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
const Signup = () => {
    const paperStyle = { padding: 20, width: 300, height: '80vh', margin: "0 auto" }
    //const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#eb4034' }
    const btnstyle={margin:'8px 0', background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'}
    const marginTop = { marginTop: 5 }
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                </Grid>
                <form>
                    <TextField fullWidth label='Group Name' placeholder="Enter your Group name" />
                    <TextField fullWidth label='Group Leader' placeholder="Enter Group Leader name" />
                    <TextField fullWidth label='Address' placeholder="Enter Address" />
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Type of Culture</FormLabel>
                        <RadioGroup aria-label="culture" name="culture" style={{ display: 'initial' }}>
                            <FormControlLabel value="fugdi" control={<Radio />} label="Fugdi" />
                            <FormControlLabel value="ghunat" control={<Radio />} label="Ghumat" />
                        </RadioGroup>
                    </FormControl>
                    <TextField fullWidth label='Email' placeholder="Enter your email" />
                    <TextField fullWidth label='Password' placeholder="Enter your password"/>
                    <TextField fullWidth label='Confirm Password' placeholder="Confirm your password"/>
                    
                    <Button type='submit' variant='contained' color='#eb4034' style={btnstyle}>Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;