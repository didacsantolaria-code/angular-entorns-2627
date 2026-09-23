export class Alumne {
  nom: string;
  edat: number;
  cicle: string;
  notes: number[];

  constructor(nom: string, edat: number, cicle: string, notes: number[]) {
    this.nom = nom;
    this.edat = edat;
    this.cicle = cicle;
    this.notes = notes;
  }

  presentar(): string {
    return `Soc ${this.nom}, tinc ${this.edat} anys i estudio ${this.cicle}`;
  }

  get mitjanaNotes(): number {
    if (this.notes.length === 0) {
      return 0;
    }
    let suma = 0;
    for (let i = 0; i < this.notes.length; i++) {
      suma += this.notes[i];
    }
    return suma / this.notes.length;
  }

  get haAprobat(): boolean {
    return this.mitjanaNotes >= 5;
  }
}
