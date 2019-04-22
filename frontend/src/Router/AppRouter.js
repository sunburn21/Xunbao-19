import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from "history/createBrowserHistory";
import Dashboard from '../Components/Dashboard/Dashboard';
import Winner from '../Components/Winner/Winner';
import Questions from '../Components/Questions/Questions.js';
import Leaderboard from '../Components/Leaderboard/Leaderboard.js';
import Rules from '../Components/Rules/Rules';
import Correct from '../Components/Correct/Correct';
import inCorrect from '../Components/inCorrect/inCorrect';
import Developers from '../Components/Developers/Developers';
import Hint from '../Components/Hint/Hint.js';
import Error from '../Components/Error.js';
import AdminForm from '../Components/admin/adminForm';
import CreateQuestionForm from '../Components/createQuestion/createQuestionForm';
export const history = createBrowserHistory();



class AppRouter extends Component {

  constructor(props) {
    super();
    this.state = {
      isCorrect: "true",
    }
  }


  render() {

    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" component={Winner} exact={true} />
            <Route path="/admin" component={AdminForm} />
            <Route path="/createQuestion" component={CreateQuestionForm} />
            <Route path="/rules" component={Rules} />
            <Route path="/question" component={Questions} />
            <Route path="/leaderboard" component={Leaderboard} />
            <Route path="/developers" component={Developers} />
            <Route path="/correct" component={Correct} />
            <Route path="/inCorrect" component={inCorrect} />
            <Route path="/developers" component={Developers} />
            <Route path="/hint/:id" component={Hint} />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default AppRouter;