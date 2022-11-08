export class Exercise {
  public name: string;
  public reps: number;
  public sets: number;
  public imagePath: string;
  public weight?: number;

  constructor(
    name: string,
    reps: number,
    sets: number,
    imagePath: string,
    weight?: number
  ) {
    this.name = name;
    this.reps = reps;
    this.sets = sets;
    this.imagePath = imagePath;
    this.weight = weight;
  }
}
