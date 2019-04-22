import React, { Component } from 'react';
import axios from 'axios';
import { history } from '../../Router/AppRouter';

export default class CreateQuestionForm extends Component {
  state = {
    question_body: {
      question_title: "",
      question_description: "",
      question_image: "",
      max_points: 0,
      negative: -1,
      level: 0,
      is_hint: false,
      is_golden: false,
      answers: []
    }
  }
  onTitleChange = (e) => {
    const question_title = e.target.value;
    this.setState((state) => ({
      question_body: {
        ...state.question_body,
        question_title
      }
    }));
  }
  onDescriptionChange = (e) => {
    const question_description = e.target.value;
    this.setState((state) => ({
      question_body: {
        ...state.question_body,
        question_description
      }
    }));
  }
  onImageLinkChange = (e) => {
    const question_image = e.target.value;
    this.setState((state) => ({
      question_body: {
        ...state.question_body,
        question_image
      }
    }));
  }
  onMaxPointsChange = (e) => {
    const max_points = e.target.value;
    this.setState((state) => ({
      question_body: {
        ...state.question_body,
        max_points
      }
    }))
  }

  onNegativeChange = (e) => {
    const negative = e.target.value;
    this.setState((state) => ({
      question_body: {
        ...state.question_body,
        negative
      }
    }))
  }

  onLevelChange = (e) => {
    const level = e.target.value;
    this.setState((state) => ({
      question_body: {
        ...state.question_body,
        level
      }
    }))
  }


  //====================Managing Answers===================
  onAnswersChange = (e) => {
    const answers = [...e.target.value.split('#').map((data) => ({
      value: data,
      points: 100
    }))];
    this.setState((state) => ({
      question_body: {
        ...state.question_body,
        answers: answers
      }
    }));
    console.log(answers);
  }

  answersValue = () => {
    const answers = this.state.question_body.answers.map((data) => (data.value)).join('#');
    return answers;
  }
  //=======================================================

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios.post('http://localhost:4000/api/admin/createQuestion', {
      ...this.state.question_body
    }, {
        headers: {
          authorization: "bearer " + localStorage.getItem('adminToken')
        }
      })
      .then((res) => {
        console.log(res.data);
        history.push('/question')
      })
  }


  render() {
    return (
      <div>
        <h1>Create a Question!</h1>
        <div>
          <input placeholder="Title" value={this.state.question_body.question_title} onChange={this.onTitleChange} type="text" />
        </div>
        <div>
          <textarea placeholder="Description" value={this.state.question_body.question_description} onChange={this.onDescriptionChange} name="" id="" cols="30" rows="5"></textarea>
        </div>
        <div>
          <textarea placeholder="Answers: Separated by a #" value={this.answersValue()} onChange={this.onAnswersChange} name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div>
          <input placeholder="Image Link" value={this.state.question_body.question_image} onChange={this.onImageLinkChange} type="text" />
        </div>
        <div>
          <input placeholder="Maximum Allowed Points" value={this.state.question_body.max_points} onChange={this.onMaxPointsChange} type="number" />
        </div>
        <div>
          <input placeholder="Negative points" value={this.state.question_body.negative} onChange={this.onNegativeChange} type="number" />
        </div>
        <div>
          <input placeholder="Level" type="number" value={this.state.question_body.level} onChange={this.onLevelChange} />
        </div>
        <div>
          <button onClick={this.onSubmit}>
            submit
          </button>
        </div>
      </div>
    )
  }
}