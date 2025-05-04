import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  iframeUrl: string;
}

export default function Modal({ isOpen, onClose, iframeUrl }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="relative w-full max-w-5xl mx-4 bg-gray-900 rounded-xl shadow-xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl hover:text-red-500"
        >
          &times;
        </button>

        {/* Iframe Content */}
        <div className="aspect-video w-full">
          <iframe
            src={iframeUrl}
            title="Embedded App"
            className="w-full h-full border-none"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
