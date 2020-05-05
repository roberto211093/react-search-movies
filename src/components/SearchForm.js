import React, {Component} from 'react';

const API_KEY = 'b9393134';

export class SearchForm extends Component {
    state = {inputMovie: ''};

    _handleChange = (e) => {
        this.setState({inputMovie: e.target.value});
    };

    _handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${this.state.inputMovie}`)
            .then(res => res.json())
            .then(res => {
                const {Search = [], totalResults = '0'} = res;
                console.log(Search, totalResults);
                this.props.onResults(Search);
            })
    };

    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input
                            className="input"
                            onChange={this._handleChange}
                            type="text"
                            placeholder="Movie to search..."/>
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}
