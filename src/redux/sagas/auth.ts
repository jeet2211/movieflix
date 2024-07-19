import { call, fork, put, takeEvery,all } from 'redux-saga/effects';
import {createSession, createGuestSession, createRequestToken, validateWithLogin} from "../../api/api"
import { loginRequest, loginSuccess, loginFailure,
        guestLoginRequest, guestLoginSuccess, guestLoginFailure
 } from '../actions/authActions';


function* handleLogin(action){
    try{
       const {username,password} = action.payload;
       const requestTokenResponse = yield call(createRequestToken);
       console.log("reres",requestTokenResponse)
       const validatedResponse = yield call(validateWithLogin, username, password, requestTokenResponse.request_token);
       console.log("valid",validatedResponse)
       const sessionResponse = yield call(createSession, validatedResponse.request_token);
       console.log(sessionResponse)
       localStorage.setItem('accountId', sessionResponse.account_id);
        localStorage.setItem('sessionId', sessionResponse.session_id);
        yield put(loginSuccess(sessionResponse));
    }catch(e){
        yield put(loginFailure(e.message));
    }
}
function* handleGuestLogin() {
    try {
      const guestSessionResponse = yield call(createGuestSession);
      localStorage.setItem('sessionId', guestSessionResponse.guest_session_id);
      yield put(guestLoginSuccess(guestSessionResponse));
    } catch (e) {
      yield put(guestLoginFailure(e.message));
    }
  }

 function* watchHandleLoginSaga(){
    yield takeEvery(loginRequest,handleLogin)
 }
 function* watchHandleGuestLoginSaga(){
    yield takeEvery(guestLoginRequest,handleGuestLogin)
 }

 export default function* authSaga(){
    yield all([
        fork(watchHandleLoginSaga),
        fork(watchHandleGuestLoginSaga)
    ])
 }