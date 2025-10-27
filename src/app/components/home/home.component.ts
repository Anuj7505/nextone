import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {

  services = [
    'Campus Radar',
    'Capital Radar',
    'Care Radar',
    'Market Radar',
    'The Path',
    'ITMS',
    'Vidya App',
    'Tap Spring',
    '1 Admin'
  ];

  currentIndex = 0;
  private intervalId: any;

  selectedTab: string = 'Backend'; // default tab

  ngOnInit(): void {
    // Auto slide every 5s
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.services.length;
    }, 5000);
  }

  ngAfterViewInit(): void {
    // Only implement if you need to access DOM elements after view init
    // Currently no code needed
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  moveToSlide(index: number): void {
    this.currentIndex = index;
  }

  setTab(tab: string) {
    this.selectedTab = tab;
  }

}
