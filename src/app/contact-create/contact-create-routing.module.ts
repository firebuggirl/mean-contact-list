import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { AuthGuard } from "../guard/auth.guard";

const routes: Routes = [
    {
      path: '',
      component: ContactCreateComponent, canActivate: [AuthGuard]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactCreateRoutingModule { }
