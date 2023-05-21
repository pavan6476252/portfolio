import React, { useState, useEffect } from 'react'
import Header from '../header/Header'
import Drawer from '../header/Drawer';
import TopCharts from '../topCharts/TopCharts';
import MusicPlayer from '../../../utils/MusicPlayer';
function Music() {
  const [data, setData] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    callAPI();
  }, []);

  async function callAPI() {
    setIsLoading(true)
    try {
      const response = await fetch("https://python-music-server.vercel.app/home")
      const data = await response.json();
      setData(data);
      setIsLoading(false)
    } catch (e) {
      setIsLoading(false);
      setError(true);
    }
  }
  return (
    <main style={{ display: 'flex', height: '100vh', overflow: 'hidden', width: '100vw' }}>
      <Drawer />
      <div style={{
        width: '100%', overflowY: 'scroll'
      }}>
        <div className="songsbody" style={{}}>

          <Header />
          {isLoading ? <h1>Loading</h1> : isError ? <h1>Error</h1> :

            data.map((data) => {
              if (data.title == "Quick picks") return <TopCharts data={data.contents} />
             

            })

          }
        
        </div>
        <MusicPlayer/>

      </div>
    </main>
  );
}

export default Music


