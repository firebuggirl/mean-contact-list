import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CallbackComponent } from './callback/callback.component';
// Route guards
import { AuthGuard } from './auth/auth.guard';
import { AdminGuard } from './auth/admin.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'contact-details/:id',
    loadChildren: () => import('./contact-detail/contact-detail.module').then(m => m.ContactDetailModule)
  },
  {
    path: 'contact-create',
    loadChildren: () => import('./contact-create/contact-create.module').then(m => m.ContactCreateModule),
    canActivate: [
      AuthGuard,
      AdminGuard
    ]
  },
  {
    path: 'contact-edit/:id',
    loadChildren: () => import('./contact-edit/contact-edit.module').then(m => m.ContactEditModule),
    canActivate: [
      AuthGuard,
      AdminGuard
    ]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    AuthGuard,
    AdminGuard
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


