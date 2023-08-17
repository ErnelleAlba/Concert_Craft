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

function ConcertsTable() {

  
  const table = () => {

    new DataTable ('#concerts-table',{
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
                    title:  'Ticket Buyers',
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
                    title:  'Ticket Buyers',
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
                    title:  'Ticket Buyers',
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
            className="table table-bordered table-striped table-hover" 
            style={{width:"100%"}}>
              <thead className="table-dark" >
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
              <tbody className="table-light">
              </tbody>
              <tfoot className="table-dark">
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

    </>
  )
}

export default ConcertsTable
