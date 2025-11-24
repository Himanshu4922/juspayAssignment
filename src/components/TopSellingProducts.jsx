import { useEffect, useState } from "react";

function TopSellingProducts() {
  const [topSellingProducts, setTopSellingProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopSellingProducts = async () => {
      try {
        const response = await fetch("/topSellingProductsData.json");
        if (!response.ok) {
          throw new Error("Failed to fetch top selling products");
        }
        const data = await response.json();
        // console.log(data);
        setTopSellingProducts(data.products);
      } catch (error) {
        console.error("Error fetching top selling products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopSellingProducts();
  }, []);

  return (
    <div className="p-6 bg-card-light rounded-2xl h-full dark:bg-white/5">
      <h3 className="text-sm font-semibold text-woodsmoke-950 dark:text-white">
        TopSellingProducts
      </h3>
      <div className="mt-1 pb-6 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-woodsmoke-950/10 text-left text-xs text-woodsmoke-950/40 font-normal dark:text-white/40 dark:border-white/20">
              <th className="py-2 font-normal">Name</th>
              <th className="font-normal py-2">Price</th>
              <th className="font-normal py-2">Quantity</th>
              <th className="font-normal py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {topSellingProducts.map((product, index) => (
              <tr
                key={index}
                className="text-woodsmoke-950 leading-[18px] text-xs dark:text-white"
              >
                <td className="py-2 text-inherit">{product.name}</td>

                <td className="py-2 text-inherit">{product.price}</td>

                <td className="py-2 text-inherit">{product.quantity}</td>

                <td className=" py-2 text-inherit">{product.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TopSellingProducts;
