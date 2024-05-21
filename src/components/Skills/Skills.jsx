import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReUsableSectionTitle from '../shared/ReUsableSectionTitle/ReUsableSectionTitle';

const Skills = () => {
    return (
        <>

            <ReUsableSectionTitle></ReUsableSectionTitle>
            {/* tab system to show skills in tab */}
            <Tabs>
                <TabList>
                    <Tab>Frontend</Tab>
                    <Tab>backend</Tab>
                </TabList>

                <TabPanel>
                    <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus accusamus in impedit recusandae placeat voluptate, dicta reprehenderit accusantium nobis harum cumque fugiat incidunt cupiditate explicabo consectetur ipsa consequatur aperiam nemo?</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dignissimos debitis deserunt nulla accusantium ad aliquid et commodi iure soluta obcaecati, laborum corporis animi. Non iure voluptates voluptatem, saepe commodi eum et sed culpa fuga sint, a maxime minus ea amet quae quaerat sit aliquam officia. Delectus maiores voluptate doloremque suscipit eaque nobis a reiciendis cum laudantium aspernatur vitae accusamus quas debitis sequi velit soluta perferendis ut, libero odit repellat impedit accusantium voluptas hic eius. Tempore nam alias dolore! Nobis!</h2>
                </TabPanel>
            </Tabs>
        </>
    );
};

export default Skills;