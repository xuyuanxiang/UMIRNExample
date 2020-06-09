export default {
  namespace: 'cards',
  state: {
    dataSource: [],
    page: 0,
    size: 10,
  },
  subscriptions: {
    setup({dispatch}) {
      dispatch({
        type: 'fetch',
      });
    },
  },
  effects: {
    *fetch(
      {payload: {page = 0, size = 10} = {page: 0, size: 10}} = {
        payload: {page: 0, size: 10},
      },
      {put, select, take},
    ) {
      while (true) {
        const hasSignedIn = yield select((state) => state.user.hasSignedIn);
        if (hasSignedIn) {
          yield put({
            type: 'fulfill',
            payload: {
              dataSource: Array.from(new Array(size)).map(
                (_val, i) => `card_${page}_${i}`,
              ),
              page,
              size,
            },
          });
          break;
        }
        yield take('user/signIn');
      }
    },
  },
  reducers: {
    fulfill(state, {payload: {dataSource, page, size}}) {
      // dva-immer
      state.dataSource = dataSource;
      state.page = page;
      state.size = size;
    },
  },
};
