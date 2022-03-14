import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animals } from '../shared/services/api/animals.interface';
import { ApiService } from '../shared/services/api/api.service';

const CARDWIDTH = '1324px';
const CARDHEIGHT = '910px';
const NAMEFONTSIZE = '72px';
const TYPEFONTSIZE = '36px';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  animals: Animals | undefined;
  id!: string | null
  constructor(public apiService: ApiService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
