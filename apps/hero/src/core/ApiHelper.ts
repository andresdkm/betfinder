import axios, { AxiosRequestConfig } from 'axios';
import * as tor_axios from 'tor-axios';
import { ConfigService } from '../../../common/services/config.service';
import { Logger } from '@nestjs/common';
import { Util } from '../../../common/util';
import { Md5 } from 'md5-typescript';
import { BookModel } from '../../../common/models/book.model';
import { MatchModel } from '../../../common/models/match.model';
import { LeagueModel } from '../../../common/models/league.model';

export class ApiHelper {
  private config: AxiosRequestConfig;
  private client: any;
  private baseUrl: string;
  private key: string;

  constructor(private configService: ConfigService,
              private readonly logger: Logger) {
    this.baseUrl = configService.get('SERVICE_URL');
    this.config = {
      timeout: 15000,
    };
    this.client = axios.create();
    this.key = configService.get('KEY');
  }

  private getKey() {
    const date = Util.getTimestamp().toString();
    return '?date=' + date + '&key=' + Md5.init(date + ':' + this.key).toString();
  }

  setHeaders(headers: any) {
    this.config = {
      timeout: 15000,
      headers,
    };
    this.client = axios.create();
  }

  async hideIp(url) {
    this.client = tor_axios.torSetup({
      ip: 'localhost',
      port: 9050,
      controlPort: '9051',
      controlPassword: 'giraffe',
    });
    let ipValid = true;
    do {
      const response = await this.client.get('http://api.ipify.org');
      const ip = response.data;
      let status = false;
      this.logger.debug(ip, 'REQUEST IP');
      // tslint:disable-next-line:no-shadowed-variable
      await this.client.get(url).then(response => {
        status = true;
      }, error => {
        if (error.response.status === 404 || error.response.status === 403) {
          status = true;
        } else {
          status = false;
        }
      }); // 404
      if (!status) {
        ipValid = false;
        await this.client.torNewSession(); // change tor ip
        break;
      } else {
        ipValid = true;
      }
    } while (!ipValid);

  }

  async getIp() {
    const response = await this.client.get('http://api.ipify.org');
    return response.data;
  }

  async getBooks(): Promise<BookModel[]> {
    return axios.get(this.baseUrl + '/books' + this.getKey())
      .then(response => {
        return response.data.data as BookModel[];
      })
      .catch(error => {
        this.logger.error(this.baseUrl + '/books', 'Error');
        return null;
      });
  }

  async getBook(name: string): Promise<BookModel> {
    return axios.get(this.baseUrl + '/books/' + name + this.getKey())
      .then(response => {
        return response.data.data as BookModel;
      })
      .catch(error => {
        this.logger.error(this.baseUrl + '/books/' + name, 'Error');
        return null;
      });
  }

  async getMatches(): Promise<MatchModel[]> {
    return axios.get(this.baseUrl + '/matches' + this.getKey())
      .then(response => {
        return response.data.data as MatchModel[];
      })
      .catch(error => {
        console.log(error);
        return [];
      });
  }

  async getBookById(id: string): Promise<BookModel> {
    return axios.get(this.baseUrl + '/books/find/' + id + this.getKey())
      .then(response => {
        return response.data.data as BookModel;
      })
      .catch(error => {
        console.log(error);
        return null;
      });
  }

  public async getLeague(bookId: string): Promise<LeagueModel[]> {
    return axios.get(this.baseUrl + '/books/' + bookId + '/leagues' + this.getKey())
      .then(response => {
        return response.data.data as LeagueModel[];
      })
      .catch(error => {
        console.log(error);
        return [];
      });
  }

  public async get(url: string): Promise<any> {
    return this.client.get(url, this.config)
      .then((res) => {
        return res;
      })
      .catch((error) => {
        if (error && error.status) {
          this.logger.error(error.status);
        } else if (error && error.response && error.response.status) {
          this.logger.error(error.response.status);
        } else {
          console.log(error);
        }
        return null;
      });
  }

  public async post(url: string, data: any): Promise<any> {
    return this.client.post(url, data, this.config)
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.log(error);
        return null;
      });
  }
}
