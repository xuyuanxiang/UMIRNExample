function fakeFetch() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Hello, umi!'), 1000);
  });
}

export default {
  namespace: 'foo',
  state: {
    greeting: '',
  },
  subscriptions: {
    setup({dispatch}) {
      dispatch({
        type: 'fetch',
      });
    },
  },
  effects: {
    *fetch(action, {call, put}) {
      const text = yield call(fakeFetch);
      yield put({
        type: 'fulfill',
        payload: {
          text,
        },
      });
    },
  },
  reducers: {
    fulfill(state, action) {
      // dva-immer
      state.greeting = action.payload.text;
    },
  },
};
