import MyBio from "./MyBio";
import Heading from "./Heading";
import ColorList from "./ColorList";

export default function App(){
  return (
    <>
    <Heading text="Welcome"/>
      <ColorList colors={["pink","Red","Blue","Green"]} />
    <MyBio  num={7} />
    <MyBio   />
    <MyBio  num={7} />
    <MyBio   />
  
   </>
    
  );
}
