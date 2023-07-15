import { Recipe } from "../recipes/recipe.entity"
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm"

// Decorador para generar la endidad
@Entity()
export class Diet {
    // Decorador para generar una columna PrimaryKey
    // Decorador para generar una columna PrimaryKey
    @PrimaryGeneratedColumn()
    id: number
    // Decorador para generar una columna 
    @Column({default:"recipe"})
    name: string
    // Una categoria a muchos productos, se relacionan mediante la propiedad products tomando en la entidad category
    @ManyToMany(type => Recipe, recipe => recipe.theDiet, { eager: false })
    recipes: Recipe[];
}