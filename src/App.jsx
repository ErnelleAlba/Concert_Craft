import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ScheduleBooking from "./pages/ScheduleBooking"
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
            <Route path="/schedule-booking" element={<ScheduleBooking />}/>
            <Route path="/contact-us" element={<ContactUs />}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
