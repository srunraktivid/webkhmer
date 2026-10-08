import { Component } from '@angular/core';
import { Navbar } from '../../../components/navbar/navbar';
import { HeroBanner } from '../../../components/hero-banner/hero-banner';
import { FilterBar } from '../../../components/filter-bar/filter-bar';
import { MovieSection } from '../../../components/movie-section/movie-section';
import { Footer } from '../../../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Navbar, HeroBanner, FilterBar, MovieSection, Footer],
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  movies = [
    { title: 'មនុស្សពីងពាងៈ ថ្ងៃថ្មី', img: 'img/m1.png', vip: true, quality: 'FHD', rating: 8.1, year: 2026 },
    { title: 'បាល់ទាត់កុងហ្វូ', img: 'img/m2.png', vip: true, quality: 'FHD', rating: 6.1, year: 2026 },
    { title: 'ផ្លូវចុងក្រោយទៅសម័យដាយណូស័រ', img: 'img/m3.png', vip: true, quality: 'FHD', rating: 7.1, year: 2026 },
    { title: 'វីរបុរសសង្គ្រោះអាណាចក្រ', img: 'img/m4.png', vip: true, quality: '4K', rating: 7.1, year: 2026 },
    { title: 'ចំណាប់ខ្មាំងលើយន្តហោះ', img: 'img/m5.png', vip: true, quality: '4K', rating: 6.4, year: 2026 },
    { title: 'បណ្តាសារឈាមខ្មៅ', img: 'img/m6.png', vip: true, quality: 'FHD', rating: 5.3, year: 2025 }
  ];

  aiMovies = [
    { title: 'ឆ្លងពេលទៅលក់បាយសាច់ជ្រូក', img: 'img/a1.png', ai: true, rating: 7.5, year: 2026 },
    { title: 'កើតជាថ្មីប្តូរវាសនា', img: 'img/a2.png', ai: true, rating: 7.5, year: 2026 },
    { title: 'ក្លាយជាសេដ្ឋីរ៉ែមាស', img: 'img/a3.png', ai: true, rating: 7.5, year: 2026 },
    { title: 'វីរបុរសគ្មានគូរប្រៀប', img: 'img/a4.png', ai: true, rating: 7.5, year: 2026 },
    { title: 'អាណាចក្រមេចុងភៅ', img: 'img/a5.png', ai: true, rating: 7.5, year: 2026 },
    { title: 'អ្នកបរបាញ់កែវាសនា', img: 'img/a6.png', ai: true, rating: 7.5, year: 2026 }
  ];
}