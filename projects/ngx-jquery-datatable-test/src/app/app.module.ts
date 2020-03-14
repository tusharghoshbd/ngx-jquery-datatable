import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxJqueryDatatableModule } from 'ngx-jquery-datatable';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxJqueryDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
