import React from 'react';
import ReactDOM from 'react-dom';

class Product extends React.Component {
  render() {
    return (
      <div className="order">
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.producer}</li>
          <li>{this.props.hasWatermark}</li>
          <li>{this.props.color}</li>
          <li>{this.props.weight}</li>
        </ul>
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(["white", "eggshell-white", "salmon"]).isRequired,
    weight: function(props, weight, componentName){
       if(props[weight] === undefined){
         return new Error('Invalid')
       } else if(isNaN(props[weight])){
          return new Error('Wrong')
       } else if(props[weight] > 300 || props[weight] < 80){
          return new Error('Incorrect')
       }
     }
   }

module.exports = Product;
