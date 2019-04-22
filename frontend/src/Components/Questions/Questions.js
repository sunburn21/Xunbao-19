import React, { Component } from 'react';
import './Questions.css';
import 'tachyons';
import { NavLink } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Xun2 from '../assets2/xun2.png';
import xunbao2 from '../assets2/xunbao2.png';
import Xunbao from '../assets2/xunbao.png';
import DB from '../assets2/db.jpg';
import DB2 from '../assets2/db2.png';
import FB from '../assets1/fb.svg';
import Home from '../assets1/home.svg';
import Team from '../assets2/team.png';
import Call from '../assets1/call.svg';
import Flag from '../assets1/flag.svg';
import Slogan from '../assets1/the-online-treasure.svg';
import Share from '../assets1/share.svg';
import About from '../assets1/about.svg';
import Hint from '../assets1/Group 130.svg';
import Correct from '../Correct/Correct.js';
import { history } from '../../Router/AppRouter';
import axios from 'axios';
import { connect } from 'react-redux';
import {
	FacebookShareButton,
	GooglePlusShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	TelegramShareButton,
	WhatsappShareButton,
	PinterestShareButton,
	VKShareButton,
	OKShareButton,
	RedditShareButton,
	TumblrShareButton,
	LivejournalShareButton,
	MailruShareButton,
	ViberShareButton,
	WorkplaceShareButton,
	LineShareButton,
	EmailShareButton,
} from 'react-share';

import { api } from '../../Utilities/contants';


class Questions extends Component {
	state = {
		question_body: {

		},
		answer: ""
	}
	componentDidMount() {
		axios({
			method: "get",
			url: `${api}/question`,
			headers: {
				authorization: 'Bearer ' + `${this.props.token}`
			}
		})
			.then((res) => {
				this.setState((state) => ({
					question_body: {
						...state.question_body,
						...res.data.question_id
					}
				}))
				console.log(this.state.question_body);
			})
			.catch((err) => {
				this.setState((state) => ({
					question_body: {
						question_description: "NO MORE QUESTIONS FOR TODAY!"
					}
				}))
				console.log(err);
			})
	}
	onSubmit = (e) => {
		e.preventDefault();
		axios({
			method: "post",
			url: `${api}/question/checkAnswer`,
			data: {
				questionId: this.state.question_body._id,
				answer: this.state.answer
			},
			headers: {
				authorization: 'Bearer ' + `${this.props.token}`
			}
		})
			.then((res) => {
				console.log(res.data);
				if (res.data) {
					history.push('/correct');
				} else {
					history.push('/inCorrect');
				}
			})
	}
	onAnswerChange = (e) => {
		const answer = e.target.value;
		this.setState((state) => ({
			answer
		}))
	}
	render() {
		return (
			<div className="backdrop ma0 ">
				<Helmet>
					<meta charSet="utf-8" />
					<title>Question</title>
					<link rel="canonical" href="http://mysite.com/example" />
				</Helmet>
				<img className="backdropimage" alt="backgroound" src={DB2} />
				<div className="backdrop2 bg-transparent ">
					<div className="topoption   b--white">
						<NavLink to="./">
							<img className="svg1 home link grow pointer dim ma2" src={Home} />
						</NavLink>
						<NavLink to="./developers">
							<img className="svg1 link grow pointer dim ma2" src={Team} />
						</NavLink>
						<a href="https://www.facebook.com/Manan.Ymcaust/" target="_blank"><img className="svg1 ba br-pill link grow pointer dim ma2" alt="fb link" src={FB} /></a>
						<a href="https://zenith.elementsculmyca.com/#header-4" target="_blank"><img className="svg1 link grow pointer dim ma2" alt="contact link" src={Call} /></a>
						<NavLink to="/leaderboard">
							<img className="svg1 link grow pointer dim ma2" alt="leaderboard link" src={Flag} />
						</NavLink>
					</div>
					<div className="logo ma2">
						<div className=" b--white w-100  ">
							<img className="xunbao  b--white " alt="main " src={Xunbao} />
						</div>
						<img className="slogan ma2" alt="slogan" src={Slogan} />
					</div>
					<div className="quesbox bw1 shadow-5 ba">
						<div className="w-90-ns w-90 center ma2 pa1-ns">
							<p className="ques white"><span className="f3 kyu">&#10068;
							{this.props.token ? this.state.question_body.question_title : ""}

								<NavLink to={`./hint/${this.state.question_body._id}`}><img src={Hint} /></NavLink></span><br></br>
								{this.props.token ? this.state.question_body.question_description : "PLEASE GO TO HOME AND LOGIN TO SEE THE QUESTION"}
							</p>
							<input className="answer ma2 f5 w-70-ns w-90 ba b-white br-pill pa2" type="text" name="Answer" placeholder="Write your answer here..." onChange={this.onAnswerChange} value={this.state.answer} />
						</div>
					</div>
					<p className="submit white w-30-ns w-50 f4-ns f6 cursive center ba b--white pa2 dim link pointer grow br-pill" onClick={this.onSubmit}>
						SUBMIT
					</p>
					<div className="flex justify-between">
						<div className="bottom1 ma2  b--white">
							<FacebookShareButton url={"http://xunbao.elementsculmyca.com/"}><img className="svg2 ma3 link grow pointer dim" alt="sharing link" src={Share} /></FacebookShareButton>
							<NavLink to="./rules">
								<img className="ma3 link grow pointer dim" alt="info link" src={About} />
							</NavLink>
						</div>
					</div>

				</div>
			</div>
		);

	}
}

const mapStateToProps = (state, props) => {
	return ({
		token: state.auth.token
	})
}

export default connect(mapStateToProps)(Questions);