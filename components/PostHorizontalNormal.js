import React from "react";
import styles from "../styles/PostHorizontalNormal.module.css";
import Image from "next/image";
import Link from "next/link";

const PostHorizontalNormal = ({ data = {} }) => {
  return (
    <article className={styles.post}>
      <div className={styles.post__thumb}>
        <a href="">
          {/* <Image
            alt=""
            src={data.thumb}
            layout="fill"
          /> */}
        </a>
      </div>
      <div>
        <div className={styles.post__title}>
          <Link href={`posts/${data.id}`}>
            <a>{data.title}</a>
          </Link>
        </div>
        {/* <div className={styles.post__des}>{data.description}</div> */}
      </div>
    </article>
  );
};

export default PostHorizontalNormal;
