import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InlineStyleComponent } from './inline-style/inline-style.component';
import { InlineTemplateComponent } from './inline-template/inline-template.component';
import { UserauthModule } from './userauth/userauth.module';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet,InlineStyleComponent,InlineTemplateComponent,UserauthModule]
})
export class AppComponent {
  title = 'angular-test';
  data = "new onee"
  testFunc(name:string){
  alert(name)
  }
  getData(val:any){
    console.log(val);
  }
  
}
