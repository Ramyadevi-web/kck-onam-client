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
      
      {/* ✅ Desktop view (images left, details right) */}
      <div className="d-none d-md-flex col-12">
        <div className="row w-100">
          <div className="col-md-6">
            <div className="row">
              {payasamProducts.map((product, index) => (
                <div key={index} className="col-md-6 mb-4 text-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="img-fluid"
                    id={`img-payasam-${index}`}
                  />
                  <h6 className="text-warning mt-2" data-testid={`text-payasam-name-${index}`}>
                    {product.name}
                  </h6>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6" id="payasam-div">
            <h1 className="section-heading text-center">Onam Special Payasam</h1>
            <p className="text-warning text-center mb-4">500 ML bottle - Available for take-away on Sept 4 & 5, 2025.</p>
            {payasamProducts.map((product, index) => (
              <div key={index} className="mb-5">
                <h5 className="text-warning">
                  {product.name} - <span className="text-[rgb(234,91,33)]">{product.price}</span>
                </h5>
                <p>{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Mobile view (stacked image + text per item) */}
      <div className="d-block d-md-none col-12">
        <h1 className="section-heading text-center">Onam Special Payasam</h1>
        <p className="text-warning text-center mb-4">500 ML bottle - Available for take-away on Sept 4 & 5, 2025.</p>
        {payasamProducts.map((product, index) => (
          <div key={index} className="mb-4 text-center">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid mb-2"
              data-tesid={`img-payasam-${index}`}
            />
            <h5 className="text-warning">
              {product.name} - <span className="text-[rgb(234,91,33)]">{product.price}</span>
            </h5>
            <p>{product.description}</p>
          </div>
        ))}
      </div>

     <div className="flex flex-col flex-md-row items-center">
     <div className="col-12 col-md-6 mb-3 mb-md-0">
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
      <div className="flex flex-col md:flex-row text-[9px] md:text-base ps-5 pt-1 md:pt-0 overflow-hidden combo w-full bg-cover bg-center bg-no-repeat" data-testid="alert-combo-special">
                <div className="fw-bold">Combo Pack Special: Get all 4 varieties for &nbsp;
                 <span className="text-[rgb(234,91,33)] line-through">₹2200</span>&nbsp;&nbsp;
                  <span className="text-black">₹2000</span> </div> 
                {/* <small className="text-decoration-line-through">(Save ₹60!)</small> */}
      </div>
      </div>
    </div>
  </div>
</section>


  );
}
