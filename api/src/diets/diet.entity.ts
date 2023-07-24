import { Recipe } from "../recipes/recipe.entity"
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm"

// Decorador para generar la endidad
@Entity()
export class Diet {
    // Decorador para generar una columna PrimaryKey
    @PrimaryGeneratedColumn()
    id: number
    // Decorador para generar una columna 
    @Column()
    name: string
    // Una categoria a muchos productos, se relacionan mediante la propiedad products tomando en la entidad category
    @ManyToMany(() => Recipe, recipe => recipe.diet, { eager: false })
    recipes: Recipe[];
}