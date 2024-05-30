import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCatDto } from 'src/dtos/CreateCat.dto';

@Controller('cats')
export class CatsController {
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    console.log('🚀 ~ CatsController ~ create ~ createCatDto:\n', createCatDto);
    return createCatDto;
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `${id} cat`;
  }
}
