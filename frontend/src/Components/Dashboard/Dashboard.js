import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Dashboard.css';
import 'tachyons';
import { Helmet } from "react-helmet";
import { NavLink } from 'react-router-dom';
import ReactFacebookLogin from 'react-facebook-login';
import axios from 'axios';
import { Tooltip, } from 'react-tippy';
import Xun2 from '../assets2/xun2.png';
import Xunbao from '../assets2/xunbao.png';
import xunbao2 from '../assets2/xunbao2.png';
import DB from '../assets2/db.jpg';
import Home from '../assets1/home.svg';
import Team from '../assets2/team.png';
import DB2 from '../assets2/db2.png';
import Play from '../assets1/play2.svg';
import FB from '../assets1/fb.svg';
import Call from '../assets1/call.svg';
import Flag from '../assets1/flag.svg';
import Slogan from '../assets1/the-online-treasure.svg';
import Share from '../assets1/share.svg';
import About from '../assets1/about.svg';
import Next from '../assets1/next.svg';
import { login } from '../../actions/auth';
import DateCountdown from 'react-date-countdown-timer';
import { history } from '../../Router/AppRouter';
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




class Dashboard extends Component {
	state = {}
	responseFacebook = (res) => {
		console.log(res);
		const { accessToken, email, name, id, picture } = res;
		const { url } = picture.data;
		const user = {
			email,
			name,
			ffid: id,
			access_token: accessToken,
			image: url
		}
		axios({
			method: 'post',
			url: `${api}/user/login`,
			data: user
		})
			.then((res) => {
				console.log(res.data.token);
				this.props.dispatch(login(res.data.token));
				history.push('/rules');
			})
			.catch((err) => {
				console.log(err);
			})

	}
	onFbBtnClick = (data) => {
		console.log(data);
	}
	render() {
		return (
			<div className="backdrop ma0 ">
				<Helmet>
					<meta charSet="utf-8" />
					<title>Xunbao 19</title>
					<link rel="canonical" href="http://mysite.com/example" />
				</Helmet>
				<img className="backdropimage" alt="background" src={DB2} />
				<div className="backdrop2 bg-transparent ">
					<NavLink className="svg1" to="./developers">
					</NavLink>
					<div className="topoption   b--white">
						<NavLink className="svg1 link grow pointer dim ma2" to="./developers">
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
							<img className="xunbao b--white " alt="main " src={Xunbao} />
						</div>
						<img className="slogan ma2" alt="slogan" src={Slogan} />
					</div>
					<div className="login font">
					  Ends In : <DateCountdown dateTo="2019-04-10T18:30:00.000Z"></DateCountdown>
					</div>
					<div className="login">
						{/* <NavLink to="/question">
							<img className=" b--white play link pointer grow dim" alt="play button" src={Play} />
						</NavLink> */}
						<ReactFacebookLogin className="login"
							cssClass="my-facebook-button-class grow link dim pointer"
							appId="406801263455293"
                                                        isMobile={false}
							// autoLoad={true}
							fields="name,email,picture"
							onClick={this.onFbBtnClick}
							callback={this.responseFacebook}

						/>
					</div>
					<div className="flex justify-between mv3">
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


export default connect()(Dashboard);
