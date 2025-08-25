export default function TermsModal() {
  return (
    <>
      {/* Gift Voucher Modal */}
      <div className="modal fade" id="giftVoucherModal" tabIndex={-1} aria-labelledby="giftVoucherModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="giftVoucherModalLabel" data-testid="text-gift-voucher-modal-title">
                KCK Gift Voucher Terms & Conditions
              </h5>
              <button 
                type="button" 
                className="btn-close btn-close-white" 
                data-bs-dismiss="modal" 
                aria-label="Close"
                data-testid="button-close-gift-voucher-modal"
              />
            </div>
            <div className="modal-body">
              <div className="p-3">
                <h5 className="text-warning mb-3" data-testid="text-gift-voucher-guidelines-title">The special Onam voucher is valid for an amount of 750/- (Rupees Seven hundred and fifty only) 
                </h5>
                
                <h4 className="text-warning">VALIDITY</h4>
                <p className="mb-3"> This voucher is valid untill October 31,2025.</p>
                <h4 className="text-warning">REDEMPTION</h4>
                <ul className="list-unstyled" data-testid="list-gift-voucher-terms">
                  <li className="mb-2">• This voucher is redeemable at Kappa Chakka Kandhari restaurants in Chennai and Bangalore, only on weekdays - for lunch or dinner.</li>
                  <li className="mb-2">• This voucher cannot be redeemed for cash.</li>
                  <li className="mb-2">• This voucher cannot be combined with any other vouchers or offers.</li>
                  <li className="mb-2">• This voucher is not applicable on public holidays.</li>
                  <li className="mb-2">• Please submit this voucher at the restaurant desk before placing the order.</li>
                  <li className="mb-2">• This Gift voucher is non- transferable and cannot be resold.</li>
                </ul>
            
              </div>
            </div>
            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-secondary" 
                data-bs-dismiss="modal"
                data-testid="button-close-gift-voucher"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Onam Contest Modal */}
      <div className="modal fade" id="onamContestModal" tabIndex={-1} aria-labelledby="onamContestModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="onamContestModalLabel" data-testid="text-onam-contest-modal-title">
                Onam Contest Terms & Conditions
              </h5>
              <button 
                type="button" 
                className="btn-close btn-close-white" 
                data-bs-dismiss="modal" 
                aria-label="Close"
                data-testid="button-close-onam-contest-modal"
              />
            </div>
            <div className="modal-body">
              <div className="p-3">
                <h6 className="text-warning" data-testid="text-onam-contest-rules-title">Contest Rules & Regulations</h6>
                <ul className="list-unstyled" data-testid="list-onam-contest-terms">
                  <li className="mb-2">• Contest is open to all customers who place orders during Onam season (Aug 20 - Sep 10, 2025)</li>
                  <li className="mb-2">• Share your Onasadhya experience on social media with #KeralafeastOnam</li>
                  <li className="mb-2">• Tag @KeralaFeast and 3 friends to be eligible</li>
                  <li className="mb-2">• Winners will be announced on September 15, 2025</li>
                  <li className="mb-2">• Prizes include: 1st Prize - Free Onasadhya for family (4 people)</li>
                  <li className="mb-2">• 2nd Prize - Gift box worth ₹500 | 3rd Prize - Payasam combo pack</li>
                  <li className="mb-2">• Multiple entries allowed, but one prize per family</li>
                  <li className="mb-2">• Contest is subject to Instagram and Facebook terms of service</li>
                  <li className="mb-2">• Winners must claim prizes within 30 days of announcement</li>
                </ul>
                <p className="mt-3 text-muted small" data-testid="text-onam-contest-disclaimer">
                  Contest decisions are final. No correspondence will be entertained regarding contest results.
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-secondary" 
                data-bs-dismiss="modal"
                data-testid="button-close-onam-contest"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
