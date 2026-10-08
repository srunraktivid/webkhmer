import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.css'
})
export class HeroBanner {
  movie = {
    rank: 'TOP 07',
    title: 'ចំណាប់ខ្មាំងលើយន្តហោះ',
    description:
      'មន្ត្រីប៉ូលិសជើងអាកាស Gu Chaoyang ជួបប្រទះនឹងវិបត្តិប្លន់នៅលើជើងហោះហើររបស់គាត់ត្រឡប់ទៅប្រទេសចិនវិញ។ ជាមួយនឹងក្រុមសីលធម៌វិជ្ជាជីវៈដ៏ខ្ពង់ខ្ពស់របស់គាត់ គាត់ប្រយុទ្ធយ៉ាងអស់សង្ឃឹម ដើម្បីបញ្ឈប់ចោរប្លន់។',
    rating: 6.4,
    quality: '4K',
    duration: '1h 27m',
    year: 2026,
    img: 'img/hero.png'
  };

  dots = Array(11).fill(0);
  active = 6;

  setActive(i: number) {
    this.active = i;
  }
}