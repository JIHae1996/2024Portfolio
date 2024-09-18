import './styles/common/index.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './Layout'
import Main from './routes/Main'
import Hottracks from './routes/sub/01/Hottracks'

import AllstarEvent from './routes/sub/02/AllstarEvent'
import BusinessEvent from './routes/sub/02/BusinessEvent'

import GalaxyThemes from './routes/sub/03/GalaxyThemes'
import OtherDesign from './routes/sub/03/OtherDesign'

import GraphicArts from './routes/sub/04/GraphicArts'
function AppRouter() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="Hottracks" element={<Hottracks />} />

          <Route path="AllstarEvent" element={<AllstarEvent />} />
          <Route path="BusinessEvent" element={<BusinessEvent />} />

          <Route path="GalaxyThemes" element={<GalaxyThemes />} />
          <Route path="OtherDesign" element={<OtherDesign />} />

          <Route path="GraphicArts" element={<GraphicArts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
