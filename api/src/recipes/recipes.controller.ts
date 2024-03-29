import { Body, Controller, Post, Get, Param, Delete, Query, Req, ParseIntPipe } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { RecipesService } from './recipes.service';
import { ProviderService } from 'src/provider/provider.service';
import { Request } from 'express'

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

  @Get('everyRecipes')
  async getTotalRecipes(){
    try {
      const apiData = await this.providerService.getAllRecipes();
      const dbData = await this.recipesService.getRecipesDB();
      const totalData = apiData.results.concat(dbData);
      console.log(dbData);
      
      return totalData;
  } catch (e) {
      console.log(e);
  }
  }

  @Get('DBdiets')
  async getCategory(@Req() req: Request) {
      
      const builder = await this.recipesService.queryBuilder('recipes')

      if(req.query.c) {
          builder.where('recipes.diet LIKE :c', {c: `%${req.query.c}%`})
      }

      return await builder.getMany();

  }

  @Get('recipe/:id')
  public async findOneRecipe(@Param('id', ParseIntPipe) id: number) {
    return this.providerService.getIdRecipe(id);
  }
  
  @Get('recipe')
  public async findOneIDRecipe(@Query('name') name: string) {
    return this.providerService.getOneRecipe(name);
  }

  @Post('create') //Agregar la ruta 'createRecipe'
  public async createRecipe(@Body() newRecipe: CreateRecipeDto) {
    return this.recipesService.createRecipe(newRecipe);
  }

  @Delete('delete/:id')
  public async deleteRecipe(@Param('id') id: number) {
    return await this.recipesService.removeRecipe(id);
  }
}
