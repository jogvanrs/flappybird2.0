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
    const R10 = createTestRectangle("R10",0,240,40,40);
    const R11 = createTestRectangle("R11",240,240,40,40);
    const R12 = createTestRectangle("R12",60,60,160,160);
    const R13 = createTestRectangle("R13",120,320,40,200);
    const R14 = createTestRectangle("R14",40,400,200,40);
    const R15 = createTestRectangle("R15",90,370,40,40);
    const R16 = createTestRectangle("R16",90,430,40,40);
    const R17 = createTestRectangle("R17",150,370,40,40);
    const R18 = createTestRectangle("R18",150,430,40,40);
    const R19 = createTestRectangle("R19",80,360,120,120);
    const R20 = createTestRectangle("R20",240,0,40,40);
    const R21 = createTestRectangle("R21",0,0,40,40);
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
    root.appendChild(R11);
    root.appendChild(R12);
    root.appendChild(R13);
    root.appendChild(R14);
    root.appendChild(R15);
    root.appendChild(R16);
    root.appendChild(R17);
    root.appendChild(R18);
    root.appendChild(R19);
    root.appendChild(R20);
    root.appendChild(R21);
}
