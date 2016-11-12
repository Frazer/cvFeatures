
const MouseOverModal = props => (
  <div  className={`mouseOverModal  ${props.floating=='left'? 'w3-left':''} ${props.floating=='right'? 'w3-right':''} ${props.isMobile?'w3-dropdown-click': 'w3-dropdown-hover'}`} onClick={props.open}><i className={`fa fa-info-circle  fa-fw w3-text-${props.infoColor}`}></i>
    <div  id={`info${props.momKey}`}  className={`infoContent ${props.displayDivClass} w3-dropdown-content w3-animate-zoom w3-panel w3-${props.popupColor} w3-border w3-round-xlarge `}>
      {props.children}
    </div>
  </div>
);
MouseOverModal.defaultProps = {
  infoColor: 'blue',
  popupColor: 'yellow',
}
