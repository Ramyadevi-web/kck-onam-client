export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4">
            <img 
              src="images/kck_logo.webp" 
              alt="Kerala Feast Logo" 
              className="img-fluid mb-3" 
              style={{maxHeight: '150px'}}
              data-testid="img-footer-logo"
            />
          </div>
          <div className="col-md-6">
            <div className="contact-info">
              <h5 className="mb-3" data-testid="text-contact-heading">Contact Us</h5>
              <div className="contact-item" data-testid="text-contact-chennai">
                <i className="fas fa-phone"></i>
                <span>Chennai: +91 98585 91010</span>
              </div>
              <div className="contact-item" data-testid="text-contact-bengaluru">
                <i className="fas fa-phone"></i>
                <span>Bengaluru: +91 63646 71010</span>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-warning border-1 opacity-50 mt-4" />
        <div className="text-center pt-3">
          <p className="small sm:text-xs md:text-sm text-gray-500 mb-0" data-testid="text-footer-copyright">
            Copyrights 2025 &copy; All rights reserved by Kappa Chakka Kandhari.
          </p>
        </div>
      </div>
    </footer>
  );
}
