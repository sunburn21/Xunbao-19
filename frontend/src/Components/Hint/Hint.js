import React, { Component } from "react";
import "../Rules/Rules.css";
import "tachyons";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import Xun2 from "../assets2/xun2.png";
import xunbao2 from "../assets2/xunbao2.png";
import Team from "../assets2/team.png";
import Home from "../assets1/home.svg";
import DB from "../assets2/db.jpg";
import DB2 from "../assets2/db2.png";
import Xunbao from "../assets2/xunbao.png";
import FB from "../assets1/fb.svg";
import Call from "../assets1/call.svg";
import Flag from "../assets1/flag.svg";
import Slogan from "../assets1/the-online-treasure.svg";
import Share from "../assets1/share.svg";
import About from "../assets1/about.svg";
import Correct from "../Correct/Correct.js";
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
  EmailShareButton
} from "react-share";

import axios from "axios";
import { api } from "../../Utilities/contants";
import { connect } from "react-redux";
import "./Hint.css";
class Hint extends Component {
  state = {
    hint: ""
  };
  componentDidMount() {
    console.log(this.props);
    axios({
      method: "get",
      url: `${api}/question/getHintForQuestion?questionId=${
        this.props.match.params.id
      }`,
      headers: {
        authorization: "Bearer " + `${this.props.token}`
      }
    })
      .then(res => {
        this.setState(state => ({
          hint: res.data
        }));
      })
      .catch(err => {
        console.log(err.response);
        this.setState(() => ({
          hint: err.response.data.details || err.response.data.message
        }));
      });
  }
  render() {
    return (
      <div className="backdrop ma0 ">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Hint</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <img className="backdropimage" alt="backgroound" src={DB2} />
        <div className="backdrop2 bg-transparent ">
          <div className="topoption   b--white">
            <NavLink to="/">
              <img className="svg1 home link grow pointer dim ma2" src={Home} />
            </NavLink>
            <NavLink to="/developers">
              <img className="svg1 link grow pointer dim ma2" src={Team} />
            </NavLink>
            <a href="https://www.facebook.com/Manan.Ymcaust/" target="_blank">
              <img
                className="svg1 link grow pointer dim ma2"
                alt="fb link"
                src={FB}
              />
            </a>
            <a
              href="https://zenith.elementsculmyca.com/#header-4"
              target="_blank"
            >
              <img
                className="svg1 link grow pointer dim ma2"
                alt="contact link"
                src={Call}
              />
            </a>
            <NavLink to="/leaderboard">
              <img
                className="svg1 link grow pointer dim ma2"
                alt="leaderboard link"
                src={Flag}
              />
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
              <p className="ques white">{this.state.hint}</p>
            </div>
          </div>
          <NavLink to="/question" headtoquestion>
            <p className="submit white w-20-ns w-50 f4-ns f6 cursive center ba b--white pa2 dim link pointer grow br-pill ">
              Head to the Question
            </p>
          </NavLink>
          <div className="flex justify-between">
            <div className="bottom1 ma2  b--white">
              <FacebookShareButton url={"http://xunbao.elementsculmyca.com/"}>
                <img
                  className="svg2 ma3 link grow pointer dim"
                  alt="sharing link"
                  src={Share}
                />
              </FacebookShareButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    token: state.auth.token
  };
};

export default connect(mapStateToProps)(Hint);
