import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-template',
  standalone: true,
  imports: [],
  template: `
    <p class="custom">
      inline-template works!
    </p>
  `,
  styleUrl: './inline-template.component.css'
})
export class InlineTemplateComponent {

}
