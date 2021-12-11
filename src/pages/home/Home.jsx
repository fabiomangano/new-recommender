import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Recommendation from '../../components/recommendation/Recommendation';
import style from './Home.module.css';
import 'react-tabs/style/react-tabs.css';

const Home = ({ match }) => {
  const [tabIndex, setTabIndex] = React.useState(0);
  return (
    <div>
      <h1 style={{ fontSize: '30px', padding: '20px' }}>Recommender Console</h1>
      <div className={style.container}>
        <Tabs
          selectedIndex={tabIndex}
          onSelect={(tabIndex) => setTabIndex(tabIndex)}
        >
          <TabList>
            <Tab>Schedule</Tab>
            <Tab>Fallback</Tab>
          </TabList>
          <TabPanel>
            <Recommendation match={match} />
          </TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
