import Card from '../Card/Card';
import './FeaturedProducts.scss'

const FeaturedProducts = ({type}) => {

    const data = [
        {
            id: 1,
            img:"https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/852860/pexels-photo-852860.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Lorem",
            isNew: true,
            oldPrice: 19,
            price: 12,

        },
        {
            id: 2,
            img:"https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Ipsum",
            isNew: true,
            oldPrice: 19,
            price: 12,

        },
        {
            id: 3,
            img:"https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Dolor",
            oldPrice: 19,
            price: 12,

        },
        {
            id: 4,
            img:"https://images.pexels.com/photos/4966995/pexels-photo-4966995.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Sit amet",
            oldPrice: 19,
            price: 12,

        },
    ];
    
  return (
      <div className='featuredProducts'>
          <div className="top">
              <h1>{type} products</h1>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
          </div>
          <div className="bottom">
              {data.map(item => (
                  <Card item={item} key={item.id} />
              ))}
          </div>
    </div>
  )
}

export default FeaturedProducts