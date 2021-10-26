import FollowersColumn from "../components/FollowersColumn";
import "./home.scss";
export default function Home() {
  return (
    <div className="home">
      <FollowersColumn />
      <div className="feed">feed</div>
      <div className="suggested-box">suggested box</div>
    </div>
  );
}
