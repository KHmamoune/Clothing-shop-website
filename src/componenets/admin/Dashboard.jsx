import { Link } from 'react-router-dom'
import './Dashboard.css'

const DashBoard = () => {
    return (
        <div>
            <p className='admin-title'>Admin Dashboard</p>
            <div className='admin-container'>
                <Link to="/admin/create-product">create product</Link>
                <Link to="/admin/create-user">create user</Link>
                <Link to="/admin/product-details">product edit/delete</Link>
                <Link to="/admin/user-details">user edit/delete</Link>
            </div>
        </div>
    )
}

export default DashBoard
