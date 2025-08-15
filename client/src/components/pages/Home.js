import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [featuredAuctions, setFeaturedAuctions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedAuctions = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/auctions/active');
        setFeaturedAuctions(res.data.slice(0, 4)); // Get first 4 active auctions
        setLoading(false);
      } catch (err) {
        console.error('Error fetching featured auctions:', err);
        setLoading(false);
      }
    };

    fetchFeaturedAuctions();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section text-white py-5 mb-5 position-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-4 fw-bold mb-4">
                <span className="text-gradient">Online Auction</span>
                <br />
                <span style={{color: 'var(--accent-blue)'}}>Platform</span>
              </h1>
              <p className="lead">
                Buy and sell items through real-time auctions. Find unique items or sell your valuables to the highest bidder.
              </p>
              <div className="mt-4">
                <Link to="/auctions" className="btn btn-primary btn-lg me-3 pulse">
                  <i className="fas fa-gavel me-2"></i>
                  Browse Auctions
                </Link>
                <Link to="/register" className="btn btn-outline-primary btn-lg">
                  <i className="fas fa-user-plus me-2"></i>
                  Join Now
                </Link>
              </div>
            </div>
            <div className="col-md-6 d-none d-md-block">
              <div className="position-relative">
                <img
                  src="https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Auction Platform"
                  className="img-fluid rounded-4 shadow-lg"
                  style={{borderRadius: '20px'}}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-primary-to-secondary opacity-25 rounded-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Auctions */}
      <div className="container mb-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">
            <span style={{color: 'var(--accent-blue)'}}>Featured</span> Auctions
          </h2>
          <p className="lead text-muted">Discover amazing items up for auction right now</p>
        </div>
        
        {loading ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : featuredAuctions.length > 0 ? (
          <div className="row">
            {featuredAuctions.map(auction => (
              <div className="col-md-6 col-lg-3 mb-4 fade-in" key={auction._id}>
                <div className="card h-100 auction-card">
                  <div className="position-relative overflow-hidden">
                  <img
                    src={auction.product.images && auction.product.images.length > 0
                      ? auction.product.images[0].startsWith('http')
                        ? auction.product.images[0]
                        : `http://localhost:5000${auction.product.images[0]}`
                      : `https://via.placeholder.com/300x200?text=${auction.product.name}`}
                    className="card-img-top"
                    alt={auction.product.name}
                    style={{ height: '220px', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                  />
                    <div className="position-absolute top-0 end-0 p-3">
                      <span className="badge bg-success">
                        <i className="fas fa-fire me-1"></i>Live
                      </span>
                    </div>
                  </div>
                  <div className="card-body p-4">
                    <h5 className="card-title">{auction.product.name}</h5>
                    <p className="card-text text-muted mb-3" style={{fontSize: '0.9rem'}}>{auction.product.description.substring(0, 80)}...</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="fw-bold text-success mb-1">${auction.currentBid}</div>
                        <small className="text-muted">Current Bid</small>
                      </div>
                      <div className="text-end">
                        <div className="fw-bold" style={{color: 'var(--accent-blue)', fontSize: '0.85rem'}}>
                          {new Date(auction.endTime).toLocaleDateString()}
                        </div>
                        <small className="text-muted">Ends</small>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer bg-transparent border-0 p-4 pt-0">
                    <Link to={`/auctions/${auction._id}`} className="btn btn-primary w-100">
                      <i className="fas fa-eye me-2"></i>
                      View Auction
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="alert alert-info text-center">
            No active auctions found. Check back later or <Link to="/create-product">create your own</Link>!
          </div>
        )}
        
        <div className="text-center mt-3">
          <Link to="/auctions" className="btn btn-outline-primary">
            View All Auctions
          </Link>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-5 mb-5" style={{background: 'var(--bg-surface)'}}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">
              How It <span style={{color: 'var(--accent-purple)'}}>Works</span>
            </h2>
            <p className="lead text-muted">Get started in three simple steps</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 glass fade-in">
                <div className="card-body text-center p-5">
                  <div className="mb-4">
                    <div className="rounded-circle d-inline-flex align-items-center justify-content-center" 
                         style={{width: '80px', height: '80px', background: 'var(--primary-gradient)'}}>
                    <i className="fas fa-user-plus"></i>
                    </div>
                  </div>
                  <h4 className="card-title mb-3">1. Create an Account</h4>
                  <p className="card-text">
                    Sign up for free and create your profile to start buying or selling items.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 glass fade-in" style={{animationDelay: '0.2s'}}>
                <div className="card-body text-center p-5">
                  <div className="mb-4">
                    <div className="rounded-circle d-inline-flex align-items-center justify-content-center" 
                         style={{width: '80px', height: '80px', background: 'var(--success-gradient)'}}>
                    <i className="fas fa-box"></i>
                    </div>
                  </div>
                  <h4 className="card-title mb-3">2. List or Bid</h4>
                  <p className="card-text">
                    List your items for auction or browse and bid on items that interest you.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 glass fade-in" style={{animationDelay: '0.4s'}}>
                <div className="card-body text-center p-5">
                  <div className="mb-4">
                    <div className="rounded-circle d-inline-flex align-items-center justify-content-center" 
                         style={{width: '80px', height: '80px', background: 'var(--warning-gradient)'}}>
                    <i className="fas fa-handshake"></i>
                    </div>
                  </div>
                  <h4 className="card-title mb-3">3. Win & Complete</h4>
                  <p className="card-text">
                    Win auctions with the highest bid and complete the transaction securely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mb-5 text-center">
        <div className="card glass p-5 border-0">
          <h2 className="display-5 fw-bold mb-3">
            Ready to <span style={{color: 'var(--accent-pink)'}}>Start</span>?
          </h2>
          <p className="lead mb-4 text-muted">
          Join thousands of users buying and selling through our platform.
        </p>
          <Link to="/register" className="btn btn-primary btn-lg pulse">
            <i className="fas fa-rocket me-2"></i>
          Create an Account
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Home; 