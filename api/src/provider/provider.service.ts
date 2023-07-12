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
            'https://api.spoonacular.com/recipes/complexSearch?apiKey=0b13941b51db4de49e4a3a085dabc160&addRecipeInformation=true&number=100',
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
          'https://api.spoonacular.com/recipes/complexSearch?apiKey=9e5d07e929c64e0cbe27013165000d09&addRecipeInformation=true&number=100',
        ),
      );
      let recipeName = response?.data?.results?.filter((el) =>
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
          'https://api.spoonacular.com/recipes/complexSearch?apiKey=9e5d07e929c64e0cbe27013165000d09&addRecipeInformation=true&number=100',
        ),
      );
      let recipeID = response.data.results.filter((el) => el.id == id);
      // console.log(response.data.results.map(el => el.id));
      // console.log(recipeID);
      console.log(id);
      return recipeID;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
