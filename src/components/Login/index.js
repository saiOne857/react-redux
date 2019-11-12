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
            password: '',
            dirty: {
                userName: false,
                password: false
            }
        }
    }

    handleTextChange(e) {
        if(e) {
            const update = {
                dirty : {}
            };
            update[e.target.name] = e.target.value;
            update['dirty'][e.target.name] = true;
            this.setState(update);
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

    shouldComponentUpdate(newProps,newState) {
        console.log('######## new props '+newProps.user)
        if(newProps.user != this.props.user) {
            console.log('######## new changed prop '+newProps.user);
            this.props.history.push('/todoApp');
        }
        return true;
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
                    error={!this.state.userName && this.state.dirty.userName}
                    helperText={!this.state.userName && "Username can't be empty"}
                    className={classes.textField}
                    value={this.state.userName}
                    onChange={this.handleTextChange} /> <br />
                <TextField
                    label="Password"
                    name="password"
                    type="password"
                    error={!this.state.password && this.state.dirty.password}
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
    user: PropTypes.func.isRequired
}


const mapStateToProps = (state) => {
    return {
        user: state.user.userName
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login));