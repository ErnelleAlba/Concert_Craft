import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ScheduleBooking from "./pages/ScheduleBooking"
import { Provider } from "react-redux"
import store from "./store/store"
import ContactUs from "./pages/ContactUs"
import AdminLogin from "./pages/admin/AdminLogin"
import BookingsTable from "./pages/admin/BookingsTable"
import ConcertsTable from "./pages/admin/ConcertsTable"
import UsersTable from "./pages/admin/UsersTable"
import PageNotFound from "./pages/PageNotFound"

function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/schedule-booking" element={<ScheduleBooking />}/>
              <Route path="/contact-us" element={<ContactUs />}/>
              <Route path="/admin" element={<AdminLogin />}/>
              <Route path="/admin/dashboard/bookings" element={<BookingsTable />}/>
              <Route path="/admin/dashboard/concerts" element={<ConcertsTable/>}/>
              <Route path="/admin/dashboard/users" element={<UsersTable />}/>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
