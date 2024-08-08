import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRevenusData } from '../../redux/slices/apiSlice';

const TotalRevenue = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.api.revenueData);

  useEffect(() => {
    dispatch(fetchRevenusData());
  }, [dispatch]);

  console.log(state);
  return <div>TotalRevenue</div>;
};

export default TotalRevenue;
