import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SuccessComponentComponent } from './success-component/success-component.component';
import { WarningComponentComponent } from './warning-component/warning-component.component';
import { ReadycomponentComponent } from './readycomponent/readycomponent.component';


@NgModule({
  declarations: [
    AppComponent,
    SuccessComponentComponent,
    WarningComponentComponent,
    ReadycomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
