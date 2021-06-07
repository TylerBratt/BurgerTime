import {
  useEffect,
  useReducer
} from 'react';
import dataReducer, {
  SET_APPLICATION_DATA
} from '../reducer/data_reducer';
import axios from 'axios';

const useApplicationData = () => {
  const [state, dispatch] = useReducer(dataReducer, {
      users: [],
      extburgers: [],
      loading: true,
  });
  useEffect(() => {
    const usersUrl = '/api/users';
    const extburgersUrl = 'api/extburgers';
    Promise.all([
      axios.get(usersUrl),
      axios.get(extburgersUrl),
    ]).then((all) => {
              // console.log("XXX", all);
              dispatch({
                  type: SET_APPLICATION_DATA,
                  users: all[0].data,
                  extburgers: all[1].data
              });
          })
          .catch((err) => console.log(err));
  }, []);

  return {
      state,
      dispatch,
  };
};

export default useApplicationData;