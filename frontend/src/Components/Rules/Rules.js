import React from 'react';
import './Rules.css';
import 'tachyons';
import { NavLink } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Xun2 from '../assets2/xun2.png';
import xunbao2 from '../assets2/xunbao2.png';
import Xunbao from '../assets2/xunbao.png';
import DB from '../assets2/db.jpg';
import DB2 from '../assets2/db2.png';
import Team from '../assets2/team.png';
import Home from '../assets1/home.svg';
import FB from '../assets1/fb.svg';
import Call from '../assets1/call.svg';
import Flag from '../assets1/flag.svg';
import Slogan from '../assets1/the-online-treasure.svg';
import Share from '../assets1/share.svg';
import About from '../assets1/about.svg';
import Correct from '../Correct/Correct.js';
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





const Rules = () => {
	return (
		<div className="backdrop ma0 ">
			<Helmet>
				<meta charSet="utf-8" />
				<title>Rules</title>
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
						<p className="ques white">
							<ol>1. For every wrong answer there is negative marking.</ol>
							<ol>2. Every time someone before you gets right answer max points for that question lowers.</ol>
							<ol>3. Every hint lowers the max points of the question to 30.</ol>
							<ol>4. A question can have multiple answer with different weightage. </ol>
							<ol>5. No two person can have same points for the same question.</ol>
							<ol>6. Mininum points you can get on a right answer are 30.</ol>
							<ol>7. Max points you can get are 100 points for a right answer.</ol>
							<ol>8. You can get less than max points.</ol>
						</p>
					</div>
				</div>
				<NavLink to="./question">
					<p className="submit white w-20-ns w-50 f4-ns f6 cursive center ba b--white pa2 dim link pointer grow br-pill">
						Head to the Question
					</p>
				</NavLink>
				<div className="flex justify-between">
					<div className="bottom1 ma2  b--white">
						<FacebookShareButton url={"http://xunbao.elementsculmyca.com/"}><img className="svg2 ma3 link grow pointer dim" alt="sharing link" src={Share} /></FacebookShareButton>
					</div>
				</div>

			</div>
		</div>
	);
}


export default Rules;