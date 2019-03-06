import actions from './actions';

const initialState = {
  list: [
    {
      id: 1,
      title: 'NVL123',
      date: '09/10/2019',
      quatity: 10000,
      percent: 8
    },
    {
      id: 2,
      title: 'NVL1234',
      date: '09/10/2019',
      quatity: 10000,
      percent: 8
    },
    {
      id: 3,
      title: 'NVL1235',
      date: '09/10/2019',
      quatity: 10000,
      percent: 8
    },
    {
      id: 4,
      title: 'NVL1236',
      date: '09/10/2019',
      quatity: 10000,
      percent: 8
    }
  ],
  detail: {},
  error: ''
};

const Bonds = (state = initialState, action) => {
  switch (action.type) {
    case actions.BONDS:
      return { ...state, list: action.list };
    case actions.BONDS_DETAIL:
      return { ...state, detail: action.detail };
    case actions.BONDS_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default Bonds;
