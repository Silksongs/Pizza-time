import React from "react";

import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock:React.FC = () => {
  return (
    <div className="container">
      <div className={styles.root}>
        <h1>
          <span>:(</span>
          <br />
          Ничего нету
        </h1>
        <p className={styles.description}>
          К сожалению данная страница отсутствует в нашем интернет-магазине
        </p>
      </div>
    </div>
  );
};
export default NotFoundBlock;
