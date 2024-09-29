import { Product } from '../../model';

interface ProductsItemProps {
    product: Product; 
}

export const ProductsItem = ({ product }: ProductsItemProps) => {
    const trimmedDescription = product.description.length > 50 
        ? `${product.description.slice(0, 50)}...` 
        : product.description;

    return (
        <li key={product.id} className="bg-pink-100 shadow-md rounded-lg p-4 m-2">
            {product.images && product.images.length > 0 ? (
                <img 
                    src={product.images[0]} 
                    alt={product.title} 
                    className="w-full h-48 object-cover rounded-t-lg" 
                />
            ) : <img src="https://via.placeholder.com/300" alt="Placeholder" className="w-full h-48 object-cover rounded-t-lg" />}
            <h3 className="text-xl font-semibold mt-2 text-pink-800">{product.title}</h3>
            <p className="text-lg text-pink-600 font-bold mt-1">Price: ${product.price}</p>
            <p className="text-gray-600 mt-2">{trimmedDescription}</p> 
        </li>
    );
};
