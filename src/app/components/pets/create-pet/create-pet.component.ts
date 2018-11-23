import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from '../../categories/Category';
import {Pet} from '../Pet';
import {CategoriesService} from '../../../services/Categories/categories.service';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.css']
})
export class CreatePetComponent implements OnInit {

    public newPet: Pet = new Pet();
    public categories: Category[] = [];
    public validData  = true;
    @Output() newPetCreated: EventEmitter<Pet> = new EventEmitter();

    constructor(private categoriesService: CategoriesService) {
        this.categoriesService.getCategories().toPromise().then((response: Category[] ) => {
            this.categories = response;
        }).catch(error => {
            console.log(error);
        });
    }

  ngOnInit() {
  }

  createPet() {
    if ( this.newPet.name === undefined || this.newPet.photoUrls === undefined || this.newPet.tags === undefined || this.newPet.category === undefined || this.newPet.id === undefined) {
        this.validData = false;
    } else {
        this.newPetCreated.emit(this.newPet);
        this.validData = true;
        this.newPet = new Pet();
    }
  }

}
