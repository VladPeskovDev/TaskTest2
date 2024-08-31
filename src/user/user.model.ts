import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  age: number;

  @Column
  gender: string;

  @Column({ defaultValue: false })
  hasProblems: boolean;
}
