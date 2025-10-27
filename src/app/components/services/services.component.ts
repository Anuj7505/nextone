import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
services = [
    {
      icon: 'assets/images/service1.png',
      title: 'Web Development',
      description: 'Custom, scalable and secure web applications built with modern technologies.'
    },
    {
      icon: 'assets/images/service2.png',
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications for Android & iOS with stunning UI/UX.'
    },
    {
      icon: 'assets/images/service3.png',
      title: 'UI/UX Design',
      description: 'Creative and user-centric design solutions for websites and mobile apps.'
    },
    {
      icon: 'assets/images/service4.png',
      title: 'Cloud Solutions',
      description: 'Reliable cloud-based solutions to enhance business scalability and performance.'
    }
  ];
}
