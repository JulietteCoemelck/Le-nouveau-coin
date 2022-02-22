import './Category.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCouch, faCar, faPhotoFilm } from '@fortawesome/free-solid-svg-icons';

export default function Category(props){
    const imageCategorie = require(`../media/${props.img}`);

    // Définition de l'icône
    let icon = "";
    if (props.name === "Multimédia") {
        icon = faPhotoFilm;
    } else if (props.name === "Mobilier"){
        icon = faCouch;
    } else if (props.name === "Voitures"){
        icon = faCar;
    }

    return(
        <div className='cardLayout'>
            <div className='cover'>
                <img src={imageCategorie} alt="" />
            </div>
            <div className='overlay'>
                <FontAwesomeIcon icon={icon} style={{fontSize: "40px"}} />
                {props.name}
            </div>

        </div>
    )
}