import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/services/auth-service.service';
import { User } from './models/user';
import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { NbMenuItem } from '@nebular/theme';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngPartnerDash';
  currentUser: User = {};

    constructor(
        private router: Router,
        private authService: AuthServiceService,
        private sidebarService: NbSidebarService,private menuService: NbMenuService
    ) {
        this.authService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
    items: NbMenuItem[] = [
      {
        title: 'Merchants',
        icon: 'home-outline',
        link: 'merchants'
      },
      {
        title: 'Transactions',
        icon: 'credit-card-outline',
        link:'transactions'
      },
     
      {
        title: 'Logout',
        icon: 'unlock-outline',
        
        
      },
    ];
    ngOnInit() {
      this.menuService.onItemClick().subscribe((event) => {
        if (event.item.title === 'Logout') {
          this.authService.logout();
    this.router.navigate(['/login']);
        }
      });
    }
    toggle() {
      this.sidebarService.toggle(false, 'left');
    }
}
