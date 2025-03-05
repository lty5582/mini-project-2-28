function RestCard({ restaurant, onFavorite }) {
    //이미지 경로를 백엔드 URL과 함께 설정
    const imageUrl = `http://localhost:3000/${restaurant.image.src}`;
  
    return (
      <div className="restaurant-card">
        <img src={imageUrl} alt={restaurant.image.alt} />
        <h3>{restaurant.title}</h3>
        <p>{restaurant.description}</p>
        <p>📍 위치: {restaurant.lat}, {restaurant.lon}</p>
        <button onClick={() => onFavorite(restaurant)}>❤️ 찜하기</button>
      </div>
    );
  }
  
  export default RestCard;