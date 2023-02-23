import axios from 'axios';
import {
  COLLECTIONS_GALLERY_API,
  DEFAULT_AIP_COLLECTION,
  DEFAULT_COLLECTION,
  GALLERY_API,
  GALLERY_KEY,
  RANDOM_GALLERY_API
} from '../constants/constants';
import { IAPICollection, ICollection } from '../models/ICollection';

export async function getGallery(): Promise<ICollection> {
  return await axios
    .get<ICollection>(`${GALLERY_API + RANDOM_GALLERY_API}`, {
      headers: {
        Authorization: `Client-ID ${GALLERY_KEY}`
      }
    })
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      console.log('Не удалось получить данные RANDOM с unsplash');
      return DEFAULT_COLLECTION;
    });
}

export async function getGalleryCollections(keyword: string): Promise<IAPICollection> {
  return await axios
    .get<IAPICollection>(`${GALLERY_API + COLLECTIONS_GALLERY_API}?query=${keyword}`, {
      headers: {
        Authorization: `Client-ID ${GALLERY_KEY}`
      }
    })
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      console.log('Не удалось получить данные COLLECTIONS с unsplash');
      return DEFAULT_AIP_COLLECTION;
    });
}
