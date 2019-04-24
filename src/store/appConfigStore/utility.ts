/**
 * Notification interface
 */
export interface INotification {
  // The timestamp of notification in ISO format
  timestamp: string;
  // The actual message of the notification
  message: string;
  // The optional icon name of the notification
  icon?: string;
  // Any optional data associated with this notification.
  data?: any;
  // Used to determine whether this notification has any progressbar in it.
  hasProgress?: boolean;
  // Used along with 'hasProgress' to display diterminate or indeterminate progress spinner.
  isProgressDeterminate?: boolean;
  // It is needed when its determinate progressbar.
  determinateProgressPct?: number;
}

/**
 * The interface for ok and comfirm Alerts
 */
export interface IAlert {
  // The title of the alert
  title: string;
  // the alert message body
  message: string;
  // the text to display on ok button
  yesBtnText?: string;
  // callback to call afetr okbtn clicked and alert dismissed
  yesBtnCallback?: () => any;
  // no button text
  noBtnText?: string;
  // calback function for no button
  noBtnCallback?: () => any;
  // nutral button text
  nutralBtnText?: string;
  // calback function for nutral button
  nutralBtnCallback?: () => any;
}


/**
 * A Simple Alert class that auto manages and callbacks on ok button
 */
export class SimpleAlert implements IAlert {
  public title: string = '';
  public message: string = '';
  public yesBtnText?: string = 'Ok';
  public yesBtnCallback?: () => any;
}

/**
 * This presents a confirm dialog with yes no and third button.
 */
export class ConfirmAlert extends SimpleAlert {
  public noBtnText?: string = 'Cancel';
  public noBtnCallback?: () => any;
  public nutralBtnText?: string = 'Don\'t know';
  public nutralBtnCallback?: () => any;
}

/**
 * Enum of progress type
 */
export enum ProgressType {
  DETERMINATE = 'DETERMINATE',
  INDETERMINATE = 'INDETERMINATE'
}

/**
 * A simple progress alert to block the page
 */
export class ProgressAlert implements IAlert {
  title: string = "Loading...";
  message: string = "Please Wait";
  progressType: ProgressType = ProgressType.INDETERMINATE;
  progressPct?: number = 0;
}

/**
 * The application utility states
 */
export interface IUtility {
  // The property keeps track of application drawer is open or not
  isDrawerOpen?: boolean;
  
  // The property keeps track of notification drawer is open or not
  isNotificationDrawerOpen?: boolean;

  // This contains the array of notifications.
  systemNotifications: Array<INotification>;

  // This is populated when there is a notification just occured. 
  // Will get cleared out with other notifications or user dismiss or timeout
  currentNotification?: INotification;

  // This is populated when its needed to show a alert to the user.
  currentAlert?: ProgressAlert | IAlert;
}

/**
 * The actual Utility class
 */
export class Utility implements IUtility {
  public isDrawerOpen?: boolean = true;
  public isNotificationDrawerOpen?: boolean = false;
  public systemNotifications: Array<INotification> = [];
  public currentNotification?: INotification = undefined;
  public currentAlert?: ProgressAlert | IAlert = undefined;
}