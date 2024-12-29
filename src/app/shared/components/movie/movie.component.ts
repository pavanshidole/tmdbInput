import { Component, Input, OnInit } from '@angular/core';
import { Imovie } from '../../modules/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  
  @Input() getmovie !:Imovie

  constructor() { }

  ngOnInit(): void {
  }

}
