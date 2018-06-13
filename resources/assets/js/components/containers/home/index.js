import React from "react";

import Principe from './principe';
import Experience from './experience';
import BorneEtMoi from './borne-et-moi';
import InfoSoutien from './info-soutien';
import Box from "../../components/box";
import { green, orange } from "../../components/colors";
const margeIcones = "30";  

const Home = props => (
  <div>
    <Principe />
    <Experience />
    <BorneEtMoi />
    <InfoSoutien />
    
  </div>  
);

export default Home
