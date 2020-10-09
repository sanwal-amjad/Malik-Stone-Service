import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saltlamp',
  templateUrl: './saltlamp.component.html',
  styleUrls: ['./saltlamp.component.css']
})
export class SaltlampComponent implements OnInit {
  firstLoad:boolean=true
  constructor() { }

  ngOnInit(): void {
   
  if(this.firstLoad) {
    window.scroll(0,0);
    this.firstLoad = false;
  }
  }

}
