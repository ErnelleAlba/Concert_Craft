import { useEffect } from "react"
import ConcertShowHome from "../components/HomePage/ConcertShowHome"
import HowItWorks from "../components/HomePage/HowItWorks"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

function Home() {

  useEffect(() => {
    document.title = "Home | Concert Craft"
  }, [])

  return (
    <>
      <NavBar />
      <ConcertShowHome />
      <HowItWorks />
      <Footer />
    </>
  )
}

export default Home
