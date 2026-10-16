import Layout from './Layout.jsx'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Projects from './pages/Projects'
import Gallery from './pages/Gallery'
import Terms from './pages/Terms'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

// Route table (react-router v6 data-route shape, consumed by vite-react-ssg).
// Paths must match the `to` values in content.js `nav_links`. Every non-dynamic
// child path here is prerendered to its own static HTML file at build time; the
// `*` catch-all renders the same NotFound client-side; the server sends 404.html.
export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <Services /> },
      { path: 'about', element: <About /> },
      { path: 'projects', element: <Projects /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'terms', element: <Terms /> },
      { path: 'contact', element: <Contact /> },
      // Prerendered to 404.html, which Netlify serves WITH a 404 status for any
      // address that is not a real page (no SPA fallback: every real page is a file).
      { path: '404', element: <NotFound /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]
