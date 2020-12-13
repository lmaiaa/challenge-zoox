export interface IState {
  _id: string;
  name: string;
  initials: string;
  createdAt: Date;
  updatedAt: Date;
}
export type state = {
  name: string;
  initials: string;
};
export type city = {
  name: string;
};

export interface ICity {
  _id: string;
  name: string;
  _stateId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IStateStates {
  allStates: IState[];
}
export interface IStateCity {
  citiesOfState: ICity[];
}

export interface Notification {
  text: string;
  color?: string;
  timeout?: number;
  status?: boolean;
}
