export class Exercise {
  public name: string;
  public reps: number;
  public sets: number;
  public muscleGroup: string;
  public weight?: number;

  constructor(
    name: string,
    reps: number,
    sets: number,
    muscleGroup: string,
    weight?: number
  ) {
    this.name = name;
    this.reps = reps;
    this.sets = sets;
    this.muscleGroup = this.muscleGroup;
    this.weight = weight;
  }
}
