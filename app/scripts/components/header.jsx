var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');



var Header = React.createClass({
  render: function(){
    return (

        <header id="head">
            <div className="holder">
                <div className="logoHolder">
                    <a href="#" title="Speedway | Packaging and Distribution">
                        <img height="70px" src="images/speedway logo.jpg" alt="Speedway Packaging and Distribution" data-pin-nopin="true"></img>
                    </a>
                </div>
            </div>
                  <div className="call">
                      <a href="tel:206-949-7471" title="Contact Us"><span className="glyphicon glyphicon-earphone"></span></a>
                  </div>
                  <div className="address">
                    <a target="_blank" href="https://www.google.com/maps/place/Speedway+Packaging+and+Distribution/@34.8677333,-82.2420914,15z/data=!4m5!3m4!1s0x0:0xc666b001e6b56b9d!8m2!3d34.8677333!4d-82.2420914">
                     <address>
                          1221B S. Batesville Rd.<br/>
                          Greer, SC 29681
                    </address>
                    </a>
                  </div>
                  <div className="dropdown">
                  <button type="button" className="btn dropdown-toggle" id="nav" aria-label="Menu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="nav">
                       <li><a href="#tape">Tape</a></li>
                       <li><a href="#bulk">Bulk</a></li>
                       <li><a href="#industrial">Industrial</a></li>
                       <li><a href="#copackaging">Co Packaging</a></li>
                       <li><a href="#pl">3PL</a></li>
                       <li role="separator" className="divider"></li>
                       <li><a href="tel:206-949-7471" title="Contact Us"><span className="glyphicon glyphicon-earphone"></span>  <strong>Call Us</strong></a></li>
                     </ul>
                  </div>
        </header>
    );
  }
});

module.exports = Header;
