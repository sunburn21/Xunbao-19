import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Winner.css';
import 'tachyons';
import { Helmet } from "react-helmet";
import { NavLink } from 'react-router-dom';
import ReactFacebookLogin from 'react-facebook-login';
import axios from 'axios';
import { Tooltip, } from 'react-tippy';
import Xun2 from '../assets2/xun2.png';
import Xunbao from '../assets2/xunbao.png';
import Win from '../assets2/winner.jpg';
import Win2 from '../assets2/kartik.jpg';
import Win3 from '../assets2/vishal.JPG';
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




class Winner extends Component {
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
				
				<img className="backdropimage" alt="background" src={DB2} />
				<div className="backdrop2 bg-transparent ">
				<p className="winheader f1 ">Winners!</p>
					<div className="windiv1">
						<div className="windiv w-30  b--white">
							<p className="f2 winheader">Rank: 1</p>
							<p className="f4 white">Yash won a Headphone, T-shirt, Coupens and Goodies</p>
							<img className="w-50 ba  b--white bw2 br-100" src={Win} />
							<p className="f4 winheader">Yash Dhingra</p>

						</div>
						<div className="windiv w-30  b--white">
							<p className="f2 winheader">Rank: 2</p>
							<p className="f4 white ">Kartik won a Pendrive, T-shirt, Coupens and Goodies</p>
							<img className="w-50 h-20 ba b--white bw2 br-100" src={Win2} />
							<p className="f4 winheader">Kartik Bhatia</p>
						</div>
						<div className="windiv w-30  b--white">
							<p className="f2 winheader">Rank: 3</p>
							<p className="f4 white">Vishal Garg won a T-shirt, Coupens and Goodies</p>
							<img className="w-50 ba b--white bw2 br-100" src={Win3} />
							<p className="f4 winheader">Vishal Garg</p>
						</div>
					</div>

				</div>

			</div>
		);

	}
}


export default connect()(Winner);
