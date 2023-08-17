import { useFormik } from "formik"
import * as Yup from 'yup'
import "./CreateConcertModal.css"
import { Toast } from "bootstrap"

function CreateConcertModal() {

  const formik = useFormik({
    initialValues: {
      concertTitle: '',
      concertPhoto: '',
      description: '',
      eventDate: '',
      eventPlace: '',
      ticketPrice: '',
    },

    validationSchema: Yup.object({
      concertTitle: Yup.string().required("Concert title is required"),
      concertPhoto: Yup.string().required("Concert Poster is required"),
      description: Yup.string().required("Concert Description is required"),
      eventDate: Yup.string().required("Event date is required"),
      eventPlace: Yup.string().required("Event place title is required"),
      ticketPrice: Yup.number().integer("Must be a number").positive("Must be positive number").required("Ticket Price is required"),
    }),

    onSubmit: (value) => {
      console.log(value)
      new Toast(document.getElementById('concertToast')).show()
    },
  })

  return (
    <>      
      <div className="modal fade" 
        id="create-concert-modal" 
        data-bs-keyboard="true" 
        tabIndex="-1" 
        aria-labelledby="create-concert-modal" 
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content" 
            id="add-concert-modal">
            <div className="modal-header" 
              id="modal-header">
              <h1 className="modal-title fs-5" 
                id="staticBackdropLabel">Add Concert Form</h1>
              <button type="button" 
                className="add-concert-modal-close-btn" 
                data-bs-dismiss="modal" 
                aria-label="Close">
                  <i className="fa-solid fa-xmark fa-2xl"></i></button>
            </div>
            <div className="modal-body">
              <div className="toast-container position-fixed top-0 end-0 pe-3 pt-5 mt-3 ">
                <div id="concertToast" className="toast align-items-center text-bg-success border-0" role="alert" aria-live="assertive" aria-atomic="true">
                  <div className="d-flex">
                    <div className="toast-body">
                      Concert Added Successfully !
                    </div>
                    <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                  </div>
                </div>
              </div>
              
              <form autoComplete="off" 
                className="form-group" 
                onSubmit={formik.handleSubmit}
                noValidate>
                <div className="mb-1">
                  <label htmlFor="concertTitle" className="form-label">Title:</label>
                  <input type="text" 
                    id="concertTitle" 
                    className={formik.errors.concertTitle && formik.touched.concertTitle ? "is-invalid form-control" : "form-control"} 
                    placeholder="Enter concert title"
                    value={formik.values.concertTitle}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange} />
                  {
                    formik.errors.concertTitle && formik.touched.concertTitle 
                    ? 
                    <span className="text-danger">{formik.errors.concertTitle}</span> 
                    : 
                    null
                  }
                </div>
                <div className="mb-1">
                  <label htmlFor="concertPhoto" className="form-label">Upload Photo:</label>
                  <input type="file" 
                    id="concertPhoto"
                    accept="image/*"  
                    className={formik.errors.concertPhoto && formik.touched.concertPhoto ? "is-invalid form-control" : "form-control"} 
                    value={formik.values.concertPhoto}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange} />
                  {
                    formik.errors.concertPhoto && formik.touched.concertPhoto 
                    ? 
                    <span className="text-danger">{formik.errors.concertPhoto}</span> 
                    : 
                    null
                  }
                </div>
                <div className="mb-1">
                  <label htmlFor="description" className="form-label">Description:</label>
                  <textarea id="description" 
                    className={formik.errors.description && formik.touched.description ? "is-invalid form-control" : "form-control"} 
                    cols="30" 
                    rows="3" 
                    placeholder="Enter concert description"
                    value={formik.values.description}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange} />
                  {
                    formik.errors.description && formik.touched.description 
                    ? 
                    <span className="text-danger">{formik.errors.description}</span> 
                    : 
                    null
                  }
                </div>
                <div className="mb-1">
                  <label htmlFor="eventDate" className="form-label">Event Date:</label>
                  <input type="datetime-local" 
                    id="eventDate" 
                    className={formik.errors.eventDate && formik.touched.eventDate ? "is-invalid form-control" : "form-control"}
                    value={formik.values.eventDate}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}  />
                  {
                    formik.errors.eventDate && formik.touched.eventDate 
                    ? 
                    <span className="text-danger">{formik.errors.eventDate}</span> 
                    : 
                    null
                  }
                </div>
                <div className="mb-1">
                  <label htmlFor="eventPlace" className="form-label">Place:</label>
                  <input type="text" 
                    id="eventPlace" 
                    className={formik.errors.eventPlace && formik.touched.eventPlace ? "is-invalid form-control" : "form-control"} 
                    placeholder="Enter concert location"
                    value={formik.values.eventPlace}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange} />
                  {
                    formik.errors.eventPlace && formik.touched.eventPlace 
                    ? 
                    <span className="text-danger">{formik.errors.eventPlace}</span> 
                    : 
                    null
                  }
                </div>
                <div className="mb-3">
                  <label htmlFor="ticketPrice" className="form-label">Ticket Price:</label>
                  <div className="input-group">
                    <span className="input-group-text"><i className="fa-solid fa-peso-sign"></i></span>
                    <input type="number" 
                      id="ticketPrice" 
                      className={formik.errors.ticketPrice && formik.touched.ticketPrice ? "is-invalid form-control" : "form-control"} 
                      placeholder="Enter ticket price"
                      value={formik.values.ticketPrice}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}  />
                  </div>
                  {
                    formik.errors.ticketPrice && formik.touched.ticketPrice 
                    ? 
                    <span className="text-danger">{formik.errors.ticketPrice}</span> 
                    : 
                    null
                  }  
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary">Add Concert</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateConcertModal