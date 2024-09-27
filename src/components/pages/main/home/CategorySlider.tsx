import { getTopCategories } from '@/actions/category/categoryActions';
import { topCategoryDataType } from '@/types/ResponseTypes';
import Link from 'next/link';
import React from 'react';
import CategorySliderNav from './CategorySliderNav';

async function CategorySlider() {
  const topCategories = await getTopCategories();
  return <CategorySliderNav topCategories={topCategories} />;
}

export default CategorySlider;
