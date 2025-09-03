interface NotificationBarProps {
  visible: boolean;
  onClose: () => void;
}

export default function NotificationBar({ visible, onClose }: NotificationBarProps) {
  return (
    <div className={`notification-bar fixed top-0 left-0 w-full h-12 sm:h-14 md:h-18 lg:h-14   px-2 sm:px-5 md:px-7 lg:px-10 flex items-center bg-yellow-400 z-50 transition-all duration-300 ${!visible ? 'hidden' : ''}`} id="notificationBar">
      <div className="flex  justify-between items-center w-full font-normal text-[9px] sm:text-xs md:text-base lg:text-xl">
        <span className="text-center flex flex-col w-full">
          Now, with the convenience of 3 take-away locations in Chennai & Bengaluru on
          Sept 4 & 5, 2025.
          <div className="text-center w-full">
            Available only on Zomato, for online ordering on Sept 4th & 5th.
          </div>
        </span>
        <button 
          type="button" 
          className="ml-4 text-black font-normal text-base sm:text-lg md:text-xl lg:text-3xl flex items-center justify-center"
          aria-label="Close" 
          onClick={onClose}
          data-testid="button-close-notification"
          
        >
          ×
        </button>
      </div>
    </div>
  );
}