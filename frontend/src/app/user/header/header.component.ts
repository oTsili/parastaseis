import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
// import { MenuItem } from 'primeng/api';

interface MenuItem {
  label: string;
  isDropdownOpen: boolean;
  subItems: { label: string }[];
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isAuthenticated$: BehaviorSubject<boolean>;

  constructor(
    private authService: AuthService,
    private router: Router,
    private elementRef: ElementRef
  ) {
    this.isAuthenticated$ = this.authService.isAuthenticated$;
  }

  // isLoggedIn(): boolean {
  //   // return this.authService.isLoggedIn();
  // }

  logout() {
    // this.authService.logout();
    this.router.navigate(['/login']);
  }
  menuItems: MenuItem[] = [
    {
      label: 'Menu 1',
      isDropdownOpen: false,
      subItems: [
        { label: 'Option 1.1' },
        { label: 'Option 1.2' },
        { label: 'Option 1.3' },
      ],
    },
    {
      label: 'Menu 2',
      isDropdownOpen: false,
      subItems: [
        { label: 'Option 2.1' },
        { label: 'Option 2.2' },
        { label: 'Option 2.3' },
      ],
    },
    {
      label: 'Menu 3',
      isDropdownOpen: false,
      subItems: [
        { label: 'Option 3.1' },
        { label: 'Option 3.2' },
        { label: 'Option 3.3' },
      ],
    },
    {
      label: 'Menu 4',
      isDropdownOpen: false,
      subItems: [
        { label: 'Option 4.1' },
        { label: 'Option 4.2' },
        { label: 'Option 4.3' },
      ],
    },
  ];

  toggleDropdown(item: MenuItem) {
    item.isDropdownOpen = !item.isDropdownOpen;
  }

  ngOnInit(): void {}

  isOpen = false;

  @HostListener('document:click', ['$event.target'])
  onClickOutside(targetElement: any) {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    this.isOpen = clickedInside;
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: MouseEvent) {
    this.isOpen = true;
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: MouseEvent) {
    this.isOpen = false;
  }
}
