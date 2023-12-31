import React, { useContext } from 'react';
import dayjs from 'dayjs';
import {
  Form,
  Input,
  Select,
  Upload,
  DatePicker,
  Button,
  Grid,
} from '@arco-design/web-react';
import { GlobalContext } from '@/context';
import locale from './locale';
import useLocale from '@/utils/useLocale';
import { IconRefresh, IconSearch } from '@arco-design/web-react/icon';
import styles from './style/index.module.less';

const { Row, Col } = Grid;
const { useForm } = Form;

function SearchForm(props: {
  onSearch: (values: Record<string, any>) => void;
}) {
  const { lang } = useContext(GlobalContext);

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

  const colSpan = lang === 'zh-CN' ? 8 : 8;
  const colSpan2 = 6;

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
          <Col span={colSpan}>
            <Form.Item label={t['searchTable.columns.id']} field="id">
              <Input placeholder={t['searchForm.id.placeholder']} allowClear />
            </Form.Item>
          </Col>
          <Col span={colSpan}>
            <Form.Item label={t['searchTable.columns.name']} field="name">
              <Input
                allowClear
                placeholder={t['searchForm.name.placeholder']}
              />
            </Form.Item>
          </Col> 
          <Col span={2}>
            <Button type="primary" icon={<IconSearch />} onClick={handleSubmit}>
              {t['searchTable.form.search']}
            </Button>
          </Col>
          <Col span={4}>
            <Button icon={<IconRefresh />} onClick={handleReset}>
              {t['searchTable.form.reset']}
            </Button>
          </Col>
         
        </Row>
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item label={t['searchTable.form.policy']} field="id">
              <Select placeholder={t['searchForm.form.policy']} allowClear />
            </Form.Item>
          </Col>
          <Col span={2}>
            <Upload action='/' />
          </Col>
          <Col span={2}>
          <Button type='primary'>{t['searchTable.columns.operations.refresh']}</Button>
          </Col>
        </Row>
      </Form>
      {/* <div className={styles['right-button']}>
        <Button type="primary" icon={<IconSearch />} onClick={handleSubmit}>
          {t['searchTable.form.search']}
        </Button>
        <Button icon={<IconRefresh />} onClick={handleReset}>
          {t['searchTable.form.reset']}
        </Button>
      </div> */}
    </div>
  );
}

export default SearchForm;
