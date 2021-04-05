import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

function WhatWeDo(){
    return(
        <div className='what-sect'>
            <h2>What We Do</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt<br/> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation<br/> ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            <div className='cards'>
                <div className='row'>
                    <Card className='card-content'>
                        <CardContent>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>
                        </CardContent>
                    </Card>
                    <Card className='card-content'>
                        <CardContent>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>
                        </CardContent>
                    </Card>
                    <Card className='card-content'>
                        <CardContent>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>
                        </CardContent>
                    </Card>
                </div>
                <div className='row'>
                    <Card className='card-content'>
                        <CardContent>
                        <p >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>
                        </CardContent>
                    </Card>
                    <Card className='card-content'>
                        <CardContent>
                        <p >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>
                        </CardContent>
                    </Card>
                    <Card className='card-content'>
                        <CardContent>
                        <p >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo;