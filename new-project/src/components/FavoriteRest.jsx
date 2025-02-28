import React, { useEffect, useState } from "react";
import RestCard from "./RestCard";
import axios from "axios";

const FavoriteRest = () => {
    const [favoriteRest, setFavoriteRest] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/places")
            .then((response) => {
                setFavoriteRest(response.data);
            })
            .catch((error) => {
                console.error("맛집 데이터를 불러오는 중 오류 발생:", error);
            });
    }, []);

    return (
        <div className="favorite-rest">
            <h2>찜한 맛집</h2>
            <div className="rest-list">
                {favoriteRest.length > 0 ? (
                    favoriteRest.map((rest, index) => (
                        <RestCard 
                            key={rest.id} 
                            name={rest.title} 
                            image={`http://localhost:3000/images/${rest.image.src}`}
                            address={rest.description} 
                        />
                    ))
                ) : (
                    <p>찜한 맛집이 없습니다.</p>
                )}
            </div>
        </div>
    );
};

export default FavoriteRest;