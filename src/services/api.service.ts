import axios, { type AxiosInstance, type AxiosResponse } from 'axios';

class ApiService {

  /**
   * 
   * @returns AxiosInstance
   */
  private getInstance(): AxiosInstance {
    return axios.create({
      baseURL: 'https://itunes.apple.com/',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    });
  }

  /**
   * 
   * @param url 
   * @param params 
   * @returns Promise<AxiosResponse>
   */
  public get(url: string, params: object): Promise<AxiosResponse> {
    const axios: AxiosInstance = this.getInstance();
    return axios.request({
      method: 'get',
      url,
      params,
    });
  }

}

export default ApiService;