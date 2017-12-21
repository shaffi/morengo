import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { MatCompModule } from './mat-comp/mat-comp.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    // ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    RouterModule,
    MatCompModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
