import { MdOutlineVideocam } from "react-icons/md";
import { FaPlay } from "react-icons/fa";


const links = {
        sadhya: "https://www.instagram.com/reel/DNib1UKpRhU/?igsh=MWMyeTI3aGc0cnprMg%3D%3D",
        payasam: "https://www.instagram.com/reel/DNk8E5_pLQ3/?igsh=MXZ0MndtN2YybGM2bg%3D%3D",
        giftBox: "https://www.instagram.com/reel/DNqRu36MykB/?igsh=azJ5dmw4d2E3c3Ey",
        bulkOrder: "https://www.instagram.com/reel/DNnkcqVMFnF/?igsh=MXdmbmV3NGxhc2lqMA%3D%3D"
        }
    

        type VideoButtonProps = {
  source: keyof typeof links; // "sadhya" | "payasam" | "giftBox" | "bulkOrder"
};

export default function VideoButton({ source }: VideoButtonProps ) {

      const link = links[source]; // pick link dynamically based on prop

  return (
    <a
      href= {link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center text-lg leading-tight"
    >
      <div className="relative flex items-center justify-center">
        <MdOutlineVideocam size={90} color="rgb(231,91,33)" />
        <FaPlay
          size={20}
          color="white"
          className="absolute  left-0.8 top-1/2 -translate-x-[40%] -translate-y-1/2"
        />
      </div>
      <span className="-mt-5 text-[rgb(231,91,33)]" >Click here</span>
    </a>
  );
}
