export interface IRoutes {
  get?: {
    path: string;
    callback: Function;
  }[];
  post?: {
    path: string;
    callback: Function;
  }[];
  put?: {
    path: string;
    callback: Function;
  }[];
  delete?: {
    path: string;
    callback: Function;
  }[];
}

export interface IDependencies {
  express: Function;
  logger: Function;
  cors: Function;
  bodyParser: Record<string, Function>;
  swaggerUi: Record<string, Function>;
  mongoose: Record<string, Function>;
}

export interface IState {
  name: string;
  initials: string;
}

export interface ICity {
  name: string;
  _stateId: string;
}
