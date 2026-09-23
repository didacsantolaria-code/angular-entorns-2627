import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Musica, LlistaReproduccio } from './interfaces/musica';
import { saludar, esMajorEdat, sumarArray } from './interfaces/funcions';
import { Alumne } from './interfaces/alumne';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  protected readonly title = signal('angular-entorns-2627');

  cancons: Musica[] = [
    { id: 1, nom: 'En las noches frías', artista: 'Ñengo Flow', duracio: 215, activa: true, album: 'Real G 4 Life' },
    { id: 2, nom: 'No dice na', artista: 'Ñengo Flow', duracio: 200, activa: true, album: 'Real G 4 Life Part 2' },
    { id: 3, nom: 'Traicionera', artista: 'Ñengo Flow', duracio: 220, activa: false },
    { id: 4, nom: 'Cuando me dirás', artista: 'Ñengo Flow', duracio: 210, activa: true, album: 'Real G 4 Life Part 2' },
    { id: 5, nom: 'Devórame', artista: 'Ñengo Flow', duracio: 195, activa: false }
  ];

  constructor() {
    console.log(saludar('Didac'));
    console.log(esMajorEdat(20));
    console.log(sumarArray([2, 4, 6, 8]));

    const alumne1 = new Alumne('Pol', 19, 'DAW', [7, 8, 6, 9]);
    const alumne2 = new Alumne('Laia', 17, 'DAM', [4, 5, 3, 4]);

    console.log(alumne1.presentar());
    console.log(alumne1.haAprobat);

    console.log(alumne2.presentar());
    console.log(alumne2.haAprobat);

    console.log(this.getActius());
    console.log(this.findById(1));
    console.log(this.formatarElement(this.cancons[0]));

    const llista = new LlistaReproduccio('Real G 4 Life');
    llista.afegirCanco(this.cancons[0]);
    llista.afegirCanco(this.cancons[1]);
    console.log(llista.nom);
    console.log(llista.totalCancons);
  }

  getActius(): Musica[] {
    return this.cancons.filter(canco => canco.activa === true);
  }

  findById(id: number): Musica | undefined {
    return this.cancons.find(canco => canco.id === id);
  }

  formatarElement(element: Musica): string {
    return `${element.nom} - ${element.artista} (${element.duracio}s)`;
  }
}

export { AppComponent as App };
