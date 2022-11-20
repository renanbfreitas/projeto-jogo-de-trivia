import React from 'react';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { savePicture } from '../redux/actions';
import { Container } from './styles/header.style';
import logo from '../trivia.png';
import clock from '../assets/clock.png';
import gear from '../assets/gearT.png';

import Timer from './Timer';

class Header extends React.Component {
  render() {
    const { gravatarEmail, name, score, dispatch } = this.props;
    const emailMd5 = md5(gravatarEmail).toString();

    dispatch(savePicture(`https://www.gravatar.com/avatar/${emailMd5}`));

    return (
      <Container>
        <div className="container-2">
          <img
            className="avatar"
            data-testid="header-profile-picture"
            src={ `https://www.gravatar.com/avatar/${emailMd5}` }
            alt="avatar"
          />
          <img src={ logo } alt="logo" className="logo" />
          <img src={ gear } alt="logo" className="gear" />
        </div>
        <div className="nome" data-testid="header-player-name">
          {name}
        </div>
        <div className="clock">
          <img src={ clock } alt="clock" />
          <Timer />
        </div>
        <div data-testid="header-score" className="score">
          <p>Pontuação:</p>
          {score}
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  gravatarEmail: state.player.gravatarEmail,
  name: state.player.name,
  score: state.player.score,
});

Header.propTypes = {
  gravatarEmail: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Header);
