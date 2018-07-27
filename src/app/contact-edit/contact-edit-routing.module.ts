import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { AuthGuard } from "../guard/auth.guard";

const routes: Routes = [
    {
      path: '',
      component: ContactEditComponent, canActivate: [AuthGuard]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactEditRoutingModule { }
