import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-culnary-salt',
  templateUrl: './culnary-salt.component.html',
  styleUrls: ['./culnary-salt.component.css']
})
export class CulnarySaltComponent implements OnInit {
  firstLoad:boolean=true;
  constructor() { }

  ngOnInit(): void {
    if(this.firstLoad) {
      window.scroll(0,0);
      this.firstLoad = false;
    }
  }

}
