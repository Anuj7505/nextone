import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; 

@Component({
  selector: 'app-footer',
  imports: [RouterLink,CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

   // State variables for the unified modal
  showModal: boolean = false;
  modalContent: SafeResourceUrl | string = ''; // Holds the current content (image path, or safe PDF URL)
  contentType: 'image' | 'image-series' | 'pdf' | '' = ''; // Determines how to display content in modal

  // For image series (specifically for MSME multi-page display)
  imageSeries: string[] = [];      // Stores the array of image paths for multi-page content
  currentPageIndex: number = 0;    // Current active page index in the image series

  // Array of 4 MSME certificate JPG pages
  // Make sure these paths are correct relative to your 'assets' folder
  msmeImages: string[] = [
    'assets/udyam_page_1.jpg',
    'assets/udyam_page_2.jpg',
    'assets/udyam_page_3.jpg',
    'assets/udyam_page_4.jpg'
  ];

  constructor(private sanitizer: DomSanitizer) {
    // DomSanitizer is injected to bypass security for trusted URLs, necessary for PDF embeds.
  }

  /**
   * Opens the unified modal and sets its content based on type.
   * @param path The path(s) to the content (string for single image/PDF, string[] for image series).
   * @param type The type of content: 'image', 'image-series', or 'pdf'.
   */
  openModal(path: string | string[], type: 'image' | 'image-series' | 'pdf' = 'image') {
    this.contentType = type;

    if (type === 'image-series' && Array.isArray(path)) {
      // Handle multi-page image series (e.g., MSME certificate)
      this.imageSeries = path;
      this.currentPageIndex = 0; // Start displaying from the first page
      this.modalContent = this.imageSeries[this.currentPageIndex]; // Set the current image source
    } else if (type === 'pdf' && typeof path === 'string') {
      // Handle PDF documents, requires sanitization for security
      this.modalContent = this.sanitizer.bypassSecurityTrustResourceUrl(path);
    } else if (type === 'image' && typeof path === 'string') {
      // Handle single image display
      this.modalContent = path;
    } else {
      // Fallback for unexpected input or errors
      console.error("openModal: Invalid path or type provided.", path, type);
      this.contentType = '';
      this.modalContent = '';
      return; // Prevent modal from opening
    }

    this.showModal = true; // Show the modal
    // Add a class to body to prevent scrolling when modal is open
    document.body.classList.add('overflow-hidden');
  }

  /**
   * Closes the unified modal and resets its state.
   */
  closeModal() {
    this.showModal = false;
    this.modalContent = '';
    this.contentType = '';
    this.imageSeries = []; // Clear image series data
    this.currentPageIndex = 0; // Reset page index
    // Remove the class from body when modal is closed
    document.body.classList.remove('overflow-hidden');
  }

  /**
   * Navigates to the next page in an image series.
   */
  nextPage() {
    if (this.currentPageIndex < this.imageSeries.length - 1) {
      this.currentPageIndex++;
      this.modalContent = this.imageSeries[this.currentPageIndex]; // Update displayed image
    }
  }

  /**
   * Navigates to the previous page in an image series.
   */
  prevPage() {
    if (this.currentPageIndex > 0) {
      this.currentPageIndex--;
      this.modalContent = this.imageSeries[this.currentPageIndex]; // Update displayed image
    }
  }

}
