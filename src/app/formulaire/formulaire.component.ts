import { Component, OnInit } from '@angular/core';
import { Formulaire } from '../Models/formulaire';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  nom = '';
  prenom = '';
  email = "";
  formulaires : Formulaire[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  enregistrer() {
    var formulaire = new Formulaire()
    formulaire.nom = this.nom;
    formulaire.prenom = this.prenom;
    formulaire.email = this.email;
    this.formulaires.unshift(formulaire);
  }


itemSelected(formulaire : Formulaire) {
  this.nom = formulaire.nom
  this.prenom = formulaire.prenom
  this.email = formulaire.email


}

supprimer(nom : string) {
  //debugger
  this.formulaires = this.formulaires.filter(a => a.nom != nom)

}
}
