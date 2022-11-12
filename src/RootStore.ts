import React from 'react';

import {CalcStore} from './modules/calc/CalcStore';

class RootStore {
  calcStore: CalcStore;

  constructor() {
    this.calcStore = new CalcStore();
  }

  sync = async () => {
    await Promise.all(
      Object.values(this).map(store => {
        return store?.sync ? store?.sync() : Promise.resolve();
      }),
    );
  };
}

export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);
