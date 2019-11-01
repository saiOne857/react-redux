import React from 'react';
import PropTypes from 'prop-types';
import Page from './../Page';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Styles from './login.css';
import { withStyles } from '@material-ui/core/styles';



class Login extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { classes } = this.props;
        return(<Page>
            <div className={Styles.card}>
                <h1>Login</h1>
                <TextField label="User Name" className={classes.textField} /> <br />
                <TextField label="Password" className={classes.textField}/> <br />
                <Button variant="outlined" className={classes.button}>
                    Login
                </Button>
            </div>
        </Page>
        );
    }
}

Login.propTypes = {
    classes : PropTypes.object.isRequired
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

export default withStyles(styles)(Login);