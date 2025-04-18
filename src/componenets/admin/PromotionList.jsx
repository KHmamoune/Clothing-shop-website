import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { useNavigate } from "react-router"

const PromotionList = () => {
    const Navigate = useNavigate()
    let { id } = useParams()
    let [promotionInfo, setPromotionInfo] = useState([])
    let [idProduct, setIdProduct] = useState(id)
    let [sale, setSale] = useState(0)

    useEffect(() => {
        (async () => {
            let url = `http://127.0.0.1:8000/api/promotion/${id}`

            const data = await fetch(url, {
                method: "GET",
                mode: "cors",
            })

            const res = await data.json()

            console.log(res)
            setPromotionInfo(res)

            if (res.length > 0) {
                setSale(res[0]["sale"])
            }
        })()
    }, [id])

    const handleEdit = async (id) => {
        let url = `http://127.0.0.1:8000/api/promotion-details/${id}`

        if (sale === 0) {
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
                    sale: sale
                })
            })

            if (res.ok) {
                console.log("promotion edited successfully")
                setIdProduct(0)
                setSale(0)
                Navigate("/admin/product-details")
            }
        }
    }

    const handleCreate = async () => {
        let url = `http://127.0.0.1:8000/api/create-promotion`

        if (sale === 0) {
            return
        } else {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                mode: "cors",
                body: JSON.stringify({
                    id_product: idProduct,
                    sale: sale
                })
            })

            if (res.ok) {
                console.log("promotion created successfully")
                setIdProduct(0)
                setSale(0)
                Navigate("/admin/product-details")
            }
        }
    }

    const handleDelete = async (id) => {
        let url = `http://127.0.0.1:8000/api/promotion-details/${id}`

        if (sale === 0) {
            return
        } else {
            const res = await fetch(url, {
                method: "DELETE",
                headers: {
                "Content-Type": "application/json",
                },
                mode: "cors",
            })

            if (res.ok) {
                console.log("promotion deleted successfully")
                setIdProduct(0)
                setSale(0)
                Navigate("/admin/product-details")
            }
        }
    }

    const handleClick = (id) => {
        if (promotionInfo.length === 0) {
            handleCreate()
        } else {
            handleEdit(id)
        }
    }

    return (
        <div>
            <p>Promotion form</p>
            <div>
                <div>
                    <label htmlFor="id">id</label>
                    <input id="id" type="number" value={idProduct} disabled />
                </div>
                <div>
                    <label htmlFor="sale">sale</label>
                    <input id="sale" type="number" value={sale} onChange={(event) => setSale(event.target.value)} />
                </div>
                <button onClick={() => handleClick(id)}>submit</button>

                {promotionInfo.length != 0 ? <button onClick={() => handleDelete(id)}>Delete Promotion</button> : null}

            </div>
            <Link to="/admin/product-details">Back to product details</Link>
        </div>
    )
}

export default PromotionList
