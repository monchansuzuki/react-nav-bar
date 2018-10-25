import React,{Component} from 'react';
import '../css/nav-bar.css';
import Burger from '../image/burger.svg'
import {Link,NavLink} from 'react-router-dom'

class NavBar extends Component{

    state={
        burgerIsActive : false
    }

    toggleMenu = () => {
        console.log(this.state.burgerIsActive)
        this.state.burgerIsActive?(
            this.setState({
                burgerIsActive: false
            })
        ):(
            this.setState({
                burgerIsActive: true
            })
        )
    }

render(){
    return (
        <nav className="">
            <div className="header">
                <div className="logo">
                <Link to='/'>Romain Danna</Link>
                </div>
                <div className="toggle-menu">
                    <img src={Burger} alt="" onClick={this.toggleMenu}/>
                </div>
            </div>


            <ul className={this.state.burgerIsActive?('nav-container nav-container-active'):('nav-container')}>
                <li className="nav-link"><NavLink to='/model'>I am model</NavLink></li>
                <li className="nav-link"><NavLink to='/actor'>I am an actor</NavLink></li>
                <li className="nav-link"><NavLink to='/music'>I compose music</NavLink></li>
                <li className="nav-link"><NavLink to='/about'>About me</NavLink></li>
                <li className="nav-link"><NavLink to='/contact'>Contact me</NavLink></li>
            </ul>

        </nav>
    )}
};



export default NavBar;