import { Injectable } from '@angular/core';
import { AxiosService } from './axios.service';

export interface FoodHeatResult {
  name: string | null,
  img: string,
  desc: string,
  heat: string
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private axiosService: AxiosService) { }

  async searchFoodHeat(keyword: string) {
    const result = await this.axiosService.get<FoodHeatResult[]>('/api/search/FoodHeat', {
      params: {
        keyword
      }
    })
    return result;
  }

}
