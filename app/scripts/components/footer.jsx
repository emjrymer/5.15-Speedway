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
              <p>Give us a Call!  <strong><a href="tel:206-949-7471">206-949-7471</a></strong></p>
              <div className="alert alert-success contact" role="alert">Thank you, we'll be in touch!</div>
          </div>
        <div className="col-md-6 column">
         <form action="https://formspree.io/emjwivell@gmail.com" method="POST">
             <div className="form-group InputName">
                 <label className="InputName">Name</label>
                 <input type="text" className="form-control InputName" placeholder="i.e. - John Smith" name="Name" />
             </div>
             <div className="form-group InputCompany">
                 <label className="InputCompany">Company</label>
                 <input type="text" className="form-control InputCompany" placeholder="i.e. - ABC Inc." name="Company" />
             </div>
             <div className="form-group InputEmail">
                 <label className="InputEmail">Email address</label>
                 <input type="email" name="_replyto" className="form-control InputEmail" placeholder="i.e. - JohnSmith@gmail.com" />
            </div>
            <div className="form-group InputPhone">
                <label className="InputPhone">Phone</label>
                <input type="tel" name="Phone" className="form-control InputPhone" placeholder="i.e. - (555) 867-5309" />
           </div>
           <div className="form-group InputMessage">
               <label className="InputMessage">Message</label>
               <input type="text" name="Message" className="form-control InputMessage" placeholder="i.e. - Pricing info request." />
          </div>
            <input type="hidden" name="_next" value="dist/index.html" />
            <input type="hidden" name="_subject" value="New Customer!" />
            <button type="submit" onclick='$("#contact").show()' className="btn btn-default submit-button">Submit</button>
        </form>
        </div>
        </div>
    </div>
    );
  }
});


module.exports = Footer;
