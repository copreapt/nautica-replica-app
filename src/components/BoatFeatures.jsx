import React from 'react'
import { descriptionItems } from '../utils';

const BoatFeatures = () => {
  return (
    <div className="h-max lg:my-auto mt-10 mx-3 space-y-2 lg:space-y-5 lg:grid lg:grid-cols-2">
      {descriptionItems.map((item, index) => {
        return (
          <div className="flex space-x-2 lg:items-center lg:content-start" key={index}>
            <img src={item.icon} alt={item.name} className='lg:w-fit' />
            <h1>
              <span className="font-bold">{item.name}:</span> {item.value}
            </h1>
          </div>
        );
      })}
    </div>
  );
}

export default BoatFeatures