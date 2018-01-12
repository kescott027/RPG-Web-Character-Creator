import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Archetype from './Archetype';
import Career from './Career';
import Skill from './Skill';
import Talents from './Talents';
import About from './About';

export default class MainPage extends React.Component {
  render() {
    return (
      <Tabs defaultIndex={3}>
    		<TabList>
    			<Tab>Archetype</Tab>
          <Tab>Career</Tab>
          <Tab>Skills</Tab>
          <Tab>Talents</Tab>
          <Tab>About</Tab>
    		</TabList>
        <TabPanel>
          <Archetype />
        </TabPanel>
        <TabPanel>
          <Career />
        </TabPanel>
        <TabPanel>
          <Skill />
        </TabPanel>
        <TabPanel>
          <Talents />
        </TabPanel>
        <TabPanel>
          <About />
        </TabPanel>
      </Tabs>
      );
  }
}
