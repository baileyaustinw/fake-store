import { Link } from "react-router-dom";

export default function Product({ id, title, image, description, price }) {
  return (
    <>
      <div
        className="grid grid-rows-auto gap-5 rounded-2xl rounded-2xl border-2 shadow-sm/20 border-zinc-100 p-8"
        key={id}
      >
        <div className="">
          <img
            className="mb-5 mx-auto my-0 max-h-[200px]"
            src={image}
            alt={title}
          />
          <h1 className="font-bold">{title}</h1>
        </div>
        <p className="product-desc font-thin">
          {description.slice(0, 155).trim()}...
        </p>
        <div className="self-end">
          <p className="mb-3">${price}</p>
          <Link
            className="bg-green-600 px-5 py-2 text-white hover:bg-green-500 transition duration-300 ease-in-out"
            to={`${id}`}
          >
            View Product
          </Link>
        </div>
      </div>
    </>
  );
}
