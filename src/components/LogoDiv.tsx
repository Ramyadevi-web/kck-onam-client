import React from "react";

export default function LogoDiv() {
  return (
    <section id="logo" className="pt-40 flex flex-col text-[rgb(255,188,12)] 
    items-center justify-center pb-15 bg-black">
       {/* <h1 className="mt-4 text-xl  font-300">
         Celebrate Onam 
       </h1>
        <p className="font-300 text-xl">the Kappa Chakka Kandhari</p>
        <p className="font-300 text-xl"> way...</p>     */}
        <img
          src="/images/celeb.png"
          alt="KCK Logo"
          className="mt-3 w-[50%] sm:w-[30%] object-contain"
        />
        
        <img
          src="/images/kck_logo.png"
          alt="KCK Logo"
          className="h-56 mt-3 w-56 object-contain"
        />
         

    </section>
  );
}