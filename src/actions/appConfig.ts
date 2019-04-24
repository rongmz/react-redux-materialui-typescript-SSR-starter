import { Action, ActionCreator } from "redux";
import { ProgressAlert, IAlert, INotification, IUtility } from "../store/appConfigStore/utility";

/**
 * These are the possible action types that can be handled
 */
export enum AppConfigActionType {
  // drawer actions
  OPEN_DRAWER,
  CLOSE_DRAWER,
  
  // alert actions
  SHOW_ALERT,
  CLOSE_ALERT,

  // notification drawer actions
  OPEN_NOTIFICATION_DRAWER,
  CLOSE_NOTIFICATION_DRAWER,

  // notification snack actions
  SHOW_NOTIFICATION,
  CLOSE_NOTIFICATION,

}

/**
 * AppConfig action
 */
export interface IAppConfigAction extends Action<AppConfigActionType> {
  payload?: any;
}

export interface IAppConfigActionProps {
  // used to open drawer
  openDrawer: () => IAppConfigAction;
  // used to close drawer
  closeDrawer: () => IAppConfigAction;
  // used to show alert
  showAlert: (alert: ProgressAlert | IAlert) => IAppConfigAction;
  // used to hide alert
  closeAlert: () => IAppConfigAction; 
  // used to open notificatio drawer
  openNotificationDrawer: (notificationArray?: Array<INotification>) => IAppConfigAction;
  // used to hide notificatio drawer
  closeNotificationDrawer: () => IAppConfigAction;
  // used to open notificatio drawer
  showNotification: (notification: INotification) => IAppConfigAction;
  // used to hide notificatio drawer
  closeNotification: () => IAppConfigAction;
}

/**
 * This action is called to open the drawer
 */
export const openDrawer = (): IAppConfigAction => {
  return {
    type: AppConfigActionType.OPEN_DRAWER
  };
};

/**
 * This action is called to close the drawer
 */
export const closeDrawer = (): IAppConfigAction => {
  return {
    type: AppConfigActionType.CLOSE_DRAWER
  };
};

/**
 * This action is called to show or update an alert
 */
export const showAlert = (alert: ProgressAlert | IAlert): IAppConfigAction => {
  return {
    type: AppConfigActionType.SHOW_ALERT,
    payload: alert
  };
};

/**
 * This action is called to close the alert
 */
export const closeAlert = (): IAppConfigAction => {
  return {
    type: AppConfigActionType.CLOSE_ALERT
  };
};

/**
 * This action is called to show or update an notification on notification drawer and open the drawer
 */
export const openNotificationDrawer = (notificationArray?: Array<INotification>): IAppConfigAction => {
  return {
    type: AppConfigActionType.OPEN_NOTIFICATION_DRAWER,
    payload: notificationArray
  };
};

/**
 * This action is called to close the notification drawer
 */
export const closeNotificationDrawer = (): IAppConfigAction => {
  return {
    type: AppConfigActionType.CLOSE_NOTIFICATION_DRAWER
  };
};

/**
 * This action is called to show or update an notification
 */
export const showNotification = (notification?: INotification): IAppConfigAction => {
  return {
    type: AppConfigActionType.SHOW_NOTIFICATION,
    payload: notification
  };
};

/**
 * This action is called to close the notification
 */
export const closeNotification = (): IAppConfigAction => {
  return {
    type: AppConfigActionType.CLOSE_NOTIFICATION
  };
};



/**
 * Export mapper object
 */
export const appConfigActionCreators = {
  openDrawer,
  closeDrawer,
  showAlert,
  closeAlert,
  openNotificationDrawer,
  closeNotificationDrawer,
  showNotification,
  closeNotification,
};
