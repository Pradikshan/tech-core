import { Component } from '@angular/core';
import { ITeamMember } from '../models/team_member.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
})
export class TeamComponent {
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
