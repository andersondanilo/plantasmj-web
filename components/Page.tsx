import React, { ReactElement } from "react";
import styles from "../styles/Page.module.scss";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

export function PageContainer(props: DivProps): ReactElement {
  return (
    <div className={styles.bodyContainer} {...props}>
      {props.children}
    </div>
  );
}

export function PageHeader(props: DivProps): ReactElement {
  return (
    <header {...props}>
      <img src="/images/logo.png" className={styles.titleLogo} />
    </header>
  );
}

export function PageContentContainer(props: DivProps): ReactElement {
  return (
    <div className={styles.contentContainer} {...props}>
      {props.children}
    </div>
  );
}

export function PageContent(props: DivProps): ReactElement {
  return (
    <div className={styles.innerContent} {...props}>
      {props.children}
    </div>
  );
}

export function PageSide(props: DivProps): ReactElement {
  return (
    <div className={styles.sideContent} {...props}>
      {props.children}
    </div>
  );
}
