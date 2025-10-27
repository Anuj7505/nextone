import { CommonModule } from '@angular/common';
import {  Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-publicsector',
  imports: [CommonModule,RouterLink],
  templateUrl: './publicsector.component.html',
  styleUrl: './publicsector.component.scss'
})
export class PublicsectorComponent {
@ViewChild('statsSection') statsSection!: ElementRef;


  stats = [
    { value: 1000, suffix: '+', label: 'Successful Projects Delivered', count: 0 },
    { value: 30, suffix: '+', label: 'Countries with a Global Presence', count: 0 },
    { value: 50, suffix: '+', label: 'Renowned Enterprise Partnerships', count: 0 },
    { value: 10, suffix: '+', label: 'Years of Industry Excellence', count: 0 },
  ];

   ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateStats();
        }
      });
    }, { threshold: 0.5 });
    observer.observe(this.statsSection.nativeElement);
  }

   animateStats() {
    this.stats.forEach(stat => {
      stat.count = 0; // reset count each time
      let current = 0;
      const increment = stat.value / 100;
      const interval = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          stat.count = stat.value;
          clearInterval(interval);
        } else {
          stat.count = Math.ceil(current);
        }
      }, 20);
    });
  }
}
