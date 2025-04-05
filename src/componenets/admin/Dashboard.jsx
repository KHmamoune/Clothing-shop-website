import { Link } from 'react-router-dom'

const DashBoard = () => {
    return (
        <div>
            <Link to="/admin/create-product">create product</Link>
            <Link to="/admin/create-user">create user</Link>
            <Link to="/admin/product-details">product edit/delete</Link>
            <Link to="/admin/user-details">user edit/delete</Link>
        </div>
    )
}

export default DashBoard
