import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  // Leaders array
  leaders = [
    {
      name: 'Abhishek Singh',
      role: 'CEO & Founder',
      bio: `Abhishek singh is the founder of nexTonecodes  (N1C), he is also the chief executive officer of the company.He is a computer science graduate and passionate about the technology & the uses of technology in various domains. He is having 7 years of experience in the IT industry & under his guidance, N1C has continued to ride the waves of the contributing IT industry.As a founder, Abhishek plays multiple roles at the N1C, including shaping its vision for company & nation building through transformational leadership.`
      , img: 'assets/fndr1.jpg'
    },
    {
      name: 'Aditya Vir Singh',
      role: 'Chief Mentor & Board Advisor',
      bio: `Aditya Vir Singh is a serial Entrepreneur and Business Development Professional with 20+ years experience in building organizations ground-up and shipping multiple "1.0" products or new set of accounts (revenue impact over US$ 10mn+) with either newly launched products of established companies or startups.He has also actively focussed on infrastructure development and energy generation sectors in India and is closely associated with companies working on projects related to highways/bridges (NHAI), coal and thermal power (CIL, NTPC) and renewable energy (solar, wind) Aditya has a B. Tech. degree from the Indian Institute of Technology, Delhi.`,
      img: 'assets/tm2.webp'
    },
    {
      name: 'Prateek Srivastava',
      role: 'CTO',
      bio: `Experienced and highly dependable software and utility industry professional that specializes in developing programs and applications at the intersection of the smart grid and demand-side management. Proven ability to manage complex projects from design to completion. Experience with building long- term, collaborative relationships with customers. Thrives as a translator between "the business" and development. Specializes in writing about complex technical subjects in ways that are easily understood. He has joined the company since 2022.`,
      img: 'assets/tm3.jpg'
    },
    {
      name: 'Sandeep Bisht',
      role: 'Head Security Advisor',
      bio: `Sandeep Bisht has 13 years’ of experience with diverse domain exposure that includes over 3+ years of Identity & Privileged Access Management, 3+ years of CRM, 2.5 years in BI, 3.5 years in Finance (insurance, loans and broker management), 2+ years in CCM (Client Communication & Document Management) and 2 years in automotive (Auto Configuration Tool and Product Lifecycle) analysis & implementation. He completed MBA from Humboldt University of Berlin in 2004, he has delivered multiple projects in diverse domains & since 2014 he is giving his best experience & skills to the company.`,
      img: 'assets/tm4.jpg'
    },
    {
      name: 'Devashish',
      role: 'Strategy Head',
      bio: `Devashish has 27(+) years of Industry Experience with Certified Project Management & Program Management. Enterprising leader with abilities to manage large complex Information Systems & projects for the organization, provided expertise support in delivery management, program management, project & product management, quality process selection & implementation, change management across organization, scrum & agile implementation R&D operations and management. `,
      img: 'assets/tm5.jpg'
    },
    {
      name: 'Upendra Kumar',
      role: 'Finance Head',
      bio: `Upendra Kumar completed his MBA from Bangalore, he is having 10 years of experience in marketing and finance and he has managed several real estate and telecom projects. He has been involved in all the financial activities of the projects and delivered it successfully. He has been associated with the company since the beginning.`,
      img: 'assets/tm7.jpg'
    },
    {
      name: 'Shakti Singh',
      role: 'Team Head',
      bio: `Shakti Singh is passionate software developer and he holds a MCA degree from APJ Abdul Kalam University (INDIA). He is having a very good experience of managing team & project's needs to deliver it accurately, He has good skills of back-end development. He has joined the company since 2015.`,
      img: 'assets/tm8.jpg'
    }
    // Add all other leaders similarly
  ];

  // Track expanded/collapsed state
  isExpanded: boolean[] = [];

  constructor() {
    this.isExpanded = this.leaders.map(() => false); // initially collapsed
  }

  toggleReadMore(index: number) {
    this.isExpanded[index] = !this.isExpanded[index];
  }
}
