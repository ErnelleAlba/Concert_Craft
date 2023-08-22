import AdminPanelHeader from "../../components/AdminPanel/AdminPanelHeader"
import AdminPanelSideNav from "../../components/AdminPanel/AdminPanelSideNav"
import "./UsersTable.css"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import LoadingIcon from "../../components/LoadingIcon"
import axios from "axios"
import { setCustomers } from "../../store/customersReducers"
import { markLoading, unmarkLoading } from "../../store/isLoadingReducers"

function UsersTable() {
    const customers = useSelector(state => state.customers)
    const isLoading = useSelector(state => state.isLoading)
    const token = useSelector(state => state.token)
    const dispatch = useDispatch();


    const handleOnChange = async (e) => {
        dispatch(markLoading())
    
        const resUsername = await axios(`http://localhost:8000/api/v1/users?username=${e.target.value}`,
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        
        dispatch(setCustomers(resUsername.data.data.map(
            user => {
                return {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    age: user.age,
                    username: user.username,
                    email: user.email,
                    password: user.password,
                    phone: user.phone,
                    address: user.address
            }
            }
        )))
    
        dispatch(unmarkLoading())
        // console.log(e.target.value)
    }

    const handleUserDelete = async (userId) => {
        // console.log(userId)
        try {
                    await axios.delete(`http://localhost:8000/api/v1/users/${userId}`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        )
        window.location.reload(true)
        }   catch (err) {
            console.log(err)
        }

    }


    useEffect(() => {
        document.title = "Users table | Admin"
    }, [])

    return (
        <>
            <AdminPanelHeader />
            <div className="container-fluid d-flex flex-nowrap users-table-wrapper">
                <AdminPanelSideNav />
                <center className="pt-3 users-table-container">
                    <h1 className="text-uppercase fw-bold mb-2">Users Table</h1>
                    <div className="d-flex justify-content-start ms-2 mb-2 search-bar">
                        <div className="d-flex align-items-center bg-dark rounded py-1 px-2 ms-2 ">
                            <label htmlFor="search-form" className="col text-light me-2">Search by username:</label>
                            <input type="text" id="search-form" className="form-control" onChange={handleOnChange}/>
                        </div>
                    </div>
                    <div className="w-100 mt-2 admin-table">
                        <table id="customers-table" 
                        className="table table-bordered  border border-dark table-striped table-hover" 
                        style={{width:"100%"}}>
                            <thead className="table-dark border-light" >
                                <tr>
                                    <th>ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Age</th>
                                    <th>Username</th>
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
                                        <td colSpan="10"><center><LoadingIcon /></center></td>
                                    </tr>
                                    : 
                                    (
                                        customers.length 
                                        ? 
                                        customers.map(
                                            (user, index) => 
                                                <tr key={index}>
                                                    <th scope="row" >{user.id}</th>
                                                    <td>{user.firstName}</td>
                                                    <td>{user.lastName}</td>
                                                    <td>{user.age}</td>
                                                    <td>{user.username}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.password}</td>
                                                    <td>{user.phone}</td>
                                                    <td>{user.address}</td>
                                                    <td><button className="btn bg-danger text-light px-3" onClick={() => {handleUserDelete(user.id)}}><i className="fa-solid fa-trash-can"></i></button></td>
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
                                    <th>Username</th>
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
