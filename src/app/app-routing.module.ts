import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SearchPersonComponent} from './search-person/search-person.component';
import { SelectPersonComponent } from './select-person/select-person.component';



const routes: Routes = [
{
  path :'',
  component: HomeComponent
},
{
  path :'Search/:id',
  component: SearchPersonComponent
},
{
  path :'Select',
  component: SelectPersonComponent
}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
