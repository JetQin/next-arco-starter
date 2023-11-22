import React from 'react';
import { Grid } from '@arco-design/web-react';
import Overview from './overview';
import styles from './style/index.module.less';
import './mock';

const Row = Grid.Row;
const Col = Grid.Col;

function Workplace() {
  return (
    <Row gutter={24} className={styles.content}>
      <Col xs={20} sm={20} lg={24}>
        <Overview />
      </Col>
    </Row>
  );
}

export default Workplace;
