import { Component, OnInit } from '@angular/core';
import {versionTag} from "../../libraryVersion";

@Component({
  selector: 'gp-readme',
  templateUrl: './readme.component.html',
  styleUrls: ['./readme.component.scss']
})
export class ReadmeComponent implements OnInit {

  eggs: number = 0;

  getLibraryVersion() {
    return versionTag;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
