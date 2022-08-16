import Display from './AdminPanel/Display'
import App from './AdminPanel/src/App'
// =======
import React, { useState } from 'react';
import Tabs, { tabsClasses }  from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';
import AddTeacher from './AdminPanel/AddTeacher';
import AddStudent from './AdminPanel/AddStudent'
import AddParent from './AdminPanel/AddParent'

//function that holds properties of the tab panel
function TabPanel(props) {

  //properties
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

//property types of the tab panel
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

//function for full view of the tabs
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

// >>>>>>> Stashed changes

const BoardAdmin = () => {

  //themes
  const theme = useTheme();

  //values of the properties to handle change
  const [value, setValue] = useState(0);

  //envent change handle of th values
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //index change handler
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
         
    
    <div >

      {/* box that hold views of admin panel board  */}
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>

      {/* app bar for admin */}
      <AppBar position="static">
      <Tabs centered
        value={value}
        onChange={handleChange}
        variant="scrollable"
        indicatorColor="secondary"
        textColor="inherit"
        allowScrollButtonsMobile
        scrollButtons="auto"
        aria-label="scrollable force tabs"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 1 },
          },
        }}
      >

      {/* app bar titles */}
        <Tab label="Add Teacher" {...a11yProps(0)} />
        <Tab label="Add Student" {...a11yProps(1)} />
        <Tab label="Add Parent" {...a11yProps(2)} />
        <Tab label="School Details" {...a11yProps(3)} />
      
        
      </Tabs>
      </AppBar>

      {/* app bar titles contents they swipe their views to share the working area */}
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >

        {/* content components of the admin board */}
        <TabPanel value={value} index={0} dir={theme.direction}>
            <AddTeacher/>
           
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <Display />
        <AddStudent />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <AddParent />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
        <App />
        </TabPanel>
      </SwipeableViews>

    </Box>
    </div>
  );
}

export default BoardAdmin;
