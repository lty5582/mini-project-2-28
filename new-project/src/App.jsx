import { useState } from "react";
import RestList from "./components/RestList";
import FavoriteRest from "./components/FavoriteRest";
import "./styles.css"; // ✅ 스타일 적용

function App() {
  const [favorites, setFavorites] = useState([]);

  // ✅ 찜한 맛집 추가 함수 (중복 방지)
  const addFavorite = (restaurant) => {
    if (!favorites.some((fav) => fav.id === restaurant.id)) {
      setFavorites([...favorites, restaurant]);
    }
  };

  // ✅ 찜한 맛집 삭제 함수
  const removeFavorite = (id) => {
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };

  return (
    <div className="container">
      <FavoriteRest favorites={favorites} onRemoveFavorite={removeFavorite} />
      <RestList onAddFavorite={addFavorite} />
    </div>
  );
}

export default App;