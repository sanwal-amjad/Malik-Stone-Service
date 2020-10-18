import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salt-tiles',
  templateUrl: './salt-tiles.component.html',
  styleUrls: ['./salt-tiles.component.css']
})
export class SaltTilesComponent implements OnInit {
  firstLoad: boolean=true;

  constructor() { }

  ngOnInit(): void {
    if(this.firstLoad) {
    window.scroll(0,0);
    this.firstLoad = false;
  }
  }

}
