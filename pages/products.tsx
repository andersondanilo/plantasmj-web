import React, { ReactElement } from "react";
import NavMenu from "../components/NavMenu";
import {
  PageContainer,
  PageHeader,
  PageContentContainer,
  PageContent,
} from "../components/Page";
import Head from "next/head";

export default function Products(): ReactElement {
  return (
    <PageContainer>
      <Head>
        <title>Plantas MJ - Produtos</title>
      </Head>
      <PageHeader />
      <PageContentContainer>
        <NavMenu />
        <PageContent>Produtos</PageContent>
      </PageContentContainer>
    </PageContainer>
  );
}
