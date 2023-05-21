export  const handlePlaySong = (audioUrl) => {
    localStorage.setItem('audioSource', `https://www.youtube.com/watch?v=${audioUrl}`);
    localStorage.setItem('isPlaying', true);
  };