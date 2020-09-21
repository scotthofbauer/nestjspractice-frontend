import { schema } from 'normalizr';
import { ICategory } from './category.d';
import { IFavorite } from './favorite.d';
import resources from './resources'
import { IUser } from './user.d';
export interface IPost {
  id: number,
  title: string,
  message: string,
  categories: ICategory[],
  favorites: IFavorite[],
  author: IUser
  }
  
  export const PostSchema = new schema.Entity<IPost>(resources.post);