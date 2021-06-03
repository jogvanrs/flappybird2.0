/*
Using Javascript, because the .ts file extension for Typescript got the server confused about MIME types.
 */

function createTestRectangle(id, top, left, height, width){
    const R = document.createElement("div");
    //R.setAttribute("style", "position:absolute; top:10; left:10; height:10; width:10;")
    R.style.position = "absolute";
    R.style.top = top + "px";
    R.style.left = left + "px";
    R.style.height = height + "px";
    R.style.width = width + "px";
    R.appendChild(document.createTextNode(id));
    return R;
}

function CreateTestRectangles(root){
    const R1  = createTestRectangle("R1",40,40,40,40);
    const R2  = createTestRectangle("R2",40,120,40,40);
    const R3  = createTestRectangle("R3",40,200,40,40);
    const R4  = createTestRectangle("R4",120,40,40,40);
    const R5  = createTestRectangle("R5",120,120,40,40);
    const R6  = createTestRectangle("R6",120,200,40,40);
    const R7  = createTestRectangle("R7",200,40,40,40);
    const R8  = createTestRectangle("R8",200,120,40,40);
    const R9  = createTestRectangle("R9",200,200,40,40);
    const R10 = createTestRectangle("R10",160,240,40,40);
    root.appendChild(R1);
    root.appendChild(R2);
    root.appendChild(R3);
    root.appendChild(R4);
    root.appendChild(R5);
    root.appendChild(R6);
    root.appendChild(R7);
    root.appendChild(R8);
    root.appendChild(R9);
    root.appendChild(R10);
}
