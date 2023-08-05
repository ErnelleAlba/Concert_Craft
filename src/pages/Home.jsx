import { useEffect } from "react"
import ConcertShowHome from "../components/HomePage/ConcertShowHome"
import HowItWorks from "../components/HomePage/HowItWorks"

function Home() {

  useEffect(() => {
    document.title = "Home | Concert Craft"
  }, [])

  return (
    <>
      <ConcertShowHome />
      <HowItWorks />
    </>
  )
}

export default Home
