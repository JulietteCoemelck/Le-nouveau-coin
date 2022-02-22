import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as emptyHeart} from '@fortawesome/free-regular-svg-icons';
import './Annonce.css';

export default function Annonce(props) {
    const [like, setLike] = useState(false);

    const favoriteArticle = (id, img, title) => {
        setLike(!like)
        if (like === false){
            props.addFavoriteParent(id, img, title)
        } else {
            props.deleteFavoriteParent(id)
        }  
    }

    const image = require(`../media/${props.img}`);
    

    return (
        <div className='card'>
            <div className='image'>
                <img src={image} alt={props.title}/>
            </div>
            <div className='infos'>
                <span>{props.title}</span>
                <div>
                    <span>{props.price} €</span>
                    <FontAwesomeIcon 
                        className="icon" 
                        icon={props.isLiked === true ? (faHeart) : (emptyHeart)} 
                        onClick={() => {favoriteArticle(props.id, props.img, props.title)}}/>
                </div>
                
            </div>
        </div>
    )
}