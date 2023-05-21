import React, { useContext } from 'react'
import { AudioPlayerContext } from '../providers/AudioPlayerProvider'
import './musicplayer.css'
export default function MusicPlayer() {
    const { audioSource, isPlaying, pauseAudio, stopAudio } = useContext(AudioPlayerContext)
    return (
        <div className="music-player">
        {audioSource && (
          <>
            <audio src={audioSource} autoPlay={isPlaying} controls />
            <button onClick={pauseAudio}>Pause</button>
            <button onClick={stopAudio}>Stop</button>
          </>
        )}
      </div>
      
    )
}
