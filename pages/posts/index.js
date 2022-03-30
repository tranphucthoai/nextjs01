import React from "react";
import { PostHorizontalNormal } from "../../components";
import { postsApi } from "./../api";
import styles from "../../styles/Posts.module.css";

export const getStaticProps = async () => {
  const { data } = await postsApi.getAll({
    _limit: 10,
  });

  return {
    props: {
      data,
    },
  };
};

const Posts = ({ data }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.posts}>
          {data?.map((dataItem, index) => (
            <div className={styles.post__item} key={dataItem.id || index}>
              <PostHorizontalNormal data={dataItem} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Posts;
