import React from 'react'

let ContentComponent = ({x}) =>{

    let s = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim consequatur vel, voluptates in eligendi voluptas sit totam numquam dignissimos possimus velit, neque ipsum voluptatibus? Ea officia cum quia quo incidunt.'

    let txt = (x)=>{
        console.log(x);
        return x ? 'hjdbrfvjnnrln' : s;
        
    }

    return(
        <div>
            {JSON.stringify(x)}
            <br/>
            {txt(x)}
            <p>hj</p>
        </div>
    );

}
export default ContentComponent;

