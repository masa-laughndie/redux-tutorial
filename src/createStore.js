export default function createStore(reducer) {
  let state;
  let listeners = [];

  //  state を返すのみ
  function getState() {
    return state;
  }

  function dispatch(action) {
    // state 更新
    state = reducer(state, action);
    // 全ての listener ( subscribe で登録した処理 ) を実行
    listeners.forEach(listener => listener());
  }

  // dispatch 時に呼ばれる処理を登録
  function subscribe(listener) {
    listeners.push(listener);

    return () => {
      listeners = listeners.filter(l => l != listener);
    };
  }

  // initial state を反映させるための dummy dispatch
  dispatch({});

  return { getState, dispatch, subscribe };
}
