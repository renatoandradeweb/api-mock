// src/app/store/client.reducer.ts

import { createReducer, on, Action } from '@ngrx/store';
import { addClient, addClientFailure, addClientSuccess, loadClientsSuccess } from '../actions/client.actions';

export const initialState: any[] = [];

export const clientReducer = createReducer(
  initialState,
  on(addClient, (state, { client }) => [...state, client]),
  on(addClientSuccess, (state, { client }) => [...state, client]),
  on(addClientFailure, (state, { error }) => {
    console.error(error);
    return state;
  }),
  on(loadClientsSuccess, (_, { clients }) => [...clients]),
  on(addClientSuccess, (state, { client }) => [...state, client]),
);

export function reducer(state: any[] | undefined, action: Action) {
  return clientReducer(state, action);
}
