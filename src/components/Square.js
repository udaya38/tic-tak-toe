
const style={
  background:"lightBlue",
  fontSize:"30px",
  foneWeight:"800",
  cursor:"pointer",
  outline:"none",
  marginRight:"3px",
  marginBottom:"3px",
  border:"none",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  borderRadius:"10px",
  fontWeight:"bolder"
}
const Square=({value,onClick})=>{

return (
   <>
    <button style={style} onClick={onClick}>{value}</button>
   </>
)};


export default Square;
