import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-hero',
  imports: [ CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('statsSection') statsSection!: ElementRef;
  @ViewChild('certSlider') certSlider!: ElementRef;

  slides = [
    { title: 'We Build Software Solutions', subtitle: 'Delivering high-quality IT solutions for your business', image: 'assets/we.png', buttonLink: '/about' },
    { title: 'Grow Your Business With nexToncodes Soft & Tech', subtitle: 'Expert team with modern technologies', image: 'assets/grow.png' },
    { title: 'Trusted By Global Clients', subtitle: 'Providing solutions that create value', image: 'assets/trust.png', buttonText: 'Contact Us', buttonLink: '/contact' }
  ];
  currentSlide = 0;
  slideInterval: any;

  stats = [
    { value: 10, suffix: '+', label: 'Years of Experience', count: 0 },
    { value: 500, suffix: '+', label: 'Projects Delivered', count: 0 },
    { value: 100, suffix: '+', label: 'Skilled Experts', count: 0 },
    { value: 3, suffix: '+', label: 'Countries Served', count: 0 },
    { value: 92, suffix: '%', label: 'Retention Rate', count: 0 }
  ];

  certificates = [
    { name: 'MSME', logo: 'assets/msmerr.png' },
    { name: 'DPIIT', logo: 'assets/l3.png' },
    { name: 'UP Startup', logo: 'assets/l4.png' },
    { name: 'CVC', logo: 'assets/l2.png' },
    { name: 'NSIC', logo: 'assets/l1.png' },
    { name: 'ISO', logo: 'assets/iso.png' },
    { name: 'DNB', logo: 'assets/dnb.png' },
    { name: 'CMM3', logo: 'assets/cmmi.png' }
  ];
  certScrollInterval: any;

  // ✅ SINGLE ngOnInit
  ngOnInit() {
    // Hero slide auto change
    this.slideInterval = setInterval(() => this.nextSlide(), 5000);
  }

  // ✅ SINGLE ngAfterViewInit
  ngAfterViewInit() {
    // Start stats observer
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) this.animateStats();
      });
    }, { threshold: 0.5 });
    observer.observe(this.statsSection.nativeElement);

    // Start auto certificate scroll
    this.startAutoScroll();
  }

  // ✅ SINGLE ngOnDestroy
  ngOnDestroy() {
    if (this.slideInterval) clearInterval(this.slideInterval);
    if (this.certScrollInterval) clearInterval(this.certScrollInterval);
  }

  // Hero slides
  nextSlide() { this.currentSlide = (this.currentSlide + 1) % this.slides.length; }
  prevSlide() { this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length; }

  // Stats animation
  animateStats() {
    this.stats.forEach(stat => {
      stat.count = 0;
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

  // Auto certificate scroll
  startAutoScroll() {
    const slider = this.certSlider.nativeElement;
    this.certScrollInterval = setInterval(() => {
      slider.scrollLeft += 1;
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      }
    }, 20);
  }
}
