import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { resetGame } from '../redux/actions';
import logo from '../trivia.png';
import { Container } from './styles/ranking.style';

class Ranking extends Component {
  handleReset = () => {
    const { history, dispatch } = this.props;
    history.push('/');
    dispatch(resetGame());
  };

  render() {
    return (
      <Container>
        <img src={ logo } alt="logo" className="logo" />
        <h1 className="ranking-text" data-testid="ranking-title">Ranking</h1>
        {console.log(JSON.parse(localStorage.getItem('ranking')))}
        <section id="section">
          {
            JSON.parse(localStorage.getItem('ranking')) !== null
            && JSON.parse(localStorage.getItem('ranking'))
              .map((pessoa, index) => (
                <>
                  <div key={ index }>
                    <div className="img-score">
                      <img className="img" src={ pessoa.picture } alt="fotoGravatar" />
                      <p
                        className="score"
                        data-testid={ `player-score-${index}` }
                      >
                        <h4>Pontuação:</h4>
                        <p className="scoreTotal">{pessoa.score}</p>

                      </p>
                    </div>
                    <p
                      className="name"
                      data-testid={ `player-name-${index}` }
                    >
                      {pessoa.name}

                    </p>
                  </div>
                  <hr />
                </>
              ))
          }
        </section>
        <button
          type="button"
          data-testid="btn-go-home"
          onClick={ this.handleReset }
        >
          Início
        </button>
      </Container>

    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Ranking);
