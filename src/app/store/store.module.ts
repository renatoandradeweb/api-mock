import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'; // Importe o módulo StoreDevtoolsModule
import { environment } from './../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze'; // Importe o método storeFreeze

@NgModule({
  imports: [
    StoreModule.forRoot({}, { metaReducers: !environment.production ? [storeFreeze] : [] }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
})
export class AppStoreModule {}
