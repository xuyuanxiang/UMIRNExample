function fakeLoginRequest() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 1000);
  });
}

export default {
  namespace: 'user',
  state: {
    hasSignedIn: false,
    rememberMe: true,
    username: '',
    password: '',
  },
  effects: {
    *login({payload: {username, password, rememberMe}}, {call, put}) {
      yield call(fakeLoginRequest, {username, password});
      yield put({
        type: 'signIn',
        payload: {
          username,
          password,
          rememberMe,
        },
      });
    },
  },
  reducers: {
    signIn(state, {payload: {rememberMe, username, password}}) {
      state.hasSignedIn = true;
      state.rememberMe = rememberMe;
      if (rememberMe) {
        state.username = username;
        state.password = password;
      } else {
        state.username = '';
        state.password = '';
      }
    },
    signOut(state) {
      state.hasSignedIn = false;
    },
  },
};
