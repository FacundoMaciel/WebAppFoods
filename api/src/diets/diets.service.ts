import { Injectable } from '@nestjs/common';
import { Diet } from './diet.entity';
import { dietsTypesDto } from './dto/types-diets.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DietsService {
  constructor(
    @InjectRepository(Diet) private dietRepository: Repository<Diet>,
  ) {}

  // Función asincrona (async) para obtener las categorias mediante el metodo find
  findAllDiets() {
    return this.dietRepository.find();
  }
}
