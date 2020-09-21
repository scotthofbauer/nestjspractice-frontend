import { schema } from 'normalizr';
import resources from './resources'
export interface IUser {
  id: number,
  first_name: string,
  last_name: string,
  bio: string,
  }
  
  export const UserSchema = new schema.Entity<IUser>(resources.user);