import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
   projects = [
    { image: 'assets/images/project1.jpg', title: 'E-Commerce Website', category: 'Web Development' },
    { image: 'assets/images/project2.jpg', title: 'Mobile Banking App', category: 'Mobile App' },
    { image: 'assets/images/project3.jpg', title: 'Corporate Website', category: 'Web Design' },
    { image: 'assets/images/project4.jpg', title: 'Cloud Migration', category: 'Cloud Solutions' },
    { image: 'assets/images/project5.jpg', title: 'Healthcare Portal', category: 'UI/UX' },
    { image: 'assets/images/project6.jpg', title: 'Travel Booking System', category: 'Software' }
  ];
}
