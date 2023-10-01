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
            'https://api.spoonacular.com/recipes/complexSearch?apiKey=445704158a1842839fee0c14930bc5cf&addRecipeInformation=true&number=100',
          ),
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  public async getOneRecipe(name: string) {
    try {
      const response = await firstValueFrom(
        this.httpService.get(
          'https://api.spoonacular.com/recipes/complexSearch?apiKey=445704158a1842839fee0c14930bc5cf&addRecipeInformation=true&number=100',
        ),
      );
      let recipeName = response?.data?.results?.filter((el) =>
        el.title.toLowerCase().includes(name.toLowerCase()),
      );
      return recipeName;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async getIdRecipe(id: number) {
    try {
      const response = await firstValueFrom(
        this.httpService.get(
          'https://api.spoonacular.com/recipes/complexSearch?apiKey=445704158a1842839fee0c14930bc5cf&addRecipeInformation=true&number=100',
        ),
      );
      let recipeID = response.data.results.filter((el) => el.id == id);
      return recipeID;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
