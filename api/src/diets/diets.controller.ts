import { Controller, Get } from '@nestjs/common';
import { DietsService } from './diets.service';


@Controller('api/diets')
export class DietsController {
  constructor(private dietService: DietsService) {} // Inyectando servicio con un constructor

  @Get()
  async getDiets() {
    return this.dietService.findAllDiets(); // Invocación al servicio para resolver la petición
  }
}
