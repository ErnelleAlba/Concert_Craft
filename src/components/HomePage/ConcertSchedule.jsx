import ConcertScheduleCard from "./ConcertScheduleCard";
import { Link } from "react-router-dom"
import "./ConcertShowHome.css"

function ConcertSchedule() {
  const concertsched = [
    {
      id: 1,
      title: "Mania the ABBA Tribute",
      imageSource: "https://images1.smtickets.com/images/portrait_07062023161535.jpg",
      details: "Mania The ABBA Tribute has continued to tour the globe, enjoying great success, with ticket sales for most venues selling out long before the show hits town. The show has toured internationally in regions as far afield as Venezuela, North America, Tahiti, Mexico, Germany, France, Switzerland, Austria, Holland, Denmark, Sweden, Luxembourg, and many more, making this the world’s most successful touring ABBA show. Join in and enjoy all of your favorites including Mamma Mia, Voulez Vous, Dancing Queen, Winner Takes It All, Super Trouper and many more at this fantastic show.",
      tourdates: "Friday 25 Aug 2023, Newport Performing Arts Theater",
      time: "Event Starts: 8:00 pm",
      ticket: "  P3,000",
    },
    {
      id: 2,
      title: "Moira Dela Torre Live in Davao",
      imageSource: "https://images1.smtickets.com/images/portrait_16052023123612.jpg",
      details: "A multi-awarded singer-songwriter who has been dubbed as the “Most Streamed Filipina Artist”, Moira has been making it as one of the most successful Filipino singer-songwriters in recent years. Since gaining mainstream recognition, she has been dropping hit after hit to the adoration of millions of fans worldwide. Having reached 1 billion total Spotify streams in just a few years, there seems to be no stopping her in this limelight.",
      tourdates: "February 3, 2023, Araneta Coliseum",
      time: "Event Starts: 7:00 pm",
      ticket: "  P9,500",
    },
    {
      id: 3,
      title: "Anson Seabra The Neverland Tour",
      imageSource: "https://images1.smtickets.com/images/portrait_20072023131119.jpg",
      details: "Los Angeles-based artist Anson Seabra has generated over 1 billion streams on Spotify alone. After a successful first headline US tour in the Spring of ‘22, Anson joined Dean Lewis across a 25+ show European tour later that fall. All the while, Anson has consistently been releasing singles including “Peter Pan Was Right,” which has amassed 45M Spotify streams (1M in the first week). Each of his latest few releases have all charted in the top 3 on Asian DSP Western charts, including Kryptonite and I Can Love Anyone (As Long As It's You). Just recently, Anson wrapped up his own 15 show headline tour across Europe, the UK, and Ireland and as summer approaches, he plans to release more singles which will lead into a full-length album.",
      tourdates: "September 11, 2023, The Filinvest Tent Manila",
      time: "Event Starts: 7:00 pm",
      ticket: "  P2,950",
    },
    {
      id: 4,
      title: "LAUV The Between Albums Tour",
      imageSource: "https://images1.smtickets.com/images/portrait_03052023134242.jpg",
      details: "Consistently converting the magic around him into generational anthems to the tune of 11 billion streams, the US pop sensation and storyteller extraordinaire launched onto the scene in 2015 with viral track ‘The Other’. Followed by his breakout smash ‘I Like Me Better’, which quickly amassed over 2 billion streams globally, earning sextuple-Platinum in the US and platinum in twelve other countries.",
      tourdates: "August 31, 2023, SM Mall of Asia Arena",
      time: "Event Starts: 7:00 pm",
      ticket: "  P3,950",
    },
    {
      id: 5,
      title: "Post Malone World Tour",
      imageSource: "https://images1.smtickets.com/images/portrait_11072023155933.jpg",
      details: "“Rock the Post Malone World Tour with If Yall Werent Here, Id Be Crying Clogs, Crocs! These stylish clogs celebrate the famous artist Post Malone and his world tour. With a unique design featuring the heartfelt lyrics ‘If Y’all Weren’t Here, I’d Be Crying,’ these Crocs capture the essence of his emotional performances. Crafted with high-quality materials, these clogs offer both comfort and a touch of musical flair. Whether you’re a dedicated Post Malone fan or simply love attending concerts, these ‘If Y’all Weren’t Here, I’d Be Crying’ Clogs are a perfect choice. Limited stock available – Order now to show your love for music and enjoy the comfort and style of Post Malone World Tour ‘If Y’all Weren’t Here, I’d Be Crying’ Clogs, Crocs!”",
      tourdates: "September 18, 2023, SM Mall of Asia Arena",
      time: "Event Starts: 7:00 pm",
      ticket: "  P8,250",
    },
    {
      id: 6,
      title: "Neck Deep Live in Manila 2023",
      imageSource: "https://images1.smtickets.com/images/portrait_19072023152507.jpg",
      details: "This September, kids will once again have a reason to sing, rejoice and jump in the pit because PULP Live World is bringing back one of the most energetic and infectious bands that have graced our shores. NECK DEEP returns to the Philippine concert stage on September 22, 2023, at the SM North EDSA Skydome.",
      tourdates: "September 22, 2023, SM CITY North EDSA, SKYDOME",
      time: "Event Starts: 6:00 pm",
      ticket: "  P4,000",
    },
    
  ]

  const concertCord = concertsched.map(
    (concertCord, index) => <ConcertScheduleCard key={index} concertCord={concertCord} /> //ConcertCard props
  );

  return (
    <>

      <div id="home-section-1" className="concert-show-container">
        <div className="concerts-container flex-wrap">
          {concertCord}
        </div>
      
      </div>
    </>
  )
}

export default ConcertSchedule
