import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { AuthGuard } from '../auth/auth.guard';
import { AdminGuard } from '../auth/admin.guard';


const routes: Routes = [
    {
      path: '',
      //component: ContactDetailComponent, canActivate: [AuthGuard, AdminGuard]
      component: ContactDetailComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactDetailRoutingModule { }
