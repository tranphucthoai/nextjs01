import React from "react";
import { useRouter } from "next/router";
import { postsApi } from "../api";

export const getStaticPaths = async (context) => {
  const data = await postsApi.getAll();

  const paths = data.map((dataItem) => {
    return {
      params: {
        id: dataItem.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await postsApi.get(id);

  return {
    props: {
      data,
    },
  };
};
const Single = ({ data }) => {
  console.log("data", data);

  return (
    <section>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
    </section>
  );
};

export default Single;
