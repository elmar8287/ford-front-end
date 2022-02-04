/* eslint-disable react/prop-types */
import React from 'react';
import style from './model.module.css';

const Car = ({ car }) => {
  const {
    // eslint-disable-next-line camelcase
    id, name, engine, image,
  } = car;

  return (
    <div className={style.car} id={id}>
      <div className={style.img_div}>
        <div style={{
          position: 'absolute',
          height: '75%',
          width: '80%',
          zIndex: '-1',
        }}
        />
        <img src={image} alt="model" className={style.car_img} />
      </div>
      <h3 className={style.car_name}>{name}</h3>
      <p className={style.car_desc}>{ engine }</p>
    </div>
  );
};

export default Car;
