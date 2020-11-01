import React, { ReactElement } from "react";
import { Row, Col } from "reactstrap";
import HomeCarousel from "../components/HomeCarousel";
import NavMenu from "../components/NavMenu";
import {
  PageContainer,
  PageHeader,
  PageContentContainer,
  PageContent,
  PageSide,
} from "../components/Page";
import Head from "next/head";

export default function Home(): ReactElement {
  return (
    <PageContainer>
      <Head>
        <title>Plantas MJ</title>
      </Head>
      <PageHeader />
      <PageContentContainer>
        <NavMenu />
        <HomeCarousel />
        <Row>
          <Col md="8">
            <PageContent>
              <img src="/images/banner.jpg" alt="" width="100%" />
            </PageContent>
          </Col>
          <Col md="4">
            <PageSide>
              <h4>Informações</h4>
              <hr />
              <p>Whats: (11) 97465-0403 / Tel: 4678-8243</p>
              <p>
                Rua Manoel de Abreu, 472 - Vila Margarida - Ferraz de
                Vasconcelos - SP - CEP: 08543-350
              </p>
            </PageSide>
          </Col>
        </Row>
      </PageContentContainer>
    </PageContainer>
  );
}
