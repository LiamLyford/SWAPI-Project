import React from 'react';
import axios from 'axios';
import Character from '../components/Character'

export default class FilmDetails extends React.Component {
    constructor() {
        super();
        this.state = { 
            film: {},
            characters: [] };
    }
    
    // async callAPI(url) {
    //     const apiUrl = url
    //     let api = ''
    //     try {
    //         api = await axios.get(apiUrl)
    //     } catch {
    //         api = 'error'
    //     }
    //     // console.log(api.data)
    //     return api.data
    // }

    // async getCharacters(api) {
    //     let characterList = []
    //     for(let i = 0; i < api.data.characters.length; i++){
    //         this.callAPI(api.data.characters[i]).then(charData => {
    //             // console.log(charData)
    //             characterList.push(<p>{charData.name}</p>)
    //         })
    //     }
    //     // console.log(characterList)
    //     this.setState({characters: characterList})
    //     // console.log(this.state.characters)
    // }

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
            return <Character key={character} url={character}/>
        })
        // this.getCharacters(api)
        this.setState({film: api.data, characters: characterList})
    }

    render () {
        // console.log(this.state.characters)
        // let charList = this.state.characters ? this.state.characters.map(character => 
        //     <p>{character.name}</p>) : null
        return (
            <div>
                <p>Star Wars Episode {this.state.film.episode_id}, {this.state.film.title}</p>
                <ul>Characters: {this.state.characters}</ul>
            </div>
        )
    }
}