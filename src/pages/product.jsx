import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Nike Air Max",
    price: "$ 198.00",
    image: "/images/product-1.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aut eius consectetur, porro nesciunt doloribus laborum voluptatum ab necessitatibus cupiditate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aut eius consectetur, porro nesciunt doloribus laborum voluptatum ab necessitatibus cupiditate",
  },
  {
    id: 2,
    name: "Adidas Air Max",
    price: "$ 218.00",
    image: "/images/product-2.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aut eius consectetur, porro nesciunt doloribus laborum voluptatum ab necessitatibus cupiditate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aut eius consectetur, porro nesciunt doloribus laborum voluptatum ab necessitatibus cupiditate",
  },
  {
    id: 3,
    name: "Jordan Air Max",
    price: "$ 335.00",
    image: "/images/product-3.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aut eius consectetur, porro nesciunt doloribus laborum voluptatum ab necessitatibus cupiditate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aut eius consectetur, porro nesciunt doloribus laborum voluptatum ab necessitatibus cupiditate",
  },
];

const email = localStorage.getItem("email");

function ProductPage() {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  return (
    <>
      <div className="bg-indigo-600 text-white h-10 justify-end p-10 gap-10 items-center flex ">
        {email}
        <Button classname="bg-slate-800" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center">
        <div className="w-3/4 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer price={product.price} />
            </CardProduct>
          ))}
        </div>
        <div className="w-1/4">
          <h1 className="font-bold text-xl text-slate-800">Cart</h1>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
