import { Component } from '@angular/core';
import { ButtonComponent, ButtonConfig } from "stories";
import { Route } from "@angular/router";
import { FileProgress } from 'stories';

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

    buttons: ButtonConfig[] = [
        {
            title: 'Explode',
            onClick: () => {alert('EXPLODE');},
            style: "secondary"
        }
    ];
    boop: any;

    searchFunction(value: string) {
        alert(value);
    }

    noSpiders(event: Event) {
        console.log(this.animal);
    }

    logUploadFile(fp: FileProgress) {
      console.log(`--- FILE UPLOADED! ---\n > name: ${fp.file.name}\n > type: ${fp.file.type} \n > loaded: ${fp.percent}%${fp.errMsg != "" ? `\n > error: ${fp.errMsg}` : ''}`);
    }

    logRemoveFile(fp: FileProgress) {
        console.log(`--- FILE REMOVED! ---\n > name: ${fp.file.name}\n > type: ${fp.file.type} \n > loaded: ${fp.percent}%${fp.errMsg != "" ? `\n > error: ${fp.errMsg}` : ''}`);
    }

}
