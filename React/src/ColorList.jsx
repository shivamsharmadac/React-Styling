export default function ColorList({colors}){
    // const element=[ <><p>Hello !!</p><h1>Enter Your Name</h1> <input type="text" /></>];
const lis =colors.map((color)  => <li>{color}</li>);
    return(
        <>
        <p>Color List</p>
     
      {/* {element} */}
     {lis}
        </>
    );

}
