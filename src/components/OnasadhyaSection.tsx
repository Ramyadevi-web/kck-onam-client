import { useState } from 'react';
import VideoButton from './VideoButton';

export default function OnasadhyaSection() {
  const [showExtraContent, setShowExtraContent] = useState(false);

  const mainItems = [
  'Cheru Pazham','Sharkara Varatty',
   'Cabbage Thoran', 'Pineapple Pachadi', 'Avial',
   'Olan', 'Kootu Kari', 'Inji Puli', 'Beetroot Kichadi', 'Nendrakai Nuruku',
   'Pavakka Kondattam', 'Payaru Kondattam', 'Rice', 'Pappadam',
   'Nei-Parippu',  'Kalan', 'Ada Pradhaman',
   'Palada Payasam', 'Chakka Pradhaman', 'Parippu Payasam'
  ];

  const extraItems = [
   'Uppu', 'Naranga Achar', 'Manga Achar',
   'Nellika Achar', 'Rasam', 'Sambar',
  ];

  const toggleContent = () => {
    setShowExtraContent(!showExtraContent);
  };

  return (
    <section id="onasadhya" className="main-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img 
              src="/images/leaf.webp " 
              alt="Traditional Kerala Onasadhya feast on banana leaf" 
              className="img-fluid rounded-3 shadow-lg"
              data-testid="img-onasadhya-feast"
            />
          </div>
          <div className="col-lg-6">
            <div className='flex justify-center items-center gap-2 mb-1'>
              <h1 className="section-heading text-center" data-testid="text-onasadhya-title">Onasadhya</h1>
               <span className='flex items-center text-[rgb(231,91,33)] text-lg font-light'>(₹8000)</span>
            </div>
           
            <p className="text-[rgb(255,188,12)] flex justify-center text-sm md:text-base lg:text-base xl:text-lg" data-testid="text-onasadhya-price">Serves 5–6 pax.</p>
             <p className="text-[rgb(255,188,12)] mb-3 flex justify-center text-xs md:text-base lg:text-base xl:text-lg" data-testid="text-onasadhya-price">Available for take-away on Sept 4 & 5, 2025.</p>

            <VideoButton source="sadhya"/>

            
            <p className="description mb-4 text-xs px-3 md:text-lg" data-testid="text-onasadhya-description">
              Some festivals are meant to be celebrated where they began - at home! 
               This Onam, unwrap our carefully curated vegetarian delicacies, prepared by seasoned Kerala cooks and packed with care. 
              Every dish, a quiet reminder of how tradition meant it to be. 
            </p>
            <div className='flex justify-center mb-4 text-[0.800rem]  md:text-base lg:text-lg xl:text-xl'>
              Celebrate Onam, the Kappa Chakka Kandhari way.
            </div>
            <div className=" flex flex-col md:flex-row justify-center items-center gap-4">
              <a 
                href="#"  rel="noopener noreferrer" 
                className="brand-btn whitespace-nowrap text-xs px-3 py-2 sm:px-4 sm:py-1  sm:text-xs md:text-sm lg:text-lg xl:text-xl"
                data-testid="button-book-bengaluru"
              >
                Book Now - Bengaluru
              </a>
              <a 
                href="#"  rel="noopener noreferrer" 
                className="brand-btn whitespace-nowrap text-xs px-3 py-2 sm:px-4 sm:py-1  sm:text-xs md:text-sm lg:text-lg xl:text-xl"
                data-testid="button-book-chennai"
              >
                Book Now - Chennai
              </a>
            </div>

            <div className="box-content">
              <h4 className="text-[rgb(255,188,12)] mb-0 md:mb-4 text-center text-xs md:text-base" data-testid="text-box-content-title">Jumbo KCK Onasadhya (26 Items)</h4>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-2">
                {
                  mainItems.map((item, index) => {
                    return (
                      <div key={index} className="content-item ">
                          {item}
                      </div>
                    );
                  })
              }
                
                  {showExtraContent &&
                      extraItems.map((item, index) => (
                        <div key={`extra-${index}`} className="content-item">
                          {item}
                        </div>
                      ))}
              </div>
              <div className="text-center mt-3">
                <a 
                  href="#" 
                  className="text-warning text-decoration-none" 
                  onClick={(e) => {
                    e.preventDefault();
                    toggleContent();
                  }}
                  data-testid="button-read-more"
                >
                  {showExtraContent ? 'Read Less' : 'Read More'} 
                  <i className={`fas fa-chevron-${showExtraContent ? 'up' : 'down'}`}></i>
                </a>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
