
import "./Video.css";
import PlayVideo from '../../Components/PlayVideo/Playavideo'
import Recommended from '../../Recommend/Recomend';
import { useParams } from "react-router-dom";
function Video() {
  const { videoId, categoryId } = useParams();
  return (
    <div className="play-container">
      <PlayVideo videoId={videoId} />
      <Recommended categoryId={categoryId} />
    </div>
  );
}

export default Video;
