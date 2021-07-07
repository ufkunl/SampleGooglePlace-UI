import {environment} from '../../environments/environment';

export class Variables {

  public static readonly API_ROOT = environment.apiUrl;

  public static  PLACE = Variables.API_ROOT + '/place';
  public static  SEARCH_PLACE = Variables.PLACE + '/nearby-search';
}
