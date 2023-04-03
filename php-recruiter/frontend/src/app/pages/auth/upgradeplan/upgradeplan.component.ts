import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-upgradeplan',
  templateUrl: './upgradeplan.component.html',
  styleUrls: ['./upgradeplan.component.scss']
})
export class UpgradeplanComponent {
  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.checkAuth();
  }
}
