import React from 'react';
import PropTypes from 'prop-types';
import Page from './../Page';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Styles from './login.css';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';



class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

        this.state = {
            userName : '',
            password: ''
        }
    }

    handleTextChange(e) {
        if(e) {
            const update = {};
            update[e.target.name] = e.target.value;
            this.setState(update, (newState)=> {
                console.log(newState);
            });
        }
    }

    handleLogin(e) {
        if(e) {
            if(this.state.userName && this.state.password) {
                this.props.loginUser(this.state.userName,
                this.state.password);
            }
        }
    }

    render() {
        const { classes } = this.props;
        return(<Page>
            <div className={Styles.card}>
                <h1>Login</h1>
                <TextField
                    label="User Name"
                    name="userName"
                    type="text"
                    error={!this.state.userName}
                    helperText={!this.state.userName && "Username can't be empty"}
                    className={classes.textField}
                    value={this.state.userName}
                    onChange={this.handleTextChange} /> <br />
                <TextField
                    label="Password"
                    name="password"
                    type="password"
                    error={!this.state.password}
                    helperText={!this.state.password && "Password can't be empty"}
                    className={classes.textField}
                    value={this.state.password}
                    onChange={this.handleTextChange} /> <br />
                <Button
                    variant="outlined"
                    className={classes.button}
                    onClick={this.handleLogin}
                >
                    Login
                </Button>
            </div>
        </Page>
        );
    }
}

Login.propTypes = {
    classes : PropTypes.object.isRequired,
    userReducer: PropTypes.func.isRequired
}


const mapDispatchToProps = (dispatch) => {

    return {
        loginUser : (userName, password) => {
            return dispatch({
                type: 'LOGIN_USER',
                data: {
                    userName: userName,
                    password: password
                }
            });
        }
    }
}

const styles = {
    textField: {
        width: '300px',
        marginTop: '15px;'
    },
    button : {
        marginTop: '50px;',
        width: '300px'
    }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(Login));