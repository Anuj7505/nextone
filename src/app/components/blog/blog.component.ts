import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
blogs = [
    {
      title: 'How Technology is Changing the Future',
      date: 'Aug 10, 2025',
      image: 'assets/images/blog1.jpg',
      excerpt: 'Discover how modern technology is reshaping industries and improving our daily lives.',
      link: '#'
    },
    {
      title: 'Top 10 Software Development Trends',
      date: 'Aug 15, 2025',
      image: 'assets/images/blog2.jpg',
      excerpt: 'Stay ahead with the latest software development trends and methodologies.',
      link: '#'
    },
    {
      title: 'Why Businesses Need Digital Transformation',
      date: 'Aug 20, 2025',
      image: 'assets/images/blog3.jpg',
      excerpt: 'Learn why digital transformation is crucial for modern businesses to succeed.',
      link: '#'
    }
  ];
}
