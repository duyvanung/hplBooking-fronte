import React from 'react';
import { Route } from 'react-router-dom';


class Home extends React.Component{
    render(){
        return (
            <div>
        {/* main banner */}
        <div className="main-top" id="home">
       
          
          {/* banner */}
          <div className="banner_w3lspvt position-relative">
            <div className="container">
              <div className="d-md-flex">
                <div className="w3ls_banner_txt">
                  <h3 className="w3ls_pvt-title">Business <br /><span>Startup</span></h3>
                  <p className="text-sty-banner">Sed ut perspiciatis unde omnis iste natus doloremque
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.</p>
                  <a href={"/about"} className="btn button-style mt-md-5 mt-4">Read More</a>
                </div>
                <div className="banner-img">
                  <img src={require("../images/banner.png")} alt="true" className="img-fluid" />
                 
                </div>
              </div>
            </div>
            {/* animations effects */}
            <div className="icon-effects-w3l">
              <img src={require("../images/shape1.png")} alt="true" className="img-fluid shape-wthree shape-w3-one" />
              <img src={require("../images/shape2.png")} alt="true" className="img-fluid shape-wthree shape-w3-two" />
              <img src={require("../images/shape3.png")} alt="true" className="img-fluid shape-wthree shape-w3-three" />
              <img src={require("../images/shape5.png")} alt="true" className="img-fluid shape-wthree shape-w3-four" />
              <img src={require("../images/shape4.png")} alt="true" className="img-fluid shape-wthree shape-w3-five" />
              <img src={require("../images/shape6.png")} alt="true" className="img-fluid shape-wthree shape-w3-six" />
            </div>
            {/* //animations effects */}
          </div>
          {/* //banner */}
        </div>
        {/* //main banner */}
        {/* what we do section */}
        <div className="what bg-li py-5" id="what">
          <div className="container py-xl-5 py-lg-3">
            <div className="row about-bottom-w3l text-center mt-4">
              <div className="col-lg-4 about-grid">
                <div className="about-grid-main">
                  <img src={require("../images/img1.png")} alt="true" className="img-fluid" />
                  <h4 className="my-4">Dolor Sit</h4>
                  <p> Ut enim ad minim veniam, quis nostrud.Excepteur sint occaecat cupidatat non proident</p>
                  <a href="/about" className="button-w3ls btn mt-sm-5 mt-4">Read More</a>
                </div>
              </div>
              <div className="col-lg-4 about-grid my-lg-0 my-5">
                <div className="about-grid-main">
                  <img src={require("../images/img2.png")} alt="true" className="img-fluid" />
                  <h4 className="my-4">Conse Tetur</h4>
                  <p>Ut enim ad minim veniam, quis nostrud.Excepteur sint occaecat cupidatat non proident</p>
                  <a href="/about" className="button-w3ls btn mt-sm-5 mt-4">Read More</a>
                </div>
              </div>
              <div className="col-lg-4 about-grid">
                <div className="about-grid-main">
                  <img src={require("../images/img3.png")} alt="true" className="img-fluid" />
                  <h4 className="my-4">Adip Cing</h4>
                  <p>Ut enim ad minim veniam, quis nostrud.Excepteur sint occaecat cupidatat non proident</p>
                  <a href="/about" className="button-w3ls btn mt-sm-5 mt-4">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //what we do section */}
        {/* middle */}
        <section className="midd-w3 py-5" id="faq">
          <div className="container py-xl-5 py-lg-3">
            <div className="row">
              <div className="col-lg-6 about-right-faq">
                <h6>Business Consultancy</h6>
                <h3 className="text-da">25 Years of Industry Experience</h3>
                <p className="mt-4">Integer pulvinar leo id viverra feugiat. Pellen tesque libero ut justo,
                  ultrices in ligula. Semper at tempufddfel, ultrices in ligula.</p>
                <ul className="w3l-right-book mt-4">
                  <li>Marketing Base</li>
                  <li>Financial Consulting</li>
                  <li>Investment Advice</li>
                  <li>Business Growth</li>
                  <li>Technical Support</li>
                </ul>
                <a href="/about" className="btn button-style button-style-2 mt-sm-5 mt-4">Read More</a>
              </div>
              <div className="col-lg-6 left-wthree-img text-right">
                <img src={require("../images/b1.png")} alt="true" className="img-fluid mt-5" />
              </div>
            </div>
          </div>
        </section>
        {/* //middle */}
        {/* services */}
        <section className="banner-bottom-w3layouts bg-li py-5" id="services">
          <div className="container py-xl-5 py-lg-3">
            <h3 className="tittle text-center font-weight-bold">Our Services</h3>
            <p className="sub-tittle text-center mt-3 mb-sm-5 mb-4">Sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
            <div className="row pt-lg-4">
              <div className="col-lg-4 about-in text-center">
                <div className="card">
                  <div className="card-body">
                    <div className="bg-clr-w3l">
                      <span className="fa fa-line-chart" />
                    </div>
                    <h5 className="card-title mt-4 mb-3">Business Growth</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur elit,Adipisicing elit tempor.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 about-in text-center my-lg-0 my-3">
                <div className="card active">
                  <div className="card-body">
                    <div className="bg-clr-w3l">
                      <span className="fa fa-usd" />
                    </div>
                    <h5 className="card-title mt-4 mb-3">Financial Planning</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur elit,Adipisicing elit tempor.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 about-in text-center">
                <div className="card">
                  <div className="card-body">
                    <div className="bg-clr-w3l">
                      <span className="fa fa-lightbulb-o" />
                    </div>
                    <h5 className="card-title mt-4 mb-3">Business Services</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur elit,Adipisicing elit tempor.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //services */}
        {/* stats */}
        <section className="bottom-count py-5" id="stats">
          <div className="container py-xl-5 py-lg-3">
            <div className="row">
              <div className="col-lg-5 left-img-w3ls">
                <img src={require("../images/b2.png")} alt="true" className="img-fluid" />
              </div>
              <div className="col-lg-7 right-img-w3ls pl-lg-4 mt-lg-2 mt-4">
                <div className="bott-w3ls mr-xl-5">
                  <h3 className="title-w3 text-bl mb-3 font-weight-bold">Some of Company Real Facts</h3>
                  <p className="title-sub-2 mb-3">Excepteur sint occaecat cupidatat <br />non proident.</p>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium. </p>
                </div>
                <div className="row mt-5">
                  <div className="col-sm-4 count-w3ls">
                    <h4>1000+</h4>
                    <p>Project completed</p>
                  </div>
                  <div className="col-sm-4 count-w3ls mt-sm-0 mt-3">
                    <h4>480+</h4>
                    <p>Consultant</p>
                  </div>
                  <div className="col-sm-4 count-w3ls mt-sm-0 mt-3">
                    <h4>600+</h4>
                    <p>Award Winning</p>
                  </div>
                </div>
                <div className="row mt-sm-5 mt-4">
                  <div className="col-sm-4 count-w3ls">
                    <h4>480+</h4>
                    <p>Consultant</p>
                  </div>
                  <div className="col-sm-4 count-w3ls mt-sm-0 mt-3">
                    <h4>600+</h4>
                    <p>Award Winning</p>
                  </div>
                  <div className="col-sm-4 count-w3ls mt-sm-0 mt-3">
                    <h4>1000+</h4>
                    <p>Project completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //stats */}
        {/* partners */}
        <section className="partners py-5" id="partners">
          <div className="container py-xl-5 py-lg-3">
            <h3 className="tittle text-center font-weight-bold">Our Partners</h3>
            <p className="sub-tittle text-center mt-3 mb-sm-5 mb-4">Sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
            <div className="row grid-part text-center pt-4">
              <div className="col-md-2 col-4">
                <div className="parts-w3ls">
                  <a href="#"><span className="fa fa-angellist" /></a>
                  <h4>Angellist</h4>
                </div>
              </div>
              <div className="col-md-2 col-4">
                <div className="parts-w3ls">
                  <a href="#"><span className="fa fa-opencart" /></a>
                  <h4>opencart</h4>
                </div>
              </div>
              <div className="col-md-2 col-4">
                <div className="parts-w3ls">
                  <a href="#"><span className="fa fa-lastfm" /></a>
                  <h4>lastfm</h4>
                </div>
              </div>
              <div className="col-md-2 col-4 mt-md-0 mt-4">
                <div className="parts-w3ls">
                  <a href="#"><span className="fa fa-openid" /></a>
                  <h4>openid</h4>
                </div>
              </div>
              <div className="col-md-2 col-4 mt-md-0 mt-4">
                <div className="parts-w3ls">
                  <a href="#"><span className="fa fa-skyatlas" /></a>
                  <h4>skyatlas</h4>
                </div>
              </div>
              <div className="col-md-2 col-4 mt-md-0 mt-4">
                <div className="parts-w3ls">
                  <a href="#"><span className="fa fa-ravelry" /></a>
                  <h4>ravelry</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //partners */}

   
       
      </div>
        )
    }
}

export default Home;
