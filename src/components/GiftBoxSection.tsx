export default function GiftBoxSection() {
  const giftBoxContents = [
    { name: 'Marayur Jaggery', clickable: false },
    { name: 'Kodam Puli', clickable: false },
    { name: 'Mace', clickable: false },
    { name: 'Cloves', clickable: false },
    { name: 'Pepper', clickable: false },
    { name: 'Cinnamon', clickable: false },
    { name: 'Cardamom', clickable: false },
    { name: 'Inji Puli', clickable: false },
    { name: 'KCK Gift Vouchers(₹750)-2Nos.', clickable: false }
  ];

  return (
    <section id="giftbox" className="main-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img 
              src="images/gift_box.png" 
              alt="Premium Kerala gift box with traditional items" 
              className="img-fluid rounded-3 shadow-lg"
              data-testid="img-gift-box"
            />
          </div>
          <div className="col-lg-6">
            <div className='flex justify-center items-center gap-2 mb-1'>
            <h1 className="section-heading" data-testid="text-gift-box-title">KCK Gift Box</h1>
            <span className='flex items-center text-[rgb(231,91,33)] text-lg font-light'>(₹1900)</span>
            </div>
            <p className="text-warning mb-3 text-center" data-testid="text-gift-box-availability">Available for take-away on Sept 4 & 5, 2025</p>
            <p className="description mb-4" data-testid="text-gift-box-description">
              A special gift in a gift box, with the finest spices sourced from the heart of Kerala. Ranging from mace to marayoor jaggery, 8 condiments to spice up your cooking.
              Additionally, 2 Onam gift vouchers of INR 750 each, which can be redeemed on your next dine-in with Kappa Chakka Kandhari- Chennai & Bangalore.
            </p>
            <div className="mb-4 flex  justify-center">
              <a href="https://kappachakkakandhari.uengage.in/" className="brand-btn whitespace-nowrap mb-2 sm:mb-3 me-2 ms-2 text-xs px-3 py-2 sm:px-4 sm:py-1  sm:text-xs md:text-sm lg:text-lg xl:text-xl" data-testid="button-book-gift-bengaluru">Book Now - Bengaluru</a>
              <a href="https://kappachakkakandhari.uengage.in/" className="brand-btn whitespace-nowrap  mb-2 sm:mb-3 me-2 ms-2 text-xs px-3 py-2 sm:px-4 sm:py-1  sm:text-xs md:text-sm lg:text-lg xl:text-xl" data-testid="button-book-gift-chennai">Book Now - Chennai</a>
            </div>

            <div className="box-content">
              <h4 className="text-warning mb-4" data-testid="text-gift-box-content-title">Gift Box Contents</h4>
              <div className="row">
                <div className="col-md-6">
                  {giftBoxContents.slice(0, 5).map((item, index) => (
                    <div key={index} className="content-item" data-testid={`text-gift-item-${index}`}>
                      {item.clickable ? (
                        <a href="#" className="text-warning" data-testid={`link-gift-item-${index}`}>{item.name}</a>
                      ) : (
                        item.name
                      )}
                    </div>
                  ))}
                </div>
                <div className="col-md-6">
                  {giftBoxContents.slice(5).map((item, index) => (
                    <div key={index + 5} className="content-item" data-testid={`text-gift-item-${index + 5}`}>
                      {item.clickable ? (
                        <a href="#" className="text-warning" data-testid={`link-gift-item-${index + 5}`}>{item.name}</a>
                      ) : (
                        item.name
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
