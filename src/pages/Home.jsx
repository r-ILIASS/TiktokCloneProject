import FollowersColumn from "../components/FollowersColumn";
import "./home.scss";
export default function Home() {
  return (
    <div className="home">
      <FollowersColumn />
      <div className="feed">test</div>
      <div className="suggested-box">
        <div className="section">
          <div className="suggested">
            <h2>Suggested accounts</h2>
            <div className="break"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
