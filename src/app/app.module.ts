import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { RouterModule } from '@angular/router';
import { BoxContainerComponent } from './box-container/box-container.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    BoxContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
