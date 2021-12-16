import { Component } from '@angular/core';

const svgFileUrl = new URL('./test.svg', import.meta.url);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url = svgFileUrl;
}
