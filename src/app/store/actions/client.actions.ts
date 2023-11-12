// src/app/store/client.actions.ts

import { createAction, props } from '@ngrx/store';

export const loadClients = createAction('[Client] Load Clients');
export const loadClientsSuccess = createAction('[Client] Load Clients Success', props<{ clients: any[] }>());
export const addClient = createAction('[Client] Add Client', props<{ client: any }>());
export const addClientSuccess = createAction('[Client] Add Client Success', props<{ client: any }>());
export const addClientFailure = createAction('[Client] Add Client Failure', props<{ error: any }>());
