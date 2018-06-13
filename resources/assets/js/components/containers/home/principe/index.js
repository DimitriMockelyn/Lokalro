import React from "react";

import Box from "../../../components/box";
import { green, orange } from "../../../components/colors";
const margeIcones = "30";  

const Principe = props => (
    <div>
    <Box
      enLigne={0} /* 1 ou 0*/
      couleurFond="rgb(255,124,8)" /* code RGB */
      image="bandeau_header_accueil.jpg"
      imageCover={1}
      hauteur={500}
    >
      <Box enLigne={1} hauteur={450}> 
        
      </Box>
      <Box enLigne={1}>
        <Box
          type="bouton-maj"
          texte="Le principe"
          couleur="black"
          bordureArrondi="5"
          padding="10px 20"
          couleurFond={green}
          action={() => {
            let tesNode = document.getElementById('video'); 
            if (tesNode){
              window.scrollTo(0, tesNode.offsetTop -75);
            }
          }}
        />
      </Box>
    </Box>
    <Box
      largeurMax={1}
      texte="Je suis un(e)..."
      couleur={green}
      complementStyle={{
        "fontSize": "30px",
        "textAlign": "center"
      }}
    />
    <Box enLigne={1} couleurFond={green} className='line-je-suis'>
      <div>
      <Box

        type="bouton"
      >
        <Box image="Citoyen.png" hauteur={100} largeur={100} imageEntiere={1} />
        <Box texte="Lokal\ncitoyen(ne)" padding="5" />
      </Box>
      <Box

        type="bouton"
      >
        <Box
          image="Association.png"
          hauteur={100}
          largeur={100}
          imageEntiere={1}
        />
        <Box texte="Lokal\nassociation" padding="5" />
      </Box>
      <Box

        type="bouton"
      >
        <Box
          image="Professionnel.png"
          hauteur={100}
          largeur={100}
          imageEntiere={1}
        />
        <Box texte="Lokal\nprofessionnel(le)" padding="5" />
      </Box> 
      <Box

        type="bouton" 
      >
        <Box
          image="Collectivite.png"
          hauteur={100}
          largeur={100}
          imageEntiere={1}
        />
        <Box texte="Lokal\ncollectivité" padding="5" />
      </Box>
      <Box

        type="bouton"
      >
        <Box
          image="Plateforme_crowdfunding.png"
          hauteur={100}
          largeur={100}
          imageEntiere={1}
        />
        <Box texte="Plateforme de\ncrowdfunding" padding="5" largeurMax={1} />
      </Box>
      </div>
    </Box>
    </div>
);

export default Principe;
