import { EventInterface } from '../interfaces/event.interface';
import { EventModel } from '../models/event.model';
import { Document, Model } from 'mongoose';
import { Injector } from '@nestjs/core/injector/injector';
import { Inject, Logger } from '@nestjs/common';

export class BaseRepository<T extends Document, N> {

  @Inject(Logger) logger: Logger;
  model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  async removeById(id: string) {
    return this.model.findByIdAndRemove(id).exec()
      .then(data => {
        return true;
      })
      .catch(error => {
        this.logger.error(error);
        return false;
      });
  }

  async findById(id: string) {
    return this.model.findById(id).exec()
      .then(data => {
        return data;
      })
      .catch(error => {
        this.logger.error(error);
        return null;
      });
  }

  async findOne(data: any): Promise<T> {
    return this.model.findOne(data).exec()
      .then(data => {
        return data;
      })
      .catch(error => {
        this.logger.error(error);
        return null;
      });
  }

  async find(data: any): Promise<T[]> {
    return this.model.find(data).exec()
      .then(data => {
        return data;
      })
      .catch(error => {
        this.logger.error(error);
        return null;
      });
  }

  async save(data: T): Promise<boolean> {
    return data.save()
      .then(data => {
        return true;
      })
      .catch(error => {
        this.logger.error(error);
        return false;
      });
  }

  async create(createDto: N): Promise<T> {
    const created = new this.model(createDto);
    return created.save()
      .then(data => {
        return data;
      })
      .catch(error => {
        this.logger.error(error);
        return null;
      });
  }

  async findAll(): Promise<T[]> {
    return await this.model.find().exec();
  }

  async count(): Promise<number> {
    return await this.model.countDocuments({}).exec();
  }
}
