import React, {Component} from 'react';
import {Title} from "../components/Title";
import {SearchForm} from "../components/SearchForm";
import {MoviesList} from "../components/MoviesList";

export class Home extends Component {
    state = {usedSearch: false, results: []};

    _handleResults = (res) => {
        this.setState({results: res, usedSearch: true})
    };

    _renderResults() {
        return this.state.results.length === 0
            ? <p>Sorry! <span className="emoji" role="img" aria-labelledby="image-1">&#128533;</span> Results not found!</p>
            : <MoviesList movies={this.state.results}/>

    }

    render() {
        return (
            <div>
                <Title> Search Movies </Title>
                <div className='SearchForm-wrapper'>
                    <SearchForm onResults={this._handleResults}/>
                </div>
                {this.state.usedSearch
                    ? this._renderResults()
                    : <small>Use the form to search a movie</small>
                }
            </div>
        );
    }
}
