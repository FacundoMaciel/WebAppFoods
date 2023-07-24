import { Diet } from 'src/diets/diet.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

// Decorador para generar la endidad
@Entity()
export class Recipe {
  // Decorador para generar una columna PrimaryKey
  @PrimaryGeneratedColumn()
  id: number; // tipo número INT o también decimal
  // Decorador para generar una columna
  @Column({ unique: true }) // Dato estrictamente único
  name: string; // tipo VarChar

  @Column()
  summary: string;

  @Column()
  steps: string;

  @Column() 
  score: number;

  @Column()
  healthScore: number;

  @Column()
  image: string;

  // @Column({default: "vegan"})
  // diet: string;

  // Decorador para generar la relacion entre tablas de este lado correspone muchos a uno
  // Muchos productos a una categoria, relacionar en esta entidad con el decorador @JoinColumn
    @ManyToMany (() => Diet, diet => diet.recipes, { eager: false })
    @JoinTable()
    diet: Diet
}

