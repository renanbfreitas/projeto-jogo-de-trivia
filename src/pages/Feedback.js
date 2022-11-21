import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import Header from '../components/Header';
import { resetGame } from '../redux/actions';
import { Container } from './styles/feedback.style';

class Feedback extends React.Component {
  handleReset = () => {
    const { history, dispatch } = this.props;
    history.push('/');
    dispatch(resetGame());
  };

  render() {
    const { assertionsScore, score, history } = this.props;
    const minimumScore = 3;
    return (
      <Container>
        {/* <Header /> */}
        <div data-testid="feedback-total-score">
          <p className="textLarge">Pontuação Total</p>
          <p>{ score }</p>
        </div>
        <div data-testid="feedback-total-question">
          <p className="textLarge-2">Respostas corretas</p>
          <p>{ assertionsScore }</p>
        </div>
        <p className="msg" data-testid="feedback-text">
          { assertionsScore >= minimumScore ? 'Well Done!' : 'Could be better...' }
        </p>
        <button
          type="button"
          data-testid="btn-play-again"
          onClick={ this.handleReset }
        >
          Play Again
        </button>
        <button
          type="button"
          data-testid="btn-ranking"
          onClick={ () => history.push('/ranking') }
        >
          Ranking
        </button>
      </Container>

    );
  }
}

const mapStateToProps = (state) => ({
  assertionsScore: state.player.assertions,
  score: state.player.score,
});

Feedback.propTypes = {
  assertionsScore: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
export default connect(mapStateToProps)(Feedback);
