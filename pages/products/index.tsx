import Products from '../../src/components/units/product/products/Products.container';
import ProductsBest from '../../src/components/units/product/productsBest/ProductsBest.container';

export default function ProductsPage() {
	return (
		<>
			<ProductsBest></ProductsBest>
			<Products></Products>
		</>
	);
}
