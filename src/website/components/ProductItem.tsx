import { Link } from "react-router-dom";
import { formatCategoryName } from "../utils/formatCategoryName";

const ProductItem = ({
  image,
  title,
  category,
  price,
}: {
  image: string;
  title: string;
  category: string;
  price: number;
}) => {
  return (
    <div className="w-[400px] flex flex-col gap-2 justify-center max-md:w-[300px]">
      <a
        href={`${image}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-[300px] max-md:h-[200px] overflow-hidden"
      >
        <img src={`/src/assets/${image}`} alt={title} className="w-full h-full object-cover" />
      </a>
      <p className="text-black text-center text-3xl tracking-[1.02px] max-md:text-2xl">
        {title}
      </p>
      <p className="text-secondaryBrown text-lg tracking-wide text-center max-md:text-base">
        {formatCategoryName(category)}{" "}
      </p>
      <p className="text-black text-2xl text-center font-bold max-md:text-xl">
        ${price}
      </p>
      <div className="w-full flex flex-col gap-1">
        <a
          href={`${image}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-secondaryBrown text-center text-xl font-normal tracking-[0.6px] leading-[72px] w-full h-12 flex items-center justify-center max-md:text-base"
        >
          View Product
        </a>
        <Link
          to={`/product/${image}`}
          className="bg-white text-black text-center text-xl border border-[rgba(0, 0, 0, 0.40)] font-normal tracking-[0.6px] leading-[72px] w-full h-12 flex items-center justify-center max-md:text-base"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
