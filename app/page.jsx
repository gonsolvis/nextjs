import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles/Home.module.css"; // Adjust the import to match your file name

export default function Home() {
  return (
    <div className={styles.Home}>
      <div className={styles.leftside} id={styles.leftsideId}></div>
      <div className={styles.rightside}>
        <h1 className={styles["urduTitle"]}>اسکرپٹ لِٹ</h1>
        <p className={styles["p-home"]}>
          Welcome to our attempt of teaching Urdu! I am not a native speaker and
          neither is chatGpt, but we only try our best to teach for free those
          who want to learn.
        </p>
        <p className={`${styles.pHome2} hidden sm:block md:block lg:block`}>
          Click Below to choose the lessons from the different levels we have
          available!{" "}
        </p>
        <Link href="/lessons">
          <button className={styles["button-home"]}>
            <span>See the levels</span>
            <FontAwesomeIcon
              icon={faChartSimple}
              className=" text-green h-8 w-8"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}
