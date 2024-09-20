/* eslint-disable react/prop-types */
import  { useEffect, useState } from "react";
import "./Recommend.css";
import { API_KEY, value_convertor } from '../data';
import { Link } from "react-router-dom";

function Recommended({ categoryId }) {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchApiData = async () => {
    const relatedVideoData_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=GH&videoCategoryId=${categoryId}&key=${API_KEY}`;


      await fetch(relatedVideoData_url)
        .then((res) => res.json())
        .then((data) => setApiData(data.items));
    };

    fetchApiData();
  }, [categoryId]);

  return (
    <div className="recommended">
      {apiData.map((item, index) => {
        return (
          <Link
            to={`/video/${item.snippet.categoryId}/${item.id}`}
            key={index}
            className="side-video-list"
          >
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="vid-info">
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{value_convertor(item.statistics.viewCount)}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Recommended;
