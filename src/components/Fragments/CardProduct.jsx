import Button from "../Elements/Button";

function CardProduct(props) {
  const { children } = props;
  return (
    <div className="w-full max-w-sm flex flex-col justify-between mx-5 mt-20 rounded-lg bg-slate-300">
      {children}
    </div>
  );
}

const Header = (props) => {
  const { image } = props;
  return (
    <a href="#">
      <img src={image} alt="product" className="rounded-t-lg" />
    </a>
  );
};

const Body = (props) => {
  const { name, children } = props;
  return (
    <div className="px-5 py-5 h-full">
      <a href="#">
        <h2 className="font-bold text-lg">{name}</h2>
        <p className="text-sm">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price } = props;
  return (
    <div className="flex items-center justify-between px-5 py-5">
      <span className="font-bold text-lg">{price}</span>
      <Button classname="bg-green-600">Add to Cart</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
