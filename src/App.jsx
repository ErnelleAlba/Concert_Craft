import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import MealGallery from "./pages/MealGallery"
import MealInfo from "./pages/MealInfo"
import NavBar from "./components/NavBar"
import { Provider } from "react-redux"
import store from "./store/store"
import ContactUs from "./pages/ContactUs"
import Footer from "./components/Footer"
import AdminLogin from "./pages/admin/AdminLogin"
import AdminPanel from "./pages/admin/AdminPanel"

function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/concert-craft-admin" element={<AdminLogin />}/>
            <Route path="/admin-panel" element={<AdminPanel />}/>
          </Routes>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/meal-gallery" element={<MealGallery />}/>
            <Route path="/meal/:id" element={<MealInfo />}/>
            <Route path="/contact-us" element={<ContactUs />}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
