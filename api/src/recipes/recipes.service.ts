import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recipe } from './recipe.entity';
import { CreateRecipeDto } from './dto/create-recipe.dto';

@Injectable()
export class RecipesService {
  constructor(
    @InjectRepository(Recipe)
    private readonly recipeRepository: Repository<Recipe>,
  ) {}

  async getRecipesDB() {
    return this.recipeRepository.find({
      relations: ['diet'],
    });
  }

  async queryBuilder(alias: string) {
    return this.recipeRepository.createQueryBuilder(alias);
  }

  async createRecipe(recipe: CreateRecipeDto) {
    const newRecipe =
      !recipe && recipe.name && recipe.summary
        ? this.recipeRepository.create(recipe)
        : recipe;
    return this.recipeRepository.save(newRecipe);
  }

  async removeRecipe(id: number) {
    await this.recipeRepository.delete(id);
    return true;
  }
}
