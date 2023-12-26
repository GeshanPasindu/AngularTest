import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-style',
  standalone: true,
  imports: [],
  templateUrl: './inline-style.component.html',
  styles: [`.color{
    color:red
  }`]
})
export class InlineStyleComponent {

}
