import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'






class Suggestions extends Component {
    constructor() {
        super()
        this.state = {
            firstSuggestion: ''
        }

    }
    updateFirstSuggestion = (link) => {
        if (this.props.lastSuggestion != link) {
            this.props.setSuggestions(link)
        }
    }
    handleSearch = () => {
        const namesObj = this.props.names
        const val = this.props.value.toLowerCase()
        const namesArr = Object.keys(namesObj).map(n => n.toLowerCase())
        const output = namesArr.filter(n => n.match(val)).map((n, i) => {
            let link = `/directory/${namesObj[n]}/${n}`
            i < 1 ? link !== this.updateFirstSuggestion(link) : null
            return < Link to={link} key={n} > <li class="suggestion">{n}</li></Link >
        })
        return output
    }


    render() {
        return (<ul>
            {this.handleSearch()}
        </ul>)
    }
}
export default Suggestions