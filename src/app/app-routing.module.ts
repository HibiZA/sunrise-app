import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [{path: '', redirectTo: 'overview', pathMatch: 'full' },
{path: 'overview', component: OverviewComponent},
{path: 'details/:id', component: DetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
