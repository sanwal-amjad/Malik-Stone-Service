import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edible-salt',
  templateUrl: './edible-salt.component.html',
  styleUrls: ['./edible-salt.component.css']
})
export class EdibleSaltComponent implements OnInit {
  firstLoad:boolean=true
  constructor() { }

  ngOnInit(): void {
    
  if(this.firstLoad) {
    window.scroll(0,0);
    this.firstLoad = false;
  }
  }

}
