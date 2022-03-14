import { Component, OnInit } from '@angular/core';
import { aboutYallo, myYallo, offers, quickLinks } from './shared/footerLinks';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  quickLinks = quickLinks; 
  offers = offers;
  myYallo = myYallo;
  aboutYallo = aboutYallo;
  constructor() { }

  ngOnInit(): void {
    

  }

}
