import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

const ProductDetails = () => {
    const [id, setId] = useState(0)
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0.0)
    const [image, setImage] = useState("")
    const [type, setType] = useState("t-shirt")
    const [dateOfAddition, setDateOfAddition] = useState(new Date())
    const [clothesInfo, setClothesInfo] = useState([])
    const [displayForm, setDisplayForm] = useState(false)

    useEffect(() => {
        (async () => {
            let url = `http://127.0.0.1:8000/api/product/tous`
            console.log(url)
            const data = await fetch(url, {
                method: "GET",
                mode: "cors",
            })

            const res = await data.json()
            console.log(res)
            setClothesInfo(res)
        })()
    }, [displayForm])

    const handleEdit = async (id) => {
        let url = `http://127.0.0.1:8000/api/product-details/${id}`

        if (name === "" || price === 0.0 || image === "") {
            return
        } else {
            const res = await fetch(url, {
                method: "PUT",
                headers: {
                "Content-Type": "application/json",
                },
                mode: "cors",
                body: JSON.stringify({
                    product_type: type,
                    image: image,
                    name: name,
                    price: price,
                    date_of_addition: dateOfAddition
                })
            })

            if (res.ok) {
                console.log("product edited successfully")
                setName("")
                setPrice(0.0)
                setImage("")
                setType("t-shirt")
                setDisplayForm(false)
            }
        }
    }

    const handleDelete = async (id) => {
        let url = `http://127.0.0.1:8000/api/product-details/${id}`

        const res = await fetch(url, {
            method: "DELETE",
            headers: {
            "Content-Type": "application/json",
            },
            mode: "cors",
        })

        if (res.ok) {
            console.log("product deleted successfully")
            setName("")
            setPrice(0.0)
            setImage("")
            setType("t-shirt")
            setDisplayForm(false)
        }
    }

    const handleClick = (id, name, price, type, image, doa) => {
        setId(id)
        setName(name)
        setPrice(price)
        setImage(image)
        setType(type)
        setDateOfAddition(doa)
        setDisplayForm(true)
    }

    if(displayForm) {
        return (
            <div>
                <p className='admin-form-title'>Edit Product</p>
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
                          <option value="sweat-shirt">Sweat-shirt</option>
                          <option value="classique">Classique</option>
                          <option value="jacket">Jacket</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="image">Image</label>
                        <input id="image" type="text" value={image} onChange={(event) => {setImage(event.target.value)}} />
                    </div>
                    <button onClick={() => handleEdit(id)}>submit</button>
                    <Link to="/admin">back to dashboard</Link>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className='item-list-container'>
                {
                    clothesInfo.map((item) => {
                        return (
                            <div key={uuidv4()}>
                                <p>Name: {item.name}</p>
                                <p>Price: {item.price}</p>
                                <p>Type: {item.product_type}</p>
                                <p>Image: {item.image}</p>
                                <img src={`/images/${item.image}`} />
                                <button onClick={() => handleClick(item.id, item.name, item.price, item.product_type, item.image, item.date_of_addition)}>Edit</button>
                                <button onClick={() => handleDelete(item.id)}>Delete</button>
                                <Link to={`/admin/promotion-details/${item.id}`}>Manage promotion</Link>
                                <Link to={`sizes-list/${item.id}`}>Manage sizes</Link>
                            </div>
                        )
                    })
                }
            </div>
            <Link to="/admin">back to dashboard</Link>
        </div>
    )
}

export default ProductDetails
