import { Body, Controller, Post, Get, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { RecipesService } from './recipes.service';
import { ProviderService } from 'src/provider/provider.service';

@Controller('api')
export class RecipesController {
  constructor(
    private readonly recipesService: RecipesService,
    private readonly providerService: ProviderService,
  ) {}

  @Get('allRecipes')
  getRecipes() {
    return this.providerService.getAllRecipes();
  }

  @Get('recipes')
  async getRecipesDB() {
    return this.recipesService.getRecipesDB(); // Invocación al servicio para resolver la petición
  }

  @Get('recipe/:id')
  public async findOneRecipe(@Param('id', ParseIntPipe) id: number) {
    return this.providerService.getIdRecipe(id);
  }
  
  @Get('recipe')
  public async findOneIDRecipe(@Query('name') name: string) {
    return this.providerService.getOneRecipe(name);
  }

  @Post() //Agregar la ruta 'createRecipe'
  public async createRecipe(@Body() newRecipe: CreateRecipeDto) {
    return this.recipesService.createRecipe(newRecipe);
  }

  @Delete('delete/:id')
  public async deleteRecipe(@Param('id') id: number) {
    return await this.recipesService.removeRecipe(id);
  }
}
