export interface BrandInterface {
  id: number;
  brand: string;
  img: string;
}
export interface DepartmentsInterface {
  id: number;
  department: string;
}
export interface ProductsInterface{
  id: number;
  brand: number;
  department: number;
  product: string;
  colors: Array<any>;
  sizes: Array<any>;
  img:string;
  description:Array<any>;
  price: number;
  msi?: boolean;
}
