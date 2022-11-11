import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Feedback extends React.Component {
  render() {
    const { assertionsScore, score, history } = this.props;
    const minimumScore = 3;
    return (
      <>
        <Header />
        <p data-testid="feedback-total-score">{ score }</p>
        <p data-testid="feedback-total-question">{ assertionsScore }</p>
        <p data-testid="feedback-text">
          { assertionsScore >= minimumScore ? 'Well Done!' : 'Could be better...' }
        </p>
        <button
          type="button"
          data-testid="btn-play-again"
          onClick={ () => history.push('/') }
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
      </>

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
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
export default connect(mapStateToProps)(Feedback);
