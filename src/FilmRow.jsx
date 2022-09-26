import React, { Component } from 'react'
import Fave from './Fave'

export default class FilmRow extends Component {

    handleDetailsClick = (film) => {
        console.log('Fetching details for', film.title)
    }

    render() {
        return (
            <div className='film-row' onClick={() => this.handleDetailsClick(this.props.film)}>
                <img src={'https://image.tmdb.org/t/p/w780/'+ this.props.film.poster_path} alt={this.props.film.title} />

                <div className="film-summary">
                    <h1>Title: {this.props.film.title}</h1>
                    <p>Year: {this.props.film.release_date.split('-')[0]}</p>
                </div>

                <Fave />
            </div>
        )
    }
}