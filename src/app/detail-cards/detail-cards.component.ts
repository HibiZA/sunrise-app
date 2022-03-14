import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-cards',
  templateUrl: './detail-cards.component.html',
  styleUrls: ['./detail-cards.component.scss']
})
export class DetailCardsComponent implements OnInit {
  @Input() petName!: string;
  @Input() petType!: string;
  @Input() petPhoto!: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
