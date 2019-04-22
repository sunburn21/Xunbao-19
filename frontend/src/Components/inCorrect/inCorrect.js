import React, { Component } from 'react';
import '../Correct/Correct.css';
import 'tachyons';
import { NavLink } from 'react-router-dom';
import DB from '../assets2/db.jpg';
import DB2 from '../assets2/db2.png';
import FB from '../assets1/fb.svg';
import Call from '../assets1/call.svg';
import Flag from '../assets1/flag.svg';
import Team from '../assets2/team.png';
import Home from '../assets1/home.svg';
import Share from '../assets1/share.svg';
import About from '../assets1/about.svg';
import Group from '../assets1/Group 134.svg';
import Group2 from '../assets1/Group 135.svg';
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




class Correct extends Component {
	onNextClick = () => {
		history.push('/question');
	}
	render() {
		return (
			<div className="backdrop ma0 ">

				<img className="backdropimage" alt="backgroound" src={DB2} />
				<div className="backdrop2 bg-transparent ">
					<div className="topoption   b--white">
						<NavLink to="./">
					    	<img className="svg1 home link grow pointer dim ma2" src={Home} />
					    </NavLink>
					    <NavLink to="./developers">
							<img className="svg1 link grow pointer dim ma2"src={Team}/>
						</NavLink>
						<a href="https://www.facebook.com/Manan.Ymcaust/" target="_blank"><img className="svg1 ba br-pill link grow pointer dim ma2" alt="fb link" src={FB} /></a>
						<a href="https://zenith.elementsculmyca.com/#header-4" target="_blank"><img className="svg1 link grow pointer dim ma2" alt="contact link" src={Call} /></a>
						<NavLink to="./leaderboard">
							<img className="svg1 link grow pointer dim ma2" alt="leaderboard link" src={Flag} />
						</NavLink>
					</div>

					<div className="correctdiv">
						<img className="incorrect" src={Group2} onClick={this.onNextClick} />
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


export default Correct;