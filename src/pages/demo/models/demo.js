import { getData } from '../services/demo';

const initData = {
  todoList: [{ text: '测试任务', complete: false, id: Date.now() }],
  hasFetch: false,
  fetchLog: [],
};

export default {
  namespace: 'demo',
  state: {
    ...initData,
  },
  effects: {
    *getData({ queryType }, { call, put }) {
      yield put({ type: 'addLog', message: '开始请求数据' });
      const resData = yield call(getData, { type: queryType });
      yield put({ type: 'addLog', message: '请求完毕' });
      const { success, data } = resData;
      if (success) {
        yield put({ type: 'addLog', message: data });
      } else {
        yield put({ type: 'addLog', message: '返回数据异常' });
      }
    },
  },
  reducers: {
    addTodo: (state, { text }) => ({
      ...state,
      todoList: [
        ...state.todoList,
        {
          text,
          complete: false,
          id: Date.now(),
        },
      ],
    }),
    activeTodo: (state, { id }) => {
      // 修改引用类型时，请不要直接修改源对象
      const newTodoList = [...state.todoList];
      const index = newTodoList.findIndex(item => item.id === id);
      newTodoList[index] = {
        ...newTodoList[index],
        complete: !newTodoList[index].complete,
      };
      return {
        ...state,
        todoList: newTodoList,
      };
    },
    addLog: (state, { message }) => ({
      ...state,
      fetchLog: [
        ...state.fetchLog,
        {
          message,
          id: Math.random(),
        },
      ],
    }),
    update: (state, { type, ...newState }) => ({
      ...state,
      ...newState,
    }),
    clear: () => ({ ...initData }),
  },
};
