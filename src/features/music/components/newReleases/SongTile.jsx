import React, { useContext } from 'react'
import { AudioPlayerContext } from '../../../providers/AudioPlayerProvider';





function SongTile({ data }) {
    
 
const { playAudio } = useContext(AudioPlayerContext);


const handlePlaySong = async (id) => {
    try {
        const url = `https://yt-music-fetch-server.vercel.app/api/audio?videoId=${id}`;
        const res =await fetch(url);
        const {audioUrl} = await res.json();
        playAudio(audioUrl);
    } catch (e) {
        alert(e);
    }
};

    return (
        <div className="songtile" onClick={() => handlePlaySong(data.browseId)} >
            <div className="songtile__leading">

                <i className="bx bx-music"></i>
                <img src={data.thumbnails[0].url} alt="" srcset="" />
                <div className="songtile__title">
                    <h4>{data.title}</h4>
                    <h5>{data.year}</h5>
                </div>
            </div>
            <div className="songtile__tailing">
                <i className="bx bx-like"></i>
            </div>
        </div>
    )
}

export default SongTile