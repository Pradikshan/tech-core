import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from '../team/team.component';
import { FeatureComponent } from '../feature/feature.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TeamComponent, FeatureComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
