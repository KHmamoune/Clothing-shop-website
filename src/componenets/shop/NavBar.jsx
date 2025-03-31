const NavBar = ({ setClothesType }) => {
    return (
        <div>
            <button onClick={() => setClothesType('tous')}>Tous</button>
            <button onClick={() => setClothesType('t-shirt')}>T-Shirt</button>
            <button onClick={() => setClothesType('jooking')}>Jooking</button>
            <button onClick={() => setClothesType('jean')}>Jean</button>
            <button onClick={() => setClothesType('chaussures')}>Chaussures</button>
            <button onClick={() => setClothesType('sweat-shirt')}>Sweat-Shirt</button>
            <button onClick={() => setClothesType('classique')}>Classique</button>
            <button onClick={() => setClothesType('jacket')}>Jacket</button>
        </div>
    )
}

export default NavBar
