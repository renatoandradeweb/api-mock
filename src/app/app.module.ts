import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HeaderComponent } from './components/header/header.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { AddClientDialogComponent } from './components/dialog/add-client-dialog/add-client-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { clientReducer } from './store/reducers/client.reducer';
import { ClientEffects } from './store/effects/client.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientListComponent,
    AddClientComponent,
    AddClientDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forFeature('clients', clientReducer),
    EffectsModule.forFeature([ClientEffects]),
    EffectsModule.forRoot([]),
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    NgbModule,
    CommonModule
  ],
  providers: [ provideNgxMask() ],
  bootstrap: [AppComponent]
})
export class AppModule { }
