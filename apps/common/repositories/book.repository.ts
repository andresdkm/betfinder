import { Injectable } from '@nestjs/common';
import { BaseRepository } from './base.repository';
import { BetInterface } from '../interfaces/bet.interface';
import { BetModel } from '../models/bet.model';
import { InjectModel } from '@nestjs/mongoose';
import { schema } from '../shemas/schema';
import { Model } from 'mongoose';
import { BookInterface } from '../interfaces/book.interface';
import { BookModel } from '../models/book.model';

@Injectable()
export class BookRepository extends BaseRepository<BookInterface, BookModel> {
  constructor(@InjectModel(schema.books) private readonly modelDb: Model<BookInterface>) {
    super(modelDb);
  }

}
