import { FormsModule } from '@angular/forms';

import { HighlightDirective } from './highlight.directive';
import { TitleCasePipe } from './title-case.pipe';
import { NgFor, NgIf } from '@angular/common';

export const sharedImports = [FormsModule, HighlightDirective, TitleCasePipe, NgIf, NgFor];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/