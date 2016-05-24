var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');


var Footer = React.createClass({
  render: function(){
    return (
      <div className='footer'>
          <div>
          <div className="col-md-6 column">
              <div>
                  <h1>Our Mission</h1>
                  <p>Satisfy Our Customers and Continuously Improve</p>
              </div>

              <h1>What we're up to?</h1>
              <p>Take a look!</p>
              <p>Give us a Call!  <a href="tel:206-949-7471">206-949-7471</a></p>
          </div>
        <div className="col-md-6 column">
         <form action="https://formspree.io/emjwivell@gmail.com" method="POST">
             <div className="form-group">
                 <label id="InputFirstName">First Name</label>
                 <input type="text" className="form-control" id="InputFirstName" placeholder="i.e. - John" name="First Name" />
             </div>
             <div className="form-group">
                 <label id="InputEmail">Email address</label>
                 <input type="email" name="_replyto" className="form-control" id="InputEmail" placeholder="i.e. - JohnSmith@gmail.com" />
            </div>
            <button type="submit" className="btn btn-default submit-button">Submit</button>
        </form></div>
        </div>
    </div>
    );
  }
});


module.exports = Footer;
