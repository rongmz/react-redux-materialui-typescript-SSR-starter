import { IUtility, Utility } from "./utility";

/**
 * Application common config interface types
 */
export interface IAppConfig {
  // The application utility
  utility: IUtility;
  // ... more to come
}


/**
 * Class that implements the config state and supplied as initial config
 */
export class AppConfig implements IAppConfig { 
  utility: IUtility = new Utility();
}