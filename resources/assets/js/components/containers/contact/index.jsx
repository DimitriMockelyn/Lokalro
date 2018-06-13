import React from 'react';
import Box from '../../components/box';
import {green, orange} from '../../components/colors';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { Alert } from 'react-alert';

import { withAlert } from 'react-alert';
import { Provider } from "react-alert";
import AlertTemplate from "../app/alert-template";

class Contact extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      nom: '',
      message: '',
      telephone: '',
      formErrors: {email: '', nom: '', message: ''},
    }
  }
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  sendMail(that) {
      let entity = {};
      entity['nom'] = that.refs.nom.getValue();
      entity['name'] = that.refs.nom.getValue();
      entity['subject'] = '[CONTACT] mail de '+ entity['nom'];
      entity['email'] = that.refs.email.getValue();
      entity['telephone'] = that.refs.telephone.getValue();
      if (entity['telephone']) {
        entity['subject'] = entity['subject']+ ' ' + entity['telephone'];
      }
      entity['message'] = that.refs.message.getValue();
      entity['body'] = that.refs.message.getValue();
      entity['_token'] = document.getElementById("meta-token").content;
      let state = this.state;
      state.formErrors = {email: '', nom: '', message: ''};
      let toSend = true;
      if (!entity.nom || entity.nom.toString().length === 0) {
        toSend = false;
        state.formErrors.nom='Ce champ est obligatoire';
      }
      if (!entity.email || entity.email.toString().length === 0) {
        toSend = false;
        state.formErrors.email='Ce champ est obligatoire';
      } else if (!that.validateEmail(entity.email)) {
        toSend = false;
        state.formErrors.email='L\'adresse e-mail est incorrecte';
      }
      if (!entity.message || entity.message.toString().length === 0) {
        toSend = false;
        state.formErrors.message='Ce champ est obligatoire';
      } 
      this.setState(state);
      if (toSend) {
        fetch('/contact-lokalero', {
          body: JSON.stringify(entity),
          headers: {
            'content-type': 'application/json',
            'X-CSRF-TOKEN': document.getElementById("meta-token").content,
            '_token': document.getElementById("meta-token").content
          },
          method: 'POST'
        })
          .then(function (response) {
            console.log(response);
            if (response.status === 200) {
              that.props.alert.success(<div style={{ 'textTransform': 'initial', 'width': '100%' }}>Votre message à bien été envoyé</div>)
            } else {
              that.props.alert.error(<div style={{ 'textTransform': 'initial', 'width': '100%' }}>Une erreur est survenue dans l'envoi du mail</div>)
            }
            // you cannot parse your "success" response, since that is not a valid JSON
            // consider using valid JSON req/resp pairs.
            // return response.json();
          });
      }
  }

  render() {
    const orangee = orange;
    const vert = green;
    const styles = {
    errorStyle: {
      color: orangee,
    },
    underlineStyle: {
      borderColor: orangee,
    },
    floatingLabelStyle: {
      color: orangee,
    },
    floatingLabelFocusStyle: {
      color: orangee,
    },
  };
    const that = this;
    return (<MuiThemeProvider
    >
    <Box  
          image='Bandeau - Nous contacter.png'
          hauteur={230} 
          imageHorPct='30'
          imageCover={1}
          />
          <Box enLigne={1} className='contact-page'>
          <Box largeurMax={1} gauche={1} hauteurMax={1} className='contact-form'>
            <Box couleur={orangee} texte='ENVOYEZ NOUS UN MESSAGE' margeBas={15} complementStyle={{'fontSize':'20px', 'fontWeight': 'bold'}}></Box>
            <Box complementStyle={{'marginBottom':'auto'}} enLigne={1}>
              <Box complementStyle={{'width': '60%'}}>
            <TextField 
              floatingLabelText="Nom"
              floatingLabelFixed={true}
              errorText={this.state.formErrors.nom}
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              underlineFocusStyle={styles.underlineStyle}
              ref='nom'
            />
            <TextField
              floatingLabelText="E-mail"
              floatingLabelFixed={true}
              type='email'
              errorText={this.state.formErrors.email}
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              underlineFocusStyle={styles.underlineStyle}
              ref='email'
              type='email'
            />
            <TextField
              floatingLabelText="Téléphone"
              floatingLabelFixed={true}
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              underlineFocusStyle={styles.underlineStyle}
              ref='telephone'
            />
              </Box>
                <Box margeDroite={100} gauche={1} largeurMax={1} >
                <TextField
                  floatingLabelText="Votre message"
                  floatingLabelFixed={true}
                  floatingLabelStyle={styles.floatingLabelStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                  underlineFocusStyle={styles.underlineStyle}
                  errorText={this.state.formErrors.message}
                  ref='message'
                  fullWidth={true}
                  multiLine={true}
                  type='textarea'
                  rows='5'
                />
                <FlatButton onClick={() => {this.sendMail(that)}} label="Envoyer" style={{'color':green, 'border': '1px solid '+green, 'borderRadius':'5px', 'marginLeft':'auto', 'marginRight':'50%','marginTop':'20px'}} />
                </Box>
            </Box>
          </Box>
          <Box  margeBas={50} gauche={1} className='contact-general'>
              <Box couleur={orangee} texte='NOUS CONTACTER' margeBas={15} gauche={1} padding='20px 0' complementStyle={{'fontSize':'20px', 'fontWeight': 'bold'}}></Box>
              <Box couleur='black' gauche={1}><a style={{'color':'black'}} href='mailto:ophelie@lokalero.fr'>ophelie@lokalero.fr</a></Box>
              <Box couleur='black' gauche={1} margeBas={50}>06 73 04 00 82</Box>
              <Box couleur={orangee} gauche={1} texte="REJOIGNEZ L'AVENTURE" margeBas={15} padding='20px 0' complementStyle={{'fontSize':'20px', 'fontWeight': 'bold', 'whiteSpace':'pre'}}></Box>
              <Box couleur='black' gauche={1}>Retrouvez la famille des lokal héro sur Facebook.</Box>
              <Box couleur='black' gauche={1}>Venez rencontrer notre équipe sur Paris. 19e.</Box>
          </Box>
          </Box>
    </MuiThemeProvider>);
  }
};

const RealContact = withAlert(Contact);


const options = {
  timeout: 5000,
  position: "bottom center"
};

const TrueContact = () => (
  <Provider template={AlertTemplate} {...options}>
    <RealContact />
  </Provider>
);


export default TrueContact;

if (document.getElementById('contact')) {
    ReactDOM.render(<TrueContact />, document.getElementById('contact'));
}
