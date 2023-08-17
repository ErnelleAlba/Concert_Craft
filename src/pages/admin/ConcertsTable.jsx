import DataTable from "datatables.net-autofill-bs5"
import jszip from 'jszip'
DataTable.Buttons.jszip( jszip );

import pdfMake from 'pdfmake/build/pdfmake.min.js'
import 'pdfmake/build/vfs_fonts.js'

import 'datatables.net-responsive-bs5'
import 'datatables.net-fixedheader-bs5'
// import 'datatables.net-scroller-bs5'
import 'datatables.net-searchpanes-bs5'
import 'datatables.net-searchpanes-bs5/css/searchPanes.bootstrap5.min.css'
import 'datatables.net-buttons-bs5'
import 'datatables.net-buttons/js/buttons.colVis.mjs'
import 'datatables.net-buttons/js/buttons.html5.mjs'
import 'datatables.net-buttons/js/buttons.print.mjs'
import 'datatables.net-select-bs5'
import { useEffect } from "react"
import AdminPanelHeader from "../../components/AdminPanel/AdminPanelHeader"
import AdminPanelSideNav from "../../components/AdminPanel/AdminPanelSideNav"
import CreateConcertModal from "../../components/AdminPanel/CreateConcertModal";
import { Modal } from "bootstrap";

function ConcertsTable() {

  
  const table = () => {

    new DataTable ('#concerts-table',{
        dom: '<"d-flex justify-content-between flex-wrap-reverse gap-2 ms-1 me-1 mx-lg-1"Bl<"ms-1 me-1 me-lg-5"f>><"mx-1 px-0"rt><"d-flex justify-content-between px-2 px-lg-5"ip><"clear">',
        destroy: true,
        responsive: {
          details: {
            // display: DataTable.Responsive.display.modal({
            //     header: function (row) {
            //         var data = row.data();
            //         return 'Details for ' + data[1];
            //     }
            // }),
            renderer: DataTable.Responsive.renderer.tableAll({
                tableClass: 'table'
            })
          }
        },
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
        }, 'colvis', 
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
              title:  'Concerts List',
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
              title:  'Concerts List',
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
              title:  'Concerts List',
              exportOptions: {
                  modifier: {
                      page: 'current'
                  }
              }
            },
            {
              text: 'Add Concert',
              action: function ( e, dt, node, config ) {
                new Modal(document.getElementById('create-concert-modal')).show() ;
              }
            }  
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
    document.title = "Concerts Table"
}, [])

  return (
    <>
      <AdminPanelHeader />
      <div className="d-flex">
        <AdminPanelSideNav />
        <center className="pt-3 users-table-container">
          <h1 className="text-uppercase fw-bold mb-2">Concerts Table</h1>
          <div className="w-100 mt-2">
            <table id="concerts-table" 
            className="table table-bordered border border-dark table-striped table-hover" 
            style={{width:"100%"}}>
              <thead className="table-dark border-light" >
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>ImageURL</th>
                  <th>Description</th>
                  <th>Event Date</th>
                  <th>Place</th>
                  <th>Ticket Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="table-light border-dark">
                <tr>
                  <td>1</td>
                  <td>Mania the ABBA Tribute</td>
                  <td>https://images1.smtickets.com/images/portrait_07062023161535.jpg</td>
                  <td>Mania The ABBA Tribute has continued to tour the globe, enjoying great success, with ticket sales for most venues selling out long before the show hits town. The show has toured internationally in regions as far afield as Venezuela, North America, Tahiti, Mexico, Germany, France, Switzerland, Austria, Holland, Denmark, Sweden, Luxembourg, and many more, making this the world’s most successful touring ABBA show. Join in and enjoy all of your favorites including Mamma Mia, Voulez Vous, Dancing Queen, Winner Takes It All, Super Trouper and many more at this fantastic show.</td>
                  <td>August 25, 2023 7:00pm</td>
                  <td>Newport Performing Arts Theater</td>
                  <td>3,000</td>
                  <td><button className="btn bg-success text-light px-3 my-0 my-lg-2 mx-3 mx-lg-0"><i className="fa-solid fa-pen-to-square"></i></button><button className="btn bg-danger text-light px-3"><i className="fa-solid fa-trash-can"></i></button></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>LAUV The Between Albums Tour</td>
                  <td>https://images1.smtickets.com/images/portrait_20072023131119.jpg</td>
                  <td>Los Angeles-based artist Anson Seabra has generated over 1 billion streams on Spotify alone. After a successful first headline US tour in the Spring of ‘22, Anson joined Dean Lewis across a 25+ show European tour later that fall. All the while, Anson has consistently been releasing singles including “Peter Pan Was Right,” which has amassed 45M Spotify streams (1M in the first week). Each of his latest few releases have all charted in the top 3 on Asian DSP Western charts, including Kryptonite and I Can Love Anyone (As Long As It's You). Just recently, Anson wrapped up his own 15 show headline tour across Europe, the UK, and Ireland and as summer approaches, he plans to release more singles which will lead into a full-length album. Along with each single will be a visualizer that helps tell each story so beautifully</td>
                  <td>August 31, 2023 7:00pm</td>
                  <td>The Filinvest Tent Manila</td>
                  <td>2,950</td>
                  <td><button className="btn bg-success text-light px-3 my-0 my-lg-2 mx-3 mx-lg-0"><i className="fa-solid fa-pen-to-square"></i></button><button className="btn bg-danger text-light px-3"><i className="fa-solid fa-trash-can"></i></button></td>
                </tr>
              </tbody>
              <tfoot className="table-dark border-light">
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>ImageURL</th>
                  <th>Description</th>
                  <th>Event Date</th>
                  <th>Place</th>
                  <th>Ticket Price</th>
                  <th>Action</th>
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
