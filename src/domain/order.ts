import { Product } from '@/domain/product';
import { Profile } from '@/domain/profile';

export interface Order {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  paidAmount: number;
  product: Product;
  member: Profile;
}

export interface ExtendedOrder extends Order {
  orderUrl: string;
  orderSecret: string;
}
