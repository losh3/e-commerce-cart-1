export const getProducts = async () => {
  try {
    const response = await fetch(
      "https://dummyjson.com/products?limit=20&skip=40&select=images,title,price"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
