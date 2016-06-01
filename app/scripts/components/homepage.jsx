var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');
var Footer = require('./../components/footer.jsx');
var Header = require('./../components/header.jsx');
var Carousel = require('./../components/carousel.jsx');
var Services = require('./../components/services.jsx');

var HomePageComponent = React.createClass({
  render: function(){
    return (
        <div>
      <div><Header/></div>
      <div className="container-fluid">
          <div className="row"></div>
    <div className="cd-fixed-bg cd-bg-1">
    </div>
    <div className="cd-scrolling-bg cd-color-2">
		<div className="cd-container">
            <div className="col-md-6">
                <h1>Our Mission:</h1>
                <h2>jndfjndfvjnadfvjknadfkvjndafvjk</h2>
                <h1>Celebrating 17 Years of Success!</h1>
            </div>
            <div className="col-md-6">
            <h1><button>Call Us</button></h1>
            <p>kjbvslkndfv</p>
            <ul>
                <li>kjsndfv</li>
                <li>iuahdfhb</li>
                <li>kjbdnvka</li>
            </ul>
            </div>
		</div>
	</div>


    <div className="cd-fixed-bg cd-bg-2">
		<center><h1>Explore Speedway</h1></center>
        <Services />
	</div>
    <div className="cd-scrolling-bg cd-color-2">
		<div className="cd-container">
            <center><h1>scrolling</h1></center>
                <img src="https://unsplash.global.ssl.fastly.net/assets/core/logo-black-b37a09de4a228cd8fb72adbabc95931c5090611a0cae8e76f1fd077d378ec080.svg"/>
                    <img src="https://unsplash.global.ssl.fastly.net/assets/core/logo-black-b37a09de4a228cd8fb72adbabc95931c5090611a0cae8e76f1fd077d378ec080.svg"/>
                        <img src="https://unsplash.global.ssl.fastly.net/assets/core/logo-black-b37a09de4a228cd8fb72adbabc95931c5090611a0cae8e76f1fd077d378ec080.svg"/>
            <img src="https://unsplash.global.ssl.fastly.net/assets/core/logo-black-b37a09de4a228cd8fb72adbabc95931c5090611a0cae8e76f1fd077d378ec080.svg"/>
		</div>
        <img src="https://unsplash.global.ssl.fastly.net/assets/core/logo-black-b37a09de4a228cd8fb72adbabc95931c5090611a0cae8e76f1fd077d378ec080.svg"/>
            <img src="https://unsplash.global.ssl.fastly.net/assets/core/logo-black-b37a09de4a228cd8fb72adbabc95931c5090611a0cae8e76f1fd077d378ec080.svg"/>
                <img src="https://unsplash.global.ssl.fastly.net/assets/core/logo-black-b37a09de4a228cd8fb72adbabc95931c5090611a0cae8e76f1fd077d378ec080.svg"/>
                    <img src="https://unsplash.global.ssl.fastly.net/assets/core/logo-black-b37a09de4a228cd8fb72adbabc95931c5090611a0cae8e76f1fd077d378ec080.svg"/>

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
