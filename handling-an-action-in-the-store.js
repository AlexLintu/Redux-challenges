const defaultState = {
    login: false
  };
  /* Solution #1
  const reducer = (state = defaultState, action) => {
    if (action.type === 'LOGIN') {
      return {login: true};
    } else {
      return state;
    }
  }; */
  
  // Solution #2 
  const reducer = (state = defaultState, action) => {
    return action.type === 'LOGIN' ? {login: true} : state
  };
  
  const store = Redux.createStore(reducer);
  
  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };