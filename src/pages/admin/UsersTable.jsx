import DataTable from "datatables.net-autofill-bs5"
import pdfMake from 'pdfmake/build/pdfmake.min.js'
import 'pdfmake/build/vfs_fonts.js'
import AdminPanelHeader from "../../components/AdminPanel/AdminPanelHeader"
import AdminPanelSideNav from "../../components/AdminPanel/AdminPanelSideNav"
import "./UsersTable.css"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import LoadingIcon from "../../components/LoadingIcon"

function UsersTable() {
    const customers = useSelector(state => state.customers)
    const isLoading = useSelector(state => state.isLoading)

    // const table = () => {
    //     new DataTable ('#customers-table',{
    //         ajaxSource: 'http://localhost:8000/api/v1/customers',
    //         columns: [
    //             {data: "id"},
    //             {data: "firstName"},
    //             {data: "lastName"},
    //             {data: "age"},
    //             {data: "email"},
    //             {data: "password"},
    //             {data: "phone"},
    //             {data: "address"},
    //         ],
    //         // processing: true,
    //         // serverSide: true,
    //         dom: '<"d-flex justify-content-between flex-wrap-reverse gap-2 ms-1 me-1 mx-lg-1"Bl<"ms-1 me-1 me-lg-5"f>><"mx-1 px-0"rt><"d-flex justify-content-between px-2 px-lg-5"ip><"clear">',
    //         destroy: true,
    //         responsive: false,
    //         paging: false,
    //         scrollCollapse: true,
    //         scrollY: '63vh',
    //         scrollX: true,
    //         // scroller: true,
    //         fixedHeader: true,
    //         select: true,
    //         language: {
    //             decimal: '.',
    //             thousands: ',',
    //             searchPanes: {
    //                 clearMessage: 'Clear All',
    //                 collapse: 'Filter',
    //             }
    //         },
    //     buttons: [
    //                 {
    //                 extend: 'searchPanes',
    //                 config: {
    //                     cascadePanes: true,
    //                     responsive: true,
    //                     viewTotal: true,
    //                     collapse: false,
    //                     controls: true,
    //                     layout: 'columns-1',
    //                     initCollapsed: true,
    //                     orderable: true,
    //                     i18n: {
    //                         title: {
    //                             _: 'Filters Selected - %d',
    //                             0: 'No Filters Selected',
    //                             1: 'One Filter Selected'
    //                         },
    //                         count: '{total} found',
    //                         countFiltered: '{shown} found',
    //                         emptyMessage: "</i></b>EMPTY</b></i>",
    //                         emptyPanes: 'There are no panes to display. :/',
    //                         loadMessage: 'Loading filtering options...'
    //                     },
    //                 },
    //             },  'colvis', 
    //             {
    //                 extend: 'copy',
    //                 key: {
    //                     key: 'c',
    //                     altkey: true
    //                 }
    //             },
    //                 {
    //                     extend: 'print',
    //                     title:  'Ticket Buyers',
    //                     key: {
    //                         key: 'p',
    //                         altkey: true
    //                     }
    //                 },
    //                 {
    //                     extend: 'pdfHtml5',
    //                     // messageTop: 'Title string',
    //                     text: 'Save in PDF',
    //                     // orientation: 'landscape',
    //                     title:  'Ticket Buyers',
    //                     pageSize: 'A3',
    //                     download: 'open',
    //                     exportOptions: {
    //                         modifier: {
    //                             page: 'current'
    //                         },
    //                         footer: true,
    //                     }
    //                 }, 
    //                 {
    //                     extend: 'excelHtml5',
    //                     text: 'Save in Excel',
    //                     title:  'Ticket Buyers',
    //                     // messageTop: '',
    //                     // messageBottom:'',
    //                     autoFilter: true,
    //                     exportOptions: {
    //                         modifier: {
    //                             page: 'current',
    //                             header: true,
    //                             footer: true,
    //                         }
    //                     }
    //                 },
    //                 {
    //                     extend: 'csvHtml5',
    //                     text: 'Save in CSV',
    //                     title:  'Ticket Buyers',
    //                     exportOptions: {
    //                         modifier: {
    //                             page: 'current'
    //                         }
    //                     }
    //                 },  
    //             ],
    //     // columnDefs: [
    //     //     {
    //     //         searchPanes: {
    //     //             orderable: true
    //     //         },
    //     //         targets: [0,1,2,]
    //     //     }
    //     // ]
        
    //     });
    // }


    useEffect(() => {
        // table()
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
                                    <th>Password</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className="table-light border-dark">
                                {
                                    isLoading 
                                    ? 
                                    <tr>
                                        <td colSpan="8"><center><LoadingIcon /></center></td>
                                    </tr>
                                    : 
                                    (
                                        customers.length 
                                        ? 
                                        customers.map(
                                            (customer, index) => 
                                                <tr key={index}>
                                                    <td>{customer.id}</td>
                                                    <td>{customer.firstName}</td>
                                                    <td>{customer.lastName}</td>
                                                    <td>{customer.age}</td>
                                                    <td>{customer.email}</td>
                                                    <td>{customer.password}</td>
                                                    <td>{customer.phone}</td>
                                                    <td>{customer.address}</td>
                                                    <td><button className="btn bg-success text-light px-3 my-0 my-lg-2 mx-3 mx-lg-0"><i className="fa-solid fa-pen-to-square"></i></button><button className="btn bg-danger text-light px-3"><i className="fa-solid fa-trash-can"></i></button></td>
                                                </tr>
                                            )
                                        : 
                                        <tr>
                                            <td colSpan="8" className="text-center">No data found</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                            <tfoot className="table-dark border-light">
                                <tr>
                                    <th>ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Age</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <nav aria-label="table navigation">
                        <ul className="pagination">
                  
                            {/* <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                            </li> */}
                        </ul>
                    </nav>
                </center>
            </div>
        </>
    )
}

export default UsersTable
