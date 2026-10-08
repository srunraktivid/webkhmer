import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.html',
  styleUrl: './filter-bar.css'
})
export class FilterBar {
  filters = [
    { label: 'ប្រទេស', icon: 'bi-globe2', dropdown: true, bold: false },
    { label: 'ឆ្នាំផលិត', icon: 'bi-calendar3', dropdown: true, bold: false },
    { label: 'ប្រភេទរឿង', icon: 'bi-grid', dropdown: true, bold: false },
    { label: 'ការវាយតម្លៃ', icon: 'bi-star', dropdown: true, bold: false },
    { label: 'ពិសេស', icon: 'bi-gem', dropdown: false, bold: true },
    { label: 'រដូវកាល', icon: 'bi-tv', dropdown: false, bold: false },
    { label: 'ភាពយន្ត AI', icon: 'bi-stars', dropdown: false, bold: true },
    { label: 'ឥតគិតថ្លៃ', icon: 'bi-lightning', dropdown: false, bold: true },
    { label: 'Feed', icon: 'bi-play', dropdown: false, bold: false }
  ];
}