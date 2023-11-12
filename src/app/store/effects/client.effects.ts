// src/app/store/client.effects.ts

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap, exhaustMap, mergeMap } from 'rxjs/operators';
import { ClientService } from 'src/app/services/client.service';
import * as clientActions from '../actions/client.actions';
import { addClient, addClientSuccess, addClientFailure } from '../actions/client.actions';
@Injectable()
export class ClientEffects {
  loadClients$ = createEffect(() =>
    this.actions$.pipe(
      ofType(clientActions.loadClients),
      switchMap(() =>
        this.clientService.getClients().pipe(
          map((clients) => clientActions.loadClientsSuccess({ clients })),
          catchError((error) => of(/* Handle error action if needed */))
        )
      )
    )
  );

  addClient$ = createEffect(() => this.actions$.pipe(
    ofType(addClient),
    exhaustMap(action => this.clientService.addClient(action.client).pipe(
      map(client => addClientSuccess({ client })),
      catchError(error => of(addClientFailure({ error })))
    ))
  ));


  constructor(private actions$: Actions, private clientService: ClientService, private store: Store) {}
}
