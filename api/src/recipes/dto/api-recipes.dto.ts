export class ApiRecipesDto {
    id: number;
    name: string;
    summary: string;
    healthScore: number;
    score: number;
    dietTypes: [string];
    dishTypes: [string];
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
    readyInMinutes: number;
    veryPopular: boolean;
    steps: [{
        number: number,
        step: string,
    }];
    image: string;
  }

   
        
        