import { Logger, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from '../../common/common.module';
import { ApiService } from '../../common/services/api.service';
import { BdService } from '../bd/bd.service';
import { WplayIndex } from './core/books/wplay/WplayIndex';
import { response } from 'express';
import { BaseBookIndex } from './core/app/BaseBookIndex';
import { BetJuegoIndex } from './core/books/betjuego/BetJuegoIndex';
import { BetplayIndex } from './core/books/betplay/BetplayIndex';
import { MegaapuestaIndex } from './core/books/megaapuestas/MegaapuestaIndex';
import { BetalfaIndex } from './core/books/betalfa/BetalfaIndex';
import { ColbetIndex } from './core/books/colbet/ColbetIndex';
import { MelbetIndex } from './core/books/1xbet/MelbetIndex';
import * as yargs from 'yargs';
import { CodereIndex } from './core/books/codere/CodereIndex';

@Module({
  imports: [
    // tslint:disable-next-line:max-line-length
    MongooseModule.forRoot('mongodb+srv://openbets_root:oLpFPCILRA5lnRlI@openbets-3dccz.mongodb.net/openbets?retryWrites=true&w=majority', { useNewUrlParser: true }),
    CommonModule,
  ],
  controllers: [],
  providers: [
    BdService,
  ],
})
export class AppModule {
  constructor(private bdService: BdService, private apiService: ApiService, private logger: Logger) {
    const args = yargs
      .option('book', {
        alias: 'b',
        description: 'Book',
        demand: true,
      }).argv;
    const book = this.getBookmarker(args.book as string);
    book.then(() => {
      process.exit(0);
    });
  }

  private async getBookmarker(name: string): Promise<BaseBookIndex> {
    let bookmarker: BaseBookIndex = null;
    switch (name) {
      case 'betjuego':
        bookmarker = new BetJuegoIndex(this.bdService, this.apiService, this.logger);
        break;
      case 'betplay':
        bookmarker = new BetplayIndex(this.bdService, this.apiService, this.logger);
        break;
      case 'wplay':
        bookmarker = new WplayIndex(this.bdService, this.apiService, this.logger);
        break;
      case 'mega':
        bookmarker = new MegaapuestaIndex(this.bdService, this.apiService, this.logger);
        break;
      case 'betalfa':
        bookmarker = new BetalfaIndex(this.bdService, this.apiService, this.logger);
        break;
      case 'colbet':
        bookmarker = new ColbetIndex(this.bdService, this.apiService, this.logger);
        break;
      case 'melbet':
        bookmarker = new MelbetIndex(this.bdService, this.apiService, this.logger);
        break;
      case 'codere':
        bookmarker = new CodereIndex(this.bdService, this.apiService, this.logger);
        break;
    }
    if (bookmarker) {
      await bookmarker.loadConfiguration();
      if (!bookmarker.configuration.enable) {
        this.logger.debug(bookmarker.configuration.name, 'Bookmarkers is disable');
        return null;
      }
      try {
        await bookmarker.indexLeagues();
        await bookmarker.indexEvents();
      } catch (e) {
        this.logger.error(e, 'catch');
      }
      return bookmarker;
    } else {
      return null;
    }

  }

}
