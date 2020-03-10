import React, { Component } from 'react';
import '../styles/fentity.css'
import { Route, Link, Redirect } from 'react-router-dom'

class Fentity extends Component {
    render() {
        // const fentity = this.props.state[this.props.match.params.fentities].find(t => t.name === this.props.match.params.name)
        // console.log(this.props.match)
        // console.log(this.props.state)

        const match = this.props.match
        const fentitiesCategory = match.params.fentities
        const name = match.params.name
    
        const fentity = this.props.state[fentitiesCategory].filter(f => {
            return f.name.toLowerCase() === name.toLowerCase()
        })[0]

        return !fentity ? <Redirect to="/" /> : ( 
            <div id="creature-container">
                <h1>{fentity.name}</h1>
                <div className="back-fentity"><Link to={"/directory/" + fentitiesCategory}>Back to {fentitiesCategory}</Link></div>
                <img src={fentity.imgUrl} alt=""/>
                <div className="title">Power:</div>
                <div className="power text"> {fentity.power}</div>
                <div className="other text">{fentity.other}</div>
            </div>
        )
    }
}

export default Fentity;