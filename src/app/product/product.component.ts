import { Component } from '@angular/core';
import { IProduct } from '../models/product.model';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart/cart.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  products: IProduct[] = [
    {
      id: 1,
      image: 'assets/images/cpu1.jpg',
      product_name: 'Intel Core i9-12900K',
      brand: 'Intel',
      description:
        'The ultimate processor for gaming and high-performance tasks, featuring 16 cores and 24 threads.',
      category: 'CPU',
      price: 1499,
    },
    {
      id: 2,
      image: 'assets/images/cpu2.jpg',
      product_name: 'AMD Ryzen 9 5950X',
      brand: 'AMD',
      description:
        'A high-end 16-core CPU delivering superb performance for content creators and gamers.',
      category: 'CPU',
      price: 1599,
    },
    {
      id: 3,
      image: 'assets/images/cpu3.jpg',
      product_name: 'Intel Core i7-11700K',
      brand: 'Intel',
      description:
        'A powerful 8-core processor with great gaming and multitasking capabilities.',
      category: 'CPU',
      price: 999,
    },
    {
      id: 4,
      image: 'assets/images/cpu4.jpg',
      product_name: 'AMD Ryzen 7 5800X',
      brand: 'AMD',
      description:
        '8-core, 16-thread processor built for demanding applications and gaming.',
      category: 'CPU',
      price: 699,
    },
    {
      id: 5,
      image: 'assets/images/cpu5.jpg',
      product_name: 'Intel Core i5-11600K',
      brand: 'Intel',
      description:
        'A 6-core processor perfect for gaming, with excellent price-to-performance ratio.',
      category: 'CPU',
      price: 799,
    },
    {
      id: 6,
      image: 'assets/images/gpu1.jpg',
      product_name: 'NVIDIA GeForce RTX 4090',
      brand: 'NVIDIA',
      description:
        'NVIDIA’s most powerful GPU, designed for 4K gaming, AI workloads, and creative tasks.',
      category: 'GPU',
      price: 1999,
    },
    {
      id: 7,
      image: 'assets/images/gpu2.jpg',
      product_name: 'AMD Radeon RX 7800 XT',
      brand: 'AMD',
      description:
        'A top-tier GPU for gamers seeking high frame rates and smooth 1440p or 4K performance.',
      category: 'GPU',
      price: 1199,
    },
    {
      id: 8,
      image: 'assets/images/gpu3.jpg',
      product_name: 'NVIDIA GeForce RTX 4070 Super',
      brand: 'NVIDIA',
      description:
        'A powerful GPU perfect for high-refresh-rate gaming and ray tracing at 1440p or 4K.',
      category: 'GPU',
      price: 2199,
    },
    {
      id: 9,
      image: 'assets/images/gpu4.jpg',
      product_name: 'AMD Radeon RX 6700 XT',
      brand: 'AMD',
      description:
        'Excellent mid-tier GPU designed for 1440p gaming with impressive performance and value.',
      category: 'GPU',
      price: 659,
    },
    {
      id: 10,
      image: 'assets/images/gpu5.jpg',
      product_name: 'NVIDIA GeForce RTX 4080 Ti',
      brand: 'NVIDIA',
      description:
        'A high-end graphics card for gaming enthusiasts, offering ultra-fast performance and ray tracing.',
      category: 'GPU',
      price: 1569,
    },
    {
      id: 11,
      image: 'assets/images/gpu6.jpg',
      product_name: 'AMD Radeon RX 7600 XT',
      brand: 'AMD',
      description:
        'A great value GPU offering high performance for 1080p and 1440p gaming.',
      category: 'GPU',
      price: 1439,
    },
    {
      id: 12,
      image: 'assets/images/gpu7.jpg',
      product_name: 'NVIDIA GeForce RTX 3090',
      brand: 'NVIDIA',
      description:
        'High-end 24GB VRAM GPU designed for 4K gaming and heavy multitasking like video editing.',
      category: 'GPU',
      price: 1879,
    },
    {
      id: 13,
      image: 'assets/images/ram1.jpg',
      product_name: 'Corsair Vengeance LPX 16GB',
      brand: 'Corsair',
      description:
        'High-performance 16GB DDR4 RAM, ideal for gaming and multitasking.',
      category: 'RAM',
      price: 399,
    },
    {
      id: 14,
      image: 'assets/images/ram2.jpg',
      product_name: 'G.Skill Ripjaws V 16GB',
      brand: 'G.Skill',
      description:
        'A 16GB DDR4 kit designed for extreme performance and reliability in gaming PCs.',
      category: 'RAM',
      price: 699,
    },
    {
      id: 15,
      image: 'assets/images/ram3.jpg',
      product_name: 'Kingston HyperX Fury 16GB',
      brand: 'Kingston',
      description:
        '16GB DDR4 RAM offering smooth multitasking for gaming and content creation.',
      category: 'RAM',
      price: 119,
    },
  ];

  filter: string = '';

  constructor(
    private cartSrv: CartService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.filter = params['filter'] ?? '';
    });
  }

  getFilterProducts() {
    return this.filter === ''
      ? this.products
      : this.products.filter(
          (product: IProduct) => product.category === this.filter
        );
  }

  setFilter(filterValue: string) {
    this.router.navigate([], {
      queryParams: { filter: filterValue },
      queryParamsHandling: 'merge',
    });
  }

  addToCart(product: IProduct) {
    this.cartSrv.addToCart(product);
    this.router.navigate(['/cart']);
  }
}
