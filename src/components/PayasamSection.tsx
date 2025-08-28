export default function PayasamSection() {
  const payasamProducts = [
    {
      name: 'Palada Payasam',
      price: '₹500',
      image: '/images/palada.webp',
      description: 'Slow cooked rice ada in creamy milk and sweetened with sugar, a classic festive delicacy.'
    },
    {
      name: 'Ada Pradhaman',
      price: '₹500',
      image: '/images/ada.webp',
      description: 'A divine delight symbolising tradition and celebration, thick rice ada cooked in rich and creamy coconut milk and sweetened with Marayoor jaggery. Kadhazhi pazham - native Kerala banana added to enhance the aroma of the pradhaman'
    },
    {
      name: 'Chakka Pradhaman',
      price: '₹700',
      image: '/images/chakka.webp',
      description: 'Ripened jackfruit, the most loved fruit in every house of kerala, slow cooked with Marayoor jaggery and rich creamy coconut milk - a welcome addition to your Onam celebrations.'
    },
    {
      name: 'Parippu Payasam',
      price: '₹500',
      image: '/images/parippu.webp',
      description: 'A divine blend of roasted moong dal cooked to perfection with Marayoor jaggery and coconut milk, a classic Onam delicacy.'
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
          <div className="col-md-6">
            <h1 className="section-heading text-center">Onam Special Payasam</h1>
            <p className="text-warning text-center text-xs md:text-lg">500 ML SERVED FRESH.</p>
            <p className="text-warning text-center mb-4 text-xs md:text-lg">Available for take-away on Sept 4 & 5, 2025.</p>
            {payasamProducts.map((product, index) => (
              <div key={index} className="mb-5">
                <h5 className="text-warning">
                  {product.name} - <span className="text-[rgb(234,91,33)]">{product.price}</span>
                </h5>
                <p className="text-lg">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Mobile view (stacked image + text per item) */}
      <div className="d-block d-md-none col-12">
        <h1 className="section-heading text-center">Onam Special Payasam</h1>
        <p className="text-warning text-center mb-1">500 ML SERVED FRESH.</p>
        <p className="text-warning text-center mb-4 text-sm">Available for take-away on Sept 4 & 5, 2025.</p>
        {payasamProducts.map((product, index) => (
          <div key={index} className="mb-4 text-center">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid mb-2 mx-auto"
              data-tesid={`img-payasam-${index}`}
            />
            <h5 className="text-warning mb-1">
              {product.name} - <span className="text-[rgb(234,91,33)]">{product.price}</span>
            </h5>
            <p className="text-xs px-3">{product.description}</p>
          </div>
        ))}
      </div>

     <div className="flex flex-col flex-md-row items-center">
     <div className="col-12 col-md-6 mb-3 mb-md-0">
                <div className="payasam-card" data-testid="card-payasam-combo">
                  <img 
                    src="/images/combo.webp" 
                    alt="Payasam Combo Pack - All varieties"
                    data-testid="img-payasam-combo"
                    id="img-payasam-combo"
                  />
                  <div className="px-3">
                    <h6 className="text-warning text-center" data-testid="text-payasam-combo-name">Payasam Combo (All 4)</h6>
                   <p className="flex justify-center"><span className="text-[rgb(234,91,33)] line-through text-center mb-1">₹2200</span> 
                   &nbsp; &nbsp; <span>₹2000</span>
                   </p>
                  </div>
                </div>
      </div>
      <div className="flex flex-col">
      <div className="w-screen md:w-full text-[9px] md:text-base px-3 md:px-5 py-2 mb-5 overflow-hidden text-center combo w-full bg-cover bg-center bg-no-repeat" data-testid="alert-combo-special">
                  <p className="fw-bold w-full">500 ML X 4 SERVED FRESH</p>
      </div>

      
      <div className=" flex flex-col md:flex-row justify-center items-center gap-4">
              <a 
                href="https://kappachakkakandhari.uengage.in/"  rel="noopener noreferrer" target="_blank"
                className="brand-btn whitespace-nowrap text-xs px-3 py-2 sm:px-4 sm:py-1  sm:text-xs md:text-sm lg:text-lg xl:text-xl"
                data-testid="button-book-bengaluru"
              >
                Book Now - Bengaluru
              </a>
              <a 
                href="https://kappachakkakandhari.uengage.in/"  rel="noopener noreferrer" target="_blank"
                className="brand-btn whitespace-nowrap text-xs px-3 py-2 sm:px-4 sm:py-1  sm:text-xs md:text-sm lg:text-lg xl:text-xl"
                data-testid="button-book-chennai"
              >
                Book Now - Chennai
              </a>
        </div>
       </div>
      </div>
    </div>
  </div>
</section>


  );
}
