import { Component, OnInit } from '@angular/core';
import { InfyMovieService } from '../infy-movie.service';
import { Movie } from '../Movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movieList!: Movie[];
  successMessage!: string;
  deleteFlag: boolean = true;
  constructor(private service: InfyMovieService) { }

  ngOnInit() {
    this.service.getAllMovie()
      .subscribe(res => this.movieList = res,
      )
  }

  deleteMovie(movieId: any) {
    this.deleteFlag = false;
    this.service.deleteMovie(movieId)
      .subscribe(res => this.successMessage = res)
    this.movieList = this.movieList.filter(movie => movie.movieId != movieId)

  }

}
