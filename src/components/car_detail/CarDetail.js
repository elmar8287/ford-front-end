import React from 'react';
import { useSelector } from 'react-redux';
import { CaretLeft, CaretRight } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';

const CarDetail = () => {
  const state = useSelector((state) => state.myCar);

  return (
    <div>
      <div className="container_">
        <div className="detail_view">
          <img src={state.image} className="detail_image" alt="car" />
          <div className="car_details">
            <h2>{state.name}</h2>
            <div className="car_fee dark">
              <p>Finance fee</p>
              <p>
                {' '}
                {state.price}
                {' '}
                $
              </p>
            </div>

            <div className="car_fee">
              <p>Duration</p>
              <p> 3 Months </p>
            </div>
            <div className="car_fee dark">
              <p>Engine</p>
              <p>
                {' '}
                {state.engine}
                {' '}
              </p>
            </div>
            <button type="button" className="rent_link"id="reserve_modal-displayer">
              Reserve Car
              <CaretRight size={20} />
            </button>
          </div>
        </div>
        <NavLink to="/">
          <div className="back_link">
            <CaretLeft size={20} />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default CarDetail;
