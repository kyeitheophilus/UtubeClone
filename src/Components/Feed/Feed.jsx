/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import "./Feed.css";
import { value_convertor } from "../../data";
import { API_KEY } from "../../data";
import user_icon from "../../assets/Images/IMG_4925.jpg";
function Feed({ category }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error handling

  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=GH&videoCategoryId=${category}&key=${API_KEY}`;

    try {
      const response = await fetch(videoList_url);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setData(data.items);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message); // Set error message
    } finally {
      setLoading(false); // Set loading to false after fetch
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]); // Only re-fetch if category changes

  // Timer to display loading state for 4 seconds
  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false); // Stop loading after 4 seconds
      }, 7000);

      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [loading]);

  if (loading)
    return (
      <div>
        Loading...{" "}
        <img
          className="user-icon"
          src={user_icon}
          alt=""
          style={{ width: "70%" }}
        />
      </div>
    ); // Loading state
  if (error) return <div>Error: {error}</div>; // Error state

  return (
    <div className="feed">
      {data.map((item, index) => (
        <Link
          to={`video/${item.snippet.categoryId}/${item.id}`}
          key={index}
          className="card"
        >
          <img src={item.snippet.thumbnails.medium.url} alt="" />
          <h2>{item.snippet.title}</h2>
          <h3>{item.snippet.channelTitle}</h3>
          <p>
            {value_convertor(item.statistics.viewCount)} views &bull;{" "}
            {moment(item.snippet.publishedAt).fromNow()}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default Feed;
