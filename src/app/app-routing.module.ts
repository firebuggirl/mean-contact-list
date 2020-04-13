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
    loadChildren: './search/search.module#SearchModule'
  },
  {
    path: 'contacts',
    loadChildren: './contact/contact.module#ContactModule'
  },
  {
    path: 'contact-details/:id',
    loadChildren: './contact-detail/contact-detail.module#ContactDetailModule'
  },
  {
    path: 'contact-create',
    loadChildren: './contact-create/contact-create.module#ContactCreateModule',
    canActivate: [
      AuthGuard,
      AdminGuard
    ]
  },
  {
    path: 'contact-edit/:id',
    loadChildren: './contact-edit/contact-edit.module#ContactEditModule',
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


