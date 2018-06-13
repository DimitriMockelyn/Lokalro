import React from 'react';
import { Alert } from 'react-alert';

import { withAlert } from 'react-alert';
import Modal from 'react-responsive-modal';
import PopupContact from '../containers/footer/popup-contact';

class Box extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      open: false
    }
  }

  onOpenModal() {
    this.setState({ open: true });
  }

  onCloseModal(that) {
    return function(e) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      that.setState({ open: false });
    }
  }
  computeStyle() {
    let style = {};
    if (this.props.largeurMax) {
      style['width'] = '100%';
    }
    if (this.props.largeur) {
      style['width'] = this.props.largeur + 'px'; 
    }
    if (this.props.largeurPct) {
      style['width'] = this.props.largeurPct + '%'; 
    }
    style['display'] = 'flex'; 
    style['flexDirection'] = 'column';
    if (this.props.enLigne) {
      style['flexDirection'] = 'row';
    }
    if (this.props.aLaLigne) {
      style['flexWrap'] = 'wrap';
    }
    if (this.props.image) {
      style['backgroundImage'] = 'url(\'images/'+this.props.image+'\')'
      //style['backgroundSize'] = 'auto';
      if (this.props.imageEntiere) { 
        style['backgroundSize'] = 'contain';
      }
      if (this.props.imageCover) { 
        style['backgroundSize'] = 'cover';
      }
      let imagePosition = ['center', 'center'];
      if (this.props.imageGauche) {
        imagePosition[0] = 'left';
      }
      if (this.props.imageDroite) {
        imagePosition[0] = 'right';
      }
      if (this.props.imageHaut) {
        imagePosition[1] = 'top';
      }
      if (this.props.imageBas) {
        imagePosition[1] = 'bottom';
      }
      if (this.props.imageHorPct) {
        imagePosition[0] = this.props.imageHorPct + '%';
      }
      style['backgroundPosition'] = imagePosition[0] + ' ' + imagePosition[1];
      style['backgroundRepeat']  = 'no-repeat';

    }
    if (this.props.couleurFond) {
      style['backgroundColor'] = this.props.couleurFond;
    }
    if (!this.props.children) {
       style['padding'] = '20px';
    }
    if (this.props.padding) {
      style['padding'] = this.props.padding+'px';
    }
    const attrVer = this.props.enLigne ? 'alignItems' : 'justifyContent';
    const attrHor = this.props.enLigne ? 'justifyContent' : 'alignItems';
    if (!this.props.texte) {
      style[attrHor] = 'center';
      style[attrVer] = 'center';
    }
    style['textAlign'] = 'center';
    if (this.props.gauche) {
      style[attrHor] = 'flex-start';
      style['textAlign'] = 'left';
    }
    if (this.props.droite) {
      style[attrHor] = 'flex-end';
      style['textAlign'] = 'right';
    }
    if (this.props.haut) {
      style[attrVer] = 'flex-start';
    }
    if (this.props.bas) {
      style[attrVer] = 'flex-end';
    }
    if (this.props.hauteur) {
      style['height'] = this.props.hauteur + 'px';
    } else if (this.props.hauteurMax) {
      style['height'] = '100%';
    } else {
      //style['height'] = 'auto';
    }
    if (this.props.margeAuto) {
      style['margin'] = 'auto';
    }
    if (this.props.marge) {
      style['margin'] = this.props.marge + 'px';
    }
    if (this.props.margeGauche) {
      style['marginLeft'] = this.props.margeGauche + 'px';
    }
    if (this.props.margeDroite) {
      style['marginRight'] = this.props.margeDroite + 'px';
    }
    if (this.props.margeHaut) {
      style['marginTop'] = this.props.margeHaut + 'px';
    }
    if (this.props.margeBas) {
      style['marginBottom'] = this.props.margeBas + 'px';
    }
    if (this.props.type) {
      if (this.props.type ==='bouton-maj'){
        style['cursor'] = 'pointer';
        style['textTransform'] = 'uppercase';
      }
      if (this.props.type ==='bouton'){
        style['cursor'] = 'pointer';
      }
    }

    if (this.props.couleur) {
      style['color'] = this.props.couleur;
    }
    if (this.props.bordure) {
      style['border'] = this.props.bordure;
    }
    if (this.props.bordureArrondi) {
      style['borderRadius'] = this.props.bordureArrondi + 'px'
    }
    if (this.props.complementStyle) {
      style = {...style, ...this.props.complementStyle};
    }
    if (this.props.cacher) {
      style['display'] = 'none';
    }
    return style;
  }
  computeOnClick() {
    let handler = undefined;
    if (this.props.type) {
      if (this.props.type ==='bouton-maj' || this.props.type ==='bouton'){
          handler = this.props.action;
          if (!handler) {
              handler = () => {
                this.onOpenModal();
              }
          }
      }
    }
    return handler;
  }
  render() {
    const style = this.computeStyle();
    const onClick = this.computeOnClick();
    return <div style={style} onClick={onClick} className={this.props.className || ''} >
      {this.props.texte && this.props.texte.split('\\n').map(txt => {return <div>{txt}</div>})}
      {this.props.children}
      <Modal open={this.state.open} onClose={this.onCloseModal(this)} center>
        <PopupContact fromAction={true} onCloseModal={this.onCloseModal(this)}/>
        </Modal>
    </div>
  }
};

export default withAlert(Box)