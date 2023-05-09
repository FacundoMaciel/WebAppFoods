import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './recipes/recipes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProviderModule } from './provider/provider.module';
import { DietsModule } from './diets/diets.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: 'postgres',
      password: '101329',
      host: 'localhost',
      port: 5432,
      database: 'foodsDB',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: false,
      retryDelay: 3000,
      retryAttempts: 5
    }),
    RecipesModule,
    ProviderModule,
    DietsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
