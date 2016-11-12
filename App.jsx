// import React from 'react';
// import ReactDOM from 'react-dom';
// //require App from './App.jsx';

import MobileFriendlyNumber from './MobileFriendlyNumbers.jsx';
import MouseOverModal from './MouseOverModal.jsx';
import {WellnessWork, EducationWork, TechnologyWork} from './ExperiencePanes.jsx';



// App component - represents the whole app
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tabSelected: 'technology',
    };

    this.canZoom =  this.testZoom();
    this.isMobile = this.mobilecheck();

  }


  mobilecheck() {
      var check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
  };


  testZoom(){
    if(document.createElement("div").style.zoom === ""){
      return "zoomable";
    }
  }


  infoClickFunction(key, isMobile) {
    // console.log(e.target);
    if(isMobile){
      var x = document.getElementById("info"+key);
      if (x.className.indexOf("w3-show") == -1){
          x.className += " w3-show";
      }else{
          x.className = x.className.replace(" w3-show", "");
      }
    }
  }


  isActiveTab(value){
    return ((value===this.state.tabSelected) ?'experiencePaneActive':'');
  }

  changeTab(page){
    this.setState({tabSelected: page,});
  }

  isActive(value){
    return ((value===this.state.pageSelected) ?'active':'');
  }

 

  changePage(page){
    this.setState({pageSelected: page,});
    document.getElementById(page).scrollIntoView(true);
    if(this.state.width>829){
      this.offsetAnchor();  
    }else{
      window.scrollTo(window.scrollX, window.scrollY - 10);
    }
  }

    offsetAnchor() {
        window.scrollTo(window.scrollX, window.scrollY - 62);
  }


  scrollToTop(){
    window.scrollTo(0,0);
  }
 



  updateDimensions() {

    var w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0],
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
        height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;

        this.setState({width: width, height: height});
        // if you are using ES2015 I'm pretty sure you can do this: this.setState({width, height});
  }

  componentWillMount() {
        this.updateDimensions();
  }
  componentDidMount() {
      window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

 

  render() {

    return (
      <div className={`resumePageContainer`}>

        <MobileFriendlyNumber isMobile={this.isMobile} number={`+43 650 88 57575`}/>
        <MouseOverModal canZoom={this.canZoom} open={() => this.infoClickFunction('phoneInfo', this.isMobile)} displayDivClass={this.canZoom + ' largeInfoDiv'} momKey={'phoneInfo'}  isMobile={this.isMobile} infoColor={`green`} floating={`left`}>
          These mouseOvers detect if on a mobile. On mobile it changes from mouseOver to click-on-click-off. 
        </MouseOverModal>

        <div id="experience" className={`w3-container w3-card-2 w3-white w3-margin-bottom`}>
          <h2 className={`w3-text-grey w3-padding-16`}><i className={`fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal`}></i>Work Experience</h2>
          
          <ul className={`w3-navbar  experienceTabs`}>
            <li className={`experienceTab experienceTechnology ${this.isActive('technology')} `} onClick={this.changeTab.bind(this,'technology')} ><h2 className={`w3-text-grey experienceTabText`}><i className={`fa fa-desktop fa-fw w3-margin-left w3-large w3-text-teal`}></i><span className={`navTexts`}>Technology</span></h2></li>  
            <li className={`experienceTab experienceEducation ${this.isActive('education')} `} onClick={this.changeTab.bind(this,'education')} ><h2 className={`w3-text-grey experienceTabText`}><i className={`fa fa-graduation-cap fa-fw w3-margin-left w3-large w3-text-teal`}></i><span className={`navTexts`}>Teaching</span></h2></li>  
            <li className={`experienceTab experienceWellness ${this.isActive('wellness')} `} onClick={this.changeTab.bind(this,'wellness')} ><h2 className={`w3-text-grey experienceTabText`}><i className={`fa fa-smile-o fa-fw w3-margin-left w3-large w3-text-teal`}></i><span className={`navTexts`}>Wellness</span></h2></li>  
          </ul>

          <div className={`experienceContainer`}>
            <div className={`w3-container experiencePane  experienceTechnology ${this.isActive('technology')} `} onClick={this.changePage.bind(this,'technology')}>
              {this.isActive('technology') ? <TechnologyWork /> : ' ' }
            </div>
            
            <div className={`w3-container experiencePane experienceEducation ${this.isActive('education')} `} onClick={this.changePage.bind(this,'education')}>
              {this.isActive('education') ? <EducationWork /> : ' ' }
            </div>

            <div className={`w3-container experiencePane experienceWellness ${this.isActive('wellness')} `} onClick={this.changePage.bind(this,'wellness')}>
              {this.isActive('wellness') ? <WellnessWork infoClickFunction={this.props.infoClickFunction} isMobile={this.isMobile}/> : ' ' }
            </div>
          </div>
        </div>
        <footer className={`w3-container w3-teal w3-center w3-margin-top`}>
          <p>
            {this.wideScreen ? '' : <a onClick={this.scrollToTop} className={`footerTopLink `}><i className={`fa fa-arrow-up fa-fw w3-xlarge w3-text-grey`}></i></a> }
            All written and designed by myself. Powered by <a href="http://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a> and <a href="https://facebook.github.io/react/">React</a>        
            <a href="http://frazerk.net" className={`footerHomeLink `}><i className={`fa fa-home fa-fw w3-xlarge w3-text-grey`}></i></a>
          </p>

        </footer>
         
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('render-target'));

 
