import React, { Component } from 'react'
import ListApps from "./ListApps"
import { Link } from 'react-router-dom';
import {withCookies} from 'react-cookie';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
//import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SignInSide from './SignInSide'

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
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
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
class Login extends Component {

    
    constructor(props) {
        super(props);

        this.state = {
            user: "",
            submit: false
        }

        this.onChangeUser = this.onChangeUser.bind(this)
    }

    componentDidMount = () => {
        this.setState({
            user: "",
        })
        this.props.cookies.remove('user', { path: '/' })
    }

    onChangeUser(e) {
        console.log(this.state.user)
        this.setState({
            user: e.target.value
        })
    }

    onSubmit = () => {
        this.props.cookies.set('user', this.state.user, { path: '/' })
        this.setState({
            submit: true
        })
        console.log("cookies: " + this.props.cookies.get('user'))
    }

    render() {
        
        return (
             <div className="container"> 
             <SignInSide> </SignInSide>
             <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              name="email"
              autoComplete="email"
              value={this.state.user}
              onChange = {this.onChangeUser}
            />
            
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick = {this.onSubmit}
            >
              <Link to="/list" className="navbar-nav" onClick={this.onSubmit}>Sign In</Link>
            </Button>
            
             {/* <img src="https://i.ytimg.com/vi/0mU-MxxW-wM/maxresdefault.jpg" width="350" height="333" >
                </img>
             <row>
                
             <Grid container component="main" className={useStyles.root}>
      <CssBaseline />
      <Grid item xs={false} sm={5} md={-2} className={useStyles.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={10} square>
        <div className={useStyles.paper}>
          <Avatar className={useStyles.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={useStyles.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="userName"
              label="User Name"
              name="userName"
              autoComplete="userName"
              autoFocus
            />
            
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={useStyles.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
    </row> */}

         </div>
    
        )
    }
}

export default withCookies(Login);