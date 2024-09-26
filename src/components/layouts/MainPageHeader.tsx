import React from 'react';
import CategorySlider from '../pages/main/home/CategorySlider';
import MainHeaderNav from './MainHeaderNav';

function MainPageHeader() {
  return (
    <header>
      <MainHeaderNav />
      <CategorySlider />
    </header>
  );
}

export default MainPageHeader;
