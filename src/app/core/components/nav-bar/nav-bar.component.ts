import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthProcessingService } from '../../services/auth-processing.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit, OnDestroy {
  isAuth = false;

  subscriptions: Subscription[] = [];

  constructor(private authProcessingService: AuthProcessingService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.authProcessingService.isAuth().subscribe((value: boolean) => {
        this.isAuth = value;
      })
    );
  }

  logout() {
    this.authProcessingService.logout();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
