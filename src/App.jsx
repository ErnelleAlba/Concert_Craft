import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import MealGallery from "./pages/MealGallery"
import MealInfo from "./pages/MealInfo"
import NavBar from "./components/NavBar"
import { Provider } from "react-redux"
import store from "./store/store"
import ContactUs from "./pages/ContactUs"
import LoginModal from "./components/Modal/LoginModal"

function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/meal-gallery" element={<MealGallery/>}/>
            <Route path="/meal/:id" element={<MealInfo/>}/>
            <Route path="/contact-us" element={<ContactUs/>}/>
            <Route path="/login" element={<LoginModal/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>

    </>
  )
}

export default App
