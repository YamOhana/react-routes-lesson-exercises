import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import Suggestions from './suggestions'
import '../styles/home.css'


class Home extends Component {

    constructor(){
        super()
        this.state = {
            input: "",
            firstSuggestion: "",
            seek: false
        }
    }


    change =(e) => {this.setState({input: e.target.value})}

    getSuggestions = (firstSuggestion) => {
        console.log(firstSuggestion);
        this.setState({firstSuggestion})
    }

    seek = () =>{this.setState({seek: true})}

    render() {
        return  this.state.seek ? <Redirect to={this.state.firstSuggestion} /> :(
            <div>
                <div id="u-input">
                    <input onKeyDown={(e) => { e.which === 13 ? this.seek() : null }} onChange={this.change} value={this.state.input} type="text" placeholder="Ask and you shall receive" />
                    <div id="button">Seek</div>
                    {this.state.input ? <Suggestions value={this.state.input} names={this.props.names} lastSuggestion={this.state.firstSuggestion} setSuggestions={this.getSuggestions} /> : null}
                </div>

                <h1 id="home-title">Your Adventure</h1>

                <div id="home-container">

                    <div id="world">
                        <span className="main-directory-text">World</span>
                        </div>

                    <div id="wizards"><Link to="/directory/wizards">
                        <span className="main-directory-text">Wizards</span></Link>
                        </div>

                    <div id="bestiary"><Link to="/directory/bestiary">
                        <span className="main-directory-text">Bestiary</span></Link>
                        </div>

                    <div id="potions">
                        <span className="main-directory-text">Potions</span>
                        </div>

                    <div id="deities">
                        <span className="main-directory-text">Deities</span>
                        </div>
                        
                </div>
            </div>
        );
    }
}

export default Home;