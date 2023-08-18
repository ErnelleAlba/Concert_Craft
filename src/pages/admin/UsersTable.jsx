import DataTable from "datatables.net-autofill-bs5"
import AdminPanelHeader from "../../components/AdminPanel/AdminPanelHeader"
import AdminPanelSideNav from "../../components/AdminPanel/AdminPanelSideNav"
import "./UsersTable.css"
import { useEffect } from "react"

function UsersTable() {

    const table = () => {
        new DataTable ('#customers-table',{
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
        document.title = "Customers table | Admin"
    }, [])

    return (
        <>
            <AdminPanelHeader />
            <div className="container-fluid d-flex flex-nowrap users-table-wrapper">
                <AdminPanelSideNav />
                <center className="pt-3 users-table-container">
                    <h1 className="text-uppercase fw-bold mb-2">Customers Table</h1>
                    <div className="w-100 mt-2">
                        <table id="customers-table" 
                        className="table table-bordered  border border-dark table-striped table-hover" 
                        style={{width:"100%"}}>
                            <thead className="table-dark border-light" >
                                <tr>
                                    <th>ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Age</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className="table-light border-dark">
                            </tbody>
                            <tfoot className="table-dark border-light">
                                <tr>
                                    <th>ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Age</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Address</th>
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

export default UsersTable
