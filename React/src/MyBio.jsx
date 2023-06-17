export default function MyBio({num="No Lucky Number"}){
    const num1=Math.floor(Math.random()*5)+1;
    const num2=Math.floor(Math.random()*5)+1;
    const style ={
        color:num1===num2 ?  "Green ":"Red"};
    

const styles ={color :"Red" }

    return(
        <>
        <div class="CDAC" style={style}>

<h3>Number 1 is :{num1}</h3>

<h3>Number 2 is :{num2}</h3>
<hr />
            </div>
        {/* <div className="Bio" style={styles}>
        <h1 >My lucky Number is {num} </h1>
        </div> */}
        </>
    );

}
