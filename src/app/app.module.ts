import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TreeviewModule } from 'ngx-treeview';
import {AppService} from './app.service'

import { AppComponent } from './app.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule,TreeviewModule.forRoot()],
  declarations: [ AppComponent ],
  providers:[AppService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
