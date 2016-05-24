var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');
var Footer = require('./../components/footer.jsx');
var Header = require('./../components/header.jsx');

var HomePageComponent = React.createClass({
  render: function(){
    return (
<<<<<<< HEAD
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
=======
        <div>
      <div><Header/></div>
      <div className="container-fluid">
            <div className="row">
                
>>>>>>> master
          </div>
          <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="active"><a href="#"><span className="glyphicon glyphicon-home"></span>
             Home</a></li>
             <li><a href="#"><span className="glyphicon glyphicon-star"></span> Top
                 Destinations</a></li>
             <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="glyphicon glyphicon-user"></span> About Us<b className="caret"></b></a>
                  <ul className="dropdown-menu">
                      <li><a href="#">example</a></li>
                      <li><a href="#">example</a></li>
                      <li><a href="#">example</a></li>
                  </ul>
              </li>
          </ul>
          </div>
        <div className="row">
          <div className="products col-sm-8">
             <div className="col-xs-12 col-md-2"><a href="#tape" className="product-button"><img src="http://2.bp.blogspot.com/-ZzTduUEm7IA/VGpoX_uG0-I/AAAAAAAAMUI/5GPPgkbwmO0/s1600/icon_questing_tape_red-14908ebf916a13eac2f77c0b1528e261.png" atl="Tape"></img></a></div>
             <div className="col-xs-12 col-md-2"><a href="#bulk" className="product-button"><img src="http://www.alminter.com.mx/img/alminter/slider/ahorre.png" atl="Money"></img></a></div>
             <div className="col-xs-12 col-md-2"><a href="#industrial" className="product-button"><img src="http://sellingwithinsight.com/wp-content/uploads/2016/04/red-handshake-icon-handshake-icon.jpg" atl="Work Together"></img></a></div>
             <div className="col-xs-12 col-md-2"><a href="#copackaging" className="product-button"><img src="http://hatchforce.com/wp-content/uploads/2014/06/icon-idea1.png" atl="Ideas"></img></a></div>
             <div className="col-xs-12 col-md-2"><a href="#pl" className="product-button"><img src="https://www.af-affinity.co.uk/wp-content/uploads/2015/09/business-icon-reversed.png" atl="Business"></img></a></div>
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
<<<<<<< HEAD
       </div>
   </div>
=======
        <div>
            <Footer/>
      </div>
       </div>
       </div>
>>>>>>> master
    );
  }
})

module.exports = HomePageComponent;
