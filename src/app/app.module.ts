import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {BoxComponent} from './box/box.component';
import { DummyTextComponent } from './dummy-text/dummy-text.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    DummyTextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
