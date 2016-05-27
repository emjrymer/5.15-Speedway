var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');
var Footer = require('./../components/footer.jsx');
var Header = require('./../components/header.jsx');

var BulkComponent = React.createClass({
    render: function(){
        return (
            <div>
                <Header/>
                <div className="container-fluid default">
                        <div className="row paragraph">
                           <div className="col-xs-12">
                               <h2>Plastic Dry Bulk Services</h2>
                               <div className="col-md-6">
                                 <ul>
                                     <li>Railcar Box Offs</li>
                                     <li>Sea Container Offloading</li>
                                     <li>Dry Bulk Container Service</li>
                                     <li>Super Sacks or Bags to Tankers</li>
                                     <li>Silo to Tankers Service</li>
                                     <li>Warehouse Storage</li>
                                 </ul>
                               </div>
                             <div className="col-md-6">
                             </div>
                                <p>This is sample text</p>
                             <a href="#" className="paragraph-link">TestLink</a>
                           </div>
                         </div>
                        <div className="row image-boxes">
                          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 picbox1">
                            <img src="images/virgin_pp_polypropylene.jpg" alt="" />
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 picbox2">
                            <img src="http://www.goglo.net/images/fp-rs-images-376x200/Warehouse_and_Cargo_Insurance.jpg" alt="" />
                          </div>
                        </div>
                </div>
                <Footer/>
            </div>
        )
    }
})

module.exports = BulkComponent;
