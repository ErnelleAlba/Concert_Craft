import DataTable from "datatables.net-autofill-bs5"
import pdfMake from 'pdfmake/build/pdfmake.min.js'
import 'pdfmake/build/vfs_fonts.js'
import { useEffect } from "react"
import AdminPanelHeader from "../../components/AdminPanel/AdminPanelHeader"
import AdminPanelSideNav from "../../components/AdminPanel/AdminPanelSideNav"
import CreateConcertModal from "../../components/AdminPanel/CreateConcertModal";
import { Modal } from "bootstrap";
import { useDispatch, useSelector } from "react-redux"
import LoadingIcon from "../../components/LoadingIcon"
import { setConcerts } from "../../store/concertsReducers"
import { markLoading, unmarkLoading } from "../../store/isLoadingReducers"
import axios from "axios"

function ConcertsTable() {
  const concerts = useSelector(state => state.concerts)
  const isLoading = useSelector(state => state.isLoading)
  
  // const table = () => {

  //   new DataTable ('#concerts-table',{
  //       ajaxSource: "http://localhost:8000/api/v1/concerts",
  //       columns: [
  //         {data: "id"},
  //         {data: "title"},
  //         {data: "posterImageUrl"},
  //         {data: "description"},
  //         {data: "eventDate"},
  //         {data: "eventPlace"},
  //         {data: "ticketPrice"},
  //       ],
  //       // processing: true,
  //       // serverSide: true,
  //       dom: '<"d-flex justify-content-between flex-wrap-reverse gap-2 ms-1 me-1 mx-lg-1"Bl<"ms-1 me-1 me-lg-5"f>><"mx-1 px-0"rt><"d-flex justify-content-between px-2 px-lg-5"ip><"clear">',
  //       destroy: true,
  //       responsive: {
  //         details: {
  //           display: DataTable.Responsive.display.modal({
  //               header: function (row) {
  //                   var data = row.data();
  //                   return 'Details for ' + data[1];
  //               }
  //           }),
  //           renderer: DataTable.Responsive.renderer.tableAll({
  //               tableClass: 'table'
  //           })
  //         }
  //       },
  //       paging: false,
  //       scrollCollapse: true,
  //       scrollY: '63vh',
  //       scrollX: true,
  //       // scroller: true,
  //       fixedHeader: true,
  //       select: true,
  //       language: {
  //           decimal: '.',
  //           thousands: ',',
  //           searchPanes: {
  //               clearMessage: 'Clear All',
  //               collapse: 'Filter',
  //           }
  //       },
  //       buttons: [
  //           {
  //           extend: 'searchPanes',
  //           config: {
  //             cascadePanes: true,
  //             responsive: true,
  //             viewTotal: true,
  //             collapse: false,
  //             controls: true,
  //             layout: 'columns-1',
  //             initCollapsed: true,
  //             orderable: true,
  //             i18n: {
  //               title: {
  //                 _: 'Filters Selected - %d',
  //                 0: 'No Filters Selected',
  //                 1: 'One Filter Selected'
  //               },
  //               count: '{total} found',
  //               countFiltered: '{shown} found',
  //               emptyMessage: "</i></b>EMPTY</b></i>",
  //               emptyPanes: 'There are no panes to display. :/',
  //               loadMessage: 'Loading filtering options...'
  //             },
  //           },
  //       }, 'colvis', 
  //       {
  //         extend: 'copy',
  //         key: {
  //           key: 'c',
  //           altkey: true
  //         }
  //       },
  //           {
  //             extend: 'print',
  //             title:  'Ticket Buyers',
  //             key: {
  //                 key: 'p',
  //                 altkey: true
  //             }
  //           },
  //           {
  //             extend: 'pdfHtml5',
  //             // messageTop: 'Title string',
  //             text: 'Save in PDF',
  //             // orientation: 'landscape',
  //             title:  'Concerts List',
  //             pageSize: 'A3',
  //             download: 'open',
  //             exportOptions: {
  //                 modifier: {
  //                     page: 'current'
  //                 },
  //                 footer: true,
  //             }
  //           }, 
  //           {
  //             extend: 'excelHtml5',
  //             text: 'Save in Excel',
  //             title:  'Concerts List',
  //             // messageTop: '',
  //             // messageBottom:'',
  //             autoFilter: true,
  //             exportOptions: {
  //                 modifier: {
  //                     page: 'current',
  //                     header: true,
  //                     footer: true,
  //                 }
  //             }
  //           },
  //           {
  //             extend: 'csvHtml5',
  //             text: 'Save in CSV',
  //             title:  'Concerts List',
  //             exportOptions: {
  //                 modifier: {
  //                     page: 'current'
  //                 }
  //             }
  //           },
  //           {
  //             text: 'Add Concert',
  //             action: function ( e, dt, node, config ) {
  //               new Modal(document.getElementById('create-concert-modal')).show() ;
  //             }
  //           }  
  //       ],
  //   // columnDefs: [
  //   //     {
  //   //         searchPanes: {
  //   //             orderable: true
  //   //         },
  //   //         targets: [0,1,2,]
  //   //     }
  //   // ]
    
  // });
  // }

  const dispatch = useDispatch();

  const handleOnChange = async (e) => {
    dispatch(markLoading())

    const resTitle = await axios(`http://localhost:8000/api/v1/concerts?title=${e.target.value}`)
    
      dispatch(setConcerts(resTitle.data.data.map(
      concert => {
        return {
          id: concert.id,
          title: concert.title,
          posterImageUrl: concert.posterImageUrl,
          description: concert.description,
          eventPlace: concert.eventPlace,
          eventDate: concert.eventDate,
          ticketPrice: concert.ticketPrice,
        }
      }
    )))

    dispatch(unmarkLoading())
    // console.log(e.target.value)
  }

  useEffect(() => {
    // table()
    document.title = "Concerts Table | Admin"
}, [])

  return (
    <>
      <AdminPanelHeader />
      <div className="d-flex">
        <AdminPanelSideNav />
        <center className="pt-3 users-table-container">
          <h1 className="text-uppercase fw-bold mb-2">Concerts Table</h1>
          <div className="w-100 mt-2">
            <div className="d-flex justify-content-start ms-2 mb-2">
              <button className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#create-concert-modal">Add Concert</button>
              <CreateConcertModal />
              <div className="d-flex align-items-center bg-dark rounded py-1 px-2 ms-2 ">
                <label htmlFor="search-form" className="col text-light">Search:</label>
                <input type="text" id="search-form" className="form-control" onChange={handleOnChange}/>
              </div>
              
            </div>
            <table id="concerts-table" 
            className="table table-bordered border border-dark table-striped table-hover" 
            style={{width:"100%"}}>
              <thead className="table-dark border-light" >
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Title</th>
                  <th scope="col">ImageURL</th>
                  <th scope="col">Description</th>
                  <th scope="col">Event Date</th>
                  <th scope="col">Place</th>
                  <th scope="col">Ticket Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody className="table-light border-dark">
                {
                  isLoading 
                  ?
                  <tr>
                    <td colSpan="8"><center><LoadingIcon /></center></td>
                  </tr>
                  : (
                    concerts.length 
                    ? 
                    concerts.map((concert, index) => 
                    <tr key={index}>
                      <th scope="row">{concert.id}</th>
                      <td>{concert.title}</td>
                      <td>{concert.posterImageUrl}</td>
                      <td>{concert.description}</td>
                      <td>{concert.eventDate}</td>
                      <td>{concert.eventPlace}</td>
                      <td>{concert.ticketPrice}</td>
                      <td>
                        <button className="btn btn-success">
                          <i className="fa-solid fa-pen-to-square"></i></button>
                        <button className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
                      </td>
                    </tr>) 
                    : 
                    <tr>
                      <td colSpan="8" className="text-center">No data found</td>
                    </tr>
                  )
                }

              </tbody>
              <tfoot className="table-dark border-light">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Title</th>
                  <th scope="col">ImageURL</th>
                  <th scope="col">Description</th>
                  <th scope="col">Event Date</th>
                  <th scope="col">Event Place</th>
                  <th scope="col">Ticket Price</th>
                  <th scope="col">Action</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </center>
      </div>
    <CreateConcertModal/>
    </>
  )
}

export default ConcertsTable
