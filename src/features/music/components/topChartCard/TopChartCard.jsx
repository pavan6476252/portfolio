import { AudioPlayerContext } from '../../../providers/AudioPlayerProvider';
import './topchartcard.css'
import React, { useContext } from 'react'

function TopChartCard({ data }) {
    const { playAudio } = useContext(AudioPlayerContext);


const handlePlaySong = async (id) => {
    try {
        const url = `https://yt-music-fetch-server.vercel.app/api/audio?videoId=${id}`;
        const res =await fetch(url);
        const {audioUrl} = await res.json();
    console.log(audioUrl);
    alert("song fething ...")
        playAudio(audioUrl);
    } catch (e) {
        alert(e);
    }
};

    return (
        <div 
        onClick={()=>handlePlaySong(data.videoId)}
        class="topchartcard" width={data.thumbnails[1].width * 1.5}>
            <img src={data.thumbnails[1].url} width={data.thumbnails[1].width * 1.5} height={data.thumbnails[1].height * 1.5} alt="Avatar" className='topchartcard__img' />
            <div className="topchartcard__details">
                <h4 className='title'><b>{data.title}</b></h4>
                <p className='artist'>{data.artists[0].name}</p>
            </div>
        </div>
    )
}

export default TopChartCard