import { useState } from 'react';
import './Switcher.css';
import Form from "../Form/Form";

export default function Switcher() {
    const [switcher, setSwitcher] = useState('offres')
    // faire une fonction handle Click avec un useState true ou false "Clicked".
    // faire une ternaire inline dans la props style : {Clicked? color: 'white'... : null}
    const styles = {
        Active: {
            color: 'white', backgroundColor: "#f56C2a", borderRadius: '2rem'
        },
        Inactive: {
        }
      }

      // Switch //
      const offres = () => {
        setSwitcher('offres')
      }

      const demandes = () => {
          setSwitcher('demandes')
      }

    return(
        <div id="container">
            <div className='row'>
                <div className='switchItem' style={switcher === 'offres' ? styles.Active : styles.Inactive } onClick={() => offres()}>Offres</div>
                <div className='switchItem' style={switcher === 'demandes' ? styles.Active : styles.Inactive } onClick={() => demandes()}>Demandes</div>
            </div>
            {switcher === "offres" ? (<Form/>) : (null)}
            
        </div>
        
    )
    
}