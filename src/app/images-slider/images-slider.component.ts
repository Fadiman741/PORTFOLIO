import { Component, HostListener, ViewChild, ElementRef, OnInit } from "@angular/core";

@Component({
  selector: 'app-images-slider',
  templateUrl: './images-slider.component.html',
  styleUrls: ['./images-slider.component.css']
})
export class ImagesSliderComponent implements OnInit {
  arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  totalCards: number = this.arr.length;
  currentPage: number = 1;
  pagePosition: string = "0%";
  cardsPerPage!: number;
  totalPages!: number;
  overflowWidth!: string;
  cardWidth!: string;
  containerWidth!: number;
  @ViewChild("container", { static: true, read: ElementRef })
  container!: ElementRef;
  @HostListener("window:resize") windowResize() {
    let newCardsPerPage = this.getCardsPerPage();
    if (newCardsPerPage != this.cardsPerPage) {
      this.cardsPerPage = newCardsPerPage;
      this.initializeSlider();
      if (this.currentPage > this.totalPages) {
        this.currentPage = this.totalPages;
        this.populatePagePosition();
      }
    }
  }
  Imagesdelatils = [    
    { "id": 1, "name": "Art", "url": "assets/gallery/1.jpeg" },   
    { "id": 2, "name": "Art", "url": "assets/gallery/2.jpeg" },    
    { "id": 3, "name": "Art", "url": "assets/gallery/3.jpeg" },    
    { "id": 4, "name": "Art", "url": "assets/gallery/4.jpeg" },    
    { "id": 5, "name": "Art", "url": "assets/gallery/5.jpeg" },    
    { "id": 6, "name": "Art", "url": "assets/gallery/6.jpeg" },    
    { "id": 7, "name": "Art", "url": "assets/gallery/7.jpeg" },    
    { "id": 8, "name": "Art", "url": "assets/gallery/8.jpeg" },    
    { "id": 9, "name": "Art", "url": "assets/gallery/9.jpeg" },    
  ]

  ngOnInit() {
    this.cardsPerPage = this.getCardsPerPage();
    this.initializeSlider();
  }

  initializeSlider() {
    this.totalPages = Math.ceil(this.totalCards / this.cardsPerPage);
    this.overflowWidth = `calc(${this.totalPages * 100}% + ${this.totalPages *
      10}px)`;
    this.cardWidth = `calc((${100 / this.totalPages}% - ${this.cardsPerPage *
      10}px) / ${this.cardsPerPage})`;
  }

  getCardsPerPage() {
    return Math.floor(this.container.nativeElement.offsetWidth / 300);
  }

  changePage(incrementor: number) {
    this.currentPage += incrementor;
    this.populatePagePosition();
  }

  populatePagePosition() {
    this.pagePosition = `calc(${-100 * (this.currentPage - 1)}% - ${10 *
      (this.currentPage - 1)}px)`;
  }
}
