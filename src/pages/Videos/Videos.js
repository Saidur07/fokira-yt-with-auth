import React from "react";

const Videos = ({ data }) => {
  const { channelTitle, title, publishedAt, description, thumbnails } = data;
  console.log(data);
  return (
    <div className="bg-slate-100  flex justify-center items-center flex-col p-6 rounded-lg">
      <img src={thumbnails.high.url} alt="" className="mb-8" />
      <h1 className="text-3xl mb-4 text-left">{title}</h1> By
      <h1 className="text-2xl">{channelTitle}</h1>
    </div>
  );
};

export default Videos;
