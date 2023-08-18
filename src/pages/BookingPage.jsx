import BookingCard from "../components/BookingPage/BookingCard";

function BookingPage() {

    const bookingpageCard = [
    {
      id: 1,
      title: "Mania the ABBA Tribute",
      imageSource: "https://images1.smtickets.com/images/portrait_07062023161535.jpg",
      details: "Mania The ABBA Tribute has continued to tour the globe, enjoying great success, with ticket sales for most venues selling out long before the show hits town. The show has toured internationally in regions as far afield as Venezuela, North America, Tahiti, Mexico, Germany, France, Switzerland, Austria, Holland, Denmark, Sweden, Luxembourg, and many more, making this the world’s most successful touring ABBA show. Join in and enjoy all of your favorites including Mamma Mia, Voulez Vous, Dancing Queen, Winner Takes It All, Super Trouper and many more at this fantastic show.",
      tourDates: "Friday 25 Aug 2023, Newport Performing Arts Theater",
      time: "Event Starts: 8:00 pm",
      ticket: "  3,000",
    },
    ]
    const cardbook = bookingpageCard.map(
      (cardbook, index) => <BookingCard key={index} cardbook={cardbook} />
    );

  return (
    <>
      <div className="modal fade bd-example-modal-xl" id="bookingModal" data-bs-keyboard="true" tabIndex="-1" aria-labelledby="bookingModal" aria-hidden="true">
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header bg-info text-light">
                <h1 className="modal-title fs-4">Booking Form</h1>
                <button type="button" className="btn py-2" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark fa-2xl " style={{color: "#ffffff"}}></i></button>
              </div>
              <div className="modal-body d-flex justify-content-center">
              {cardbook}
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default BookingPage