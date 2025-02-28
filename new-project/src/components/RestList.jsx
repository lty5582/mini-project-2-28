import React, { useEffect, useState } from "react";
import RestCard from "./RestCard";
import axios from "axios";

const RestList = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/places")
            .then((response) => {
                console.log("API 응답 데이터:", response.data);  // ✅ 디버깅용 로그 추가
                setRestaurants(response.data?.places || []);  // ✅ JSON 구조 맞춤
            })
            .catch((error) => {
                console.error("맛집 데이터를 불러오는 중 오류:", error.response ? error.response.data : error.message);
            });
    }, []);

    return (
        <div className="rest-list-container">
            <h2>맛집 목록</h2>
            <div className="rest-list">
                {restaurants.length > 0 ? (
                    restaurants.map((rest) => (
                        <RestCard 
                            key={rest.id} 
                            name={rest.title}  // ✅ JSON에서 title 사용
                            image={`http://localhost:3000/images/${rest.image.src}`}  // ✅ JSON에서 image.src 사용
                        />
                    ))
                ) : (
                    <p>맛집 데이터를 불러오는 중...</p>
                )}
            </div>
        </div>
    );
};

export default RestList;