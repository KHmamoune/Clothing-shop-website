import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Form.css'

const CreateProduct = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0.0)
    const [image, setImage] = useState("")
    const [type, setType] = useState("t-shirt")

    const handleClick = async () => {
        let url = `http://127.0.0.1:8000/api/create-product`

        if (name === "" || price === 0.0 || image === "") {
            return
        } else {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                mode: "cors",
                body: JSON.stringify({
                    product_type: type,
                    image: image,
                    name: name,
                    price: price,
                    date_of_addition: new Date().toJSON().slice(0, 10)
                })
            })

            if (res.ok) {
                console.log("product added successfully")
                setName("")
                setPrice(0.0)
                setImage("")
                setType("t-shirt")
            }
        }
    }

    return (
        <div>
            <p className='admin-form-title'>Create Product</p>
            <div className='form-container'>
                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" value={name} onChange={(event) => {setName(event.target.value)}} />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input id="price" type="number" value={price} onChange={(event) => {setPrice(parseFloat(event.target.value))}} />
                </div>
                <div>
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type" value={type} onChange={(event) => {setType(event.target.value)}}>
                      <option value="t-shirt">T-shirt</option>
                      <option value="jooking">Jooking</option>
                      <option value="jean">Jean</option>
                      <option value="chaussures">Chaussures</option>
                      <option value="sweat">Sweat</option>
                      <option value="classique">Classique</option>
                      <option value="jacket">Jacket</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="image">Image</label>
                    <input id="image" type="text" value={image} onChange={(event) => {setImage(event.target.value)}} />
                </div>
                <button onClick={handleClick}>submit</button>
                <Link to="/admin">back to dashboard</Link>
            </div>
        </div>
    )
}

export default CreateProduct
