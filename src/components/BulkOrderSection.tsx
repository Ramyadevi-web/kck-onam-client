import { useState } from 'react';

export default function BulkOrderSection() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    date: '',
    location: '',
    requirements: ''
  });

  const [selectedItems, setSelectedItems] = useState({
    onasadhya : false,
    payasam: false,
    giftbox: false
  });

  const [quantities, setQuantities] = useState({
    onasadhya: 0,
    payasam: 0,
    giftbox: 0
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange =((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setSelectedItems(prev => ({
      ...prev,
      [name]: checked,
    }));
  });

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value} = e.target;
    setQuantities(prev => ({
      ...prev,
      [name]: value
    }));
  };

    const validateForm = () => {
    let valid = true;
    let newErrors = { mobile: '', email: '' };

    // ✅ Mobile validation: 10 digits only
    const mobileRegex = /^[6-9]\d{9}$/; // Indian 10-digit numbers
    if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = 'Enter a valid 10-digit mobile number';
      valid = false;
    }

    // ✅ Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
      valid = false;
    }


    if(newErrors.mobile || newErrors.email){
      alert( `${newErrors.mobile !== '' ? newErrors.mobile : ''} ${newErrors.email !== '' ? newErrors.email : ''}` );
      console.log(newErrors);
    }
      return valid;
    };

    const getMinDate = ()=>{
      const today = new Date();
      today.setDate(today.getDate() + 2); // after tomorrow
      return today.toISOString().split("T")[0];
    }


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

        if (!validateForm()) {
            return;// stop if validation fails
    }

    
    // Create FormData for Google Form submission
    const submitData = new FormData();
    submitData.append('entry.622188552', formData.name);
    submitData.append('entry.1865073733', formData.mobile);
    submitData.append('entry.965648303', formData.email);
    submitData.append('entry.1060525465', formData.date);
    submitData.append('entry.2124947497', formData.requirements);
    submitData.append('entry.1385398304', formData.location);

    let itemsSummary = "";
  if (selectedItems.onasadhya) {
    itemsSummary += `Onasadhya - ${quantities.onasadhya}\n`;
  }
  if (selectedItems.payasam) {
    itemsSummary += `Payasam - ${quantities.payasam}\n`;
  }
  if (selectedItems.giftbox) {
    itemsSummary += `Giftbox - ${quantities.giftbox}\n`;
  }

  submitData.append('entry.1508610621', itemsSummary.trim());
    
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeq7MKbMdJk12et3-JX4w9XbxxBZ-4BYqufoqnjx27GAKgZzA/formResponse';
    
    try {
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: submitData
      });
      
      alert('Thank you! Your bulk order request has been submitted. We will contact you within 24 hours.');
      setFormData({
        name: '',
        mobile: '',
        email: '',
        date: '',
        location: '',
        requirements: ''
      });
      setSelectedItems({
        onasadhya : false,
        payasam: false,
        giftbox: false
      });
    } catch (error) {
      alert('OOps!!! Something went wrong');
      setSelectedItems({
        onasadhya : false,
        payasam: false,
        giftbox: false
      });
      console.log(error)
    }
  };

  return (
    <section id="bulk-order" className="main-section">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-lg-6 mb-4 mb-lg-0  flex items-center">
            <img 
              src="\images\banquets.webp" 
              alt="Professional catering service for bulk orders" 
              className="img-fluid rounded-3 shadow-lg"
              data-testid="img-bulk-order"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="section-heading mb-2 flex justify-center" data-testid="text-bulk-order-title">Bulk Order</h1>
            <p className="description text-xs px-3 md:text-lg mb-2" data-testid="text-bulk-order-description">
              Celebrate the spirit of Onam with your friends, family, or colleagues - whether at home or at your workplace. 
              Choose from our specially curated Sadhya,  just the way you like it, or indulge in our delicious varieties of payasam.
              And for your dear ones who are far away, surprise them with the KCK Gift Box - featuring 8 handpicked condiments from Kerala, packed with love and tradition.
            </p>

             <p className="description mb-4 text-xs px-3 md:text-lg" data-testid="text-bulk-order-description">
              Banquet orders are open for a limited period so book now to celebrate Onam the Kappa Chakka Kandhari way.
            </p>
            
         
            <form onSubmit={handleSubmit} data-testid="form-bulk-order" className='mx-3'>
              <div className="mb-3">
                <label htmlFor="name" className="form-label text-warning">Full Name *</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="name" 
                  name="name"
                  placeholder="Enter your full name" 
                  required 
                  value={formData.name}
                  onChange={handleInputChange}
                  data-testid="input-name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label text-warning">Mobile Number *</label>
                <input 
                  type="tel" 
                  className="form-control" 
                  id="mobile" 
                  name="mobile"
                  placeholder="+91 XXXXX XXXXX" 
                  required 
                  value={formData.mobile}
                  onChange={handleInputChange}
                  data-testid="input-mobile"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-warning">Email Address *</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  name="email"
                  placeholder="your.email@example.com" 
                  required 
                  value={formData.email}
                  onChange={handleInputChange}
                  data-testid="input-email"
                />
              </div>

                <div className="mb-4">
    <label className="form-label text-warning">Select Items & Quantity *</label>
    <div className="flex flex-col md:flex-row gap-4">
      {/* Onasadhya */}
     <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="onasadhya"
          checked={selectedItems.onasadhya}
          onChange={handleCheckboxChange}
          className="form-checkbox"
        />
        Onasadhya
        {selectedItems.onasadhya && (
          <input
            type="number"
            name="onasadhya"
            min="1"
            placeholder="Quantity"
            value={quantities.onasadhya}
            onChange={handleQuantityChange}
            className="form-control w-24 ml-2"
          />
        )}
      </label>
      {/* Payasam */}
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="payasam"
          checked={selectedItems.payasam}
          onChange={handleCheckboxChange}
          className="form-checkbox"
        />
        Payasam
        {selectedItems.payasam && (
          <input
            type="number"
            name="payasam"
            min="1"
            placeholder="Quantity"
            value={quantities.payasam}
            onChange={handleQuantityChange}
            className="form-control w-24 ml-2"
          />
        )}
      </label>
      {/* Gift box */}
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="giftbox"
          checked={selectedItems.giftbox}
          onChange={handleCheckboxChange}
          className="form-checkbox"
        />
        Gift box
        {selectedItems.giftbox && (
          <input
            type="number"
            name="giftbox"
            min="1"
            placeholder="Quantity"
            value={quantities.giftbox}
            onChange={handleQuantityChange}
            className="form-control w-24 ml-2"
          />
        )}
      </label>
    </div>
  </div>

              <div className="mb-3">
                <label htmlFor="date" className="form-label text-warning">Preferred Date</label>
                <input 
                  type="date" 
                  className="form-control" 
                  id="date" 
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  data-testid="input-date"
                  min = {getMinDate()}
                />
              </div>

<div className="mb-3">
  <label className="form-label text-warning">Location *</label>
  <div className="d-flex gap-4">
    <label>
      <input
        type="radio"
        name="location"
        value="Chennai"
        checked={formData.location === 'Chennai'}
        onChange={handleInputChange}
        required
      />{' '}
      Chennai
    </label>
    <label>
      <input
        type="radio"
        name="location"
        value="Bengaluru"
        checked={formData.location === 'Bengaluru'}
        onChange={handleInputChange}
        required
      />{' '}
      Bengaluru
    </label>
  </div>
</div>


              <div className="mb-4">
                <label htmlFor="requirements" className="form-label text-warning">Any other userful information</label>
                <textarea 
                  className="form-control" 
                  id="requirements" 
                  name="requirements"
                  rows={4} 
                  placeholder="Please specify venue, location & any special requirement..."
                  value={formData.requirements}
                  onChange={handleInputChange}
                  data-testid="textarea-requirements"
                />
              </div>
              <div className='flex justify-center items-center'>
              <button type="submit" className="brand-btn" data-testid="button-submit-bulk-order">
                SUBMIT FORM <i className="fas fa-paper-plane ms-2"></i>
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
