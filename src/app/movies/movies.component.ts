import { Component, OnInit } from '@angular/core';
import { MoviesAuthService } from '../services/movies-auth.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  moviesDetail: any;
  constructor(private authMovie: MoviesAuthService) { }

  ngOnInit(): void {
    this.authMovie.getMovies().subscribe(res => {
      this.moviesDetail = res;
    });
  }

}
