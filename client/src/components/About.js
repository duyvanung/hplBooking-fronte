import React from 'react';


class About extends React.Component {
  render() {
    return (
        <div>
        {/* about */}
        <div className="about-inner py-5">
          <div className="container pb-xl-5 pb-lg-3">
            <div className="row py-xl-4">
              <div className="col-lg-5 about-right-faq pr-5">
                <h6>Story About Us</h6>
                <h3 className="mt-2 mb-3">Welcome to our Website</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta erat sit.</p>
                <p className="mt-2">Suspendisse porta erat sit amet eros sagittis, quis hendrerit libero aliquam. Fusce semper augue
                  ac dolor
                  efficitur.</p>
                <a href="about.html" className="btn button-style mt-sm-5 mt-4">Read More</a>
              </div>
              <div className="col-lg-7 welcome-right text-center mt-lg-0 mt-5">
                <img src={require("../images/about.png")} alt className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        {/* //about */}
        {/* why */}
        <section className="why bg-li py-5" id="why">
          <div className="container py-xl-5 py-3">
            <div className="row">
              <div className="col-md-4">
                <div className="ser-grd">
                  <div className="row">
                    <div className="col-md-3 col-2 text-center services-icon icon-clr5">
                      <span className="fa fa-handshake-o" />
                    </div>
                    <div className="col-md-9 col-10 text-left services-grid">
                      <h4>Title Here</h4>
                      <p>Natus error sit voluptatem accusantium dolo remque lauda ntium.</p>
                    </div>
                  </div>
                </div>
                <div className="ser-grd mt-md-5 mt-4">
                  <div className="row">
                    <div className="col-md-3 col-2 text-center services-icon icon-clr6">
                      <span className="fa fa-coffee" />
                    </div>
                    <div className="col-md-9 col-10 text-left services-grid">
                      <h4>Title Here</h4>
                      <p>Natus error sit voluptatem accusantium dolo remque lauda ntium.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="ser-grd mt-md-0 mt-4">
                  <div className="row">
                    <div className="col-md-3 col-2 text-center services-icon icon-clr1">
                      <span className="fa fa-headphones" />
                    </div>
                    <div className="col-md-9 col-10 text-left services-grid">
                      <h4>Title Here</h4>
                      <p>Natus error sit voluptatem accusantium dolo remque lauda ntium.</p>
                    </div>
                  </div>
                </div>
                <div className="ser-grd mt-md-5 mt-4">
                  <div className="row">
                    <div className="col-md-3 col-2 text-center services-icon icon-clr2">
                      <span className="fa fa fa-eye" />
                    </div>
                    <div className="col-md-9 col-10 text-left services-grid">
                      <h4>Title Here</h4>
                      <p>Natus error sit voluptatem accusantium dolo remque lauda ntium.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="ser-grd mt-md-0 mt-4">
                  <div className="row">
                    <div className="col-md-3 col-2 text-center services-icon icon-clr3">
                      <span className="fa fa-folder-open" />
                    </div>
                    <div className="col-md-9 col-10 text-left services-grid">
                      <h4>Title Here</h4>
                      <p>Natus error sit voluptatem accusantium dolo remque lauda ntium.</p>
                    </div>
                  </div>
                </div>
                <div className="ser-grd mt-md-5 mt-4">
                  <div className="row">
                    <div className="col-md-3 col-2 text-center services-icon icon-clr4">
                      <span className="fa fa-lightbulb-o" />
                    </div>
                    <div className="col-md-9 col-10 text-left services-grid">
                      <h4>Title Here</h4>
                      <p>Natus error sit voluptatem accusantium dolo remque lauda ntium.</p>
                    </div>
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
                <img src={require("../images/b2.png")} alt className="img-fluid" />
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
        {/* team */}
        <section className="team bg-li py-5" id="team">
          <div className="container py-xl-5 py-lg-3">
            <h3 className="tittle text-center font-weight-bold">Our Awesome Team</h3>
            <p className="sub-tittle text-center mt-3 mb-sm-5 mb-4">Sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
            <div className="row ab-info second pt-lg-4">
              <div className="col-lg-4 col-sm-6 ab-content text-center mt-lg-0 mt-4">
                <div className="ab-content-inner">
                  <img src={require("../images/t1.jpg")} alt="news image" className="img-fluid" />
                  <div className="ab-info-con">
                    <h4 className="text-team-w3">Petey Cruiser</h4>
                    <ul className="list-unstyled team-socil-w3pvts">
                      <li className="d-inline">
                        <a href="#"><span className="fa fa-facebook" /></a>
                      </li>
                      <li className="d-inline">
                        <a href="#"><span className="fa fa-twitter" /></a>
                      </li>
                      <li className="d-inline">
                        <a href="#"><span className="fa fa-google-plus" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 ab-content text-center mt-lg-0 mt-4">
                <div className="ab-content-inner">
                  <img src={require("../images/t2.jpg")} alt="news image" className="img-fluid" />
                  <div className="ab-info-con">
                    <h4 className="text-team-w3">Mario Spe</h4>
                    <ul className="list-unstyled team-socil-w3pvts">
                      <li className="d-inline">
                        <a href="#"><span className="fa fa-facebook" /></a>
                      </li>
                      <li className="d-inline">
                        <a href="#"><span className="fa fa-twitter" /></a>
                      </li>
                      <li className="d-inline">
                        <a href="#"><span className="fa fa-google-plus" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 ab-content text-center mt-lg-0 mt-4">
                <div className="ab-content-inner">
                  <img src={require("../images/t3.jpg")} alt="news image" className="img-fluid" />
                  <div className="ab-info-con">
                    <h4 className="text-team-w3">Turn Paige</h4>
                    <ul className="list-unstyled team-socil-w3pvts">
                      <li className="d-inline">
                        <a href="#"><span className="fa fa-facebook" /></a>
                      </li>
                      <li className="d-inline">
                        <a href="#"><span className="fa fa-twitter" /></a>
                      </li>
                      <li className="d-inline">
                        <a href="#"><span className="fa fa-google-plus" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //team */}
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
    );
  }
}

export default About;
