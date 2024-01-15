import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function HeartsComp({ heartsLeft }) {
  const FIVE_HEARTS = (
    <div>
      <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
      <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
      <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
      <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
      <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
    </div>
  );

  const FOUR_HEARTS = (
    <div>
      <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
      <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
      <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
      <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
      <FontAwesomeIcon icon={faHeart} style={{ color: "#BDBDBD" }} />
    </div>
  );

  const THREE_HEARTS = (
    <div>
      <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
      <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
      <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
      <FontAwesomeIcon icon={faHeart} style={{ color: "#BDBDBD" }} />
      <FontAwesomeIcon icon={faHeart} style={{ color: "#BDBDBD" }} />
    </div>
  );

  const TWO_HEARTS = (
    <div>
      <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
      <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
      <FontAwesomeIcon icon={faHeart} style={{ color: "#BDBDBD" }} />
      <FontAwesomeIcon icon={faHeart} style={{ color: "#BDBDBD" }} />
      <FontAwesomeIcon icon={faHeart} style={{ color: "#BDBDBD" }} />
    </div>
  );

  const ONE_HEART = (
    <div>
      <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
      <FontAwesomeIcon icon={faHeart} style={{ color: "#BDBDBD" }} />
      <FontAwesomeIcon icon={faHeart} style={{ color: "#BDBDBD" }} />
      <FontAwesomeIcon icon={faHeart} style={{ color: "#BDBDBD" }} />
      <FontAwesomeIcon icon={faHeart} style={{ color: "#BDBDBD" }} />
    </div>
  );
  const NO_HEART = (
    <div>
      <FontAwesomeIcon icon={faHeart} style={{ color: "#BDBDBD" }} />
      <FontAwesomeIcon icon={faHeart} style={{ color: "#BDBDBD" }} />
      <FontAwesomeIcon icon={faHeart} style={{ color: "#BDBDBD" }} />
      <FontAwesomeIcon icon={faHeart} style={{ color: "#BDBDBD" }} />
      <FontAwesomeIcon icon={faHeart} style={{ color: "#BDBDBD" }} />
    </div>
  );

  function ShowRemainingHearts() {
    if (heartsLeft === 5) {
      return FIVE_HEARTS;
    } else if (heartsLeft === 4) {
      return FOUR_HEARTS;
    } else if (heartsLeft === 3) {
      return THREE_HEARTS;
    } else if (heartsLeft === 2) {
      return TWO_HEARTS;
    } else if (heartsLeft === 1) {
      return ONE_HEART;
    } else if (heartsLeft === 0) {
      return NO_HEART;
    }
  }

  return (
    <div className="">
      <ShowRemainingHearts />
    </div>
  );
}

export default HeartsComp;
