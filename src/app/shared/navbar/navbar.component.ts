import { Component, ElementRef, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  isMoreSlideOpen = false;
  constructor(private elRef: ElementRef) {}
  ngOnInit(): void {
    /*--- VSticker ----*/
    $('#news-flash').vTicker({
      speed: 500,
      pause: 3000,
      animation: 'fade',
      mousePause: false,
      showItems: 1,
    });
    /*----------------------------
        Category toggle function
    ------------------------------*/
    const searchToggle = $(this.elRef.nativeElement).find(
      '.categories-button-active'
    );
    searchToggle.on('click', (e: MouseEvent) => {
      e.preventDefault();
      if ($(e.currentTarget).hasClass('open')) {
        $(e.currentTarget).removeClass('open');
        $(e.currentTarget)
          .siblings('.categories-dropdown-active-large')
          .removeClass('open');
      } else {
        $(e.currentTarget).addClass('open');
        $(e.currentTarget)
          .siblings('.categories-dropdown-active-large')
          .addClass('open');
      }
    });
  }
  toggleMoreSlide() {
    this.isMoreSlideOpen = !this.isMoreSlideOpen;
  }
}
