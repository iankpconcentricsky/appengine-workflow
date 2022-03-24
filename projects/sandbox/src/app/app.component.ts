import { Component } from '@angular/core';
import { Route } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sandbox';
  spiders: boolean = false;
  alertValue = 5;
  animal = '';
  breadcrumbs = [
      { label: 'Home', url: '#' },
      { label: 'Library', url: '#' },
      { label: 'Data', url: '#' },
  ];
    constructor() {
    }

    boop: any;

    searchFunction(value: string) {
        alert(value);
    }

    noSpiders(event: Event) {
        console.log(this.animal);
    }

}
