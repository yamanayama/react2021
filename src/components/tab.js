// eslint-disable-next-line
import React, { useState, useCallback } from "react"
import styled from '@emotion/styled'
import { color, typography, breakPoint } from '../styles/constans'

const Tab = () => {
  const [openTab, setOpenTab] = useState({
    tab: 'panel1',
  });

  const handleClick = useCallback((event) => {
      // イベント発生源の要素を取得
  const element = event.currentTarget;

  // aria-controls 属性の値を取得
  const tabState = element.getAttribute('aria-controls');

    setOpenTab({
      tab: tabState,
    });
  }, []);

  return (
    <>
      <TabWrapper>
        <TabList role="tablist">
          <TabMenu role="presentation">
            <Button role="tab"
              aria-controls="panel1"
              aria-selected={openTab.tab === 'panel1'}
              onClick={handleClick}>
              タブ1
            </Button>
          </TabMenu>
          <TabMenu role="presentation">
            <Button role="tab"
              aria-controls="panel2"
              aria-selected={openTab.tab === 'panel2'}
              onClick={handleClick}>
              タブ2
            </Button>
          </TabMenu>
          <TabMenu role="presentation">
            <Button role="tab"
              aria-controls="panel3"
              aria-selected={openTab.tab === 'panel3'}
              onClick={handleClick}>
              タブ3
            </Button>
          </TabMenu>
        </TabList>
        <TabPanel
          id="panel1"
          aria-hidden={openTab.tab !== 'panel1'}>
          タブ1の中身が入ります
        </TabPanel>
        <TabPanel
          role="tabpanel"
          id="panel2"
          aria-hidden={openTab.tab !== 'panel2'}>
          タブ2の中身が入ります
        </TabPanel>
        <TabPanel
          role="tabpanel"
          id="panel3"
          aria-hidden={openTab.tab !== 'panel3'}>
          タブ3の中身が入ります
        </TabPanel>
      </TabWrapper>
    </>
  )
}

export default Tab

const TabWrapper = styled.div`
  margin: auto;
  max-width: 700px;
  width: 100%;
`

const TabList = styled.div`
  display: flex;
`

const TabMenu = styled.div`
  border-bottom: 1px solid ${color.gray[100]};
  display: block;
  font-size: ${typography.fontSize.body1}px;
  text-align: center;
  transition: all .2s ease-in-out;
  width: calc(100% / 3);
`

const Button = styled.button`
  width: 100%;
  height: height;
  padding: 8px 16px;

  &[aria-selected="true"] {
    border-bottom: 2px solid ${color.blue[600]};
    color: ${color.blue[600]};
  }
`

const TabPanel = styled.div`
  background-color: ${color.white};
  margin: auto;
  padding: 24px;

  &[aria-hidden="true"] {
    display: none;
  }

  &[aria-hidden="false"] {
    display: block;
  }
`
