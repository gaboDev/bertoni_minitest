import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pet} from '../../components/pets/Pet';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

    static storage_name = 'pets';

    constructor(private http: HttpClient) {
    }

    loadPets(): void {
        this.http.get<Pet[]>('assets/Pets.json').toPromise().then((response: Pet[] ) => {
             localStorage.setItem(PetsService.storage_name, JSON.stringify(response));
        }).catch(error => {
            console.log(error);
        });
    }

    getPets(): Pet[] {
        const stringify_data = localStorage.getItem(PetsService.storage_name);
        if (stringify_data === null){
            return [];
        }
        const pets_array: Array<Pet> = JSON.parse(stringify_data);
        return pets_array;
    }

    updatePets(pets: Array<Pet>) {
        localStorage.removeItem(PetsService.storage_name);
        localStorage.setItem(PetsService.storage_name, JSON.stringify(pets));
    }

    removePet(idx: number) {
        const pets = this.getPets();
        pets.splice(idx, 1);
        this.updatePets(pets);
    }
}
