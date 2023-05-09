import axios from 'axios';

import environment from '../../helpers/utils/environment';
import { AccessToken, AuthorizationSalesForce, Account, ResponseSF, ProgramRequest } from '../../helpers/interfaces';
import DataFile from '../utils/DataFile';


class HandlerSalesForce {

  public token: string = 'token.json';
  public toke_dir: string = 'temp/salesforce';

  /**
   * 
   */
  get headers() {
    return {
      'Accept': 'application/json',
      'Authorization': this.Authorization
    }
  }

  /**
   * 
   */
  get Authorization() {
    const data: string = `${environment('SF_CLIENTID')}:${environment('SF_CLIENTSECRET')}`;
    let buff = Buffer.from(data, 'utf-8');
    return `Basic ${buff.toString('base64')}`;
  }

  /**
   * 
   */
  get dataAuthorization(): AuthorizationSalesForce {
    return {
      'grant_type': 'password',
      'client_id': `${environment('SF_CLIENTID')}`,
      'client_secret': `${environment('SF_CLIENTSECRET')}`,
      'username': `${environment('SF_USERNAME')}`,
      'password': `${environment('SF_PASSWORD')}${environment('SF_SECRET_TOKEN')}`
    }
  }

  /**
   * 
   * @returns 
   */
  async createToken(): Promise<void> {
    try {
      const { data }: AccessToken | any = await axios.post<AuthorizationSalesForce>(
        `${environment('SF_BASEURL')}/services/oauth2/token`,
        (this.dataAuthorization),
        {
          headers: {
            ...this.headers,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );
      await this.saveToken(data);
      console.log(data);
    } catch (error: any) {
      console.log(error);
    }
  }

  /**
   * 
   * @returns 
   */
  async getToken(): Promise<AccessToken> {
    const file = new DataFile(this.token, this.toke_dir);
    return await file.read_db();
  }

  /**
   * 
   * @param data 
   */
  async saveToken(data: AccessToken): Promise<void> {
    const dataFile = new DataFile(this.token, this.toke_dir);
    await dataFile.save_db(data);
  }

  /**
   * Query:
   * Accounts `SELECT+FIELDS(ALL)+FROM+Account+LIMIT+${limit}`
   * TSF_vod__c `SELECT+Id,SIL_Call_Specialty__c,SIL_Connection__c,Account_vod__c,Territory_vod__c,Address_vod__c+FROM+TSF_vod__c+WHERE+Account_vod__c+=+'${Account}'`
   * @param query 
   * @returns 
   */

  async fetchSF(query: string) {
    const access = await this.getToken();
    try {
      const { data, status } = await axios.get<ResponseSF>(
        `${access.instance_url}/services/data/${environment('SF_VERSION')}/query?q=${query}`,
        {
          headers: {
            Accept: 'application/json',
            Authorization: `${access.token_type} ${access.access_token}`
          }
        },
      );
      console.log('response status is: ', status);
      return data;
    } catch (error) {
      // console.log(error)
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return error;
      } else {
        console.log('unexpected error: ', error);
        return error;
      }
    }
  }

  /**
   * 
   * @param program 
   * @param endpoint 
   * @returns 
   */
  async postSF(program: ProgramRequest, endpoint: string) {
    const access = await this.getToken();
    try {
      const { data } = await axios.post<ProgramRequest>(
        `${access.instance_url}/services/data/${environment('SF_VERSION')}/sobjects/${endpoint}/`,
        program,
        {
          headers: {
            Accept: 'application/json',
            Authorization: `${access.token_type} ${access.access_token}`
          }
        }
      )
      console.log(data)
      return data;
    } catch (error) {
      // console.log(error)
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return error;
      } else {
        console.log('unexpected error: ', error);
        return error;
      }
    }
  }
}

export default HandlerSalesForce;
