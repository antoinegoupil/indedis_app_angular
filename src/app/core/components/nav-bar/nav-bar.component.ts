import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommerceService } from 'src/app/modules/commerce/services/commerce.service';
import { FilterProcessingService } from 'src/app/modules/commerce/services/filter-processing.service';
import { Product } from '../../models/product.model';
import { AuthProcessingService } from '../../services/auth-processing.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit, OnDestroy {
  isAuth = false;

  subscriptions: Subscription[] = [];

  constructor(
    private authProcessingService: AuthProcessingService,
    private filterProcessingService: FilterProcessingService,
    private commerceService: CommerceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.authProcessingService.isAuth().subscribe((value: boolean) => {
        this.isAuth = value;
      })
    );
  }

  changeName(event: Event) {
    const target = event.target as HTMLInputElement;
    this.filterProcessingService.setName(
      target.value === '' ? null : target.value
    );
  }

  bugFix(event: KeyboardEvent) {
    if (event.code === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      this.search();
    }
  }

  search() {
    const filter = this.filterProcessingService.getAll();
    this.router.navigate(['products'], { queryParams: filter });
  }

  logout() {
    this.authProcessingService.logout();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
