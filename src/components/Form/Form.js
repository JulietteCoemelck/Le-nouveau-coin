import { useState } from 'react';
import './Form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faLocationDot, faShapes, faCaretDown } from '@fortawesome/free-solid-svg-icons';

export default function Form() {
const [search, setSearch] = useState('');
const [ville, setVille] = useState('');
const [toggleCategory, setToggleCategory] = useState(false);
const [category, setCategory] = useState('');
const categoriesItems = ['Multimédia', 'Voitures', 'Mobilier']

const selectCategory = () => {
    setToggleCategory(!toggleCategory);
}

const chooseCategory = (item) => {
    setCategory(item)
    setToggleCategory(false);
}

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', marginTop: '50px'}}>
            <form>
                <label htmlFor="Recherche">
                    <FontAwesomeIcon icon={faSearch}/>
                    <input
                    type="text"
                    name="search"
                    placeholder="Que recherchez-vous ?"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    title="Recherche"
                    />
                </label>
             </form>

             <form>
                <label htmlFor="Ville">
                    <FontAwesomeIcon icon={faLocationDot}/>
                    <input
                    type="text"
                    name="search"
                    placeholder="Saississez votre ville"
                    onChange={(e) => setVille(e.target.value)}
                    value={ville}
                    title="Recherche"
                    />
                </label>
             </form>

             <form>
                <label htmlFor="Catégories">
                    <FontAwesomeIcon icon={faShapes}/>
                    <input
                    type="text"
                    name="search"
                    placeholder="Catégories"
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                    title="Catégorie"
                    disabled="disabled"
                    />
                    <FontAwesomeIcon icon={faCaretDown} className="arrowDown" onClick={() => selectCategory()}/>
                </label>
             </form>
             {toggleCategory === true ? (
                    <div className='categories'>
                        {categoriesItems.map((item, i) => (
                            <div className='categoryItem' key={i} onClick={() => chooseCategory(item)}>
                                {item}
                            </div>
                        ))}
                    </div>

                ) : (null)}
        </div>
    )
}