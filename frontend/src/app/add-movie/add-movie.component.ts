import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InfyMovieService } from '../infy-movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  addMovieForm!: FormGroup;
  successMessage: any;
  errorMessage: any
  constructor(public service: InfyMovieService, public fb: FormBuilder) { }

  ngOnInit() {
    this.addMovieForm = this.fb.group({
      name: ["", Validators.required],
      rating: ["", Validators.required]
    })
  }
  addMovie() {
    this.successMessage = null;
    this.errorMessage = null;
    this.service.addMovie(this.addMovieForm.value)
      .subscribe(response => this.successMessage = response,
        err => this.errorMessage = JSON.parse(err).message)
  }
}
