import { useNavigate } from "react-router"
import "./Boutique.css"

const Boutique = () => {
    const Navigate = useNavigate()

    return (
        <div className="boutique-container">
            <div className="text-container">
                <p>Boutique CozyFit</p>
                <p>Découvrez la force de la mode avec Boutique CozyFit, votre style.</p>
            </div>
            <button onClick={() => Navigate('/shop', { state : {filter:'tous', type:'tous'}})} >Commencer a Explorer</button>
        </div>
    )
}

export default Boutique
