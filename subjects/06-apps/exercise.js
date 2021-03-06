var React = require('react');
var assign = require('object-assign');
var escapeRegExp = require('./utils/escapeRegExp');

var PRODUCTS = [
  {
    category: 'Sporting Goods',
    products: [
      { name: 'Basketball', price: 4000, quantity: 0 },
      { name: 'Boxing Gloves', price: 3500, quantity: 3 },
      { name: 'Baseball', price: 1000, quantity: 0 }
    ]
  },
  {
    category: 'Pets',
    products: [
      { name: 'Gerbil', price: 500, quantity: 0 },
      { name: 'Goldfish', price: 300, quantity: 3 },
      { name: 'Parakeet', price: 2000, quantity: 2 }
    ]
  }
];

var cellStyle = {
  padding: 10
};

var headerCellStyle = assign({}, cellStyle, {
  textAlign: 'left'
});

var CategoryRow = React.createClass({
  propTypes: {
    category: React.PropTypes.string.isRequired
  },
  render() {
    return (
      <tr>
        <th colSpan="2" style={{textAlign: 'left', padding: 10}}>{this.props.category}</th>
      </tr>
    );
  }
});

var ProductRow = React.createClass({
  render() {
    var { name, price } = this.props.product;

    return (
      <tr>
        <td style={{padding: 10}}>{name}</td>
        <td style={{padding: 10}}>${price/100}</td>
      </tr>
    );
  }
});

var FilterableProductTable = React.createClass({
  propTypes: {
    products: React.PropTypes.array
  },
  render() {
    return (
      <div>
        Product Table
      </div>
    );
  }
});

var ProductCatalog = React.createClass({
  propTypes: {
    products: React.PropTypes.array
  },
  render() {
    return (
      <div>
        <h2>Product Catalog</h2>
        <div>
          <FilterableProductTable products={this.props.products}/>
        </div>
      </div>
    );
  }
});

React.render(<ProductCatalog products={PRODUCTS}/>, document.getElementById('app'));
