import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AppStore } from './reducers/index.reducer';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import Navbar from './pages/Navbar';
import LoginPage from './pages/LoginPage';




interface AppState{
  isLoggedIn: boolean
}
export class App extends React.Component<any, AppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }



  checkForAuth = () => {
    if (localStorage.getItem("loggedIn")) {
      this.setState({ isLoggedIn: true });
    }
  }

  componentDidMount() {
    this.checkForAuth();
  }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Provider store={AppStore}>
              {isLoggedIn &&
                <>
                  <Route path="/profile" component={ProfilePage} />
                  <Route exact path="/" component={HomePage} />
                </>
              }
              {!isLoggedIn &&
                <Route path="*" component={LoginPage} />
              }
            </Provider>
          </Switch>
        </BrowserRouter>
      </>
    )
  }


}

export default App;
