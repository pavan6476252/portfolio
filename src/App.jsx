import { RouterProvider, createBrowserRouter, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio";
import Music from "./features/music/components/home/Music";
import { AudioPlayerProvider } from "./features/providers/AudioPlayerProvider";


// const router = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element:

//         <Portfolio />,

//     },
//     {
//       path: "/music",
//       element:
//         <AudioPlayerProvider>
//           <Music />
//         </AudioPlayerProvider>,
//     },
//   ]
// )

export default function App() {


  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <Router>
        <AudioPlayerProvider>
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/music" element={<Music />} />
          </Routes>
        </AudioPlayerProvider>
      </Router>
    </>
  );
}