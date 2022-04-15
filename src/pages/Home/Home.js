import React, { useEffect, useState } from "react";
import Videos from "../Videos/Videos";

const Home = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&regionCode=BD&key=AIzaSyC33lFxXeVV7ElEF6StpykSUUiLYZ40LDo"
    )
      .then((res) => res.json())
      .then((data) => setVideos(data.items));
  }, []);
  // console.log(data.items[10].snippet.title)
  return (
    <div>
      <h1 className="text-5xl text-center"> This is Home</h1>
      <div className="grid grid-cols-3 gap-4 mx-24 ">
        {videos.map((video) => (
          <Videos key={video.id} data={video.snippet}></Videos>
        ))}
      </div>
    </div>
  );
};

export default Home;
