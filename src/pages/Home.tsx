import React from 'react';
import '../app.scss'
import { Card, Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/languageSwitcher/languageSwitcher';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="language-switcher-container">
        <LanguageSwitcher />
      </div>
      <div className="centered">
        <Row gutter={16}>
          <Col span={8}>
            <Link to = '/layoutStyle'>
            <Card title={t('title1')} bordered={false}>
              {t('test1')}
            </Card>
            </Link>
          </Col>
          <Col span={8}>
            <Card title={t('title2')} bordered={false}>
              {t('test2')}
            </Card>
          </Col>
          <Col span={8}>
            <Card title={t('title3')} bordered={false}>
              {t('test3')}
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
