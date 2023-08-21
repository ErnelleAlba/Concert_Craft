import DataTable from "datatables.net-autofill-bs5"
import pdfMake from 'pdfmake/build/pdfmake.min.js'
import 'pdfmake/build/vfs_fonts.js'
import { useEffect } from "react"
import AdminPanelHeader from "../../components/AdminPanel/AdminPanelHeader"
import AdminPanelSideNav from "../../components/AdminPanel/AdminPanelSideNav"

function BookingsTable() {

  const table = () => {
    new DataTable ('#bookings-table',{
        ajaxSource: "http://localhost:8000/api/v1/bookings",
        columns: [
          {data: "id"},
          {data: "customerId"},
          {data: "concertId"},
          {data: "seatPosition"},
          {data: "noOfTickets"},
          {data: "totalPrice"},
        ],
        // processing: true,
        // serverSide: true,
        dom: '<"d-flex justify-content-between flex-wrap-reverse gap-2 ms-1 me-1 mx-lg-1"Bl<"ms-1 me-1 me-lg-5"f>><"mx-1 px-0"rt><"d-flex justify-content-between px-2 px-lg-5"ip><"clear">',
        destroy: true,
        responsive: false,
        paging: false,
        scrollCollapse: true,
        scrollY: '63vh',
        scrollX: true,
        // scroller: true,
        fixedHeader: true,
        select: true,
        language: {
            decimal: '.',
            thousands: ',',
            searchPanes: {
                clearMessage: 'Clear All',
                collapse: 'Filter',
            }
        },
    buttons: [
                {
                extend: 'searchPanes',
                config: {
                    cascadePanes: true,
                    responsive: true,
                    viewTotal: true,
                    collapse: false,
                    controls: true,
                    layout: 'columns-1',
                    initCollapsed: true,
                    orderable: true,
                    i18n: {
                        title: {
                            _: 'Filters Selected - %d',
                            0: 'No Filters Selected',
                            1: 'One Filter Selected'
                        },
                        count: '{total} found',
                        countFiltered: '{shown} found',
                        emptyMessage: "</i></b>EMPTY</b></i>",
                        emptyPanes: 'There are no panes to display. :/',
                        loadMessage: 'Loading filtering options...'
                    },
                },
            },  'colvis', 
            {
                extend: 'copy',
                key: {
                    key: 'c',
                    altkey: true
                }
            },
                {
                    extend: 'print',
                    title:  'Ticket Buyers',
                    key: {
                        key: 'p',
                        altkey: true
                    }
                },
                {
                    extend: 'pdfHtml5',
                    // messageTop: 'Title string',
                    text: 'Save in PDF',
                    // orientation: 'landscape',
                    title:  'Booking Table',
                    pageSize: 'A3',
                    download: 'open',
                    exportOptions: {
                        modifier: {
                            page: 'current'
                        },
                        footer: true,
                    }
                }, 
                {
                    extend: 'excelHtml5',
                    text: 'Save in Excel',
                    title:  'Booking Table',
                    // messageTop: '',
                    // messageBottom:'',
                    autoFilter: true,
                    exportOptions: {
                        modifier: {
                            page: 'current',
                            header: true,
                            footer: true,
                        }
                    }
                },
                {
                    extend: 'csvHtml5',
                    text: 'Save in CSV',
                    title:  'Booking Table',
                    exportOptions: {
                        modifier: {
                            page: 'current'
                        }
                    }
                },  
            ],
    // columnDefs: [
    //     {
    //         searchPanes: {
    //             orderable: true
    //         },
    //         targets: [0,1,2,]
    //     }
    // ]
    
  });
  }

  useEffect(() => {
    table()
    document.title = "Bookings Table | Admin"
}, [])

  return (
    <>
      <AdminPanelHeader />
      <div className="d-flex">
        <AdminPanelSideNav />
        <center className="pt-3 users-table-container">
          <h1 className="text-uppercase fw-bold mb-2">Bookings Table</h1>
          <div className="w-100 mt-2">
            <table id="bookings-table" 
            className="table table-bordered border border-dark table-striped table-hover" 
            style={{width:"100%"}}>
              <thead className="table-dark border-light" >
                <tr>
                  <th>ID</th>
                  <th>Customer ID</th>
                  <th>Concert ID</th>
                  <th>Seat Position</th>
                  <th>No. of Tickets</th>
                  <th>Total Price</th>
                  {/* <th>Action</th> */}
                </tr>
              </thead>
              <tbody className="table-light border-dark">
              </tbody>
              <tfoot className="table-dark border-light">
                <tr>
                  <th>ID</th>
                  <th>Customer ID</th>
                  <th>Concert ID</th>
                  <th>Seat Position</th>
                  <th>No. of Tickets</th>
                  <th>Total Price</th>
                  {/* <th>Action</th> */}
                </tr>
              </tfoot>
            </table>
          </div>
        </center>
      </div>
      
    </>
  )
}

export default BookingsTable
