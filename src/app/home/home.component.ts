import { Component } from '@angular/core';
import { IFeature } from '../models/feature.model';
import { CommonModule } from '@angular/common';
import { ITeamMember } from '../models/team_member.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  features: IFeature[] = [
    {
      id: 1,
      image: 'assets/images/service.png',
      title: 'Exceptional Service',
      description:
        'Our team is dedicated to providing top-notch support, ensuring a smooth and hassle-free shopping experience every time.',
    },
    {
      id: 2,
      image: 'assets/images/parts.png',
      title: 'Premium Quality Parts',
      description:
        'We offer only the best components, rigorously tested to meet your performance and reliability needs for any build.',
    },
    {
      id: 3,
      image: 'assets/images/shipping.png',
      title: 'Fast & Secure Shipping',
      description:
        'Get your parts delivered quickly and securely, so you can start building your dream PC without delay.',
    },
  ];

  teams: ITeamMember[] = [
    {
      id: 1,
      image: 'assets/images/aldo.jpg',
      name: 'Aldo Raine',
      title: 'Store Manager',
    },
    {
      id: 2,
      image: 'assets/images/aragorn.jpg',
      name: 'Aragon, Son of Arathorn',
      title: 'Product Specialist',
    },
    {
      id: 3,
      image: 'assets/images/balrog.jpg',
      name: 'The Balrog',
      title: 'Customer Service Agent',
    },
    {
      id: 4,
      image: 'assets/images/dana.jpg',
      name: 'Dana Scully',
      title: 'Inventory Coordinator',
    },
    {
      id: 5,
      image: 'assets/images/django.jpg',
      name: 'Django Freeman',
      title: 'Sales Associate',
    },
    {
      id: 6,
      image: 'assets/images/fox.jpg',
      name: 'Fox Mulder',
      title: 'Technical Support Representative',
    },
    {
      id: 7,
      image: 'assets/images/gandalf.jpg',
      name: 'Gandalf The Grey',
      title: 'Marketing Coordinator',
    },
    {
      id: 8,
      image: 'assets/images/legolas.jpg',
      name: 'Legolas Greenleaf',
      title: 'E-commerce Analyst',
    },
    {
      id: 9,
      image: 'assets/images/marty.jpg',
      name: 'Martin Hart',
      title: 'Warehosue Associate',
    },
    {
      id: 10,
      image: 'assets/images/rust.jpg',
      name: 'Rust Spencer Cohle',
      title: 'Events Coordinator',
    },
    {
      id: 11,
      image: 'assets/images/steve.jpg',
      name: 'Steve Harrington',
      title: 'Content Creator',
    },
  ];
}
