import React, { Component, useState, useEffect } from 'react';
//import {useHttp} from '../../hooks/http.hooks'
import * as ReactBootstrap from 'react-bootstrap'


const AnimeData = () => {

    /*constructor(props) {
        super(props)

        this.state = {
            anime: []
        }
    }

    async componentDidMount() {
        // Simple GET request using fetch
        const response = await fetch('/api/animes/1')
        const data = await response.json()
        .then (response => {
            console.log(response)
            this.setState({anime: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const { anime } = this.state
        return (
            <div className="text-center">
                Nime:
                {
                    anime ?
                    anime.map(anime => <div key={anime}>{anime.title}</div>) : null
                }
            </div>
        )
    }*/

    const [animeItem, setAnimeItem] = useState(null)
    const [loading, setLoading] = useState(false)

    const animeFunction = async () => {
        try {
            const response = await fetch('/api/animes/1')
            const data = await response.json()
            .then (response => {
                console.log(response)
                setAnimeItem(response.data)})
                setLoading(true);
            } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        animeFunction();
    }, [])

    return <div> Suka
    {loading ? (animeItem) : (<ReactBootstrap.Spinner animation="border" />)}
    </div>
}

export default AnimeData