import { useEffect, useState } from "react";
import './assets/App.css'
import MainLayout from "./components/MainLayout";
import NotFound from "./components/Errors/NotFound";
import Home from "./components/pages/Home";
import cursor from './files/code.png'
import Experience from "./components/pages/Experience";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Contact from "./components/pages/Contact";
import AboutMeLayout from "./components/pages/aboutMe/AboutMeLayout";
import ServicesLayout from "./components/pages/services/ServicesLayout";
import ErrorComp from "./components/Errors/ErrorComp";
import AboutMeDashboard from "./components/pages/aboutMe/AboutMeDashboard";
import Education from "./components/pages/aboutMe/Education";
import Programming from "./components/pages/aboutMe/Programming";
import WebDeveloping from "./components/pages/services/WebDeveloping";
import Design from "./components/pages/services/Design";
import MoreServices from "./components/pages/services/MoreServices";
import Math from "./components/pages/services/Math";

function App() {
  


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route errorElement={ErrorComp} path="" element={<MainLayout />}>
        <Route path="" index element={<Home />} />

        <Route path="/about" element={<AboutMeLayout />}>
          <Route index path="" element={<AboutMeDashboard />} />
          <Route path="education" element={<Education />} />
          <Route path="programming" element={<Programming />} />
        </Route>

        <Route path="/services" element={<ServicesLayout />}>
          <Route index path="" element={<WebDeveloping />} />
          <Route  path="math" element={<Math />} />
          <Route path="design" element={<Design />} />
          <Route path="more" element={<MoreServices />} />
        </Route>

        <Route path="/experience" element={<Experience />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
