import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from 'react-loader-spinner';

export default class CharacterItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loading: true, character: {}, id: '' };
    }

    async componentDidMount() {
        const apiUrl = this.props.url
        let api = ''
        try {
            api = await axios.get(apiUrl)
        } catch {
            api = 'error'
        }
        this.setState({ character: api.data, loading: false, id: api.data.name })
    }

    render() {
        const loader = <Loader
            type="Puff"
            color="#00BFFF"
            height={20}
            width={20}
            timeout={3000}
        />
        return (
            <Link to={`/character/${this.state.id}`}>
                <div>
                    {this.state.loading ? loader : <li>{this.state.character.name}</li>}
                </div>
            </Link>
        )
    }
}