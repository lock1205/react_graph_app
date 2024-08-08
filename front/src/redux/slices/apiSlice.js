import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'; //툴킷 import
import { GET_REVENUE_API_URL } from '../../constants/apiUrl'; //API URL import
import { getRequest } from '../../constants/requestMethods'; //API method import

//공통된 비동기 액션 생성 로직을 별도의 함수로 분리

const createFetchThunk = (actionType, apiURL) => {
  return createAsyncThunk(actionType, async () => {
    return await getRequest(apiURL);
  });
};
//

export const fetchRevenusData = createFetchThunk(
  'fetchRevenue',
  GET_REVENUE_API_URL
);

const handleFullfilled = (stateKey) => (state, action) => {
  // Add user to the state array
  state[stateKey] = action.payload;
};

const handleRejected = (state, action) => {
  console.log(action.payload);
  state.isError = true;
};

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    revenueData: null,
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchRevenusData.fulfilled, handleFullfilled('revenueData'))
      .addCase(fetchRevenusData.rejected, handleRejected);
  },
});

export default apiSlice.reducer;
