import { Product } from '../../model';
import { ProductsItem } from '../ProductsItem';

interface ProductsListProps {
    products: Product[]; 
}

export const ProductsList = ({ products }: ProductsListProps) => {
    return (
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {products.map((product) => (
                <ProductsItem key={product.id} product={product} />
            ))}
        </ul>
    );
};
