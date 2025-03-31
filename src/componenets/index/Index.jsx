import Boutique from "./Boutique.jsx"
import Nouveautes from "./Nouveautes.jsx"
import Promotion from "./Promotion.jsx"
import Integrale from "./Integrale.jsx"
import backgroundGif from "../../assets/background.gif"

const Index = () => {
    return (
        <div>
            <div className="container1">
                <img src={backgroundGif} className="background" />
                <Boutique />
            </div>
            <Nouveautes />
            <Promotion />
            <Integrale />
        </div>
    )
}

export default Index
