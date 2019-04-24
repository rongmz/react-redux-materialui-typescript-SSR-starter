import { Utility, IUtility } from "../store/appConfigStore/utility";
import { IAppConfigAction, AppConfigActionType } from "../actions/appConfig";
import { combineReducers, Reducer } from "redux";
import { AppConfig } from "../store/appConfigStore";


/**
 * This redurer has scope only to appConfig.utility
 */
export const utilityReducer = (state: IUtility = new Utility(), action: IAppConfigAction): IUtility => {
  console.log('utility reducer=', state, ' action=', action);
  let tempState: IUtility;
  switch (action.type) {

    // handle drawer open
    case AppConfigActionType.OPEN_DRAWER:
      return {
        ...state,
        isDrawerOpen: true
      };

    // handle drawer close
    case AppConfigActionType.CLOSE_DRAWER:
      return {
        ...state,
        isDrawerOpen: false
      };

    // handle show alert
    case AppConfigActionType.SHOW_ALERT:
      tempState = {
        ...state,
      };
      if (action.payload) tempState.currentAlert = action.payload;
      return tempState;

    // handle close alert
    case AppConfigActionType.CLOSE_ALERT:
      return {
        ...state,
        currentAlert: undefined
      };

    // handle open notification drawer
    case AppConfigActionType.OPEN_NOTIFICATION_DRAWER:
      tempState = {
        ...state,
        isNotificationDrawerOpen: true
      };
      if (action.payload) tempState.systemNotifications = action.payload;
      return tempState;

    // handle close notification drawer
    case AppConfigActionType.CLOSE_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerOpen: false
      };

    // handle show notification
    case AppConfigActionType.SHOW_NOTIFICATION:
      tempState = {
        ...state,
      };
      if (action.payload) tempState.currentNotification = action.payload;
      return tempState;

    // handle close notification
    case AppConfigActionType.CLOSE_NOTIFICATION:
      return {
        ...state,
        currentNotification: undefined
      };

    default:
      return state;
  }
};


/**
 * This reducer is just a combination of all reducers under appconfig
 */
export const appConfigReducer: Reducer<AppConfig> = combineReducers({
  utility: utilityReducer
});

