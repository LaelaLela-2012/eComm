import './Cart.scss';
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";


const Cart = () => {

  const data = [
     {
            id: 1,
            img:"https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Skirt",
             desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using contnet here',
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img:"https://images.pexels.com/photos/4966995/pexels-photo-4966995.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Long Sleeve",
            desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using contnet here',
            oldPrice: 19,
            price: 12,

            },
  ];

  return (
    <div className='cart'>
      <h1>Products in Your Cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutlinedIcon className='delete' />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <div className="button-center">
      <button>PROCEED TO CHECKOUT</button>
      <button className="reset">RESET CART</button>
      </div>
    </div>
  );
};

export default Cart;