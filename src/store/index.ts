import { IAppConfig, AppConfig } from "./appConfigStore";

/**
 * Application common config interface types
 */
export interface IApplicationState {
  // The application config
  appConfig: IAppConfig;

  // ... more to come
}


/**
 * Class that implements the config state and supplied as initial config
 */
export class ApplicationState implements IApplicationState { 
  appConfig: IAppConfig = new AppConfig();

  // more to come

}