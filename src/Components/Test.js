import React, { Component } from "react";
import Questionjson from './Questionjson'
import Swal from 'sweetalert2'
import 'animate.css';


const Questions = Questionjson;
var score = 0;

class Test extends Component {

  constructor() {
    super();
    this.onChangeValue = this.onChangeValue.bind(this);
    this.handleScore = this.handleScore.bind(this);
  };

  onChangeValue(event) {
    score += event.target.value;
  };

  handleScore(e) {
    e.preventDefault();
    console.log(score);
    Swal.fire({
      title: 'Your Score',
      text: score ? score : "Please Enter the Required Values!!",
      footer: '<a href="#resources">Your Recommended Resources</a>',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      background: '#fff url(/images/trees.png)',
    })
  }

  render() {
    return (
      <div id="questionnaire" className="page">
        <div className="inner-box">
          <p id="questionnaire-heading" className="center">Test Yourself</p>
          <hr />
          <form action="#symptom-identification">
            <div id="column-one">
              <div id="column-one-item">
                <p>{Questions.anxiety[0].question}</p>
                <div onChange={this.onChangeValue}>
                  <input type="radio" id="not-at-all" name="ques-one" value="0" />
                  <label htmlFor="not-at-all">Not at all</label>

                  <input type="radio" id="several-days" name="ques-one" value="1" />
                  <label htmlFor="several-days">Several Days</label>

                  <input type="radio" id="more-than-half-the-days" name="ques-one" value="2" />
                  <label htmlFor="more-than-half-the-days">More than Half the Days</label>

                  <input type="radio" id="nearly-everyday" name="ques-one" value="3" />
                  <label htmlFor="nearly-everyday">Nearly Everyday</label>
                </div>
              </div>
              <div>
                <p>{Questions.anxiety[1].question}</p>
                <div id="column-one-item">
                  <input type="radio" id="not-at-all" name="ques-two" value="0" />
                  <label htmlFor="not-at-all">Not at all</label>

                  <input type="radio" id="several-days" name="ques-two" value="1" />
                  <label htmlFor="several-days">Several Days</label>

                  <input type="radio" id="more-than-half-the-days" name="ques-two" value="2" />
                  <label htmlFor="more-than-half-the-days">More than Half the Days</label>

                  <input type="radio" id="nearly-everyday" name="ques-two" value="3" />
                  <label htmlFor="nearly-everyday">Nearly Everyday</label>
                </div>
              </div>
              <div>
                <p>{Questions.anxiety[2].question}</p>
                <div id="column-one-item">
                  <input type="radio" id="not-at-all" name="ques-three" value="0" />
                  <label htmlFor="not-at-all">Not at all</label>

                  <input type="radio" id="several-days" name="ques-three" value="1" />
                  <label htmlFor="several-days">Several Days</label>

                  <input type="radio" id="more-than-half-the-days" name="ques-three" value="2" />
                  <label htmlFor="more-than-half-the-days">More than Half the Days</label>

                  <input type="radio" id="nearly-everyday" name="ques-three" value="3" />
                  <label htmlFor="nearly-everyday">Nearly Everyday</label>
                </div>
              </div>
              <div>
                <p>{Questions.anxiety[3].question}</p>
                <div id="column-one-item">
                  <input type="radio" id="not-at-all" name="ques-four" value="0" />
                  <label htmlFor="not-at-all">Not at all</label>

                  <input type="radio" id="several-days" name="ques-four" value="1" />
                  <label htmlFor="several-days">Several Days</label>

                  <input type="radio" id="more-than-half-the-days" name="ques-four" value="2" />
                  <label htmlFor="more-than-half-the-days">More than Half the Days</label>

                  <input type="radio" id="nearly-everyday" name="ques-four" value="3" />
                  <label htmlFor="nearly-everyday">Nearly Everyday</label>
                </div>
              </div>
              <div>
                <p>{Questions.anxiety[4].question}</p>
                <div id="column-one-item">
                  <input type="radio" id="not-at-all" name="ques-five" value="0" />
                  <label htmlFor="not-at-all">Not at all</label>

                  <input type="radio" id="several-days" name="ques-five" value="1" />
                  <label htmlFor="several-days">Several Days</label>

                  <input type="radio" id="more-than-half-the-days" name="ques-five" value="2" />
                  <label htmlFor="more-than-half-the-days">More than Half the Days</label>

                  <input type="radio" id="nearly-everyday" name="ques-five" value="3" />
                  <label htmlFor="nearly-everyday">Nearly Everyday</label>
                </div>
              </div>
              <div>
                <p>{Questions.anxiety[5].question}</p>
                <div id="column-one-item">
                  <input type="radio" id="not-at-all" name="ques-six" value="0" />
                  <label htmlFor="not-at-all">Not at all</label>

                  <input type="radio" id="several-days" name="ques-six" value="1" />
                  <label htmlFor="several-days">Several Days</label>

                  <input type="radio" id="more-than-half-the-days" name="ques-six" value="2" />
                  <label htmlFor="more-than-half-the-days">More than Half the Days</label>

                  <input type="radio" id="nearly-everyday" name="ques-six" value="3" />
                  <label htmlFor="nearly-everyday">Nearly Everyday</label>
                </div>
              </div>
              <div>
                <p>{Questions.anxiety[6].question}</p>
                <div id="column-one-item">
                  <input type="radio" id="not-at-all" name="ques-seven" value="0" />
                  <label htmlFor="not-at-all">Not at all</label>

                  <input type="radio" id="several-days" name="ques-seven" value="1" />
                  <label htmlFor="several-days">Several Days</label>

                  <input type="radio" id="more-than-half-the-days" name="ques-seven" value="2" />
                  <label htmlFor="more-than-half-the-days">More than Half the Days</label>

                  <input type="radio" id="nearly-everyday" name="ques-seven" value="3" />
                  <label htmlFor="nearly-everyday">Nearly Everyday</label>
                </div>
              </div>
              <div>
                <p>{Questions.depression[0].question}</p>
                <div id="column-one-item">
                  <input type="radio" id="not-at-all" name="ques-eight" value="0" />
                  <label htmlFor="not-at-all">Not at all</label>

                  <input type="radio" id="several-days" name="ques-eight" value="1" />
                  <label htmlFor="several-days">Several Days</label>

                  <input type="radio" id="more-than-half-the-days" name="ques-eight" value="2" />
                  <label htmlFor="more-than-half-the-days">More than Half the Days</label>

                  <input type="radio" id="nearly-everyday" name="ques-eight" value="3" />
                  <label htmlFor="nearly-everyday">Nearly Everyday</label>
                </div>
              </div>
              <button type="submit" id="submit-btn" value="result" onClick={this.handleScore}>SUBMIT</button>
            </div>


          </form>
        </div>
      </div>
    );
  }
}

export default Test