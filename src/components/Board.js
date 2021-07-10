import Square from './Square';
import './Board.css';
// const style={
//   width:"250px",
//   height:"250px",
//   margin:"0 auto",
//   display:"grid",
//   gridTemplate:"repeat(3, 1fr) / repeat(3, 1fr)",
//   marginTop:"50px"
// }
// const head={
//   textAlign:"center"
// }
const Board=({squares,onClick})=>{
  return(
    <>
      <div>
        <h1 className="head">Tic-Tac-Toe</h1>
        <hr/>
      </div>
      <div>
        <h2 className="head">X 😷 O</h2>
      </div>
      <div className="boardElements">
        {squares.map((square,i)=>(
          <Square key={i} value={square} onClick={()=> onClick(i)}/>
        ))}
      </div>
    </>
  )
}


export default Board;
