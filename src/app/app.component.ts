import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //pipes
  public stringVariable: string = 'lorem ipsum'
  public birthday = Date.now()
  public jsonObject = {
    key: 'value'
  }

  public kebabCaseVariable = 'lorem-ipsum-dolor-sit-amet'

  // directives
  public persons = ['Mathew', 'Alice', 'Bob']
  public isAuthenticated = true;
}
