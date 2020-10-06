import React from "react";
import firstAdData from "../ads";
import AdCard from "../components/AdCard";
import "./home.css";

function Home() {
  console.log(firstAdData);
  return (
    <div className='container'>
      <div className='AdCard_container'>
        {firstAdData.map((Ad, key) => (
          <AdCard Ad={Ad} key={key} />
        ))}
      </div>
      {/* Ad Posters */}
      {/* | 4 posters Grid */}
      {/* | Single Poster */}
      {/* | Carousel Ad Poster */}
      {/* Grids */}
      {/* | Top wear */}
      {/* | Bottom wear */}
      {/* Browse Trending */}
      {/* Essentials */}
      {/* Accessories */}
    </div>
  );
}

export default Home;
