import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MostraNomeComponent } from './mostra-nome/mostra-nome.component';

@NgModule({
  declarations: [
    AppComponent,
    MostraNomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
