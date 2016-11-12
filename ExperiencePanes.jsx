
const TechnologyWork = props => (
      <div>
        <div className={`w3-container`}>
          <h5 className={`w3-opacity`}><b>Be awesome Inc.</b></h5>
          <h6 className={`w3-text-teal`}><i className={`fa fa-calendar fa-fw w3-margin-right`}></i>2014</h6>
          <p>I bash keys.
            </p>
          <hr />
        </div>
      </div>
);


const EducationWork = props => (
  <div className={`w3-container`}>
    <div className={`w3-container`}>
      <h5 className={`w3-opacity`}><b>Tutor</b></h5>
      <h6 className={`w3-text-teal`}><i className={`fa fa-calendar fa-fw w3-margin-right`}></i>2000-2070</h6>
      <p>Programming in Java, c, csh, javascript, React, Meteor, AGIlang, memetics.</p>
      <hr />
    </div>
  </div>
);


const WellnessWork = props => (
  <div>


    <div className={`w3-container`}>
      <p>An ongoing passion throughout my life is empowering people to transform and thrive.  I have ran my own ventures as a self empowerment coach and workshop presenter.<br/> <a href="http://frazerk.net/">Here is my coaching website</a>.</p>
      <hr />
    </div>

    <div className={`w3-container`}>
      <div>More <MouseOverModal open={() => props.infoClickFunction('wellnessMore',props.isMobile)} momKey={'wellnessMore'} largeDivClass={'largeInfoDiv'} isMobile={props.isMobile} infoColor={`green`} floating={`left`}>
        Because you are great.
        <div className={`w3-container`}>
          <h5 className={`w3-opacity`}><b>Creator and Manager of Eden Sanctuary</b></h5>
          <h6 className={`w3-text-teal`}><i className={`fa fa-calendar fa-fw w3-margin-right`}></i>2011-2013</h6>
          <p>See <a href="https://www.facebook.com/EdenSanctuaryAdelaide">facebook.com/EdenSanctuaryAdelaide</a></p>
          <p>We held daily workshops and exercise sessions.</p>
        </div>
      </MouseOverModal></div>
    </div>

  </div>
);
