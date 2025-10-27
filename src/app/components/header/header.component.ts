import { CommonModule } from '@angular/common';
import { Component, OnDestroy, HostListener, ElementRef } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {

  // Desktop dropdown
  activeDropdown: 'company' | 'services' | 'products' | 'industries' | null = null;

  // Mobile menu & dropdowns
  isMobileMenuOpen: boolean = false;
  activeMobileDropdown: 'company' | 'services' | 'products' | 'industries' | null = null;

  // Mobile Floating Contact Icon visibility based on scroll
  showMobileContactIcon = true;
  lastScrollTop = 0;
  showMobileContactPopup: boolean = false; // For the mobile contact popup

  // Desktop Contact Popup
  showDesktopContactPopup: boolean = false;

  private routerSubscription: Subscription;

  constructor(private router: Router, private elementRef: ElementRef) {
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.closeAllDropdowns();
        this.isMobileMenuOpen = false;
        this.activeMobileDropdown = null;
        this.showDesktopContactPopup = false;
        this.showMobileContactPopup = false; // Close mobile contact popup on navigation
      });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

  // --- Desktop Dropdowns ---
  openDropdown(name: 'company' | 'services' | 'products' | 'industries'): void {
    this.activeDropdown = name;
  }

  closeAllDropdowns(): void {
    this.activeDropdown = null;
  }

  toggleDropdown(name: 'company' | 'services' | 'products' | 'industries'): void {
    this.activeDropdown = this.activeDropdown === name ? null : name;
    // Close contact popups when opening a menu dropdown
    this.showDesktopContactPopup = false;
    this.showMobileContactPopup = false;
  }

  // --- Mobile Menu ---
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    // Close all other popups/dropdowns when mobile menu is toggled
    this.showDesktopContactPopup = false;
    this.showMobileContactPopup = false;
    this.closeAllDropdowns(); // Also close desktop dropdowns
  }

  toggleMobileDropdown(name: 'company' | 'services' | 'products' | 'industries'): void {
    this.activeMobileDropdown = this.activeMobileDropdown === name ? null : name;
  }

   // --- Mobile Floating Contact Icon Visibility (based on scroll) ---
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Only apply this scroll logic for mobile
    if (window.innerWidth < 768) {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > this.lastScrollTop) {
        this.showMobileContactIcon = false; // scrolling down → hide icon
      } else {
        this.showMobileContactIcon = true; // scrolling up → show icon
      }
      this.lastScrollTop = st <= 0 ? 0 : st;
    }
  }

  // --- Desktop Contact Popup Logic ---
  toggleDesktopContactPopup(): void {
    this.showDesktopContactPopup = !this.showDesktopContactPopup;
    // Ensure all other dropdowns/popups are closed when opening desktop contact popup
    if (this.showDesktopContactPopup) {
      this.closeAllDropdowns();
      this.isMobileMenuOpen = false; // Close mobile menu if open
      this.showMobileContactPopup = false; // Close mobile contact popup if open
    }
  }

  // --- Mobile Contact Popup Logic ---
  toggleMobileContactPopup(): void {
    this.showMobileContactPopup = !this.showMobileContactPopup;
    // Ensure all other dropdowns/popups are closed when opening mobile contact popup
    if (this.showMobileContactPopup) {
      this.closeAllDropdowns();
      this.isMobileMenuOpen = false; // Close mobile menu if open
      this.showDesktopContactPopup = false; // Close desktop contact popup if open
    }
  }

  // --- Universal Click Listener to Close Popups/Dropdowns ---
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    // For Desktop Popups/Dropdowns
    if (window.innerWidth >= 768) {
      // Close desktop dropdowns
      const clickedInsideActiveDropdown = this.activeDropdown &&
        this.elementRef.nativeElement.querySelector(`li.group:has(div.flex.items-center.gap-\\[8px\\][class*="${this.activeDropdown}"])`)?.contains(event.target);

      if (this.activeDropdown && !clickedInsideActiveDropdown) {
        this.closeAllDropdowns();
      }

      // Close desktop contact popup
      if (this.showDesktopContactPopup && !this.elementRef.nativeElement.querySelector('.headphone-contact-icon')?.contains(event.target)) {
        this.showDesktopContactPopup = false;
      }
    }
    // For Mobile Popups/Dropdowns
    else { // This is for screen widths < 768px (mobile)
      // Close mobile menu if open and click is outside
      if (this.isMobileMenuOpen &&
          !this.elementRef.nativeElement.querySelector('.hamburger-btn')?.contains(event.target as Node) &&
          !this.elementRef.nativeElement.querySelector('.mobile-menu-content')?.contains(event.target as Node)) {
        this.isMobileMenuOpen = false;
        this.activeMobileDropdown = null; // Also close any mobile dropdowns
      }
      // Close mobile contact popup if open and click is outside
      if (this.showMobileContactPopup && !this.elementRef.nativeElement.querySelector('.mobile-headphone-contact-icon')?.contains(event.target as Node)) {
        this.showMobileContactPopup = false;
      }
    }
  }
}