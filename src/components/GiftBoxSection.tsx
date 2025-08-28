import {useRef, useState} from 'react'

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

   const videoRef = useRef<HTMLVideoElement | null>(null);  //Typescript doesn't know that the videoRef.current is HTMLElement
    const [playing , setPlaying] = useState(false);
  
    const handlePlay = () => {
      if(videoRef.current){
        videoRef.current.play()
        .then(()=>{
          setPlaying(true)
        })
        .catch((err)=>{
          console.log("Error in handlePlay", err)
        });
      }
    }
  

  return (
    <section id="giftbox" className="main-section">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Hand Side */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img 
              src="images/gift_box.webp" 
              alt="Premium Kerala gift box with traditional items" 
              className="rounded-3 shadow-lg w-1/2 mx-auto"
              data-testid="img-gift-box"
            />

            <div className="relative mt-5 mx-auto" 
            style={{width:'100%', maxWidth:'320px', aspectRatio: '9 / 16', position: 'relative'}}>
             <video ref={videoRef} controls = {playing} preload="none" poster="/thumbnail/giftThumb.webp" 
              className="w-full h-full object-cover rounded-lg shadow-lg">
              <source src="/videos/Giftboxvideo.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
              </video>

              {
                !playing && (<button onClick={handlePlay} className="play-button">
                  ▶
                </button>)
           }
        </div>


          </div>

          {/* Right Hand Side */}
          <div className="col-lg-6">
            <div className='flex justify-center items-center gap-2 mb-1'>
            <h1 className="section-heading" data-testid="text-gift-box-title">KCK Gift Box</h1>
            <span className='flex items-center text-[rgb(231,91,33)] text-lg font-light'>(₹1900)</span>
            </div>
            <p className="text-warning mb-3 text-center text-xs md:text-lg" data-testid="text-gift-box-availability">Available for take-away on Sept 4 & 5, 2025</p>
            <p className="description mb-1 text-xs px-3 md:text-lg" data-testid="text-gift-box-description">
              A special gift in a gift box, with the finest spices sourced from the heart of Kerala. Ranging from mace to marayoor jaggery, 8 condiments to spice up your cooking.
            </p>
            <p className="description mb-4 text-xs px-3 md:text-lg">
               Additionally, 2 Onam gift vouchers of INR 750 each, that can be redeemed on your next dine-in with Kappa Chakka Kandhari- Chennai & Bangalore.
            </p>
                        <div className=" flex flex-col md:flex-row justify-center items-center gap-4">
              <a 
                href="https://kappachakkakandhari.uengage.in/" rel="noopener noreferrer" target="_blank" 
                className="brand-btn whitespace-nowrap text-xs px-3 py-2 sm:px-4 sm:py-1  sm:text-xs md:text-sm lg:text-lg xl:text-xl"
                data-testid="button-book-bengaluru"
              >
                Book Now - Bengaluru
              </a>
              <a 
                href="https://kappachakkakandhari.uengage.in/" rel="noopener noreferrer" target="_blank"
                className="brand-btn whitespace-nowrap text-xs px-3 py-2 sm:px-4 sm:py-1  sm:text-xs md:text-sm lg:text-lg xl:text-xl"
                data-testid="button-book-chennai"
              >
                Book Now - Chennai
              </a>
            </div>

            <div className="box-content ">
              <h4 className="text-warning  flex justify-center mb-4" data-testid="text-gift-box-content-title">Gift Box Contents</h4>
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
