import './App.css';
import React from 'react'
import { Box, Button } from '@material-ui/core';
import  {MetricSlider, Table}  from './components'
import {getRecords} from './Api.js'


function App() {
  const [records, setRecords] = React.useState([])
  async function GetRecords(params) {
    const res = await getRecords(params);
    if (res.status===200) {
      setRecords(res.data)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const [min2000, max2000] = event.target[0].value.split(",")
    GetRecords({min2000, max2000})
  }
  return (
    <div className="App">
        <br/>
        <h1>Metric threshold</h1>
        <br/>
        <Box display="flex" justifyContent="center" alignItems="flex-start">
        <form onSubmit={handleSubmit}>
          <MetricSlider label="Total population 2000 number" name="total_population_2000_number" min="0" max="90000" />
          <MetricSlider label="Total population 2010 number" name="total_population_2010_number" min="0" max="90000" />
          <MetricSlider label="Total population change 2000-2010 number" name="total_population_change_2000_2010_number" min="0" max="90000" />
          <MetricSlider label="Total population change 2000-2010 percent" name="total_population_change_2000_2010_percent" min="0" max="100" />
          <br/>
          <Button variant="contained" type="submit" color="primary">Submit</Button>
        </form>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="flex-start">
          <Table  data={records} />
        </Box>

        
    </div>
  );
}

export default App;
