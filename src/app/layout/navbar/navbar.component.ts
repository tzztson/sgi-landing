import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isOpen = false;
  isSmallOpen = false;
  toggleMenu(): void {
    this.isOpen = !this.isOpen;
    this.isSmallOpen = false;
  }
  toggleSmallMenu(): void {
    this.isSmallOpen = !this.isSmallOpen;
    this.isOpen = false;
  }

  constructor() {}

  ngOnInit(): void {}
}
