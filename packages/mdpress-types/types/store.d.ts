import EventEmitter from "events";

export declare class Store {
  store: {
    [key: string]: any;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  $get(key: string): any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  $set(key: string, value: any): void;
  $emit: any;
  $on: typeof EventEmitter.on;
}

export declare class MdPress extends Store {}
