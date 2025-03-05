function FavoriteRest({ favorites, onRemoveFavorite }) {
    return (
      <div className="favorite-list">
        <h2>❤️ 내가 찜한 맛집</h2>
        {favorites.length === 0 ? (
          <p>찜한 맛집이 없습니다.</p>
        ) : (
          <ul>
            {favorites.map((rest) => (
              <li key={rest.id} className="favorite-item">
                <img src={`http://localhost:3000/${rest.image.src}`} alt={rest.image.alt} className="favorite-image" />
                <div className="favorite-info">
                  <h3>{rest.title}</h3>
                  <p>{rest.description}</p>
                  <button className="remove-btn" onClick={() => onRemoveFavorite(rest.id)}>🗑 삭제</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  
  export default FavoriteRest;