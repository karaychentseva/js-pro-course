import { ClickerAction, ClickerActionTypes } from './types';

export const setValue = (value: number): ClickerAction => ({
    type: ClickerActionTypes.SET_VALUE,
    payload: value,
});

export const shiftValue = (value: number): ClickerAction => ({
    type: ClickerActionTypes.SHIFT_VALUE,
    payload: value,
});