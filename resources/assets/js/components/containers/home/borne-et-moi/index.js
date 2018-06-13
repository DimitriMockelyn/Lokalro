import React from "react";

import Box from "../../../components/box";
import { green, orange } from "../../../components/colors";
const margeIcones = "30";  

const Principe = props => (
    <div>
    <Box couleurFond={orange} largeurMax={1} padding={40} complementStyle={{'fontSize': '125%'}}>
    <Box enLigne={1} largeurMax={1}>
      <Box
        largeurMax={1}
        image="Guillemets_ouvertes.png"
        imageHaut={1}
        imageDroite={1}
        padding={25}
        complementStyle={{
          "backgroundSize": "37px",
          "marginRight": "-20px",
          "zIndex": "1"
        }}
      />
      <Box
        largeurMax={1}
        texte="Informer"
        couleur="white"
        couleurFond="#0f5d7b"
        complementStyle={{
          "textAlign": "center",
          "boxShadow": green + " 5px 5px 0px 0px",
          'textTransform': 'uppercase'
        }}
        hauteur={50}
        padding="10px 50"
      />
      <Box
        largeurMax={1}
        image="Guillemets_fermees.png"
        imageBas={1}
        imageGauche={1}
        imageEntiere={1}
        padding={25}
        complementStyle={{
          "backgroundSize": "37px",
          "marginLeft": "-20px",
          "zIndex": "1"
        }}
      />
      <Box
        largeurMax={1}
        image="Guillemets_ouvertes.png"
        imageHaut={1}
        imageDroite={1}
        padding={25}
        complementStyle={{
          "backgroundSize": "37px",
          "marginRight": "-20px",
          "zIndex": "1"
        }}
      />
      <Box
        largeurMax={1}
        texte="Soutenir"
        couleur="white"
        couleurFond="#0f5d7b"
        complementStyle={{
          "textAlign": "center",
          "boxShadow": green + " 5px 5px 0px 0px",
          'textTransform': 'uppercase'
        }}
        hauteur={50}
        padding="10px 50"
      />
      <Box
        largeurMax={1}
        image="Guillemets_fermees.png"
        imageBas={1}
        imageGauche={1}
        imageEntiere={1}
        padding={25}
        complementStyle={{
          "backgroundSize": "37px",
          "marginLeft": "-20px",
          "zIndex": "1"
        }}
      />
    </Box>
    <Box enLigne={1} largeurMax={1}>
      <Box
        largeurMax={1}
        texte="Sur les projets menés dans sa commune \net portés par"
        couleur="#0f5d7b"
        className='text-padding-center'
        complementStyle={{}}
      />
      <Box
        largeurMax={1}
        texte="Facilement les initiatives de son choix \nà fort impact local en tant que"
        couleur="#0f5d7b"
        className='text-padding-center'
        complementStyle={{}}
      />
    </Box>
    <Box enLigne={1} margeHaut={20} largeurMax={1} >
      <Box
        enLigne={1}
        aLaLigne={1}
        largeurMax={1}
        complementStyle={{
          "marginBottom": "auto"
        }}
      >
        <Box
          largeur={200}
          margeGauche={margeIcones}
          margeDroite={margeIcones}
          complementStyle={{
            "marginBottom": "auto"
          }}
        >
          <Box
            image="collectivites_territoriales.png"
            hauteur={100}
            largeur={100}
            imageEntiere={1}
          />
          <Box
            texte="Les collectivités territoriales"
            couleur="#0f5d7b"
            padding="5"
            largeurMax={1}
            complementStyle={{
              "textTransform": "uppercase",
              'fontWeight':'bold'
            }}
          />
          <Box
            image="Fleche_collectivite.png"
            imageEntiere={1}
            complementStyle={{
              position: "relative",
              left: "-80px",
              top: "-31px"
            }}
          />
          <Box margeHaut="-30" padding="5" gauche={1} margeBas={20}>
            <Box
              couleur="white"
              texte="Soutien aux initiatives locales"
              padding="0"
              complementStyle={{
                "whiteSpace": "pre"
              }}
            />
            <Box
              couleur="white"
              texte="Consultation citoyenne"
              padding="0"
              complementStyle={{
                "whiteSpace": "pre"
              }}
            />
            <Box
              couleur="white"
              texte="Effet de levier dans le financement des projets"
              padding="0"
              complementStyle={{
                "textAlign": "left"
              }}
            />
          </Box>
        </Box>

        <Box
          largeur={200}
          margeGauche={margeIcones}
          margeDroite={margeIcones}
          complementStyle={{
            "marginBottom": "auto"
          }}
        >
          <Box
            image="les_assos_de_quartier.png"
            hauteur={100}
            largeur={100}
            imageEntiere={1}
          />
          <Box
            texte="Les associations du quartier"
            largeurMax={1}
            couleur="#0f5d7b"
            padding="5"
            complementStyle={{
              "textTransform": "uppercase",
              'fontWeight':'bold'
            }}
          />
          <Box
            image="Fleche_asso_citoyen.png"
            imageEntiere={1}
            padding={80}
            complementStyle={{
              position: "relative",
              right: "-60px"
            }}
          />
          <Box margeDroite="60" padding="5" droite={1} margeBas={20}>
            <Box
              couleur="white"
              texte="Communication renforcée"
              padding="0"
              complementStyle={{
                "whiteSpace": "pre"
              }}
            />
            <Box
              couleur="white"
              texte="Visibilité démultipliée"
              padding="0"
              complementStyle={{
                "whiteSpace": "pre"
              }}
            />
            <Box
              couleur="white"
              texte="Cercle de donateur élargi"
              padding="0"
              complementStyle={{
                "textAlign": "right",
                "whiteSpace": "pre"
              }}
            />
          </Box>
        </Box>

        <Box
          largeur={200}
          margeGauche={margeIcones}
          margeDroite={margeIcones}
          complementStyle={{
            "marginBottom": "auto"
          }}
        >
          <Box
            image="plateformes_de_crowdfunding.png"
            hauteur={100}
            largeur={100}
            imageEntiere={1}
          />
          <Box
            texte="Les plateformes de crowdfunding"
            largeurMax={1}
            couleur="#0f5d7b"
            padding="5"
            complementStyle={{
              "textTransform": "uppercase",
              'fontWeight':'bold'
            }}
          />
          <Box
            image="Fleche_plateforme _pro.png"
            imageEntiere={1}
            padding={20}
            complementStyle={{
              position: "relative",
              left: "-90px"
            }}
          />
          <Box margeGauche="140" margeHaut={-30} padding="5" gauche={1} margeBas={20}>
            <Box
              couleur="white"
              texte="Démocratisation du financement participatif"
              padding="0"
              complementStyle={{
                "textAlign": "left"
              }}
            />
            <Box
              couleur="white"
              texte="Amélioration du taux de succès"
              padding="0"
              complementStyle={{
                "whiteSpace": "pre"
              }}
            />
            <Box
              couleur="white"
              texte="Renforcement de la marque"
              padding="0"
              complementStyle={{
                "textAlign": "left",
                "whiteSpace": "pre"
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box
        enLigne={1}
        aLaLigne={1}
        largeurMax={1}
        complementStyle={{
          "marginBottom": "auto"
        }}
      >
        <Box
          largeur={200}
          margeGauche={margeIcones}
          margeDroite={margeIcones}
          complementStyle={{
            "marginBottom": "auto"
          }}
        >
          <Box
            image="professionnel(1).png"
            hauteur={100}
            largeur={100}
            imageEntiere={1}
          />
          <Box
            texte="Professionnel ou commerçant"
            largeurMax={1}
            couleur="#0f5d7b"
            padding="5"
            complementStyle={{
              "textTransform": "uppercase",
              'fontWeight':'bold'
            }}
          />
          <Box
            image="Fleche_plateforme _pro.png"
            imageEntiere={1}
            padding={20}
            complementStyle={{
              position: "relative",
              left: "-60px"
            }}
          />
          <Box margeGauche="140" margeHaut={-30} padding="5" gauche={1} margeBas={20}>
            <Box
              couleur="white"
              texte="Ancrage local"
              padding="0"
              complementStyle={{
                "textAlign": "left"
              }}
            />
            <Box
              couleur="white"
              texte="Engagement visible"
              padding="0"
              complementStyle={{
                "whiteSpace": "pre"
              }}
            />
            <Box
              couleur="white"
              texte="Renforcement des liens avec ses clients, patients et salariés"
              padding="0"
              complementStyle={{
                "textAlign": "left"
              }}
            />
          </Box>
        </Box>

        <Box
          largeur={200}
          margeGauche={margeIcones}
          margeDroite={margeIcones}
          complementStyle={{
            "marginBottom": "auto"
          }}
        >
          <Box
            image="citoyens.png"
            hauteur={100}
            largeur={100}
            imageEntiere={1}
          />
          <Box
            texte="citoyen et citoyenne"
            largeurMax={1}
            couleur="#0f5d7b"
            padding="5"
            largeur={160}
            complementStyle={{
              "textTransform": "uppercase",
              'fontWeight':'bold'
            }}
          />
          <Box
            image="Fleche_asso_citoyen.png"
            imageEntiere={1}
            padding={80}
            complementStyle={{
              position: "relative",
              right: "-60px"
            }}
          />
          <Box margeDroite="60" padding="5" droite={1}>
            <Box
              couleur="white"
              texte="Simple"
              padding="0"
              complementStyle={{
                "whiteSpace": "pre"
              }}
            />
            <Box
              couleur="white"
              texte="Ludique"
              padding="0"
              complementStyle={{
                "whiteSpace": "pre"
              }}
            />
            <Box
              couleur="white"
              texte="Sans engagement"
              padding="0"
              complementStyle={{
                "textAlign": "right",
                "whiteSpace": "pre"
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
    <Box margeHaut={10} texte='La borne et moi' couleur='#0f5d7b' couleurFond={green} type='bouton-maj' bordureArrondi={5} padding='15px 20'
    action={() => {
      let tesNode = document.getElementById('video'); 
      if (tesNode){
        window.scrollTo(0, tesNode.offsetTop -75);
      }
    }}/>
  </Box>
    </div>
);


export default Principe;
