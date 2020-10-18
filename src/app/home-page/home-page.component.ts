import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  firstLoad: boolean=true;

  constructor() { }

  ngOnInit(): void {
    
  if(this.firstLoad) {
    window.scroll(0,0);
    this.firstLoad = false;
  }
  }
  

}
