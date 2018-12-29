import './SeasonDisplay.css';
import React from 'react';

// This is a helper function.
const seasonConfig = {
    summer: {
        text: "Let's go to the BEACH!!!",
        iconName: 'sun'
    },
    winter: {
        text: "Brrrrrrr, it's chilly outside!",
        iconName: 'snowflake'
    }
};

// This is a helper function.
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {              //This line only handles summer months.
        return lat > 0 ? 'summer' : 'winter';  //Handles Northern Hemisphere Latitudes. This is a javaScript ternary
    } else {                                   //function. For true it will print summer,for false it will print winter.
        return lat > 0 ? 'winter' : 'summer';  //This line handles Southern Hemisphere Latitudes.
    }
};

// This is the functional component.
const SeasonDisplay = (props) => {
    // console.log(props.lat);

    const season = getSeason(props.lat, new Date().getMonth());
    // console.log(season);

    // This returns the { text, iconName } inside of it using ES2015
    const { text, iconName } = seasonConfig[season];

    // This code is redundant so we removed it and replaced it with seasonConfig above ^
    // const text = season === 'winter' ? 'Brrrrrrr, it is chilly outside!' : 'Headed to the BEACH!!!';
    // const icon = season === 'winter' ? 'snowflake' : 'sun';

    return (
        <div className={`season-display ${season}`}>
            {/* The `$ surrounding `${icon}` is creating a template string in ES2015  <i className={ `${icon} icon` }/>   
            This will take the value of whatever icon is and place it in the i tag in the div.
            ${iconName} refers to the name of the icon that we want to display and icon refers to the className */}
            <i className={`icon-left massive ${iconName} icon`} />
            <h1> {text} </h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;