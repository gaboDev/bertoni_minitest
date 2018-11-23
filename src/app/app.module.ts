import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CategoriesService} from './services/Categories/categories.service';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {PetsService} from './services/Pets/pets.service';
import { ShowPetsComponent } from './components/pets/show-pets/show-pets.component';
import {SuiModule} from 'ng2-semantic-ui';
import {FormsModule} from '@angular/forms';
import { CategoriesComponent } from './components/categories/categories.component';
import { CreatePetComponent } from './components/pets/create-pet/create-pet.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ShowPetsComponent,
    CategoriesComponent,
    CreatePetComponent
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
      SuiModule, FormsModule, AppRoutingModule
  ],
  providers: [CategoriesService, PetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
