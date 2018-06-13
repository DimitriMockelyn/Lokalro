import React from 'react';
import Box from '../../components/box';
import {green, orange} from '../../components/colors';
import { Provider } from "react-alert";
import AlertTemplate from "../app/alert-template";
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { Alert } from 'react-alert';

import { withAlert } from 'react-alert';

const options = {
  timeout: 5000,
  position: "bottom center"
};

class Popup extends React.Component {
  constructor (props) {
    super(props);
    this.prevenir_lancement = false;
    this.newsletter = false;
    this.state = {
      open: false,
      email: '',
      nom: '',
      comment_connu: '',
      
      formErrors: {email: '', nom: ''}
    }
  }

  onCloseModal(that) {
    return function() {
      that.props.onCloseModal();
    }
  }
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  sendInfos(that) {
      let entity = {};
      entity['name'] = that.refs.nom.getValue();
      entity['email'] = that.refs.email.getValue();
      entity['comment_connu'] = that.refs.commentconnu.getValue();
      entity['prevenir_lancement'] = that.refs.lancement.checked;
      entity['newsletter'] = that.refs.newsletter.checked;
      entity['_token'] = document.getElementById("meta-token").content;
      let state = this.state;
      state.formErrors = {email: '', nom: '', message: ''};
      let toSend = true;
      if (!entity.name || entity.name.toString().length === 0) {
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
      this.setState(state);
      if (toSend) {
        fetch('/save-contact', {
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
              that.onCloseModal(that)();
              that.props.alert.success(<div style={{ 'textTransform': 'initial', 'width': '100%' }}>Vos informations ont bien été enregistrées :)</div>)
            } else {
              that.props.alert.error(<div style={{ 'textTransform': 'initial', 'width': '100%' }}>Une erreur est survenue dans l'envoi de votre requête.</div>)
            }
            // you cannot parse your "success" response, since that is not a valid JSON
            // consider using valid JSON req/resp pairs.
            // return response.json();
          });
      }
  }

  onInputChange(value) {
    let that = this;
    return (e) => {
      that[value] = !that[value];
      document.getElementById(value).checked = that[value];
    }
  }


  render()  {
    const orangee = orange;
    const vert = green;
    const that = this;
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
    return (
      <MuiThemeProvider>
          <div className='orange-medium'>Merci de votre intérêt pour LOKALERO !</div>
          {!this.props.fromAction && <div className='detail'>La borne LOKALERO est en cours de développement et n'est pas encore commercialisée.</div>}
          {this.props.fromAction && <div className='detail'>Le site est en cours de développement et cette fonctionnalité sera bientôt disponible :)</div>}
          {!this.props.fromAction && <div className='before-radios'>Vous pouvez vous inscrire ici pour :</div>}
            {this.props.fromAction && <div className='before-radios'>Vous souhaitez en savoir plus sur les bornes ? </div>}
            {this.props.fromAction && <div>Envoyez-nous un message personnalisé dans la rubrique "Nous contacter"</div>}
          {this.props.fromAction && <div className='before-radios'>Ou inscrivez-vous ici pour :</div>}
            <div className='row row-modal'>
          <input type='radio' ref='lancement' id='lancement' onClick={this.onInputChange('lancement')}/><div>Être prévenu(e) au plus tôt du lancement des bornes</div>
          </div>
          <div className='row row-modal'>
          <input type='radio' ref='newsletter' id='newsletter' onClick={this.onInputChange('newsletter')}/><div>Recevoir notre newsletter trimestrielle</div>
          </div>
          <div className='double-textfield'>
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
          </div>
            <TextField
                  floatingLabelText="Comment nous avez-vous connu ?"
                  floatingLabelFixed={true}
                  floatingLabelStyle={styles.floatingLabelStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                  underlineFocusStyle={styles.underlineStyle}
                  ref='commentconnu'
                  fullWidth={true}
                  multiLine={true}
                  type='textarea'
                  rows='3'
                />
                <FlatButton onClick={() => {this.sendInfos(that)}} label="JE M'INSCRIS" style={{'color':orangee, 'border': '1px solid '+orangee, 'borderRadius':'5px'}} />
            </MuiThemeProvider>
    );
  }
};

const RealPopup =  withAlert(Popup);
export default RealPopup;

