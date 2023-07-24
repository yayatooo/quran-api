import React, { Suspense } from 'react';
import CardSurah from './CardSurah';
import Navbar from '../Navbar';
import Loading from './loading';

const pageSurah = () => {
  return (
    <> 
      <Navbar />
      <Suspense fallback={<Loading />}>        
        <CardSurah />
      </Suspense>  
    </>
  );
};

export default pageSurah;
