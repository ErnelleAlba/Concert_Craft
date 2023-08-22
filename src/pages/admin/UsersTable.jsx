import AdminPanelHeader from "../../components/AdminPanel/AdminPanelHeader"
import AdminPanelSideNav from "../../components/AdminPanel/AdminPanelSideNav"
import "./UsersTable.css"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import LoadingIcon from "../../components/LoadingIcon"

function UsersTable() {
    const customers = useSelector(state => state.customers)
    const isLoading = useSelector(state => state.isLoading)


    useEffect(() => {
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
