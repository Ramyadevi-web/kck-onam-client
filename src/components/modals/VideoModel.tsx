import React from "react";

type VideoModalProps = {
  isOpen: boolean;
  src: string | null;
  onClose: () => void;
};

export default function VideoModal({ isOpen, src, onClose }: VideoModalProps) {
  if (!isOpen || !src) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="relative w-full max-w-3xl p-4">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-2xl"
        >
          ✕
        </button>
        <video
          src={src}
          controls
          autoPlay
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
