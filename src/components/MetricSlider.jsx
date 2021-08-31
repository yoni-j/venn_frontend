import React from 'react'
import { Typography, Slider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      width: 500,
    },
  });

function valuetext(value) {
return `${value}`;
}

function MetricSlider(props) {
    const [value, setValue] = React.useState([parseInt(props.min), parseInt(props.max)]);
    const classes = useStyles();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={classes.root}>
        <Typography color="textSecondary" variant="h6" align="left" id="range-slider" gutterBottom>
            {props.label}
        </Typography>
        <Slider
            value={value}
            name={props.name}
            min={parseInt(props.min)}
            max={parseInt(props.max)}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
        />
        </div>
    )
}

export default MetricSlider;


