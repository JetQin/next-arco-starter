import React from 'react';
import { IconSend } from '@arco-design/web-react/icon';
import { Button, Grid, Input, Typography, Card } from '@arco-design/web-react';

const TextArea = Input.TextArea;
const Row = Grid.Row;
const Col = Grid.Col;

function ChatManager() {
  return (
    <div>
      <Card style={{ height: '80vh' }}>
        <Typography.Title heading={6}>
          This is a very basic and simple page
        </Typography.Title>
        <Row className='grid-demo' style={{ marginBottom: 16 }}>
          <Col span={18}>
            <TextArea
              placeholder='Please enter ...'
              defaultValue='This is the contents of the textarea. '
              style={{ width: 760 }}
            />
          </Col>
          <Col span={6}>
            <Button shape='circle' type='primary' icon={<IconSend />} />
          </Col>
        </Row>
      </Card>
     
    </div>
  );
}

export default ChatManager;
