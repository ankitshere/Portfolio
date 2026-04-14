// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Work from '../Work'
// import HireMe from '../HireMe'
// import About from '../About'
// import Home from '../Home'

// const MainRoutes = () => {
//   return (
//     <Routes>
       
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About/>} />
//         <Route path="/work" element={<Work />} />
//         <Route path="/hireme" element={<HireMe />} />
      
//     </Routes>
//   )
// }

// export default MainRoutes

import { Route, Routes } from 'react-router-dom'
import Home from '../Home'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default MainRoutes