import {Component, OnInit} from '@angular/core';
import {PetsService} from '../../../services/Pets/pets.service';
import {Pet} from '../Pet';

@Component({
  selector: 'app-show-pets',
  templateUrl: './show-pets.component.html',
  styleUrls: ['./show-pets.component.css']
})
export class ShowPetsComponent implements OnInit {

  public pets: Pet[] = [];
  public newPet: Pet = new Pet();
  public editable = false;

  constructor(private petsSerive: PetsService) {
      this.petsSerive.loadPets();
      this.pets = this.petsSerive.getPets();
  }

  ngOnInit() {
  }

  delete(pet) {
      const idx = this.getIndexOfAPet(pet);
      if (idx !== -1) {
          this.pets.splice(idx, 1);
          this.petsSerive.removePet(idx);
      }
  }

  newPetCreated($event) {
      const pet: Pet = $event;
      this.pets.push(pet);
      this.petsSerive.updatePets(this.pets);
  }

  protected getIndexOfAPet(pet: Pet) {
      return this.pets.indexOf(pet);
  }


}
