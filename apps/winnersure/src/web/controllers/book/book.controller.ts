import { Controller, Get, Logger, Param, UseGuards, UseInterceptors } from '@nestjs/common';
import { BookRepository } from '../../../../../common/repositories/book.repository';
import { TransformInterceptor } from '../../transform.interceptor';
import { TokenGuard } from '../../guards/token.guard';

@Controller('books')
@UseGuards(TokenGuard)
export class BookController {
  constructor(private bookRepository: BookRepository,
              private readonly logger: Logger) {

  }

  @Get()
  getAll() {
    return this.bookRepository.findAll();
  }

  @Get(':name')
  async getByName(@Param() params) {
    const book = await this.bookRepository.findOne({
      name: params.name,
    });
    return book;
  }

  @Get('/find/:id')
  async getById(@Param() params) {
    const book = await this.bookRepository.findById(params.id);
    return book;
  }
}
