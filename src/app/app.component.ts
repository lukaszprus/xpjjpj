import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { BannerComponent } from './banner/banner.component';
import { WelcomeComponent } from './welcome/welcome.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [BannerComponent, WelcomeComponent, RouterOutlet, RouterLink],
})
export class AppComponent {}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/