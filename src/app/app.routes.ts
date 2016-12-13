import { Routes, RouterModule } from '@angular/router';
import { LuckPage } from './page';
import { NoContentComponent } from './no-content';

import { ProfileResolver } from './core';

export const ROUTES: Routes = [
  { resolve: { profile: ProfileResolver }, path: '', component: LuckPage, data: { home: true } },
  { resolve: { profile: ProfileResolver }, path: 'page/:id', component: LuckPage },
  { resolve: { profile: ProfileResolver }, path: '**', component: NoContentComponent },
];
