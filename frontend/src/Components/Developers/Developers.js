import React, { Component } from 'react';
import './Developers.css';
import 'tachyons';
import { Helmet } from "react-helmet";
import { NavLink } from 'react-router-dom';
import DB from '../assets2/db.jpg';
import DB2 from '../assets2/db2.png';
import FB from '../assets1/fb.svg';
import Call from '../assets1/call.svg';
import Team from '../assets2/team.png';
import Home from '../assets1/home.svg';
import Flag from '../assets1/flag.svg';
import Share from '../assets1/share.svg';
import About from '../assets1/about.svg';
import Ravinder from '../assets2/ravinder.jpeg';
import Ravinder2 from '../assets2/ravinder2.jpeg';
import Sunny from '../assets2/sunny.PNG';
import Anshul from '../assets2/anshul.png';
import Ankit from '../assets2/ankit.jpeg';
import Prince from '../assets2/prince.jpeg';
import Neha from '../assets2/neha.jpeg';
import Logo from '../assets2/team.jpg';
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





class Developers extends Component {
	state = {}
	responseFacebook = (res) => {
		console.log(res);

	}
	onFbBtnClick = (data) => {
		console.log(data);
	}
	render() {
		return (
			<div className="backdrop ma0 ">
				<Helmet>
					<meta charSet="utf-8" />
					<title>Developers</title>
					<link rel="canonical" href="http://mysite.com/example" />
				</Helmet>
				<img className="backdropimage" alt="background" src={DB2} />
				<div className="backdrop2 bg-transparent ">
					<div className="topoption   b--white">
						<NavLink to="./">
							<img className="svg1 home link grow pointer dim ma2" src={Home} />
						</NavLink>
						<a href="https://www.facebook.com/Manan.Ymcaust/" target="_blank"><img className="svg1 ba br-pill link grow pointer dim ma2" alt="fb link" src={FB} /></a>
						<a href="https://zenith.elementsculmyca.com/#header-4" target="_blank"><img className="svg1 link grow pointer dim ma2" alt="contact link" src={Call} /></a>
						<NavLink to="/leaderboard">
							<img className="svg1 link grow pointer dim ma2" alt="leaderboard link" src={Flag} />
						</NavLink>

					</div>
					<div className="developers">
						<p className="white heading">Developing Team</p>
						<div className="photos ">
							<div className="ma2 grow white">
								<a target="_blank" href="http://manantechnosurge.com/member/8685844774/">
									<img className="ravinder ba bw2" src={Ravinder2} alt="dev1" />
								</a>
								<p className="name1">Ravinder Kumar</p>
								<p className="name2">Frontend Developer</p>
							</div>
							<div className="ma2 grow white">
								<a target="_blank" href="http://manantechnosurge.com/member/9582102567/">
									<img className="ravinder ba bw2" src={Sunny} alt="dev1" />
								</a>
								<p className="name1">Sunny Singh</p>
								<p className="name2">Fullstack Developer</p>
							</div>
							<div className="ma2 grow white">
								<a target="_blank" href="http://manantechnosurge.com/member/9910326642/">
									<img className="ravinder ba bw2" src={Anshul} alt="dev1" />
								</a>
								<p className="name1">Anshul Goyal</p>
								<p className="name2">Backend Developer</p>
							</div>
							<div className="ma2 grow white">
								<img className="ravinder ba bw2" src={Ankit} alt="dev1" />
								<p className="name1">Ankit Mittal</p>
								<p className="name2">UI/UX Designer</p>
							</div>
							<div className="ma2 grow white">
								<img className="ravinder ba bw2" src={Prince} alt="dev1" />
								<p className="name1">Prince Batra</p>
								<p className="name2">Team Coordinator</p>
							</div>
							<div className="ma2 grow white">
								<img className="ravinder ba bw2" src={Neha} alt="dev1" />
								<p className="name1">Neha Yadav</p>
								<p className="name2">Question Setter</p>
							</div>

						</div>
					</div>
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


export default Developers;