import React from 'react';


class Price extends React.Component {
    render() {
        return (
            <div className="price-sec py-5">
                <div className="container py-xl-5 py-lg-3">
                    <div className="inner_sec_info_w3_info mt-3">
                        <div className="row price-grid-main">
                            <div className="col-lg-3 col-sm-6 price-info">
                                <div className="prices p-4">
                                    <div className="prices-top">
                                        <h3 className="text-center text-wh rounded-circle">$30</h3>
                                    </div>
                                    <div className="prices-bottom text-center">
                                        <div className="prices-h border-bottom p-4">
                                            <h4>Standard</h4>
                                        </div>
                                        <ul className="mt-4">
                                            <li>Community Access</li>
                                            <li>Annual Reports</li>
                                            <li>Free Support</li>
                                            <li>Expert Reviews</li>
                                        </ul>
                                        <a href="#" className="btn button-style mt-4">Purchase</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6  price-info price-mkres-2">
                                <div className="prices p-4 active">
                                    <div className="prices-top">
                                        <h3 className="text-center text-wh rounded-circle">$80</h3>
                                    </div>
                                    <div className="prices-bottom text-center">
                                        <div className="prices-h border-bottom p-4">
                                            <h4>Premium</h4>
                                        </div>
                                        <ul className="mt-4">
                                            <li>Limitless Concepts</li>
                                            <li>Annual Reports</li>
                                            <li>Free Support</li>
                                            <li>Expert Reviews</li>
                                        </ul>
                                        <a href="#" className="btn button-style mt-4">Purchase</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6  price-info price-mkres">
                                <div className="prices p-4">
                                    <div className="prices-top">
                                        <h3 className="text-center text-wh rounded-circle">$60</h3>
                                    </div>
                                    <div className="prices-bottom text-center">
                                        <div className="prices-h border-bottom p-4">
                                            <h4>Golden</h4>
                                        </div>
                                        <ul className="mt-4">
                                            <li>Community Access</li>
                                            <li>Annual Reports</li>
                                            <li>Free Support</li>
                                            <li>Expert Reviews</li>
                                        </ul>
                                        <a href="#" className="btn button-style mt-4">Purchase</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6  price-info price-mkres">
                                <div className="prices p-4 active">
                                    <div className="prices-top">
                                        <h3 className="text-center text-wh rounded-circle">$30</h3>
                                    </div>
                                    <div className="prices-bottom text-center">
                                        <div className="prices-h border-bottom p-4">
                                            <h4>Ultimate</h4>
                                        </div>
                                        <ul className="mt-4">
                                            <li>Limitless Concepts</li>
                                            <li>Annual Reports</li>
                                            <li>Free Support</li>
                                            <li>Expert Reviews</li>
                                        </ul>
                                        <a href="#" className="btn button-style mt-4">Purchase</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Price;
