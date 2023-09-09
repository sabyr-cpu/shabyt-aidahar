import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from './header';

export default function TitleSlide() {
  const backgroundImageUrl = '/background.jpg'; // Replace with the actual image URL

  const containerStyles = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  useEffect(() => {
    const scrollToContent = () => {
      window.scrollTo({
        top: window.innerHeight, // Scroll by 100vh
        behavior: 'smooth',
      });
    };

    const button = document.getElementById('scrollButton');
    if (button) {
      button.addEventListener('click', scrollToContent);
    }

    return () => {
      if (button) {
        button.removeEventListener('click', scrollToContent);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-[100vh] bg-[#E6134C]">
      <Header />
      <div className="flex flex-col items-center justify-center w-full h-[100vh]" style={containerStyles}>
        <h1 className="text-6xl drop-shadow-text-shadow font-bold text-white">AIDAHAR</h1>
        <p className="text-2xl drop-shadow-text-shadow shadow-black font-bold text-white text-center">Инновационное решение в борьбе с пожарами</p>
        <button id="scrollButton" className="px-4 py-2 mt-4 text-white bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-[#E6134C]">Подробнее</button>
      </div>
    </div>
  );
}
