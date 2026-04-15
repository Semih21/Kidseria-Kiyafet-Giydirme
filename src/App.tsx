/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { StudioLayout } from './components/StudioLayout';
import { VideoStudio } from './pages/VideoStudio';
import { PhotoStudio } from './pages/PhotoStudio';
import { Catalog } from './pages/Catalog';
import { Gallery } from './pages/Gallery';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<StudioLayout />}>
            <Route path="/" element={<Navigate to="/video-studio" replace />} />
            <Route path="/video-studio" element={<VideoStudio />} />
            <Route path="/photo-studio" element={<PhotoStudio />} />
          </Route>
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
