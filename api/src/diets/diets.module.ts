import { Module } from '@nestjs/common';
import { DietsController } from './diets.controller';
import { DietsService } from './diets.service';
import { Diet } from './diet.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipesModule } from 'src/recipes/recipes.module';

@Module({
  imports: [TypeOrmModule.forFeature([Diet]), RecipesModule],
  controllers: [DietsController],
  providers: [DietsService]
})
export class DietsModule {}
