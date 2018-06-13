import React from "react";

import Box from "../../../components/box";
import { green, orange } from "../../../components/colors";
const margeIcones = "30";  

const Principe = props => (
    <div style={{    'align-items': 'center',
      'display': 'flex',
      'flex-direction': 'column'}}>
    <Box
    largeurMax={1}
    texte="UNE EXPÉRIENCE DE DON INNOVANTE"
    padding='50'
    couleur="#37515b"
    complementStyle={{
      "fontSize": "30px"
    }}
  />
  <iframe 
    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Flokalero%2Fvideos%2F1919131194772622%2F&show_text=0&width=560" 
    width="560" 
    height="315" 
    style={{'border':'none','overflow':'hidden'}}
    scrolling="no" 
    frameborder="0" 
    allowTransparency="true" 
    allowFullScreen="true"></iframe>
  <Box largeurMax={1} enLigne={1} margeHaut={20} margeBas={20} hauteur={50}>
    <Box
      type="bouton-maj"
      couleur={orange}
      bordure={"2px solid " + orange}
      bordureArrondi="5"
      largeur="200"
      padding="5"
      margeDroite="30"
      texte="Où retrouver les bornes ?"
      cacher={1}
    />
    <Box
      type="bouton-maj"
      couleur={orange}
      bordure={"2px solid " + orange}
      bordureArrondi="5"
      largeur="200"
      padding="5"
      margeDroite="30"
      texte="Les bornes plus en détail"
      cacher={1}
    />
  </Box> 
    </div>
);


export default Principe;