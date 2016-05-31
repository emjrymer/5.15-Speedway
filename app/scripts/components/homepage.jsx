var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');
var Footer = require('./../components/footer.jsx');
var Header = require('./../components/header.jsx');
var Carousel = require('./../components/carousel.jsx');

var HomePageComponent = React.createClass({
  render: function(){
    return (
        <div>
      <div><Header/></div>
      <div className="container-fluid">
            <div className="row">

          </div>

        <div className="row">
          <div className="products col-sm-8">
             <div className="col-xs-12 col-md-2">
                 <a href="#tape" className="product-button">
                     <h1 className="product-header">Tape</h1>
                     <p className="product-description">All types pressure and non sensitive materials on 3 inch cores.  Rewinders.  Turn salvage product into money!</p>
                     <span><h1>T</h1></span>
                 </a>
             </div>
             <div className="col-xs-12 col-md-2">
                 <a href="#bulk" className="product-button">
                     <h1 className="product-header">Plastic Dry Bulk Services</h1>
                     <p className="product-description">Railcar Box Offs, Sea Container Offloading, etc.</p>
                     <span><h1>B</h1></span>
                 </a>
             </div>
             <div className="col-xs-12 col-md-2">
                 <a href="#industrial" className="product-button">
                     <h1 className="product-header">Light Industrial</h1>
                     <p className="product-description">This is a description of the services provided</p>
                     <span><h1>I</h1></span>
                 </a>
             </div>
             <div className="col-xs-12 col-md-2">
                 <a href="#copackaging" className="product-button">
                     <h1 className="product-header">Co Packaging</h1>
                     <p className="product-description">This is a description of the services provided</p>
                     <span><h1>C</h1></span>
                 </a>
             </div>
             <div className="col-xs-12 col-md-2">
                 <a href="#pl" className="product-button">
                     <h1 className="product-header">3PL</h1>
                     <p className="product-description">This is a description of the services provided under this header</p>
                     <span><h1>3</h1></span>
                 </a>
             </div>
          </div>
        </div>

        <Carousel />

        <div>
            <Footer/>
      </div>
       </div>
       </div>
    );
  }
})

module.exports = HomePageComponent;
