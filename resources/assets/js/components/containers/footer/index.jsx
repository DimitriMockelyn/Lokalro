import React from 'react';
import Box from '../../components/box';
import {green, orange} from '../../components/colors';
import { Provider } from "react-alert";
import AlertTemplate from "../app/alert-template";
import ReactDOM from 'react-dom';
const options = {
  timeout: 5000,
  position: "bottom center"
};

export default class Footer extends React.Component {

  render() {
    const orangee = orange;
    const vert = green;
    return (<Box
      couleurFond="rgb(46, 62, 78)"
      enLigne={1}
      padding={20}
      largeurMax={1}
      complementStyle={{'fontSize':'125%'}}
    >
      <Box gauche={1} complementStyle={{'marginBottom' : 'auto'}} largeurMax={1}>
          <Box cacher={1} texte='LOKALÉRO' couleur='white' type='bouton-maj' complementStyle={{
            'fontSize':'20px'
          }}/>
          <Box texte='Qui sommes-nous ?' margeGauche={20} couleur='white' type='bouton' padding='0' cacher={1}/>
          <Box texte='La borne LOKALÉRO' margeGauche={20} couleur='white' type='bouton' padding='0' cacher={1}/>
          <Box texte="Rejoindre l'équipe" margeGauche={20} couleur='white' type='bouton' padding='0' cacher={1}/>
          <Box texte='Nos partenaires' margeGauche={20} couleur='white' type='bouton' padding='0' cacher={1}/>
          <Box texte='Kit de presse' margeGauche={20} couleur='white' type='bouton' padding='0' cacher={1}/>
      </Box>
      <Box margeHaut={20} complementStyle={{'marginBottom' : 'auto'}} largeurMax={1}>
          <Box image='Portrait_Ophelie.png' imageEntiere={1} padding={50}/>
          <Box texte='Pour nous contacter,' couleur='white' padding='0' />
          <Box texte='envoyez un e-mail à Ophélie :' couleur='white'  padding='0' />
          <Box couleur='orange'><a style={{'color':'orange'}} href='mailto:ophelie@lokalero.fr'>ophelie@lokalero.fr</a></Box>
      </Box>
      <Box droite={1} complementStyle={{'marginBottom' : 'auto'}} largeurMax={1}>
          <Box texte='SUIVEZ-NOUS !' margeBas={15} couleur='white'complementStyle={{
            'fontSize':'20px'
          }}/>
          <Box texte="S'abonner à la newsletter" margeDroite={20} couleur='white' padding='0' />
          <Box enLigne={1} droite={1} >
              <Box type='bouton' image='Icone_Mail.png' imageEntiere={1} padding={25}/>
              <Box type='bouton' image='Icone_Facebook.png' imageEntiere={1} padding={40}  action={() => {window.open('https://www.facebook.com/lokalero/', '_blank')}}/>
          </Box>
          <Box margeHaut={40} complementStyle={{'fontSize':'10px'}}>
              <Box enLigne={1} droite={1} largeurMax={0} cacher={1}>
                <Box texte='Mentions légales' type='bouton' couleur='white' padding='2' />
                <Box texte='-' couleur='white'  padding='2' />
                <Box texte='Politique de confidentialité' type='bouton' couleur='white' padding='2'  />
                <Box texte='-' couleur='white' padding='2'  />
                <Box texte='CGU' type='bouton' couleur='white' padding='2' />
              </Box>
              <Box enLigne={1} droite={1} largeurMax={0}>
                <Box texte='2018 LOKALÉRO - Tous droits réservés' couleur='white' padding='2' margeDroite={5} />
                <Box image='france.png' imageEntiere={1} couleur='white' padding='10'/>
                <Box texte='Françe' couleur='white' padding='2'/>
              </Box>
          </Box>
      </Box>  
    </Box>);
  }
};


if (document.getElementById('footer')) {
    ReactDOM.render(<Provider template={AlertTemplate} {...options}>
    <Footer />
    </Provider>, document.getElementById('footer'));
}
