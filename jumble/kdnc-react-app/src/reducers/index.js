import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

/* Kdnc - connected-react-router - Step 2
Create root reducer as a function that takes history as an argument and returns reducer. */
/* Kdnc - connected-react-router - Step 3
Add router reducer into root reducer by passing history to connectRouter.
Note: The key MUST be router. */
const rootReducer = (history) => combineReducers({
  router: connectRouter(history)
});

export default rootReducer;