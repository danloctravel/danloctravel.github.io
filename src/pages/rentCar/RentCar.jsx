import React, { useContext } from 'react';

import Car from '../../components/product/Car';
import { AppContext } from '../../context/AppProvider';

const Hotels = () => {
  const { carData } = useContext(AppContext);

  return (
    <div class='container-xxl py-5'>
      <div class='container'>
        <div class='text-center wow fadeInUp' data-wow-delay='0.1s'>
          <h6 class='section-title bg-white text-center text-primary px-3'>
            Rent car
          </h6>
          <h1 class='mb-5'>Dịch vụ cho thuê xe</h1>
        </div>
        <div class='row g-4'>
          {carData.map((product) => (
            <Car key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotels;
