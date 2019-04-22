import React, { Component } from 'react';
import './Leaderboard.css';
import 'tachyons';
import axios from 'axios';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Xun2 from '../assets2/xun2.png';
import xunbao2 from '../assets2/xunbao2.png';
import Xunbao from '../assets2/xunbao.png';
import Team from '../assets2/team.png';
import Home from '../assets1/home.svg';
import DB from '../assets2/db.jpg';
import DB2 from '../assets2/db2.png';
import FB from '../assets1/fb.svg';
import Call from '../assets1/call.svg';
import Flag from '../assets1/flag.svg';
import Slogan from '../assets1/the-online-treasure.svg';
import Share from '../assets1/share.svg';
import About from '../assets1/about.svg';
import Face from '../assets2/j.jpeg';
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


const Leaders = (props) => {
	return (
		<div className="leader  b--white ">
			<div className="name">
				<p className="white f2-ns f5">{`${props.num}`}
				</p>
				<img className="face" src={`${props.user.user_id.image}`} />
				<div className="namemail ">
					<p className="white f3-ns f5 leadername  b--white"> {`${props.user.user_id.name}`}
					</p>
					<p className="white f5-ns f7 b--white"> {``}
					</p>
				</div>
			</div>
			<div className="score white">
				<p className="f2-ns f5">
					Score:{`${props.user.points}`}
				</p>
			</div>
		</div>

	)
}

class Leaderboard extends Component {
	state = {
		users: [],
		submissions: {

		}
	}
	componentDidMount() {
		axios({
			method: 'get',
			url: `${api}/leaderboard?limit=0&skip=0`,
			headers: {
				authorization: "Bearer " + this.props.token
			}
		})
			.then(res => {
				console.log(res);
				this.setState((state) => ({
					users: [...state.users, ...res.data]
				}), () => {
					console.log(this.state);
				})
			})
		axios({
			method: 'get',
			url: `${api}/home/stats`
		})
			.then((res) => {
				console.log(res);
				this.setState((state) => ({
					submissions: {
						...res.data
					}
				}), () => {
					console.log(this.state.submissions);
				})
			})
	}
	render() {
		return (
			<div className="backdrop ma0 ">
				<Helmet>
					<meta charSet="utf-8" />
					<title>Leaderboard</title>
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
					</div>
					<div className="logo ma2">
						<div className=" b--white w-100  ">
							<img className="xunbao  b--white " alt="main " src={Xunbao} />
						</div>
						<img className="slogan ma2" alt="slogan" src={Slogan} />
					</div>
					<div className="leaderboard  b--white">
						<div className="leaderheader  b--white">
							<p className=" f1-ns f4 roboto pa3 white">
								Leaderboard
								</p>
							<p className="white f3-ns f4 total">
								<span className="f1-ns f3 ">&#8721;</span>
								Total Submissions<br></br> {`${this.state.submissions.totalAnswers ? this.state.submissions.totalAnswers : '0'}`}
							</p>
						</div>
						{this.state.users.map((user, i) => (
							<Leaders user={user} num={i + 1} />
						))}
						<div className="leader  b--white ">
						</div>
						<div className="leader  b--white ">
						</div>
					</div>
					<div className="flex justify-between">
						<div className="bottom1 ma2  b--white">
							<FacebookShareButton url={"http://xunbao.elementsculmyca.com/"}><img className="svg2 ma3 link grow pointer dim" alt="sharing link" src={Share} /></FacebookShareButton>
							<NavLink to="./rules">
								<img className="svg2 ma3 link grow pointer dim" alt="info link" src={About} />
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

export default connect(mapStateToProps)(Leaderboard);