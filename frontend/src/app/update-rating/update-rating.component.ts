import { Component, OnInit } from '@angular/core';
import { InfyMovieService } from '../infy-movie.service';

@Component({
  selector: 'app-update-rating',
  templateUrl: './update-rating.component.html',
  styleUrls: ['./update-rating.component.css']
})
export class UpdateRatingComponent implements OnInit {
  movieList: any;
  errorMessage: any;
  successMessage: any;
  constructor(public service: InfyMovieService) { }

  ngOnInit() {
    this.service.getAllMovie().subscribe(res => this.movieList = res)
  }
  updateRating(movie: any) {
    window.scroll(0, 0);
    this.successMessage = null;
    this.errorMessage = null;
    this.service.updateRating(movie)
      .subscribe(res => this.successMessage = res,
        err => { this.errorMessage = JSON.parse(err).message; }
      )
  }
}
