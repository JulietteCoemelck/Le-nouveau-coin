import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faComment, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Nav(props){
    const [toggleFavorites, setToggleFavorites] = useState(false);

    return (
        <div id="bigContainer">
            <div>
                <img className="logo" src='\Leboncoin_Logo.png' alt="logo"/>
            </div>
            <div className='navitem'>
                <FontAwesomeIcon icon={ faSearch }/>
            </div>
        <div className='container'>
            
                
                <div className='navitem' onClick={() => setToggleFavorites(!toggleFavorites)} style={{position: 'relative', display: 'flex', flexDirection: "column", justifyContent: 'center'}} >
                    <FontAwesomeIcon icon={ faHeart } />
                    {toggleFavorites ? (
                    <div className='popup'>
                        {props.wishlist}
                    </div>
                ) : (null)}
                </div>
                
               
            
            
           
            <div className='navitem'>
                <FontAwesomeIcon icon={ faComment }/>
            </div>
            <div className='navitem'>
                <FontAwesomeIcon icon={ faUserCircle }/>
            </div>
        </div>
        </div>
    );

}
export default Nav;