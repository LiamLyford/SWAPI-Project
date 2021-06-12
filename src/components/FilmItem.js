import React from 'react';
import { Link } from 'react-router-dom'

export default class FilmItem extends React.Component {
    constructor() {
        super();
        this.state = { isShown: false };
    }

    render() {
        return (
            <Link to={`/film/${this.props.id}`}>
                <div>
                    <h1
                        className='film'
                        onMouseEnter={() => this.setState({ isShown: true })}
                        onMouseLeave={() => this.setState({ isShown: false })}>{this.props.name}</h1>
                    <p style={{ width: 500, display: this.state.isShown ? 'block' : 'none' }}>{this.props.desc}</p>
                </div>
            </Link>
        )
    }
}