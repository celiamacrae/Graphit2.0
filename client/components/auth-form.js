import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import {createUser} from '../store/user'
import {Paper, Grid, Button, TextField} from '@material-ui/core'
import Logo from './logo'
/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Paper className="form" elevation={3}>
        <Grid>
          <Logo />
        </Grid>
        <form onSubmit={handleSubmit} name={name}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item sm={12}>
              <label htmlFor="email">Email</label>
              <TextField
                name="email"
                type="text"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item sm={12}>
              <label htmlFor="password">Password</label>
              <TextField
                name="password"
                type="password"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item sm={12}>
              <Button variant="contained" type="submit" color="primary">
                {displayName}
              </Button>
            </Grid>
            {error &&
              error.response && (
                <Grid item sm={12}>
                  {' '}
                  {error.response.data}{' '}
                </Grid>
              )}

            <Grid item sm={12}>
              <small>
                Don't have an account? <Link to="/signup">Sign up here!</Link>
              </small>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Grid>
  )
}
const SignupForm = props => {
  const {name, handleSubmit, error} = props

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Paper className="form" elevation={3}>
        <Grid>
          <Logo />
        </Grid>
        <form onSubmit={handleSubmit} name={name}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item sm={12}>
              <label htmlFor="firstName">First Name</label>
              <TextField
                name="firstName"
                type="text"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item sm={12}>
              <label htmlFor="lastName">Last Name</label>
              <TextField
                name="lastName"
                type="text"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item sm={12}>
              <label htmlFor="email">Email</label>
              <TextField
                name="email"
                type="text"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item sm={12}>
              <label htmlFor="password">Password</label>
              <TextField
                name="password"
                type="password"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item sm={12}>
              <Button variant="contained" type="submit" color="primary">
                Signup
              </Button>
            </Grid>
            {error &&
              error.response && (
                <Grid item sm={12}>
                  {' '}
                  {error.response.data}{' '}
                </Grid>
              )}
          </Grid>
        </form>
      </Paper>
    </Grid>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

const mapDispatchSignUp = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const firstName = evt.target.firstName.value
      const lastName = evt.target.lastName.value
      const password = evt.target.password.value

      const user = {firstName, lastName, email, password}
      dispatch(createUser(user, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatchSignUp)(SignupForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
