var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');
var Footer = require('./../components/footer.jsx');
var Header = require('./../components/header.jsx');

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


        <div className="">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">

            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
              <li data-target="#myCarousel" data-slide-to="3"></li>
            </ol>
           <div className="carousel-inner" role="listbox">
             <div className="item active slide1">
             <img src="http://www.goglo.net/images/fp-rs-images-376x200/Warehouse_and_Cargo_Insurance.jpg" alt="" className="" />
            </div>

            <div className="item slide2">
            <img src="http://tytca.com/wp-content/uploads/2015/03/Warehouse_Indoor.jpg" alt="" className="" />
            </div>

            <div className="item slide3">
            <img src="https://www.afwonline.com/about-us/community/images/ProjectCURE_Warehouse.jpg" alt="" className="image-3" />
            </div>

            <div className="item slide4">
              <img src="http://www.goglo.net/images/fp-rs-images-376x200/Warehouse_and_Cargo_Insurance.jpg" alt="" className="image-4" />
            </div>
          </div>

           <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div>
            <Footer/>
      </div>
       </div>
       </div>
    );
  }
})

module.exports = HomePageComponent;
