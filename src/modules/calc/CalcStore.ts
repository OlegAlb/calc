import {makeAutoObservable} from 'mobx';
import {Nullable} from '../../base/types/BaseTypes';
import {Operator} from './types/CalcTypes';

export class CalcStore {
  currentValue: string = '0';
  operator: Nullable<Operator> = null;
  previousValue: Nullable<string> = null;

  constructor() {
    makeAutoObservable(this);
  }

  setValue = (value: string) => {
    if (this.currentValue === '0') {
      this.currentValue = value;
      return;
    }

    this.currentValue = `${this.currentValue}${value}`;
  };

  setOperator = (operator: Operator) => {
    this.previousValue = this.currentValue;
    this.currentValue = '0';
    this.operator = operator;
  };

  posneg = () => {
    this.currentValue = `${-Number(this.currentValue)}`;
  };

  percentage = () => {
    this.currentValue = `${Number(this.currentValue) * 0.01}`;
  };

  reset = () => {
    this.currentValue = '0';
    this.operator = null;
    this.previousValue = null;
  };

  calculate = () => {
    const currentValue = Number(this.currentValue);
    const previousValue = Number(this.previousValue);

    switch (this.operator) {
      case Operator.devide:
        this.currentValue = `${previousValue / currentValue}`;
        break;
      case Operator.multiply:
        this.currentValue = `${previousValue * currentValue}`;
        break;
      case Operator.add:
        this.currentValue = `${previousValue + currentValue}`;
        break;
      case Operator.subtract:
        this.currentValue = `${previousValue - currentValue}`;
        break;
    }
  };
}
