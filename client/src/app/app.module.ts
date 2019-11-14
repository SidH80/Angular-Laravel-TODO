import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { TasksComponent } from './tasks/task.component';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, TasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [HttpErrorHandler, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
