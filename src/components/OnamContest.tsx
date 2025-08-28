import { FaHome } from "react-icons/fa";

export default function OnamContest() {
  return (

    <section id="onamcontest" className="main-section">
      <div className="container">

        {/* Desktop View */}
        <div className="row align-items-start items-center d-none d-md-flex">
          <div className="col-lg-6 mb-4 mb-lg-0 flex flex-col items-center">
            <img 
              src="images/onam_contest.webp" 
              alt="Onam Contest" 
              className="img-fluid rounded-3 shadow-lg w-[30%] mb-5"
              data-testid="img-onamcontest" 
            />
            <img 
              src="images/villa.webp" 
              alt="Onam Contest" 
              className="img-fluid rounded-3 shadow-lg w-[50%] mb-5"
              data-testid="img-villa" 
            />
            <img 
              src="images/cruise.webp" 
              alt="Onam Contest" 
              className="img-fluid rounded-3 shadow-lg w-[50%] mb-5"
              data-testid="img-cruise" 
            />
          </div>
          <div className="col-lg-6">
            <div className='flex justify-center items-center gap-2 mb-1 mt-5'>
            <h1 className="section-heading" data-testid="text-gift-box-title">KCK Onam Contest</h1>
            </div>
            <p className=" mb-3 text-center md:text-lg win-text-highlight" data-testid="text-gift-box-availability">Win an exciting Kerala stay</p>
            <p className="description mt-2 mb-1 text-xs px-3 md:text-lg" data-testid="text-gift-box-description">
             Picture yourself with your family in God’s own country, sitting by the pool in a premium villa, savoring an authentic, customized meal, spending the day drifting through the backwaters on a houseboat, experiencing the rich culture of Kerala. 
             All this is possible with just a click. 
            </p>
            <p className="description mb-5 text-xs px-3 md:text-lg mt-2">
              What better place to celebrate Onam if not at home, in the company of dear ones. 
              The coming together of family, from lands afar, the day filled with good food, love, and laughter. 
              Take snapshots or videos of your Onam celebration at home, post them on your Instagram account, along with a creative caption, tag <span className="text-warning">@kckfoods</span> and use <span className="text-warning">#kckonamathome</span> to win a chance for a 2-night stay in the heart of Kerala.
            </p>

            <h1 className="text-warning mt-5 prize-package flex justify-center mb-2" data-testid="text-prize-package">Prize Package - 2-night stay in Kerala (family of 4)</h1>
            <ul>
                <li className="flex items-start gap-3 mb-3"><FaHome className="w-4 h-4 mt-1 text-warning shrink-0"/>One-night stay in a 2-bedroom, lakefront premium villa- Coconut Lagoon by CGH Earth Experience Hotel.</li>
                <li className="flex items-start gap-3 mb-3"><FaHome className="w-4 h-4 mt-1 text-warning shrink-0"/>One night stay in 2-bedroom houseboat -Spice Coast Cruises</li>
                <li className="flex items-start gap-3 mb-3"><FaHome className="w-4 h-4 mt-1 text-warning shrink-0"/>All meals included (breakfast, lunch & dinner on both days)</li>
                <li className="flex items-start gap-3 mb-3"><FaHome className="w-4 h-4 mt-1 text-warning shrink-0"/>One out of all the meals provided will be an exclusive toddy shop experience. </li>
            </ul>
          </div>
        </div>


         {/* Mobile View */}
        <div className="row d-block d-md-none">
           <div className="col-12 flex flex-col items-center mb-4">
 
            <div className="flex justify-center">
            <img 
              src="images/onam_contest.webp" 
              alt="Onam Contest" 
              className="shadow-lg w-[50%] mb-5"
              data-testid="img-onamcontest" 
            />
            </div>

            <h1 className="section-heading text-center mb-1" data-testid="text-gift-box-title">KCK Onam Contest</h1>

            <p className="mb-3 text-center text-sm win-text-highlight" data-testid="text-gift-box-availability">
              Win an exciting Kerala stay
            </p>  

          <p className="description mt-2 mb-4 text-xs px-3" data-testid="text-gift-box-description">
            Picture yourself with your family in God’s own country, sitting by the pool in a premium villa, savoring an authentic, customized meal, spending the day drifting through the backwaters on a houseboat, experiencing the rich culture of Kerala. 
            All this is possible with just a click. 
          </p>

            <img 
              src="images/villa.webp" 
              alt="Villa" 
              className="img-fluid rounded-3 shadow-lg w-2/3 mb-5"
              data-testid="img-villa" 
            />

            <p className="description mb-5 text-xs px-3">
              What better place to celebrate Onam if not at home, in the company of dear ones. 
              The coming together of family, from lands afar, the day filled with good food, love, and laughter. 
              Take snapshots or videos of your Onam celebration at home, post them on your Instagram account, along with a creative caption, tag 
              <span className="text-warning"> @kckfoods</span> and use 
              <span className="text-warning"> #kckonamathome</span> to win a chance for a 2-night stay in the heart of Kerala.
            </p>

              <img 
                src="images/cruise.webp" 
                alt="Cruise" 
                className="img-fluid rounded-3 shadow-lg w-2/3 mb-5"
                data-testid="img-cruise" 
              />

              <h3 className="text-warning text-center text-xs md:text-sm mt-5 mb-2" data-testid="text-prize-package">
                Prize Package - 2-night stay in Kerala (family of 4)
              </h3>

              <ul className="px-4">
                <li className="flex items-start gap-3 mb-3">
                  <FaHome className="w-4 h-4 mt-1 text-warning shrink-0"/>
                  One-night stay in a 2-bedroom, lakefront premium villa - Coconut Lagoon by CGH Earth Experience Hotel.
                </li>
                <li className="flex items-start gap-3 mb-3">
                  <FaHome className="w-4 h-4 mt-1 text-warning shrink-0"/>
                  One night stay in 2-bedroom houseboat - Spice Coast Cruises
                </li>
                <li className="flex items-start gap-3 mb-3">
                  <FaHome className="w-4 h-4 mt-1 text-warning shrink-0"/>
                  All meals included (breakfast, lunch & dinner on both days)
                </li>
                <li className="flex items-start gap-3 mb-3">
                  <FaHome className="w-4 h-4 mt-1 text-warning shrink-0"/>
                  One out of all the meals provided will be an exclusive toddy shop experience.
                </li>
              </ul>
        </div>
      </div>
      </div>
    </section>  
  );
}
