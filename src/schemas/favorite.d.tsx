import { schema } from 'normalizr';
import resources from './resources'
export interface IFavorite {
  id: number,
  userId: number
  }
  
  export const FavoriteSchema = new schema.Entity<IFavorite>(resources.favorite);