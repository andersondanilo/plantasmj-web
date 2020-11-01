import React, { ReactElement } from "react";
import NavMenu from "../components/NavMenu";
import {
  PageContainer,
  PageHeader,
  PageContentContainer,
  PageContent,
} from "../components/Page";
import Head from "next/head";
import { getCategories, getProducts } from "../services/ApiService";
import { ICategory, IProduct } from "../services/types";
import { GetStaticProps } from "next";
import { zipObject } from "lodash";

type Props = {
  categories: Array<ICategory>;
  productsByCategory: Record<string, Array<IProduct>>;
};

export default function Products(props: Props): ReactElement {
  return (
    <PageContainer>
      <Head>
        <title>Plantas MJ - Produtos</title>
      </Head>
      <PageHeader />
      <PageContentContainer>
        <NavMenu />
        <PageContent>
          {props.categories.map((category: ICategory) => {
            return <h5 key={category.id}>{category.name}</h5>;
          })}
        </PageContent>
      </PageContentContainer>
    </PageContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const categories = await getCategories();

  const keys = categories.map((category: ICategory) => {
    return category.id;
  });

  const values = await Promise.all(
    categories.map((category: ICategory) => {
      return getProducts(category.id);
    })
  );

  const productsByCategory: Record<string, Array<IProduct>> = zipObject(
    keys,
    values
  );

  return {
    props: {
      categories,
      productsByCategory,
    },
  };
};
