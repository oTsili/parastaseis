import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
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
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated$: BehaviorSubject<boolean>;
  authSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private elementRef: ElementRef
  ) {
    this.isAuthenticated$ = this.authService.isAuthenticated$;
  }

  ngOnInit(): void {
    this.checkAuth();
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
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

  toggleDropdown(item: MenuItem) {
    item.isDropdownOpen = !item.isDropdownOpen;
  }

  // isLoggedIn(): boolean {
  //   // return this.authService.isLoggedIn();
  // }

  logout() {
    this.authService.onLogout().subscribe({
      next: (response) => {
        this.authService.onUpdateAuthStatus(false);
        localStorage.removeItem('userId');
        // this.router.navigateByUrl('/login');
      },
      error: (error) => {
        console.error(error);
      },
    });
    this.router.navigate(['/login']);
  }

  checkAuth() {
    this.authSubscription = this.authService
      .isAuthenticated()
      .subscribe((response) => {});
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
}
