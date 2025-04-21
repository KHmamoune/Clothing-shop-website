import './NavBar.css'

const NavBar = ({ setClothesType, clothesType, setFilter, filter }) => {
    console.log(filter)

    return (
        <div>
            <div className="filter-container">
                <button className={filter === 'tous' ? 'selected-filter' : ''} onClick={() => setFilter('tous')}>Tous</button>
                <button className={filter === 'new' ? 'selected-filter' : ''} onClick={() => setFilter('new')}>Nouveautes</button>
                <button className={filter === 'sale' ? 'selected-filter' : ''} onClick={() => setFilter('sale')}>Promotion</button>
            </div>
            <div className="type-container">
                <button className={clothesType === 'tous' ? 'selected-type' : ''} onClick={() => setClothesType('tous')}>Tous</button>
                <button className={clothesType === 't-shirt' ? 'selected-type' : ''} onClick={() => setClothesType('t-shirt')}>T-Shirt</button>
                <button className={clothesType === 'jooking' ? 'selected-type' : ''} onClick={() => setClothesType('jooking')}>Jooking</button>
                <button className={clothesType === 'jean' ? 'selected-type' : ''} onClick={() => setClothesType('jean')}>Jean</button>
                <button className={clothesType === 'chaussures' ? 'selected-type' : ''} onClick={() => setClothesType('chaussures')}>Chaussures</button>
                <button className={clothesType === 'sweat' ? 'selected-type' : ''} onClick={() => setClothesType('sweat')}>Sweat-Shirt</button>
                <button className={clothesType === 'classique' ? 'selected-type' : ''} onClick={() => setClothesType('classique')}>Classique</button>
                <button className={clothesType === 'jacket' ? 'selected-type' : ''} onClick={() => setClothesType('jacket')}>Jacket</button>
            </div>
        </div>
    )
}

export default NavBar
