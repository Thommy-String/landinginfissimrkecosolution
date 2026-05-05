/**
 * App.jsx — Router multi-landing
 * Base: /fabbricainfissi/
 *
 * Rotte:
 *  /                    → Home generica
 *  /preventivi          → Gruppo 1: Preventivi
 *  /infissi-pvc         → Gruppo 2: Materiale PVC
 *  /fabbrica-*          → Gruppo 3: Fabbrica/Produttore
 *  /posa-*              → Gruppo 4: Sostituzione & Posa
 *  /geo-*               → Gruppo 5: Geo-Pura
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout        from './layouts/MainLayout'
import GenericaPage      from './pages/GenericaPage'
import PreventiviPage    from './pages/PreventiviPage'
import PvcPage           from './pages/PvcPage'
import DynamicCityLanding from './pages/DynamicCityLanding'
import GeoMilano  from './pages/Geo/GeoMilano'
import GeoMonza   from './pages/Geo/GeoMonza'
import GeoComo    from './pages/Geo/GeoComo'
import GeoVarese  from './pages/Geo/GeoVarese'

function App() {
  return (
    <BrowserRouter basename="/fabbricainfissi/">
      <Routes>
        <Route element={<MainLayout />}>

          {/* ── Home ── */}
          <Route index element={<GenericaPage />} />

          {/* ── Gruppo 1: Preventivi ── */}
          <Route path="preventivi"       element={<PreventiviPage />} />

          {/* ── Gruppo 2: Prodotto PVC ── */}
          <Route path="infissi-pvc"      element={<PvcPage />} />

          {/* ── Gruppo 3: Fabbrica ── */}
          <Route path="fabbrica-milano"  element={<DynamicCityLanding intento="fabbrica" citta="milano"   />} />
          <Route path="fabbrica-monza"   element={<DynamicCityLanding intento="fabbrica" citta="monza"    />} />
          <Route path="fabbrica-como"    element={<DynamicCityLanding intento="fabbrica" citta="como"     />} />
          <Route path="fabbrica-varese"  element={<DynamicCityLanding intento="fabbrica" citta="varese"   />} />
          <Route path="fabbrica-generica" element={<DynamicCityLanding intento="fabbrica" citta="generica" />} />

          {/* ── Gruppo 4: Posa ── */}
          <Route path="posa-milano"      element={<DynamicCityLanding intento="posa" citta="milano"   />} />
          <Route path="posa-monza"       element={<DynamicCityLanding intento="posa" citta="monza"    />} />
          <Route path="posa-como"        element={<DynamicCityLanding intento="posa" citta="como"     />} />
          <Route path="posa-varese"      element={<DynamicCityLanding intento="posa" citta="varese"   />} />
          <Route path="posa-generica"    element={<DynamicCityLanding intento="posa" citta="generica" />} />

          {/* ── Gruppo 5: Geo-Pura ── */}
          <Route path="geo-milano"       element={<GeoMilano />} />
          <Route path="geo-monza"        element={<GeoMonza />} />
          <Route path="geo-como"         element={<GeoComo />} />
          <Route path="geo-varese"       element={<GeoVarese />} />

          {/* ── Catch-all ── */}
          <Route path="*" element={<GenericaPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
