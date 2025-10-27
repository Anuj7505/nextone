import { CommonModule } from '@angular/common';
import { Certification } from '../certification.model';
import { Component , OnInit, HostListener } from '@angular/core';



@Component({
  selector: 'app-capital',
  imports: [CommonModule],
  templateUrl: './capital.component.html',
  styleUrl: './capital.component.scss'
})
export class CapitalComponent implements OnInit {
// Data for Certifications section
  certifications: Certification[] = [
   {
    id: 'iso-certified',
    title: 'ISO Certified',
    description: 'Ensuring global standards for quality management and continuous excellence.',
    icon: '🏅',
    iconColor: 'text-teal-400',
    certificateSrc: 'assets/iso.jpg' // your actual image path
  },

  {
    id: 'dnb-certified',
    title: 'D-U-N-S Registered (Dun & Bradstreet)',
    description: 'Business credibility verified by Dun & Bradstreet through a unique D-U-N-S number.',
    icon: '🌐',
    iconColor: 'text-blue-400',
    certificateSrc: 'assets/dnb.jpg' // your DnB certificate image
  },

  {
    id: 'cmmi-level3',
    title: 'CMMI Level 3 Certified',
    description: 'Capability Maturity Model Integration (Level 3) — recognized for defined and structured processes.',
    icon: '🏗️',
    iconColor: 'text-purple-400',
    certificateSrc: 'assets/iso.jpg' // add your actual image
  },
  

    // Add more certifications as needed
  ];

  // Properties for the certificate modal
  showCertificateModal: boolean = false;
  selectedCertificate: Certification | null = null;

  constructor() { }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  openCertificateModal(certificate: Certification): void {
    this.selectedCertificate = certificate;
    this.showCertificateModal = true;
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  closeCertificateModal(): void {
    this.showCertificateModal = false;
    this.selectedCertificate = null;
    document.body.style.overflow = ''; // Restore background scrolling
  }

  // HostListener to close modal on Escape key press
  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    if (this.showCertificateModal) {
      this.closeCertificateModal();
    }
  }

}
