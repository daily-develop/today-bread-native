import { Store } from '@/domain/store';
import { File } from '@/domain/file';

export enum BreadType {
  BREAD = 'BREAD',
  COOKIES = 'COOKIES',
  DONUTS = 'DONUTS',
  CAKES = 'CAKES',
  TARTS = 'TARTS',
  CROISSANTS = 'CROISSANTS',
  PASTRIES = 'PASTRIES',
  SANDWICHES = 'SANDWICHES',
  PETIT_FOUR = 'PETIT_FOUR',
  ETC = 'ETC',
}

export interface Product {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status: boolean;
  store: Store;
  image?: File;
  name: string;
  description: File[];
  breadType: BreadType;
  price: number;
  quantity?: number;
}
