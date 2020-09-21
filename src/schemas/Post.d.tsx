import { schema } from 'normalizr';
import resources from './resources'
export interface IPost {
    id: number;
    test: string;
  }
  
  export const PostSchema = new schema.Entity<IPost>(resources.post);