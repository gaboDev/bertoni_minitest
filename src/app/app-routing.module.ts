import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowPetsComponent} from './components/pets/show-pets/show-pets.component';

const routes: Routes = [
    { path: '', component: ShowPetsComponent }
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}
