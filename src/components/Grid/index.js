import React from 'react';

const stylesMarketplace = {
    display: 'grid',
    width: '90%',
    gridTemplateColumns: '320px 320px 320px',
    gridColumnGap: '20px',
    margin: 'auto',
    gridTemplateRows: '320px 320px',
    gridRowsGap: '20px',
    backgroundColor: '',
    justifyContent: 'center'
}


export function Grid(props) {

    return <div style={stylesMarketplace}>
        {
            props.data.map((item) => {
            return <div>{item.title}</div>
            })
            <img 'cubos.png'>
        }
    </div>
}