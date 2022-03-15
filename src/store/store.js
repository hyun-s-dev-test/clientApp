import {configureStore} from '@reduxjs/toolkit';
import userAgreementReducer from '../state/userAgreementSlice';
import userAuthReducer from '../state/userAuthSlice';
import userInfoReducer from '../state/userInfoSlice';

export const store = configureStore({
  reducer: {
    userAgreement: userAgreementReducer,
    userAuth: userAuthReducer,
    userInfo: userInfoReducer,
  },
});
