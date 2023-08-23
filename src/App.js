import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const ScrollToTop = lazy(() => import("./components/forAll/ScrollToTop"));
const Header = lazy(() => import("./components/main/header/Header"));
const Footer = lazy(() => import("./components/main/Footer"));
const Home = lazy(() => import("./components/pages/home/Home"));
const Parichaya = lazy(() => import("./components/pages/parichaya/Parichaya"));
const ParichayaSubpage = lazy(() =>
  import("./components/pages/parichaya/ParichayaSubpage")
);
const PramukhKaryaharu = lazy(() =>
  import("./components/pages/pramukhKaryaharu/PramukhKaryaharu")
);
const PramukhKaryaharuSubpage = lazy(() =>
  import("./components/pages/pramukhKaryaharu/PramukhKaryaharuSubpage")
);
const Abalokan = lazy(() => import("./components/pages/abalokan/Abalokan"));
const AbalokanSubpage = lazy(() =>
  import("./components/pages/abalokan/AbalokanSubpage")
);
const Gallery = lazy(() => import("./components/pages/gallery/Gallery"));
const Contact = lazy(() => import("./components/pages/contact/Contact"));
const EnglishPages = lazy(() =>
  import("./components/pages/englishPages/EnglishPages")
);


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Suspense fallback=<div>Loading</div>>
          <ScrollToTop />
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="/parichaya/" element={<Parichaya />} />
              <Route
                path="/parichaya/:subLink"
                element={<ParichayaSubpage />}
              />
              <Route
                path="/pramukh-karyaharu/"
                element={<PramukhKaryaharu />}
              />
              <Route
                path="/pramukh-karyaharu/:subLink"
                element={<PramukhKaryaharuSubpage />}
              />
              <Route path="/abalokan/" element={<Abalokan />} />
              <Route path="/abalokan/:subLink" element={<AbalokanSubpage />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/inner-links/:subLink" element={<EnglishPages />} />
            </Route>
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
