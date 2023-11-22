import React from 'react';
import { Button, Typography } from '@arco-design/web-react';
import IconText from './icons/text.svg';
import IconHorizontalVideo from './icons/horizontal.svg';
import IconVerticalVideo from './icons/vertical.svg';

const { Text } = Typography;


const ContentIcon = [
  <IconText key={0} />,
  <IconHorizontalVideo key={1} />,
  <IconVerticalVideo key={2} />,
];

export function getColumns(
  t: any,
  callback: (record: Record<string, any>, type: string) => Promise<void>
) {
  return [
    {
      title: t['searchTable.columns.id'],
      dataIndex: 'id',
      render: (value) => <Text copyable>{value}</Text>,
    },
    {
      title: t['searchTable.columns.name'],
      dataIndex: 'name',
    },
    {
      title: t['searchTable.columns.createdTime'],
      dataIndex: 'createdTime',
    },
    {
      title: t['searchTable.columns.type'],
      dataIndex: 'type',
    },
    {
      title: t['searchTable.columns.size'],
      dataIndex: 'size',
    },
    {
      title: t['searchTable.columns.uploaderId'],
      dataIndex: 'uploaderId',
    },
    {
      title: t['searchTable.columns.uploaderName'],
      dataIndex: 'uploaderName',
    },
    {
      title: t['searchTable.columns.location'],
      dataIndex: 'location',
    },
    {
      title: t['searchTable.columns.operations'],
      dataIndex: 'operations',
      headerCellStyle: { paddingLeft: '15px' },
      render: (_, record) => (
        <Button
          type="text"
          size="small"
          onClick={() => callback(record, 'view')}
        >
          {t['searchTable.columns.operations.view']}
        </Button>
      ),
    },
  ];
}

export default () => ContentIcon;