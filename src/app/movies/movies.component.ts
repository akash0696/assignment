import { Component, OnInit } from '@angular/core';
import { MoviesAuthService } from '../services/movies-auth.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  moviesDetail: any;
  movieTitle: string = '';
  movieDesc: string = '';
  movieGenre: string = '';
  movieFetched = true;
  nextPage: any;
  prvs: any;

  constructor(private router: Router,private auth:AuthService, private authMovie: MoviesAuthService) {
   }

  ngOnInit(): void {
    this.authMovie.getMovies().subscribe(res => {
      this.movieFetched = true;
      this.moviesDetail = res.results;
      this.nextPage = res.next;
    },
    error => {
      this.movieFetched = false;
    });
  }
  movieInfo(movie: any){
    this.movieTitle = movie.title;
    this.movieDesc = movie.description;
    this.movieGenre = movie.genres;
  }
  refreshData(){
    console.log('refreshing');
    this.moviesDetail= [];
    this.authMovie.getMovies().subscribe(res => {
      console.log('refreshing', res);
      this.movieFetched = true;
      this.moviesDetail = res.results;
    },
    error => {
      this.movieFetched = false;
    });
  }
  nextPg(){
    this.authMovie.getNextPage(this.nextPage).subscribe(res =>{
      this.moviesDetail = res.results;
      this.nextPage = res.next;
      this.prvs = res.previous;
    });
  }

  previousPg(){
    this.authMovie.getPreviousPage(this.prvs).subscribe(res =>{
      this.moviesDetail = res.results;
      this.prvs = res.previous;
      this.nextPage = res.next;
    })
  }

  logout(){
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
