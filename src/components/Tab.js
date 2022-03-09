import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';

const Tab = styled(TabUnstyled)`
  font-family: Gotham Rounded;
  font-style: normal;
  font-weight: 325;
  font-size: 12px;
  line-height: 14px;
  margin: 0.6rem 1.2rem 0.6rem 0;
  background-color: transparent;
  color: #a4a4a4;
  border: none;

  &.Mui-selected {
    color: #a4a4a4;
    font-weight: bold;
  }

  &:hover {
    color: #a4a4a4;
  }

  &.${tabUnstyledClasses.selected} {
    border-bottom: 2px solid #017189;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  padding-left: 1rem;
  padding-rigth: 1rem;
`;

const TabsList = styled(TabsListUnstyled)`
  border: none;
  padding: 0 1rem 0 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-content: flex-start;
`;

UnstyledTabsCustomized.propTypes = {
  tabs: PropTypes.object.isRequired,
  defaultValue: PropTypes.object
};

export default function UnstyledTabsCustomized({ tabs, defaultValue }) {
  return (
    <TabsUnstyled defaultValue={defaultValue || 0}>
      <TabsList>
        {tabs.map((tab, i) => (
          <Tab key={i}>{tab.title}</Tab>
        ))}
      </TabsList>
      {tabs.map((tab, i) => (
        <TabPanel key={i} value={i}>
          {tab.content}
        </TabPanel>
      ))}
    </TabsUnstyled>
  );
}
