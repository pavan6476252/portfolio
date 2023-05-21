import React, { createContext, useState } from 'react';

export const AudioPlayerContext = createContext();

export const AudioPlayerProvider = ({ children }) => {
    const [audioSource, setAudioSource] = useState('');
    const [isPlaying, setPlaying] = useState(false);

    const playAudio = (source) => {
        setAudioSource(source);
        setPlaying(false);
    };

    const pauseAudio = () => {
        setPlaying(false);
    }

    const stopAudio = () => {
        setAudioSource('');
        setPlaying(false);
    }

    return (
        <AudioPlayerContext.Provider value={
            {
                audioSource,
                isPlaying,
                playAudio,
                pauseAudio,
                stopAudio,
            }
        }
        >
            {children}
        </AudioPlayerContext.Provider>
    )
}