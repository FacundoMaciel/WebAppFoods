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
            'https://api.spoonacular.com/recipes/complexSearch?apiKey=23e6cf8f890f48b997d1ef1dc5f90a81&addRecipeInformation=true&number=100',
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
          'https://api.spoonacular.com/recipes/complexSearch?apiKey=5c71ebdb30554aba91298b08f6862631&addRecipeInformation=true&number=100',
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
          'https://api.spoonacular.com/recipes/complexSearch?apiKey=5c71ebdb30554aba91298b08f6862631&addRecipeInformation=true&number=100',
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
