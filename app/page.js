import Carousel from "@/components/carousel/page.js";
import ShopByPet from "@/components/shopByPet/page.js";
import CustomerFavorites from "@/components/customerFavorites/page.js";
import BrandsInStock from "@/components/brandsInStock/page";
import LatestProducts from "@/components/latestProducts/page";

export default function Home() {
	return (
		<>
			<Carousel />
			<ShopByPet />
			<CustomerFavorites />
			<BrandsInStock />
			<LatestProducts />
		</>
	);
}
