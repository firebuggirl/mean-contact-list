import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from "../guard/auth.guard";

const routes: Routes = [
    {
      path: '',
      component: ContactComponent, canActivate: [AuthGuard]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
