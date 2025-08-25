export default function PayasamSection() {
  const payasamProducts = [
    {
      name: 'Palada Payasam',
      price: '₹500',
      image: '/images/palada.png',
      description: 'Made with rice flakes or ada, simmered in milk and sugar, generously garnished with cashew.'
    },
    {
      name: 'Ada Pradhaman',
      price: '₹500',
      image: '/images/ada.png',
      description: 'A sweet treat of rice bits (ada) simmered with jaggery and coconut milk.'
    },
    {
      name: 'Chakka Pradhaman',
      price: '₹700',
      image: '/images/chakka.png',
      description: 'A traditional payasam of Chakka Varatti or jackfruit pulp, slow cooked in coconut milk and sweetened with jaggery'
    },
    {
      name: 'Parippu Payasam',
      price: '₹500',
      image: '/images/parippu.png',
      description: 'A rich creamy dessert made with whole green moong and jaggery, cooked in coconut milk, flavoured with cardamom and topped with coconut bits'
    }
  ];

  return (
    <section id="payasam" className="main-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="row">
              {payasamProducts.map((product, index) => (
                <div key={index} className="col-md-6">
                  {/* <div className="payasam-card" data-testid={`card-payasam-${index}`}> */}
                    <img className="mx-auto"
                      src={product.image} 
                      alt={`${product.name} - Traditional Kerala dessert`}
                      id={`img-payasam-${index}`}
                      data-testid={`img-payasam-${index}`}
                    />
                    <div className="px-3 flex justify-center">
                      <h6 className="text-warning"  data-testid={`text-payasam-name-${index}`}>{product.name}</h6>
                      {/* <small className="text-muted" data-testid={`text-payasam-price-${index}`}>{product.price}</small> */}
                    </div>
                  {/* </div> */}
                </div>
              ))}
              <div className="col-md-12">
                <div className="payasam-card" data-testid="card-payasam-combo">
                  <img 
                    src="/images/combo.png" 
                    alt="Payasam Combo Pack - All varieties"
                    data-testid="img-payasam-combo"
                    id="img-payasam-combo"
                  />
                  <div className="px-3">
                    <h6 className="text-warning text-center" data-testid="text-payasam-combo-name">Payasam Combo (All 4)</h6>
                    {/* <small className="text-decoration-line-through text-muted me-2" data-testid="text-payasam-combo-original-price">₹460</small> */}
                    {/* <strong className="text-[rgb(234,91,33)]" data-testid="text-payasam-combo-price">₹400</strong> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-2  lg:mt-[-50px]">
            <h1 className="section-heading text-center" data-testid="text-payasam-title">Onam Special Payasam</h1>
            <p className="text-warning mb-3 text-center" data-testid="text-payasam-availability">500 ML bottle - Available for take-away on Sept 4 & 5, 2025.</p>
            
            <div className="mb-4">
              {payasamProducts.map((product, index) => (
                <div key={index} className="mb-3 payasam-content">
                  <h5 className="text-warning" data-testid={`text-payasam-detail-name-${index}`}>{product.name} - <span className="text-[rgb(234,91,33)]">{product.price}</span></h5>
                  <p className="mb-3" data-testid={`text-payasam-detail-description-${index}`}>{product.description}</p>
                </div>
              ))}
              
            <div className="combo bg-cover bg-center bg-no-repeat px-5 py-2" data-testid="alert-combo-special">
                <strong>Combo Pack Special: Get all 4 varieties for &nbsp;
                 <span className="text-[rgb(234,91,33)] line-through">₹2200</span>&nbsp;&nbsp;
                  <span className="text-black">₹2000</span> </strong> 
                {/* <small className="text-decoration-line-through">(Save ₹60!)</small> */}
              </div>
            </div>
            
            <div className="flex justify-center">
              <a href="https://kappachakkakandhari.uengage.in/" className="brand-btn me-3 mb-2" data-testid="button-order-payasam">Order Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
