var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');

var HomePageComponent = React.createClass({
  render: function(){
    return (
    <div>
      <header id="siteHead">
          <div class="holder">
              <div class="logoHolder">
                  <a href="#" title="Speedway | Packaging and Distribution">
                      <img src="http://www.voucherfox.co.uk/images/image_993629474.jpg" alt="Speedway Packaging and Distribution" data-pin-nopin="true"></img>
                  </a>
              </div>
          </div>
      </header>
      <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 main-nav">
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Link</a></li>
                  </ul>
              </div>
              <div className="col-md-4 title">
                <h2>Speedway</h2>
                <h3>Packaging and Distribution</h3>
              </div>
          </div>
        <div className="row">
          <div className="col-md-12 col-sm-6 s-button">
            <a href="#" className="product-button">Link</a>
            <a href="#" className="product-button">Link</a>
            <a href="#" className="product-button">Link</a>
            <a href="#" className="product-button">Link</a>
            <a href="#" className="product-button">Link</a>
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
        <div className="row image-boxes2">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 picbox3">
            <img src="http://www.goglo.net/images/fp-rs-images-376x200/Warehouse_and_Cargo_Insurance.jpg" alt="" />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 picbox4">
            <img src="http://www.goglo.net/images/fp-rs-images-376x200/Warehouse_and_Cargo_Insurance.jpg" alt="" className="thered" />
          </div>
        </div>

        <div className="row short-story">
          <div className="col-xs-12">
            <h2>Blurb</h2>
            <p>Example Paragraph</p>
            <a href="#" className="read-story">About Us</a>
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
       </div>
   </div>
    );
  }
})

module.exports = HomePageComponent;
