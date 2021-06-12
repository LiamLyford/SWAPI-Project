import React from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';

export default class FilmDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            character: {},
        };
    }

    async componentDidMount() {
        const apiUrl = `https://swapi.dev/api/people/?search=${this.props.match.params.id}`
        let api = ''
        try {
            api = await axios.get(apiUrl)
        } catch {
            api = 'error'
        }
        this.setState({ character: api.data.results[0], loading: false })
    }

    render() {
        const loader = <Loader
            type="Puff"
            color="#00BFFF"
            height={20}
            width={20}
            timeout={3000}
        />
        let weight = this.state.character.mass
        weight += this.state.character.mass === 'unknown' ? '' : 'kg'
        return (
            this.state.loading ? loader : (
                <div>
                    <h2>{this.state.character.name}</h2>
                    <p>Eye Colour: {this.state.character.eye_color}</p>
                    <p>Hair Colour: {this.state.character.hair_color}</p>
                    <p>Height: {this.state.character.height}cm</p>
                    <p>Weight: {weight}</p>
                </div>
            )
        )
    }
}