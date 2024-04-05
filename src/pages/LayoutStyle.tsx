import React, { useState } from 'react';
import '../app.scss';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/languageSwitcher/languageSwitcher';
import { Flex } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

const LayoutStyle: React.FC = () => {
  const { t } = useTranslation();
  const [isTrapezoidOnRight, setIsTrapezoidOnRight] = useState(true);
  const [isSwitched, setIsSwitched] = useState(false);
  const [isParallelogramOnRight, setIsParallelogramOnRight] = useState(true);

  const handleBox2Click = () => {
    setIsTrapezoidOnRight((prevState) => !prevState);
    setIsSwitched(!isSwitched);
  };

  const handleTriangleClick = () => {
    if (isSwitched) {
      setIsParallelogramOnRight((prevState) => !prevState);
    } else {
      setIsTrapezoidOnRight((prevState) => !prevState);
    }
  };

  return (
    <div>
      <Title level={2}>{t('titleP2')}</Title>
      <div className="language-switcher-container">
        <LanguageSwitcher />
      </div>
      <Flex vertical className="container-layout">
        <Flex justify="center">
          <div className="box" onClick={handleTriangleClick}>
            <div className="triangle1"></div>
            <div className="oval-box">{t('p1')}</div>
          </div>
          <div className="box2" style={{ marginLeft: '10px' }} onClick={handleBox2Click}>
            <div className="triangle2"></div>
            <div className="triangle3"></div>
            <div className="oval-box">{t('p2')}</div>
          </div>
          <div className="box" style={{ marginLeft: '10px' }}>
            <div className="triangle4"></div>
            <div className="oval-box">{t('p1')}</div>
          </div>
        </Flex>

        {isSwitched ? (
          <>
            <Flex justify="start" style={{ marginTop: '1rem' }}>
              <div className="box">
                <div className="rectangle"></div>
              </div>
              <div className="box" style={{ marginLeft: '10px' }}>
                <div className="circle"></div>
              </div>
              <div className="box" style={{ marginLeft: '10px' }}>
                <div className="oval"></div>
              </div>
            </Flex>
            <Flex justify="center" style={{ marginTop: '5rem' }}>
              <div className="box">
                <div className={isParallelogramOnRight ? "parallelogram" : "trapezoid"}></div>
              </div>
              <div className="box" style={{ marginLeft: '10px' }}>
                <div className={isParallelogramOnRight ? "rectangle2" : "parallelogram"}></div>
              </div>
              <div className="box" style={{ marginLeft: '10px' }}>
                <div className="parallelogram"></div>
              </div>
            </Flex>
          </>
        ) : (
          <>
            <Flex justify="center" style={{ marginTop: '5rem' }}>
              <div className="box">
                <div className={isTrapezoidOnRight ? "trapezoid" : "rectangle2"}></div>
              </div>
              <div className="box" style={{ marginLeft: '10px' }}>
                <div className={isTrapezoidOnRight ? "rectangle2" : "trapezoid"}></div>
              </div>
              <div className="box" style={{ marginLeft: '10px' }}>
                <div className="parallelogram"></div>
              </div>
            </Flex>
            <Flex justify="start" style={{ marginTop: '1rem' }}>
              <div className="box">
                <div className="rectangle"></div>
              </div>
              <div className="box" style={{ marginLeft: '10px' }}>
                <div className="circle"></div>
              </div>
              <div className="box" style={{ marginLeft: '10px' }}>
                <div className="oval"></div>
              </div>
            </Flex>
          </>
        )}
      </Flex>
    </div>
  );
};

export default LayoutStyle;
