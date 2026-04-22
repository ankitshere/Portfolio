import React from 'react'
import Nav from './Components/Nav';
import MainRoutes from './routes/MainRoutes';
import SplashCursor from './Components/SplashCursor';

const App = () => {
  return (

    <div className='bg-gray-50 '> 

<SplashCursor
  DENSITY_DISSIPATION={3.5}
  VELOCITY_DISSIPATION={2}
  PRESSURE={0.1}
  CURL={3}
  SPLAT_RADIUS={0.2}
  SPLAT_FORCE={6000}
  COLOR_UPDATE_SPEED={10}
  SHADING
  RAINBOW_MODE={false}
  COLOR="#800080"
/>
      <Nav/>
      <MainRoutes/>
      
    </div>
  )
}

export default App  

