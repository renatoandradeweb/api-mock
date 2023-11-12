// src/app/store/selectors/client.selectors.ts

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app-state.model';

export const selectClientState = createFeatureSelector<AppState, any[]>('clients');

export const selectClients = createSelector(
  selectClientState,
  (state) => state
);
