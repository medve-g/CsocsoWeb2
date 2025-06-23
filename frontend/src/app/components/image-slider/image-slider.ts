import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-image-slider',
  imports: [NgbCarouselModule],
  templateUrl: './image-slider.html',
  styleUrl: './image-slider.css'
})
export class ImageSlider {
  images = ["/assets/kep1.jpg","/assets/kep2.jpg"];
}
