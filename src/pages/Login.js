import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchTokenAPI, userLogin } from '../redux/actions';
import SettingsBtn from '../components/SettingsBtn';
import { Container, Form } from './styles/login.style';
import logo from '../trivia.png';
import googleLogo from '../assets/google-logo.png';
import appleLogo from '../assets/apple-logo.png';
import facebookLogo from '../assets/facebook-logo.png';

class Login extends React.Component {
  constructor() {
    super();
    this.handleInput = this.handleInput.bind(this);
    this.validateInputs = this.validateInputs.bind(this);
    this.state = {
      name: '',
      email: '',
    };
  }

  handleInput(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  redirectGame = () => {
    const { token, history } = this.props;
    // if (token !== '') {
    localStorage.setItem('token', token);
    history.push('/game');
    // }
  };

  handleClick = async () => {
    const { dispatch } = this.props;
    const { email, name } = this.state;
    dispatch(userLogin(email, name));
    await dispatch(fetchTokenAPI());

    this.redirectGame();
  };

  validateInputs() {
    const { name, email } = this.state;
    return name && email;
  }

  render() {
    const { name, email } = this.state;
    const { isLoading, error } = this.props;
    if (error) return 'Algo deu errado!';
    let EntrarLoading = 'Entrar';
    if (isLoading) {
      EntrarLoading = 'Loading...';
    }
    return (
      <Container>
        <Form>
          <img src={ logo } alt="logo" className="logo" />
          <div className="loginGreeting">
            <h1>Login</h1>
            <h3>Bem-Vindo de volta!</h3>
          </div>
          <label htmlFor="password">

            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nome"
              value={ name }
              onChange={ this.handleInput }
              data-testid="input-player-name"
              autoComplete="off"
            />
          </label>
          <label htmlFor="email">

            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={ email }
              onChange={ this.handleInput }
              data-testid="input-gravatar-email"
              autoComplete="off"
            />
          </label>
          <button
            type="button"
            data-testid="btn-play"
            disabled={ !this.validateInputs() }
            onClick={ this.handleClick }
          >
            {EntrarLoading}
          </button>
          <SettingsBtn />
          <p>Ou continue com</p>
          <div>
            <img src={ googleLogo } alt="logo google" className="logoSocial" />
            <img src={ appleLogo } alt="logo apple" className="logoSocial" />
            <img src={ facebookLogo } alt="logo facebook" className="logoSocial" />
          </div>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.token.isLoading,
  token: state.token.token,
  error: state.token.error,
});

Login.defaultProps = {
  error: null,
};

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
  error: PropTypes.shape(),
};

export default connect(mapStateToProps)(Login);
