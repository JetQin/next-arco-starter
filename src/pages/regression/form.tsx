import React from 'react';
import {
  Form,
  Input,
  Button,
  Grid,
} from '@arco-design/web-react';
import locale from './locale';
import useLocale from '@/utils/useLocale';
import { IconRefresh, IconSearch, IconImport, IconExport, IconThunderbolt } from '@arco-design/web-react/icon';
import styles from './style/index.module.less';

const { Row, Col } = Grid;
const { useForm } = Form;

function SearchForm(props: {
  onSearch: (values: Record<string, any>) => void;
}) {

  const t = useLocale(locale);
  const [form] = useForm();

  const handleSubmit = () => {
    const values = form.getFieldsValue();
    props.onSearch(values);
  };

  const handleReset = () => {
    form.resetFields();
    props.onSearch({});
  };

  return (
    <div className={styles['search-form-wrapper']}>
      <Form
        form={form}
        className={styles['search-form']}
        labelAlign="left"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 19 }}
      >
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item label={t['searchTable.columns.id']} field="id">
              <Input placeholder={t['searchForm.id.placeholder']} allowClear />
            </Form.Item>
          </Col>
          <Col span={16}>
            <Button style={{ marginRight: 24 }} type="primary" icon={<IconSearch /> } onClick={handleSubmit}>
              {t['searchTable.form.search']}
            </Button>
            <Button style={{ marginRight: 24 }} type="secondary" icon={<IconThunderbolt /> } onClick={handleSubmit}>
              {t['searchTable.form.regression']}
            </Button>
            <Button style={{ marginRight: 24 }} status='success' icon={<IconExport /> } onClick={handleSubmit}>
              {t['searchTable.form.export']}
            </Button>
            <Button style={{ marginRight: 24 }} status='danger' icon={<IconImport /> } onClick={handleSubmit}>
              {t['searchTable.form.import']}
            </Button>
            <Button icon={<IconRefresh />} onClick={handleReset}>
              {t['searchTable.form.reset']}
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default SearchForm;
