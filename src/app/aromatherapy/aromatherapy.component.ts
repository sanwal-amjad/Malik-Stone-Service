import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aromatherapy',
  templateUrl: './aromatherapy.component.html',
  styleUrls: ['./aromatherapy.component.css']
})
export class AromatherapyComponent implements OnInit {
  firstLoad: boolean=true;

  constructor() { }

  ngOnInit(): void {
    
  if(this.firstLoad) {
    window.scroll(0,0);
    this.firstLoad = false;
  }
  }

}
