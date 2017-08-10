import React from 'react';
import { connect } from 'dva';
import MainLayout from '../../components/MainLayout/MainLayout';
import styles from './404.css';

function PageNotFound() {
  return (
    <div className={styles.normal}>
      <span>404</span>
    </div>
  );
}

PageNotFound.propTypes = {
};

export default connect()(PageNotFound);
