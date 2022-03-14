import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared/services/api/api.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() petName!: string;
  @Input() petType!: string;
  @Input() petPhoto!: string;
  @Input() id!: string;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
  }

  details(): void{
    this.router.navigate([`/details/${this.id}`])
  }

}
