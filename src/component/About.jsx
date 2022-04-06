import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-3">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-dark fw-bold mb-1">About Us</h1>
                        <p className="lead mb-4">
                        L'ade.com is Nigeria's largest online mall. We launched in April 2022 and our mission is to become the engine of commerce and trade in Africa.

                        We serve a retail customer base that continues to grow exponentially, offering products that span various categories including Electronics, Clothing, Shoes, Home Appliances and much more.

                        Our range of services are designed to ensure optimum levels of convenience and customer satisfaction with the retail process; these services include our lowest price guarantee, 7-day free return policy*, order delivery-tracking, dedicated customer service support and many other premium services.

                        As we continue to expand the mall, our scope of offerings will increase in variety, simplicity and convenience; join us and enjoy the increasing benefits.

                        We are highly customer-centric and are committed towards finding innovative ways of improving our customers' shopping experience with us; so give us some feedback on help@Lade.com. For any press related questions, kindly send us an email at press@Lade.com.

                        Thank you and we hope you enjoy your experience with us.

                        *Available for select stores            
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-dark px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="../assets/aboutUS.jpg" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
