import { useSelector } from "react-redux";
import BookingCard from "../components/BookingPage/BookingCard";

function BookingPage({id}) {
  const isLoading = useSelector(state => state.isLoading)

  return (
    <>
      <div className="modal fade bd-example-modal-xl" id={`bookingModal-${id}`} data-bs-keyboard="true" tabIndex="-1" aria-labelledby="bookingModal" aria-hidden="true">
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header bg-info text-light">
                <h1 className="modal-title fs-4">Booking Form</h1>
                <button type="button" className="btn py-2" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark fa-2xl " style={{color: "#ffffff"}}></i></button>
              </div>
              <div className="modal-body d-flex justify-content-center">
                {
                  isLoading ? <LoadingIcon />: <BookingCard id={id}/>
                }
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default BookingPage