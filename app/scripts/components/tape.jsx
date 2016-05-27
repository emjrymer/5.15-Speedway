var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');
var Footer = require('./../components/footer.jsx');
var Header = require('./../components/header.jsx');

var TapeComponent = React.createClass({
    render: function(){
        return (
            <div>
                <Header/>
                <div className="container-fluid default">
                        <div className="row paragraph">
                           <div className="col-xs-12">
                               <h2>Tape</h2>
                               <div className="col-md-6">
                                 <ul>
                                     <li>Width: 1.6 M</li>
                                     <li>Speed: 200m per Minute</li>
                                     <li>Max Unwind OD: 800mm</li>
                                     <li>Max Rewind OD: </li>
                                     <li>4 shafts exchange 150mm</li>
                                     <li>2 Shafts exchange 280mm</li>
                                 </ul>
                               </div>
                               <div className="col-md-6">
                                   <p>kjnsdfbjkndfkjn</p>                               
                               </div>
                           </div>
                         </div>
                        <div className="row image-boxes">
                          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 picbox1">
                            <img src="../app/images/VideoImg1.png" alt="" />
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 picbox2">
                            <img src="../app/images/Picture1.png" alt="" />
                          </div>
                        </div>
                </div>
                <Footer/>
            </div>
        )
    }
})

module.exports = TapeComponent;
