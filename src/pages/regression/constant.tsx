import React from 'react';
import { Button, Typography } from '@arco-design/web-react';
import IconText from './icons/text.svg';
import IconHorizontalVideo from './icons/horizontal.svg';
import IconVerticalVideo from './icons/vertical.svg';

const { Text } = Typography;

export const ContentType = ['图文', '横版短视频', '竖版短视频'];
export const FilterType = ['规则筛选', '人工'];
export const Status = ['未上线', '已上线'];

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
      width: 160,
      fixed: 'left',
      render: (value) => <Text copyable>{value}</Text>,
    },
    {
      title: t['searchTable.columns.question'],
      dataIndex: 'question',
    },
    {
      title: t['searchTable.columns.answer'],
      dataIndex: 'answer',
    },
    {
      title: t['searchTable.columns.expectedAnswer'],
      dataIndex: 'expectedAnswer',
    },
    {
      title: t['searchTable.columns.policy'],
      dataIndex: 'policy',
      width: 80,
    },
    {
      title: t['searchTable.columns.score'],
      dataIndex: 'score',
      width: 80,
    },
    {
      title: t['searchTable.columns.operations'],
      dataIndex: 'operations',
      width: 160,
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