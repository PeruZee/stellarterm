const React = window.React = require('react');
import OfferMaker from './OfferMaker.jsx';

export default class OfferMakers extends React.Component {
  constructor(props) {
    super(props);
    this.listenOrderbookId = this.props.d.listenOrderbook(() => {
      this.forceUpdate();
    });
  }
  componentWillUnmount() {
    this.props.d.unlistenSession(this.listenOrderbookId);
  }
  render() {
    if (!this.props.d.orderbook.ready) {
      return <div>Loading</div>;
    }

    return <div className="OfferMakers island__sub">
      <div className="OfferMakers_maker island__sub__division">
        <OfferMaker d={this.props.d} side="buy"></OfferMaker>
      </div>
      <div className="OfferMakers_maker island__sub__division">
        <OfferMaker d={this.props.d} side="sell"></OfferMaker>
      </div>
    </div>
  }
};
