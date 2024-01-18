import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

import styles from "./styles/Home.module.css"; // Adjust the import to match your file name

export default function Home() {
  return (
    <div className={styles.Home}>
      <div className={styles.leftside} id={styles.leftsideId}></div>
      <div className={styles.rightside}>
        <Image
          src="/urdulogo.png"
          alt="Scriptlit logo"
          width={200}
          height={200}
          wid
          className=" hidden  md:block lg:block"
        />

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
          <button
            type="button"
            class="text-white bg-purple hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-lg px-6 py-4 text-center inline-flex items-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
          >
            See the levels
            <FontAwesomeIcon
              icon={faChartSimple}
              className=" text-white w-6 h-6 mx-3 "
            />
          </button>
        </Link>
      </div>
    </div>
  );
}
