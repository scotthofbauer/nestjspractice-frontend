import { schema } from 'normalizr';
import resources from './resources'
export interface ICategory {
  id: number,
  hashtag: string
  }
  
  export const CategorySchema = new schema.Entity<ICategory>(resources.category);