import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class ProviderService {
  constructor(private readonly httpService: HttpService) {}

  public async getAllRecipes() {
    try {
      const response = await firstValueFrom(
        this.httpService.get(
            'https://api.spoonacular.com/recipes/complexSearch?apiKey=04de7983c2da4ee6a4270308c8dcba6c&addRecipeInformation=true&number=100'
        ),
      );
      // console.log(response.data.results.map(el => el.dishTypes));
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  public async getOneRecipe(name: string) {
    try {
      const response = await firstValueFrom(
        this.httpService.get(
          'https://api.spoonacular.com/recipes/complexSearch?apiKey=04de7983c2da4ee6a4270308c8dcba6c&addRecipeInformation=true&number=100'
        ),
      );
      let recipeName = response.data.results.filter((el) =>
        el.title.toLowerCase().includes(name.toLowerCase()),
      );
      //  console.log(response.data.results.map(el => el.title));
      //  console.log(recipeName);
      console.log(name);
      return recipeName;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async getIdRecipe(id: number) {
    try {
      const response = await firstValueFrom(
        this.httpService.get(
          'https://api.spoonacular.com/recipes/complexSearch?apiKey=04de7983c2da4ee6a4270308c8dcba6c&addRecipeInformation=true&number=100'
        ),
      );
      let recipeID = response.data.results.filter(el => el.id == id);
      // console.log(response.data.results.map(el => el.id));
      // console.log(recipeID);
      console.log(id);
      return recipeID;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
