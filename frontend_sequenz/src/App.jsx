// import { useState, useEffect } from "react";
// import {
//   Route,
//   BrowserRouter as Router,
//   Routes,
//   useLocation,
// } from "react-router-dom";
// import LoginPage from "./Pages/Login";
// import SignUpPage from "./Pages/SignUp";
// import { Provider } from "react-redux";
// import store from "./StateManagement/store";
// import Navbar from "./Components/Navbar";
// import Shop from "./Pages/Shop";
// import About from "./Pages/About";
// import Footer from "./Components/Footer";
// import Home from "./Pages/Home";
// import Loader from "./Components/Loader";

// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false);
//     }, 3000);
//   }, []);
//   return (
//     <>
//       {loading ? (
//         <Loader />
//       ) : (
//         <Provider store={store}>
//           <Router>
//             <Navbar />
//             <Routes>
//               <Route path="/" exact element={<LoginPage />} />
//               <Route path="/SignUpPage" exact element={<SignUpPage />} />
//               <Route path="/Home" exact element={<Home />} />
//               <Route path="/Shop" exact element={<Shop />} />
//               <Route path="/About" exact element={<About />} />
//             </Routes>
//             <Footer />
//           </Router>
//         </Provider>
//       )}
//     </>
//   );
// }

// export default App;



import { useState, useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import LoginPage from "./Pages/Login";
import SignUpPage from "./Pages/SignUp";
import { Provider } from "react-redux";
import store from "./StateManagement/store";
import Navbar from "./Components/Navbar";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Loader from "./Components/Loader";
import Cart from "./Pages/Cart";
import Delivery from "./Pages/Delivery";
import ContactPage from "./Pages/ContactUs";
import Product from './Pages/Product'

function App() {
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Provider store={store}>
          <Router>
            <Navbar />
            <Routes>
             {
                token ? <Route path="/" element={<Home />} /> : <Route path="/" element={<LoginPage />} />
              }
              <Route path="/SignUpPage" exact element={<SignUpPage />} />
              <Route path="/Home" exact element={<Home />} />
              <Route path="/Shop" exact element={<Shop />} />
              <Route path="/About" exact element={<About />} />
              <Route path="/Cart" exact element={<Cart />} />
              <Route path="/Delivery" exact element={<Delivery />} />
              <Route path="/Contact" exact element={<ContactPage />} />
              <Route path="/Product" exact element={<Product />} />

            </Routes>
            <Footer />
          </Router>
        </Provider>
      )}
    </>
  );
}

export default App;
