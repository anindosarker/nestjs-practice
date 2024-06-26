import { Injectable } from '@nestjs/common';
import { Cat } from 'src/cats/interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
