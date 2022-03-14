import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api/api.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.showAnimals();
  }

  update(): void{
    this.apiService.showAnimals();
  }

}
