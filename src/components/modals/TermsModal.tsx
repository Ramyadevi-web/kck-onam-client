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
                <p className="mb-3">This voucher is valid till 31st October 2025.</p>
                <h4 className="text-warning">REDEMPTION</h4>
                <ul className="list-unstyled text-xs md:text-sm" data-testid="list-gift-voucher-terms">
                  <li className="mb-2">• This voucher entitles the customer Rs.750/- (Rupees seven hundred and fifty only) off on dine-in bill at any Kappa Chakka Kandhari restaurant in the cities of Chennai & Bangalore.</li>
                  <li className="mb-2">• This voucher is not redeemable on takeaway or online orders.</li>
                  <li className="mb-2">• This voucher is redeemable only during weekdays (Monday to Friday) and cannot be redeemed on weekend days during the said validity period.</li>
                  <li className="mb-2">• This voucher cannot be redeemed during festive days or public holidays.</li>
                  <li className="mb-2">• Not more than 1 individual voucher of Rs.750/- each can be clubbed together for redemption against a single dine-in bill.</li>
                  <li className="mb-2">• This voucher is to be presented at the restaurant in its physical form before billing in order to be redeemed and the same will be retained by the restaurant.</li>
                  <li className="mb-2">• No request for cash in lieu of the voucher or its value will be entertained. </li>
                  <li className="mb-2">• This voucher cannot be clubbed with any other scheme or offer presented by Kappa Chakka Kandhari Foods Pvt. Ltd. during the said validity period. </li>
                  <li className="mb-2">• Kappa Chakka Kandhari Foods Pvt Ltd. reserves the rights to withdraw / alter / modify / change the rules governing the redemption of the voucher and whatsoever offered here under, at any time without any liability to the customer. </li>
                  <li className="mb-2">• Kappa Chakka Kandhari Foods Pvt Ltd. reserves the rights to run / promote other offers & schemes during the same validity period of this voucher.</li>
                  <li className="mb-2">• Acceptance or rejection of the voucher submitted by the customer shall remain at the sole discretion of Kappa Chakka Kandhari Foods Pvt. Ltd.</li>
                  <li className="mb-2">• The decision of Kappa Chakka Kandhari Foods Pvt. Ltd. shall remain final and binding on all concerned parties in the instance of any dispute arising with regards to this offer.</li>
                  <li className="mb-2">• All disputes subject to the jurisdiction of Courts in Chennai.</li>

                
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
                  <li className="mb-2">•	The entry for Photograph to Postcards contest is acceptable only on 4th & 5th, September 2025.</li>
                  <li className="mb-2">• The contest is open for anyone celebrating Onam at home</li>
                  <li className="mb-2">• The employees of Kappa Chakka Kandhari or family members are not eligible to participate in the contest.</li>
                  <li className="mb-2">• The entries that do not adhere to the terms and conditions of contest will be eliminated.</li>
                  <li className="mb-2">• Multiple entries are not allowed for the contest.</li>
                  <li className="mb-2">• Entries will be judged based on the creativity, relevance, and originality.</li>
                  <li className="mb-2">• The winners of the contest will receive an official email. </li>
                  <li className="mb-2">• Entries that do not comply with these terms will be disqualified.</li>
                  <li className="mb-2">• Any disputes will be subject to the jurisdiction of courts.</li>
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
