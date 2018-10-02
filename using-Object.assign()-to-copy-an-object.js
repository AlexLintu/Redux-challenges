const defaultState = {
    user: 'CamperBot',
    status: 'offline',
    friends: '732,982',
    community: 'freeCodeCamp'
  };
  
  const newStateObj = {
    status: 'online'
  };
  
  const immutableReducer = (state = defaultState, action) => {
    switch(action.type) {
      case 'ONLINE':
        return state = Object.assign({}, defaultState, newStateObj);
      default:
        return state;
    }
  };
  
  const wakeUp = () => {
    return {
      type: 'ONLINE'
    }
  };
  
  const store = Redux.createStore(immutableReducer);