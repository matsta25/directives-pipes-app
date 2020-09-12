import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SnakeCasePipe } from './pipe/snake-case.pipe';
import { ChangeTextDirective } from './directive/change-text.directive';

@NgModule({
  declarations: [
    AppComponent,
    SnakeCasePipe,
    ChangeTextDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
