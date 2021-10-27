import "./followersColumn.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser, faUsers } from "@fortawesome/free-solid-svg-icons";
export default function FollowersColumn() {
  return (
    <div className="followersColumn">
      <div className="row">
        <div className="iconWrapper">
          <FontAwesomeIcon icon={faHouseUser} className="icon" />
        </div>
        <span>For You</span>
      </div>{" "}
      <div className="row">
        <div className="iconWrapper">
          <FontAwesomeIcon icon={faUsers} className="icon" />
        </div>
        <span>Following</span>
      </div>
    </div>
  );
}
