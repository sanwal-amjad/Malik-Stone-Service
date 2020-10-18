import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lick-salt',
  templateUrl: './lick-salt.component.html',
  styleUrls: ['./lick-salt.component.css']
})
export class LickSaltComponent implements OnInit {
  firstLoad: boolean=true;

  constructor() { }

  ngOnInit(): void {
     if(this.firstLoad) {
    window.scroll(0,0);
    this.firstLoad = false;
  }
  }

}
