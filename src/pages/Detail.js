import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ButtonGoToHome} from "../components/ButtonGoToHome";

const API_KEY = 'b9393134';

export class Detail extends Component {
    state = {movie: {}, ok: ''};

    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    };

    _detailMovie({id}) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.setState({movie: res, ok: res['Response']})
            })
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this._detailMovie({id});
    }

    _renderResults() {
        const {Title, Poster, Actors, Metascore, Plot} = this.state.movie;
        return (
            <div className='has-text-centered'>
                {this.state.ok === "True"
                    ? <div>
                        <h1>{Title}</h1>
                        <img
                            alt={Title}
                            srcSet={Poster}/>
                        <h3>{Actors}</h3>
                        <span>{Metascore}</span>
                        <p>{Plot}</p>
                    </div>
                    : <p>Sorry! <span className="emoji" role="img" aria-labelledby="image-1">🐑&#128533;</span> Results
                        not
                        found!
                    </p>
                }
                <ButtonGoToHome/>
            </div>)
    }

    render() {
        return (
            this._renderResults()
        )
    }
}
