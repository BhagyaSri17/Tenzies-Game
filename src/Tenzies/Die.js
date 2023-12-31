const Die = (props) => {
    function createDiceDots(number) {
        const dotPositionMatrix = {
          1: [[50, 50]],
          2: [[20, 20], [80, 80]],
          3: [[20, 20], [50, 50], [80, 80]],
          4: [[20, 20], [20, 80], [80, 20], [80, 80]],
          5: [[20, 20], [20, 80], [50, 50], [80, 20], [80, 80]],
          6: [[20, 20], [20, 80], [50, 20], [50, 80], [80, 20], [80, 80]],
        };
      
        let dots = [];
        for (let i = 0; i < number; i++) {
          const [left, top] = dotPositionMatrix[number][i];
          dots.push(
            <span
              className="dot"
              style={{
                '--left': `${left}%`,
                '--top': `${top}%`,
              }}
            ></span>
          );
        }
      
        return dots;
      }
      const dots = createDiceDots(props.id.value);
    return (

        <div className="diebox" style={{ backgroundColor: props.id.isHeld ? "Lightgreen" : "white" }} onClick={props.onhold}>
         <div className="dots-container">
       {dots}
     
      </div>
        </div>
    )
}
export default Die