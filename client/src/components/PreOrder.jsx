import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function PreOrder({ data }) {
  const flatData = data.flatMap((item) => item);
  const filterByPreOrder = flatData.filter(
    (product) => product.condition === "Preorder"
  );
  console.log("uj", filterByPreOrder);
  return (
    <>
      <div className="d-flex flex-column justify-content-center mb-4">
        <h1 className="fw-bold text-center">PREORDER</h1>
        <Link
          className="text-secondary fs-6 fw-bold text-center text-decoration-underline mb-4"
          to={`/collections`}
        >
          VIEW ALL
        </Link>
      </div>
      <div className="d-flex gap-4 overflow-x-auto overflow-y-hidden">
        {filterByPreOrder.slice(0, 4).map((product) => (
            <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </>
  );
}
