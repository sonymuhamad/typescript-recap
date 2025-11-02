enum Direction {
    UP = "UP",
    DOWN = "DOWN"
}

export function convert(s: string, numRows: number): string {
    if (numRows === 1){
        return s
    }

    const arrStr = new Array<string[]>(numRows)

    const colLength = Math.ceil(s.length / numRows) + 1
    for(let i = 0; i<arrStr.length; i++){
        arrStr[i] = new Array(colLength).fill("")
    }

    let direction:Direction = Direction.DOWN

    let col = 0
    let row = 0

    for (let i = 0; i < s.length; i++){
        arrStr[row]![col] = s[i]!
        if (direction === Direction.DOWN && row + 1 === numRows ){
            col++
            row--
            
            direction = Direction.UP

            continue
        }

        if (direction === Direction.UP && (row - 1) <= 0){
            if (row - 1 < 0){
                row++
            }else{
                col++
                row = 0
            }

            direction = Direction.DOWN

            continue
        }

        switch(direction){
            case Direction.DOWN:
            row++

            break
            case Direction.UP:
            row--
            break
        }
    }

    let result = ""

    arrStr.forEach(arr =>{
        arr.forEach(str=>{
            result += str
        })
    })

    return result
};