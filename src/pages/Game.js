import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

// const mock = [
//   {
//     category: 'Entertainment: Video Games',
//     type: 'boolean',
//     difficulty: 'hard',
//     question: 'TF2: Sentry rocket damage falloff is calculated based on the distance between the sentry and the enemy, not the engineer and the enemy',
//     correct_answer: 'False',
//     incorrect_answers: [
//       'True',
//     ],
//   },
// ];

class Game extends Component {
  state = {
    questions: [],
    index: 0,
  };

  async componentDidMount() {
    const { token, history, responseCode } = this.props;
    const RESPONSE_CODE = 3;
    const NUMBER_QUESTIONS = 5;
    if (responseCode === RESPONSE_CODE) {
      localStorage.removeItem('token');
      history.push('/');
    } else {
      const URL = `https://opentdb.com/api.php?amount=${NUMBER_QUESTIONS}&token=${token}`;
      const request = await fetch(URL);
      const response = await request.json();

      this.setState({
        questions: response.results,
      });
    }
  }

  componentDidUpdate() {
    const section = document.getElementById('section');
    console.log(section.children);
    if (section.children) {
      for (let i = section.children.length; i >= 0; i -= 1) {
        section.appendChild(section.children[Math.floor(Math.random() * i)]);
      }
    }
  }

  render() {
    const { index, questions } = this.state;
    return (
      <>
        <Header />

        {questions.length > 0 ? (
          <div>

            <p data-testid="question-text">{questions[index].question}</p>
            <p data-testid="question-category">{questions[index].category}</p>
            {questions[index].type === 'boolean' ? (
              <section data-testid="answer-options" id="section">
                <button data-testid="wrong-answer-0" type="button">
                  {questions[index].incorrect_answers[0]}
                </button>
                <button data-testid="correct-answer" type="button">
                  {questions[index].correct_answer}
                </button>
              </section>
            ) : (
              <section data-testid="answer-options" id="section">
                <button data-testid="wrong-answer-0" type="button">
                  { questions[index].incorrect_answers[0]}
                </button>
                <button data-testid="wrong-answer-1" type="button">
                  {questions[index].incorrect_answers[1]}
                </button>
                <button data-testid="wrong-answer-2" type="button">
                  {questions[index].incorrect_answers[2]}
                </button>
                <button data-testid="correct-answer" type="button">
                  { questions[index].correct_answer}
                </button>
              </section>
            )}
          </div>
        ) : (
          <p>carregando</p>
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  isLoading: state.token.isLoading,
  token: state.token.token,
  responseCode: state.token.responseCode,
  error: state.token.error,
});

export default connect(mapStateToProps)(Game);
