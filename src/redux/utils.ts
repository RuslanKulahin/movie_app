import { Action } from "redux";

export interface ActionWithPayload<T> extends Action {
    payload: T;
  }
  
type ActionHandlers<S> = {
    [key: string]: (state: S, action: any) => S;
}

export function createReducer<TState>(initialState: TState, handlers: ActionHandlers<TState>) {
    return function (state: TState = initialState, action: Action) {
        state ??= initialState;
        const handler = handlers[action.type];
        
        const nextState = handler?.(state, action) ?? state;

        return nextState;
    };
}