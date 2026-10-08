import { Component, Input } from '@angular/core';
import { MovieCard } from '../movie-card/movie-card';

@Component({
  selector: 'app-movie-section',
  imports: [MovieCard],
  templateUrl: './movie-section.html',
  styleUrl: './movie-section.css'
})
export class MovieSection {
  @Input() title = '';
  @Input() icon = 'bi-gem';
  @Input() movies: any[] = [];
}