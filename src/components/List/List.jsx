import './List.scss';
import Card from '../Card/Card';

const List = () => {

        const data = [
        {
            id: 1,
            img:"https://images.pexels.com/photos/6532131/pexels-photo-6532131.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/6532099/pexels-photo-6532099.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,

        },
        {
            id: 2,
            img:"https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Coat",
            isNew: true,
            oldPrice: 19,
            price: 12,

        },
        {
            id: 3,
            img:"https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Skirt",
            oldPrice: 19,
            price: 12,

        },
        {
            id: 4,
            img:"https://images.pexels.com/photos/4966995/pexels-photo-4966995.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "hat",
            oldPrice: 19,
            price: 12,

            },
        {
            id: 5,
            img:"https://images.pexels.com/photos/5885841/pexels-photo-5885841.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/5886045/pexels-photo-5886045.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,

        },
        {
            id: 6,
            img:"https://images.pexels.com/photos/158648/girl-coat-old-coat-brown-coat-158648.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Coat",
            isNew: true,
            oldPrice: 19,
            price: 12,

        },
        {
            id: 7,
            img:"https://images.pexels.com/photos/1007018/pexels-photo-1007018.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Skirt",
            oldPrice: 19,
            price: 12,

        },
        {
            id: 8,
            img:"https://images.pexels.com/photos/33622/fashion-model-beach-hat.jpg",
            title: "hat",
            oldPrice: 19,
            price: 12,

            },
        {
            id: 9,
            img:"https://images.pexels.com/photos/7881290/pexels-photo-7881290.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Long Sleeve",
            oldPrice: 19,
            price: 12,

        },
    ];

  return (
      <div className='list'>
          {data?.map(item => (
              <Card item={item} key={item.id} />
          ))}
      </div>
  )
}

export default List