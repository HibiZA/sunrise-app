import { Component, OnInit } from '@angular/core';
import { Animals } from '../shared/services/api/animals.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  animals!: Animals;

  constructor() { }

  ngOnInit(): void {
  }

}
