import React from 'react';
import { States } from '../typings/types';

interface Context {
  states: States;
}
export default React.createContext<Context>({} as Context);
