import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';
import { Routes } from '@angular/router';

export default [
  { path: '', component: HeroListComponent },
  { path: ':id', component: HeroDetailComponent },
] as Routes;


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/