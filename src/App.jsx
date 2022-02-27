import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";
// import Alert from "./components/layout/Alert";
import Search from "./components/users/Search";
export class App extends React.Component {
  state = {
    users: [],
    loading: false,
  };
  // async componentDidMount (){

  //   this.setState({ loading: true });
  //   const res = await axios.get(`https://api.github.com/users?client_id = ${process.env.REACT_APP_GITHUB_CLIENT_ID} & client_secret = ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   this.setState({ users: res.data, loading: false });

  // }

  // Searching Github users
  searchUsers = async (text) => {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id = ${process.env.REACT_APP_GITHUB_CLIENT_ID} & client_secret = ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false });
  };
  // Clearing user name from search box

  clearUsers = () => this.setState({ users: [], loading: false });

  // setAlert = (msg, type) =>
  // {
  //   this.setAlert({ alert: { msg, type } });
  //   setTimeout(() => this.setState({ alert: null }), 2000);
  // };
  render() {
    const { users, loading } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar title="Github finder" icon="fab fa-github" />
          <div className="container">
            <Routes>
              <Route exact path="/" render={(props) => <Fragment>


              </Fragment>} />
            </Routes>
            {/* <Alert alert = {this.state.alert} /> */}
            <Search
              searchUsers={this.searchUsers}
              clearUsers={this.clearUsers}
              showClear={users.length > 0 ? true : false}
            />
            <Users loading={loading} users={users} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
