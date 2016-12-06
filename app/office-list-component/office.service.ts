import { Injectable } from '@angular/core';

@Injectable() // Para decir que esto se injecta en el DI
export class OfficeService {

    getOffices() {
        return [
            "Seattle",
            "London",
            "Dubai",
            "Madrid",
            "Bilbao",
            "Barcelona",
            "Sevilla",
            "León"
        ];
    }
}