import './newreleases.css'
import React from 'react'
import SongTile from './songTile'

function NewReleases({ data }) {
    
    return (
        <div className="newreleases">
            <h2 class="newreleases__heading">New releases</h2>
            <div className="newrelease__grid">
                {data.map((release) => <SongTile data={release} />)}
            </div>
        </div>
    )
}

export default NewReleases