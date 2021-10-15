import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { RouterModule } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    AppRoutingModule,    
    GoogleMapsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent, pathMatch: 'full' },
     
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAWHcoB6VaVzG2c_ER941vVdSc6UDH-tz4'     
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
