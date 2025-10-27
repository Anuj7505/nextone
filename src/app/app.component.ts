import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { filter } from 'rxjs/operators';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SEO_DATA, SeoInfo } from './seo-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private titleService: Title,
    private meta: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const path = this.router.url;

      // Scroll to top only in browser
      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo(0, 0);
      }

      // Find SEO data for current route (supports dynamic routes)
      const seo: SeoInfo = this.getSeoData(path);

      // Apply SEO
      this.setSEO(seo);
    });
  }

  private getSeoData(path: string): SeoInfo {
    // Exact match
    if (SEO_DATA[path]) return SEO_DATA[path];

    // Dynamic route match (startsWith)
    const matchedKey = Object.keys(SEO_DATA).find(key => path.startsWith(key));
    if (matchedKey) return SEO_DATA[matchedKey];

    // Default SEO fallback
    return {
      title: 'NEXTONE CODES PVT LTD | Innovative IT Solutions in India',
      description: 'Leading IT company offering ERP, cloud, and AI-based software development services across India.',
      keywords: 'IT company Noida, software development India, ERP cloud AI solutions Delhi NCR',
      ogImage: 'https://via.placeholder.com/1200x630/888888/ffffff?text=NEXTONE+CODES'
    };
  }

  private setSEO(seo: SeoInfo) {
    // Page title
    this.titleService.setTitle(seo.title);

    // Meta tags
    this.meta.updateTag({ name: 'description', content: seo.description });
    this.meta.updateTag({ name: 'keywords', content: seo.keywords });

    // Open Graph / Social Sharing
    this.meta.updateTag({ property: 'og:title', content: seo.title });
    this.meta.updateTag({ property: 'og:description', content: seo.description });
    this.meta.updateTag({ property: 'og:image', content: seo.ogImage });
    this.meta.updateTag({ property: 'og:url', content: `https://yourdomain.com${this.router.url}` });

    // Twitter Card
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: seo.title });
    this.meta.updateTag({ name: 'twitter:description', content: seo.description });
    this.meta.updateTag({ name: 'twitter:image', content: seo.ogImage });
  }
}
