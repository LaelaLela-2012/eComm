import Card from '../Card/Card';
import './FeaturedProducts.scss'

const FeaturedProducts = ({type}) => {

        const data = [
        {
            id: 1,
            img:"https://images.pexels.com/photos/5885841/pexels-photo-5885841.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/5886045/pexels-photo-5886045.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,

        },
        {
            id: 2,
            img:"https://images.pexels.com/photos/158648/girl-coat-old-coat-brown-coat-158648.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Coat",
            isNew: true,
            oldPrice: 19,
            price: 12,

        },
        {
            id: 3,
            img:"https://images.pexels.com/photos/1007018/pexels-photo-1007018.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Skirt",
            oldPrice: 19,
            price: 12,

        },
        {
            id: 4,
            img:"https://images.pexels.com/photos/33622/fashion-model-beach-hat.jpg",
            title: "hat",
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