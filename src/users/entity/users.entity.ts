import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Recipe } from '../../recipes/entity/recipes.entity';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column()
  email: string;

  @Column()
  password: string;

  //@OneToMany(() => Recipe, (recipe) => recipe.user)
  //recipes: Recipe[];
  @Column({ default: true })
  isActive: boolean;
}
