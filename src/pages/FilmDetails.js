import React from 'react';
import axios from 'axios';
import CharacterItem from '../components/CharacterItem'

export default class FilmDetails extends React.Component {
    constructor() {
        super();
        this.state = { 
            film: {},
            characters: [] };
    }

    async componentDidMount() {
        const apiUrl = `https://swapi.dev/api/films/${this.props.match.params.id}`
        let api = ''
        try {
            api = await axios.get(apiUrl)
        } catch {
            api = 'error'
        }
        // console.log(api)
        let characterList = api.data.characters.map( character => {
            return <CharacterItem key={character} url={character}/>
        })
        // this.getCharacters(api)
        this.setState({film: api.data, characters: characterList})
    }

    render () {
        return (
            <div>
                <h2>Star Wars Episode {this.state.film.episode_id}, {this.state.film.title}</h2>
                <h3>About:</h3>
                <p>{this.state.film.opening_crawl}</p>
                <h3>Release Date:</h3>
                <p>{this.state.film.release_date}</p>
                <ul>Characters: {this.state.characters}</ul>
            </div>
        )
    }
}