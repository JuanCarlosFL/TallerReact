import React from 'react';
import { Box, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useStyles } from './image-list.styles';
import { PictureInfo } from './api';
import { AnimalsComponent } from './components/animals.component';

interface Props {
    animals: PictureInfo[];
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
  }
  
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index: any) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export const ImageListComponent: React.FC<Props> = props => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const {animals} = props;

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
      setValue(newValue);
    };

    return(
        <>
            <Typography variant="h5" className={classes.centered}>
                Lista de Animales
            </Typography>
            <Paper className={classes.tabs}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Perros" {...a11yProps(0)} />
                    <Tab label="Gatos" {...a11yProps(1)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <AnimalsComponent animals={animals.filter(animal => animal.breed === "dog")} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <AnimalsComponent animals={animals.filter(animal => animal.breed === "cat")} />
                </TabPanel>
            </Paper>
        </>
    )
}