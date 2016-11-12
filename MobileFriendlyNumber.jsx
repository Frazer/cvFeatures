class MobileFriendlyNumbers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
        <div>{this.props.isMobile?<a href={"tel:"+this.props.number}>{this.props.number}</a>:<a>{this.props.number}</a>}</div>
    );
  }
}
