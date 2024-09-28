import { Component } from '@angular/core';
import { IFeature } from '../models/feature.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.css',
})
export class FeatureComponent {
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
}
