export default function PickupLocationsSection() {
  const chennaiLocations = [
    {
      name: 'IHMCT',
      address: 'P.O, 4th Cross Street,C.I.T Campus, TTTI, Tharamani, \nChennai - 600113',
      timings: '11 AM - 3 PM',
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6478160832535!2d80.24077098885495!3d12.994363100000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526788f2f630e9%3A0x2c720afd60e00e18!2sInstitute%20of%20Hotel%20Management%20Catering%20Technology%20%26%20Applied%20Nutrition!5e0!3m2!1sen!2sin!4v1755935827218!5m2!1sen!2sin'
    },
    {
      name: 'Votive Shrine Church',
      address: '63 Halls Road,Kilpauk, \nChennai - 600010',
      timings: '11 AM - 3 PM',
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.2789543715594!2d80.2356351!3d13.0814991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265d58ff373b1%3A0x5b13878c63f2ed3d!2sVotive%20Shrine%20Of%20The%20Immaculate%20Heart%20of%20Mary!5e0!3m2!1sen!2sin!4v1755935940350!5m2!1sen!2sin'
    },
    {
      name: 'QFarmers Organic Store',
      address: 'Hiranandani Gateway House, OMR Road, \nChennai - 600130',
      timings: '11 AM - 3 PM',
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.12299473202!2d80.22744107411806!3d12.835327817853301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b8d8ca67d77%3A0xb011b67461ba29cc!2sQFarmers%20Organic%20Store!5e0!3m2!1sen!2sin!4v1755936108060!5m2!1sen!2sin'
    }
  ];

  const bengaluruLocations = [
    {
      name: 'WINGS ELIM Camping and Convention Centre',
      address: 'Convention Centre, Collinwood Estate, Whitefield, \nBengaluru - 560066',
      timings: '11 AM - 3 PM',
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8817004703856!2d77.7442452!3d12.9794175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11e5eeca2403%3A0x3bdbc5be40505a82!2sWINGS%20Elim%20Camp%20%26%20Convention%20Center!5e0!3m2!1sen!2sin!4v1755934839470!5m2!1sen!2sin'
    },
    {
      name: 'St. John\'s Auditorium',
      address: '18th Main Rd, John Nagar,Koramangala, \nBengaluru - 560034',
      timings: '11 AM - 3 PM',
     mapSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31109.03300272171!2d77.621829!3d12.931542!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1450ebb739f9%3A0x1e5d87f68f96f01a!2sSt.%20John's%20Auditorium!5e0!3m2!1sen!2sus!4v1755939945940!5m2!1sen!2sus"
  },
    {
      name: 'Srikanteswara Bhavana',
      address: 'No.74, 5th cross, Malleshwaram,\nBengaluru - 560003',
      timings: '11 AM - 3 PM',
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7775.212690517192!2d77.55904018878937!3d12.99701139140773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1626876ffa0d%3A0xa86df2c03baf1a8f!2sNanjangud%20Srikanteshwara%20Seva%20Sangha!5e0!3m2!1sen!2sin!4v1755934254750!5m2!1sen!2sin'
    }
  ];

  return (
    <section id="pickup" className="pickup-section">
      <div className="container">
        <h2 className="pickup-heading" data-testid="text-pickup-heading">Pick-ups available on September 4 & 5, 2025</h2>
        <hr className="border-warning border-2 opacity-75 mx-auto" style={{width: '100px'}} />
        
        {/* Chennai Locations */}
        <div className="mt-5">
          <h3 className="text-center mb-4" style={{color: 'rgb(255, 188, 12)'}} data-testid="text-chennai-heading">
            Chennai - Pick-up Points
          </h3>
          <div className="row">
            {chennaiLocations.map((location, index) => (
              <div key={index} className="col-lg-4 mb-4 flex justify-center">
                <div className="location-card w-full md:w-[60%] lg:w-full" data-testid={`card-chennai-location-${index}`}>
                  <h5 className="text-primary mb-2" data-testid={`text-chennai-name-${index}`}>{location.name}</h5>
                  <p className="text-muted small mb-3" data-testid={`text-chennai-address-${index}`}>
                    {location.address.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < location.address.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                    <br />
                    <strong>Timings:</strong> {location.timings}
                  </p>
                  <iframe 
                    src={location.mapSrc}
                    width="100%" 
                    height="150" 
                    style={{border: 0, borderRadius: '8px'}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    data-testid={`iframe-chennai-map-${index}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bengaluru Locations */}
        <div className="mt-5">
          <h3 className="text-center mb-4" style={{color: 'rgb(255, 188, 12)'}} data-testid="text-bengaluru-heading">
            Bengaluru - Pick-up Points
          </h3>
          <div className="row">
            {bengaluruLocations.map((location, index) => (
              <div key={index} className="col-lg-4 mb-4  flex justify-center">
                <div className="location-card  w-full md:w-[60%] lg:w-full" id = {`card-bengaluru-location-${index}`} data-testid={`card-bengaluru-location-${index}`}>
                  <h5 className="text-primary mb-2" data-testid={`text-bengaluru-name-${index}`}>{location.name}</h5>
                  <p className="text-muted small mb-3" data-testid={`text-bengaluru-address-${index}`}>
                    {location.address.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < location.address.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                    <br />
                    <strong>Timings:</strong> {location.timings}
                  </p>
                  <iframe 
                    src={location.mapSrc}
                    width="100%" 
                    height="150" 
                    style={{border: 0, borderRadius: '8px'}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    data-testid={`iframe-bengaluru-map-${index}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Terms Bar */}
        <div className="terms-bar">
          <div className="container">
            <p className="mb-0" data-testid="text-terms-bar">
              Terms and Conditions - 
              <a 
                href="#" 
                className="terms-link" 
                data-bs-toggle="modal" 
                data-bs-target="#giftVoucherModal"
                data-testid="link-gift-voucher"
              >
                Gift Voucher
              </a> 
              {/* |  */}
              {/* <a 
                href="#" 
                className="terms-link" 
                data-bs-toggle="modal" 
                data-bs-target="#onamContestModal"
                data-testid="link-onam-contest"
              >
                Onam Contest
              </a> */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
