import React from 'react';
import { NavItem } from 'react-materialize';
import { Route, NavLink } from 'react-router-dom';

class LoginLink extends React.Component {
  state = {
    changePage : 0,
  }

  movedToPage(){
    this.setState({
      changePage : 1
    })
  }
  render() {
    const onPage = (window.location.href.includes("login"));
    console.log(onPage);
    return (
      <ul className = "right" >
        {!onPage ? <li onClick = {(e)=>this.movedToPage()}><NavLink to="/login">Login</NavLink></li> : <li onClick = {(e)=>this.movedToPage()}><NavLink to="/register">Register</NavLink></li>}
      </ul>
    );
  }
}

export default LoginLink;