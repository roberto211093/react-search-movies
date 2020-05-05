import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export class Movie extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired
    };

    render() {
        const {id, poster, title, year} = this.props;
        return (
            <Link to={`/detail/${id}`} className="card">
                <div className="card-image">
                    <figure className="image">
                        <img
                            alt={title}
                            srcSet={poster}/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{title}</p>
                            <p className="subtitle is-6">{year}</p>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}
