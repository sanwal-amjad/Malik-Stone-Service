import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  firstLoad:boolean=true;
  ngOnInit(): void {
    if(this.firstLoad) {
      window.scroll(0,0);
      this.firstLoad = false;
    
    } 
  }
}