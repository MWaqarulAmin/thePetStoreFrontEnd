// app/shopByPetPage/[petId].js

import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';

const ShopByPetPage = () => {
  const router = useRouter();
  const { petId } = router.query;

  // You can fetch the specific pet data using the petId and display it here

  return (
    <div>
      <h1>Shop by Pet Page</h1>
      <p>Pet ID: {petId}</p>
      {/* You can display the specific pet's data, including its image */}
      <Image
       src={`http://localhost:3000/images/pets/${petId}.png`}// Replace with the correct URL for your images
        alt={`Pet ${petId}`}
        width={437}
        height={355}
      />
    </div>
  );
};

export default ShopByPetPage;

