export interface Musica {
  id: number;
  nom: string;
  artista: string;
  duracio: number;
  activa: boolean;
  album?: string;
}

export class LlistaReproduccio {
  nom: string;
  cancons: Musica[];

  constructor(nom: string) {
    this.nom = nom;
    this.cancons = [];
  }

  afegirCanco(canco: Musica): boolean {
    this.cancons.push(canco);
    return true;
  }

  cercarPerArtista(artista: string): Musica[] {
    return this.cancons.filter(canco => canco.artista === artista);
  }

  eliminarCanco(id: number): boolean {
    const totalAbans = this.cancons.length;
    this.cancons = this.cancons.filter(canco => canco.id !== id);
    return this.cancons.length < totalAbans;
  }

  get totalCancons(): number {
    return this.cancons.length;
  }
}
