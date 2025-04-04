import { Link } from 'react-router-dom'

const DashBoard = () => {
    return (
        <div>
            <Link to="/admin/create-product">create product</Link>
            <Link to="/admin/create-user">create user</Link>
        </div>
    )
}

export default DashBoard
