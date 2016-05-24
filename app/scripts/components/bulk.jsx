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
                <div className="container-fluid">
                        <div className="row paragraph">
                           <div className="col-xs-12">
                             <h2>Bulk</h2>
                             <p>This is sample text</p>
                             <a href="#" className="paragraph-link">TestLink</a>
                           </div>
                         </div>
                        <div className="row image-boxes">
                          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 picbox1">
                            <img src="http://www.goglo.net/images/fp-rs-images-376x200/Warehouse_and_Cargo_Insurance.jpg" alt="" />
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
