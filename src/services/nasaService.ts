import axios from 'axios';
import { INasa } from '../models/INasa';
import { NASA_API, NASA_KEY } from '../constants/constants';

export async function getNasa() {
  return await axios
    .get<INasa>(`${NASA_API}?api_key=${NASA_KEY}`)
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      console.log('Не удалось получить данные с Nasa');
    });
}
