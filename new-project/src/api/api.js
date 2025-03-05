import axios from "axios";

const API_BASE_URL = "http://localhost:3000"; // 📌 백엔드 서버 주소 수정

// 맛집 데이터 가져오기
export const fetchRestaurants = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/places`);
    return response.data.places;
  } catch (error) {
    console.error("❌ API 요청 실패:", error);
    return [];
  }
};