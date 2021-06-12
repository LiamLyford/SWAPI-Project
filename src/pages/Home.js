import React from 'react';
import axios from 'axios';
import FilmItem from '../components/FilmItem'

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            films: []
        };
    }

    async componentDidMount() {
        const apiUrl = 'https://swapi.dev/api/films/'
        let api = ''
        try {
            api = await axios.get(apiUrl)
        } catch {
            api = 'error'
        }
        let filmList = api.data.results
        let films = filmList
        .sort((a, b) => a.episode_id - b.episode_id)
        .map(
            film =>
            <FilmItem 
                name={film.title} 
                desc={film.opening_crawl}
                key={film.episode_id}
                id={film.url.slice(-2,-1)}/>
        )
        this.setState({films: films})
    }



    render() {
        return (
            <div className='container'>
                {this.state.films}
            </div>
        )
    }
}