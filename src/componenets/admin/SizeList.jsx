import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

const SizeList = () => {
    let { id } = useParams()
    const [idSize, setIdSize] = useState(0)
    const [idProduct, setIdProduct] = useState(id)
    const [size, setSize] = useState("")
    const [quantity, setQuantity] = useState(0)
    const [color, setColor] = useState("")
    const [sizeInfo, setSizeInfo] = useState([])
    const [displayForm, setDisplayForm] = useState(false)
    const [method, setMethod] = useState("")

    useEffect(() => {
        (async () => {
            let url = `http://127.0.0.1:8000/api/size/${id}`
            console.log(url)
            const data = await fetch(url, {
                method: "GET",
                mode: "cors",
            })

            const res = await data.json()
            console.log(res)
            setSizeInfo(res)
        })()
    }, [displayForm, id])


    const handleCreate = async () => {
        let url = `http://127.0.0.1:8000/api/create-size`

        if (size === "" || color === "" || quantity === 0) {
            return
        } else {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                mode: "cors",
                body: JSON.stringify({
                size: size,
                color: color,
                quantity: quantity,
                id_product: idProduct,
            })})

            console.log(res)

            if (res.ok) {
                console.log("size added successfully")
                setSize("")
                setQuantity(0)
                setColor("")
                setDisplayForm(false)
            }
        }
    }


    const handleEdit = async () => {
        let url = `http://127.0.0.1:8000/api/size-details/${idSize}`

        if (size === "" || color === "" || quantity === 0) {
            return
        } else {
            const res = await fetch(url, {
                method: "PUT",
                headers: {
                "Content-Type": "application/json",
                },
                mode: "cors",
                body: JSON.stringify({
                    id_product: idProduct,
                    size: size,
                    color: color,
                    quantity: quantity,
                })
            })

            if (res.ok) {
                console.log("size edited successfully")
                setSize("")
                setQuantity(0)
                setColor("")
                setDisplayForm(false)
            }
        }
    }

    const handleDelete = async (id) => {
        let url = `http://127.0.0.1:8000/api/size-details/${id}`

        const res = await fetch(url, {
            method: "DELETE",
            headers: {
            "Content-Type": "application/json",
            },
            mode: "cors",
        })

        if (res.ok) {
            console.log("size deleted successfully")
            setSize("")
            setQuantity(0)
            setColor("")
            setDisplayForm(false)
        }
    }

    const handleClick = (id, size, quantity, color, method) => {
        setIdSize(id)
        setSize(size)
        setQuantity(quantity)
        setColor(color)
        setMethod(method)
        setDisplayForm(true)
    }

    if(displayForm) {
        return (
            <div>
                <p className='admin-form-title'>Size Form</p>
                <div className='form-container'>
                    <div>
                        <label htmlFor="size">Size</label>
                        <input id="size" type="text" value={size} onChange={(event) => {console.log(size); setSize(event.target.value)}} />
                    </div>
                    <div>
                        <label htmlFor="quantity">Quantity</label>
                        <input id="quantity" type="number" value={quantity} onChange={(event) => {console.log(quantity); setQuantity(parseInt(event.target.value))}} />
                    </div>
                    <div>
                        <label htmlFor="color">Color</label>
                        <input id="color" type="color" value={color} onChange={(event) => {console.log(color); setColor(event.target.value)}} />
                    </div>
                    {
                        method === "create" ? <button onClick={handleCreate}>submit</button> : <button onClick={handleEdit}>submit</button>
                    }
                    <Link to="/admin">back to dashboard</Link>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className='item-list-container'>
                {
                    sizeInfo.map((item) => {
                        return (
                            <div key={uuidv4()}>
                                <p>Size: {item.size}</p>
                                <p>Quantity: {item.quantity}</p>
                                <p>Color: {item.color}</p>
                                <button onClick={() => handleClick(item.id, item.size, item.quantity, item.color, "edit")}>Edit</button>
                                <button onClick={() => handleDelete(item.id)}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
            <button onClick={() => handleClick(id, size, quantity, color, "create")}>add new size</button>
            <Link to="/admin">back to dashboard</Link>
        </div>
    )
}

export default SizeList
