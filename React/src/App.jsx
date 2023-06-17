import MyBio from "./MyBio";
import Heading from "./Heading";

export default function App(){
  return (
    <>
    <Heading text="Welcome"/>
    <MyBio  num={7} />
    <MyBio   />
    <MyBio  num={7} />
    <MyBio   />
    </>
  );
}
