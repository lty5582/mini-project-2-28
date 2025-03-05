import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import { fetchRestaurants } from "../api/api";

function RestList({ onAddFavorite }) {
  const [restaurants, setRestaurants] = useState([]);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    fetchRestaurants().then((data) => setRestaurants(data));

    // 사용자의 현재 위치 가져오기
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => console.error("❌ 위치 정보 가져오기 실패:", error),
      { enableHighAccuracy: true }
    );
  }, []);

  // 거리 계산 함수 (Haversine 공식 사용)
  const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // 지구 반지름 (단위: km)
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  // 사용자 위치가 있다면 거리순 정렬
  const sortedRestaurants = userLocation
    ? [...restaurants].sort((a, b) => 
        getDistance(userLocation.lat, userLocation.lon, a.lat, a.lon) -
        getDistance(userLocation.lat, userLocation.lon, b.lat, b.lon)
      )
    : restaurants;

  return (
    <div className="restaurant-list">
      {sortedRestaurants.map(rest => (
        <RestCard key={rest.id} restaurant={rest} onFavorite={onAddFavorite} />
      ))}
    </div>
  );
}

export default RestList;