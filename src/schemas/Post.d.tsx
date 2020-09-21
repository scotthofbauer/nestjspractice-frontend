import { schema } from 'normalizr';
import resources from './resources'
export interface IPost {
  id: number,
  title: string,
  message: string,
  categories: [],
  favorites: []
  }
  
  export const PostSchema = new schema.Entity<IPost>(resources.post);