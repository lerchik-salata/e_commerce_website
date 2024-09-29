import { useEffect, useState } from 'react';
import { productApi } from '../../api';
import { Product } from '../../model';
import { ProductsList } from '../ProductsList';

export const ProductsContainer = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [limit, setLimit] = useState(20);
    const [skip, setSkip] = useState(0);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await productApi.getProducts(limit, skip);
            console.log(response);
            setProducts(response.products);
            setLoading(false);
        };

        fetchProducts();
    }, [limit, skip]);

    const handleLoadMore = () => {
        setSkip(skip + limit);
    };

    return (
        <div>
            {loading && <p>Loading...</p>}
            <ProductsList products={products}/>
            <button 
                onClick={handleLoadMore}
                className="my-4 bg-pink-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-pink-600 transition duration-300"
            >
                Load more
            </button>
        </div>
    );
};
