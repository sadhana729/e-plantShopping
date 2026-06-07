import React, { useState } from 'react';
import './ProductList.css';
import CartItem from './CartItem';
import { addItem } from './CartSlice';
import { useSelector, useDispatch } from 'react-redux';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", description: "Produces oxygen at night, improving air quality.", cost: "$15" },
        { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg", description: "Filters formaldehyde and xylene from the air.", cost: "$12" },
        { name: "Peace Lily", image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg", description: "Removes mold spores and purifies the air.", cost: "$18" },
        { name: "Boston Fern", image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg", description: "Adds humidity to the air and removes toxins.", cost: "$20" },
        { name: "Rubber Plant", image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg", description: "Easy to care for and effective at removing toxins.", cost: "$17" },
        { name: "Aloe Vera", image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg", description: "Purifies the air and has healing properties for skin.", cost: "$14" },
      ],
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        { name: "Lavender", image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop", description: "Calming scent, used in aromatherapy.", cost: "$20" },
        { name: "Jasmine", image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop", description: "Sweet fragrance, promotes relaxation.", cost: "$18" },
        { name: "Rosemary", image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg", description: "Invigorating scent, often used in cooking.", cost: "$15" },
        { name: "Mint", image: "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg", description: "Refreshing aroma, used in teas and cooking.", cost: "$12" },
        { name: "Lemon Balm", image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg", description: "Citrusy scent, relieves stress and promotes sleep.", cost: "$14" },
        { name: "Hyacinth", image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg", description: "Beautiful flowering plant known for its fragrant blooms.", cost: "$22" },
      ],
    },
    {
      category: "Insect Repellent Plants",
      plants: [
        { name: "Oregano", image: "https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg", description: "Contains compounds that can deter certain insects.", cost: "$10" },
        { name: "Marigold", image: "https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg", description: "Natural insect repellent, also adds color to the garden.", cost: "$8" },
        { name: "Geraniums", image: "https://cdn.pixabay.com/photo/2012/04/26/21/51/flowerpot-43270_1280.jpg", description: "Known for insect-repelling properties with a pleasant scent.", cost: "$20" },
        { name: "Basil", image: "https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg", description: "Repels flies and mosquitoes, also used in cooking.", cost: "$9" },
        { name: "Catnip", image: "https://cdn.pixabay.com/photo/2015/07/02/21/55/cat-829681_1280.jpg", description: "Repels mosquitoes and attracts cats.", cost: "$13" },
        { name: "Citronella", image: "https://cdn.pixabay.com/photo/2016/09/10/17/47/lemon-grass-1659899_1280.jpg", description: "Famous mosquito-repelling plant with a fresh citrus scent.", cost: "$16" },
      ],
    },
    {
      category: "Medicinal Plants",
      plants: [
        { name: "Echinacea", image: "https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg", description: "Boosts immune system, helps fight colds.", cost: "$16" },
        { name: "Peppermint", image: "https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg", description: "Relieves digestive issues and headaches.", cost: "$13" },
        { name: "Chamomile", image: "https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg", description: "Soothes anxiety and promotes sleep.", cost: "$15" },
        { name: "Calendula", image: "https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg", description: "Heals wounds and soothes skin irritations.", cost: "$12" },
        { name: "Valerian", image: "https://cdn.pixabay.com/photo/2015/07/10/16/04/herbs-840016_1280.jpg", description: "Promotes relaxation and improves sleep quality.", cost: "$17" },
        { name: "Feverfew", image: "https://cdn.pixabay.com/photo/2016/08/12/22/35/feverfew-1590798_1280.jpg", description: "Used to prevent migraines and reduce inflammation.", cost: "$14" },
      ],
    },
    {
      category: "Low Maintenance Plants",
      plants: [
        { name: "ZZ Plant", image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=464&auto=format&fit=crop", description: "Thrives in low light and requires minimal watering.", cost: "$25" },
        { name: "Pothos", image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg", description: "Tolerates neglect and can grow in various conditions.", cost: "$10" },
        { name: "Cast Iron Plant", image: "https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg", description: "Hardy plant that tolerates low light and neglect.", cost: "$20" },
        { name: "Succulents", image: "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg", description: "Drought-tolerant plants with unique shapes and colors.", cost: "$18" },
        { name: "Aglaonema", image: "https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg", description: "Requires minimal care and adds color to indoor spaces.", cost: "$22" },
        { name: "Dracaena", image: "https://cdn.pixabay.com/photo/2017/07/20/16/05/dracaena-2522035_1280.jpg", description: "Striking architectural plant that is very easy to care for.", cost: "$19" },
      ],
    },
  ];

  const calculateTotalQuantity = () =>
    cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem({ name: plant.name, image: plant.image, cost: plant.cost }));
    setAddedToCart((prev) => ({ ...prev, [plant.name]: true }));
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    onHomeClick();
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  return (
    <div>
      {/* Navbar */}
      <div style={{
        backgroundColor: '#4CAF50', color: '#fff', padding: '15px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontSize: '20px', position: 'sticky', top: 0, zIndex: 100,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
            alt="logo" style={{ height: '60px', width: '60px', borderRadius: '50%' }} />
          <a href="/" onClick={handleHomeClick} style={{ textDecoration: 'none' }}>
            <h3 style={{ color: 'white', margin: 0 }}>Paradise Nursery</h3>
            <i style={{ color: 'white', fontSize: '14px' }}>Where Green Meets Serenity</i>
          </a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          <a href="#" onClick={handlePlantsClick} style={{ color: 'white', fontSize: '22px', textDecoration: 'none' }}>
            Plants
          </a>
          <a href="#" onClick={handleCartClick} style={{ color: 'white', textDecoration: 'none', position: 'relative' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="48" width="48">
              <circle cx="80" cy="216" r="12" fill="white" />
              <circle cx="184" cy="216" r="12" fill="white" />
              <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
            </svg>
            {calculateTotalQuantity() > 0 && (
              <span style={{
                position: 'absolute', top: '-6px', right: '-6px',
                backgroundColor: 'red', color: 'white', borderRadius: '50%',
                width: '22px', height: '22px', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                fontSize: '13px', fontWeight: 'bold',
              }}>
                {calculateTotalQuantity()}
              </span>
            )}
          </a>
        </div>
      </div>

      {/* Main Content */}
      {!showCart ? (
        <div style={{ padding: '20px' }}>
          {plantsArray.map((category, index) => (
            <div key={index}>
              <h2 style={{ textAlign: 'center', margin: '30px 0 16px', borderBottom: '2px solid #4CAF50', paddingBottom: '8px' }}>
                {category.category}
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', marginBottom: '20px' }}>
                {category.plants.map((plant, pIndex) => (
                  <div key={pIndex} style={{
                    width: '220px', border: '1px solid #ddd', borderRadius: '8px',
                    padding: '16px', backgroundColor: '#fff', textAlign: 'center',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.08)', transition: 'transform 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <img src={plant.image} alt={plant.name}
                      style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '6px' }} />
                    <div style={{ fontWeight: 'bold', margin: '10px 0 4px', fontSize: '16px' }}>{plant.name}</div>
                    <div style={{ fontSize: '13px', color: '#666', marginBottom: '8px' }}>{plant.description}</div>
                    <div style={{ color: '#e74c3c', fontWeight: 'bold', marginBottom: '10px' }}>{plant.cost}</div>
                    <button
                      onClick={() => handleAddToCart(plant)}
                      disabled={cartItems.some((item) => item.name === plant.name) || addedToCart[plant.name]}
                      style={{
                        backgroundColor: cartItems.some((item) => item.name === plant.name) || addedToCart[plant.name] ? '#888' : '#4CAF50',
                        color: 'white', border: 'none', padding: '8px 16px',
                        borderRadius: '5px', cursor: cartItems.some((item) => item.name === plant.name) || addedToCart[plant.name] ? 'default' : 'pointer',
                        fontSize: '14px', width: '100%',
                      }}
                    >
                      {cartItems.some((item) => item.name === plant.name) || addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
