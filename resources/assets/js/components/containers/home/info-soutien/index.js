import React from "react";

import Box from "../../../components/box";
import { green, orange } from "../../../components/colors";
const margeIcones = "30";  

const Principe = props => (
    <div>
    <Box padding={80} largeurMax={1} couleur='#0f5d7b' texte="La borne LOKALÉRO est en cours de développement et n'est pas encore commercialisée." complementStyle={{
      'fontSize': '25px'
    }}/>
    <Box couleur={orange} texte='ILS NOUS SOUTIENNENT' padding='0' margeBas={20} complementStyle={{
      'fontSize': '40px'
    }}>  
    </Box>
    <Box enLigne={1} hauteur={100} largeurMax={1} margeBas={50}> 
        <Box image='FIPA.png' padding={50} imageEntiere={1} largeurMax={1}/>
        <Box image='Blue_factory.png' padding={50} imageEntiere={1} largeurMax={1}/>
        <Box image='fondation_coeurs_et_arteres.png' padding={50} imageEntiere={1} largeurMax={1}/>
        <Box image='Prix_Airfrance.png' padding={50} imageEntiere={1} largeurMax={1}/> 
    </Box>
    </div>
);


export default Principe;
