import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-5 mt-auto" style={{background: 'var(--bg-card)', borderTop: '1px solid var(--border-color)'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="d-flex align-items-center mb-3">
              <div className="rounded-circle d-flex align-items-center justify-content-center me-3" 
                   style={{width: '40px', height: '40px', background: 'var(--primary-gradient)'}}>
                <i className="fas fa-gavel text-white"></i>
              </div>
              <h5 className="mb-0" style={{color: 'var(--accent-blue)'}}>AuctionHub</h5>
            </div>
            <p style={{color: 'var(--text-muted)'}}>
              A platform for buying and selling items through online auctions.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#!" className="text-decoration-none" style={{color: 'var(--text-muted)'}}>
                <i className="fab fa-facebook-f fa-lg"></i>
              </a>
              <a href="#!" className="text-decoration-none" style={{color: 'var(--text-muted)'}}>
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#!" className="text-decoration-none" style={{color: 'var(--text-muted)'}}>
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="#!" className="text-decoration-none" style={{color: 'var(--text-muted)'}}>
                <i className="fab fa-linkedin-in fa-lg"></i>
              </a>
            </div>
          </div>
          <div className="col-md-2 mb-3 mb-md-0">
            <h5 style={{color: 'var(--accent-purple)'}}>Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link className="text-decoration-none" style={{color: 'var(--text-muted)'}} to="/">Home</Link></li>
              <li className="mb-2"><Link className="text-decoration-none" style={{color: 'var(--text-muted)'}} to="/auctions">Auctions</Link></li>
              <li className="mb-2"><Link className="text-decoration-none" style={{color: 'var(--text-muted)'}} to="/products">Products</Link></li>
            </ul>
          </div>
          <div className="col-md-2 mb-3 mb-md-0">
            <h5 style={{color: 'var(--accent-purple)'}}>Account</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link className="text-decoration-none" style={{color: 'var(--text-muted)'}} to="/login">Login</Link></li>
              <li className="mb-2"><Link className="text-decoration-none" style={{color: 'var(--text-muted)'}} to="/register">Register</Link></li>
              <li className="mb-2"><Link className="text-decoration-none" style={{color: 'var(--text-muted)'}} to="/dashboard">Dashboard</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 style={{color: 'var(--accent-purple)'}}>Contact Us</h5>
            <ul className="list-unstyled" style={{color: 'var(--text-muted)'}}>
              <li className="mb-2 d-flex align-items-center">
                <i className="fas fa-envelope me-2" style={{color: 'var(--accent-blue)'}}></i>
                support@auctionhub.com
              </li>
              <li className="mb-2 d-flex align-items-center">
                <i className="fas fa-phone me-2" style={{color: 'var(--accent-blue)'}}></i>
                +1 (123) 456-7890
              </li>
              <li className="mb-2 d-flex align-items-center">
                <i className="fas fa-map-marker-alt me-2" style={{color: 'var(--accent-blue)'}}></i>
                123 Auction St, City, Country
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-4" style={{borderColor: 'var(--border-color)'}} />
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0" style={{color: 'var(--text-muted)'}}>
              &copy; {new Date().getFullYear()} AuctionHub. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <Link to="/privacy" className="text-decoration-none" style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-decoration-none" style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>
                Terms of Service
              </Link>
              <Link to="/help" className="text-decoration-none" style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>
                Help Center
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 