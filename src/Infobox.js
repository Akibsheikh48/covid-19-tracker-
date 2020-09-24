
import React from 'react';
import './Infobox.css';
import { Card, CardContent, Typography } from "@material-ui/core";

function Infobox({ title, cases, active, isRed, total , ...props}) {
    return (
        <div >
            <Card onClick={props.onClick}
                    className={`infobox ${active && "infobox--selected"} ${
                    isRed && "infobox--red"
                    }`}
                >
                <CardContent>
                    <Typography className ="infobox__title" color="textSecondary">
                        {title}
                    </Typography>

                    <h2 className={`infobox__cases ${!isRed && "infobox__cases--green"}`}>

                    {cases}
                    </h2>

                    <Typography className="infobox__total" color="textSecondary">
                       <strong className="infobox__totalNo">{total}</strong>  Total
                    </Typography>
                </CardContent>
            </Card>
        </div>
    ) 
}

export default Infobox
