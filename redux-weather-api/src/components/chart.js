import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';


const average = (data) => {
    return _.round(_.sum(data)/data.length);
}

const Chart = (props) => {
    return(
        <div style={{width:'180px'}}>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color}/>
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>Average: {average(props.data)} {props.units}</div>
        </div>
    );
}

export default Chart;