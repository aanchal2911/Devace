import React from 'react'
const Resources = () => {
  return (
    <div id="resources" className="page">
        <div id="resources-card">
            <div id="resource-card-header">
                <h3>DEVACE STATION</h3>
            </div>
            <div id="resource-options">
              <div className='grid-container'>
                <div className='videos'>
                  <div className='grid' style={{marginBottom:14}}> 
                    <img className='youtube' src='/icons/video.svg' style={{ width: 80, height: 40 }} alt="Logo1"></img>
                    <h3>Videos</h3> 
                  </div>
                  <a target="_blank" href="https://youtu.be/zPyg4N7bcHM" rel="noopener noreferrer"><button className="resource-buttons" id="soft-btn">Calm your Anxiety</button></a>
                  <a target="_blank" href="https://youtu.be/m3-O7gPsQK0" rel="noopener noreferrer"><button className="resource-buttons" id="nature">Relax</button></a>
                </div>
                <div className='podcasts'>
                  <div className='grid'> 
                  <img className='spotify img-re' src='/icons/podcast.svg' style={{ width: 50, height: 30 }} alt="Logo2"></img>
                    <h3>Podcasts</h3>
                  </div>
                    <a target="_blank" href="https://open.spotify.com/episode/6346fgpmoeHtbb3ZcPKtpi" rel="noopener noreferrer"><button className="resource-buttons" id="">Therapy Thoughts</button></a>
                    <a target="_blank" href="https://open.spotify.com/show/3x6BzveHkyYqOb9qo9GFDc" rel="noopener noreferrer"><button className="resource-buttons" id="">Peace Podcast</button></a>
                </div>
                <div className='activities'>
                  <div className='grid'> 
                  <img className='img-re' src='https://cdn-icons-png.flaticon.com/512/98/98755.png?w=360' height={40} width={40} alt="logo3"></img>
                    <h3>Activities</h3>
                  </div>
                  <a target="_blank" href="http://drawing.garden/" rel="noopener noreferrer"><button className="resource-buttons" id="silk-btn">Virtual Garden</button></a>
                  <a target="_blank" href="http://weavesilk.com/" rel="noopener noreferrer"><button className="resource-buttons" id="silk-btn">Weave Silk</button></a>
                </div>
                <div className='calming'>
                  <div className='grid'> 
                  <img className='img-re' src='https://cdn-icons-png.flaticon.com/512/157/157785.png' height={40} width={40} alt="logo4"></img>
                    <h3>Relaxing</h3>
                  </div>
                  <a target="_blank" href="http://www.pixelthoughts.co/#" rel="noopener noreferrer"><button className="resource-buttons" id="pixel-btn" >Pixel Thoughts</button></a>
                  <a target="_blank" href="https://quietkit.com/" rel="noopener noreferrer"><button className="resource-buttons" id="pixel-btn">Quiet Kit</button></a>
                </div>
              </div>      
            </div>
        </div>
        <div id="resource-page-image">
            <img id="imgHead2" src="/images/15.png" alt="messed-brain" />
        </div>
    </div>
  )
}

export default Resources