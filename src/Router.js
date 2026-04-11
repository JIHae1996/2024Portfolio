import './styles/common/index.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './Layout'
import Main from './routes/Main'
import CompanyPage from './routes/sub/00/CompanyPage'
import Hottracks from './routes/sub/01/Hottracks'

import AllstarEvent from './routes/sub/02/AllstarEvent'
import BusinessEvent from './routes/sub/02/BusinessEvent'
import LibraryEvent from './routes/sub/02/LibraryEvent'

import IllustrationFair from './routes/sub/03/IllustrationFair'
import GalaxyThemes from './routes/sub/03/GalaxyThemes'
import OtherDesign from './routes/sub/03/OtherDesign'

import GraphicArts from './routes/sub/04/GraphicArts'
function AppRouter() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="CompanyPage" element={<CompanyPage />} />
          <Route path="Hottracks" element={<Hottracks />} />

          <Route path="AllstarEvent" element={<AllstarEvent />} />
          <Route path="BusinessEvent" element={<BusinessEvent />} />
          <Route path="LibraryEvent" element={<LibraryEvent />} />

          <Route path="IllustrationFair" element={<IllustrationFair />} />
          <Route path="GalaxyThemes" element={<GalaxyThemes />} />
          <Route path="OtherDesign" element={<OtherDesign />} />

          <Route path="GraphicArts" element={<GraphicArts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
