import React from 'react';
import Box from '../../components/box';
import {green, orange} from '../../components/colors';
import {  withRouter} from 'react-router-dom';
import { Provider } from "react-alert";
import AlertTemplate from "../app/alert-template";
import ReactDOM from 'react-dom';
const options = {
  timeout: 5000,
  position: "bottom center"
};

class Header extends React.Component {

  render() {
    const orangee = orange;
    const vert = green;
    return (<Box
      couleurFond="white"
      enLigne={1}
      largeurMax={1}
      hauteur={75}
      complementStyle={{
        'boxShadow': 'rgba(0, 0, 0, 0.33) 1px 1px 6px 1px, rgba(0, 0, 0, 0.25) 0px 1px 5px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px -1px',
        'position': 'fixed',
        'top' : '0',
        'zIndex': '5'
      }}
    >
      <Box enLigne={1} gauche={1} largeurMax={1}>
        <Box
          type='bouton-maj'
          image='buger_accueil.png' 
          imageEntiere={1}
          imageGauche={1}
          largeur={'100'}
          margeGauche={'20'}
          padding='10'
          action={() => {window.location.href = window.location.origin+'/'}}
          cacher={1}
        />
        <Box 
          type='bouton-maj'
          image='logo.png'
          marge='0'
          padding='37'
          margeGauche={'20'}
          imageEntiere={1}
          imageGauche={1}
          action={() => {window.location.href = window.location.origin+'/'}}
        />
      </Box>

      <Box enLigne={1} droite={1} largeurMax={1}>
        <Box 
          type='bouton-maj'
          couleur={orangee}
          texte='La borne Lokaléro'
          action={() => {
            let tesNode = document.getElementById('video'); 
            if (tesNode){
              window.scrollTo(0, tesNode.offsetTop -75);
            } else {
              window.location.href = window.location.origin+'/#video';
            }
          }}
        />
        <Box 
          type='bouton-maj'
          couleur={orangee}
          texte='Les projets'
          cacher={1}
        />
        <Box
          type='bouton-maj'
          couleur={orangee} 
          texte="L'équipe"
          cacher={1}
        />
        <Box 
          type='bouton-maj'
          couleur={vert}
          bordure={'2px solid '+vert}
          bordureArrondi='5'
          largeur='200'
          padding='5'
          margeDroite='30'
          texte='Nous contacter'
          action={() => {window.location.href = window.location.origin+'/contact'}}
        />
      </Box>
    </Box>);
  }
};

export default Header;


if (document.getElementById('header')) {
    ReactDOM.render(
      <Provider template={AlertTemplate} {...options}>
    <Header />
    </Provider>, document.getElementById('header'));
}