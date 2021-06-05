// import assert from "assert";
/*
Using Javascript, because the .ts file extension for Typescript got the server confused about MIME types.
 */

function createTestRectangle(id, top, left, height, width){
    const R = document.createElement("div");
    R.style.position = "absolute";
    R.style.top = top + "px";
    R.style.left = left + "px";
    R.style.height = height + "px";
    R.style.width = width + "px";
    R.id = id;
    R.appendChild(document.createTextNode(id));
    return R;
}

// Include 'export' to run test, remove 'export' to generate TestRectangles.html.
// export function createTestRectangles(root){
// function createTestRectangles(root){
    export function createTestRectangles(root){
    const R0  = createTestRectangle("R0",40,40,40,40);
    const R1  = createTestRectangle("R1",40,120,40,40);
    const R2  = createTestRectangle("R2",40,200,40,40);
    const R3  = createTestRectangle("R3",120,40,40,40);
    const R4  = createTestRectangle("R4",120,120,40,40);
    const R5  = createTestRectangle("R5",120,200,40,40);
    const R6  = createTestRectangle("R6",200,40,40,40);
    const R7  = createTestRectangle("R7",200,120,40,40);
    const R8  = createTestRectangle("R8",200,200,40,40);
    const R9 = createTestRectangle("R9",0,240,40,40);
    const R10 = createTestRectangle("R10",240,240,40,40);
    const R11 = createTestRectangle("R11",60,60,160,160);
    const R12 = createTestRectangle("R12",120,320,40,200);
    const R13 = createTestRectangle("R13",40,400,200,40);
    const R14 = createTestRectangle("R14",90,370,40,40);
    const R15 = createTestRectangle("R15",90,430,40,40);
    const R16 = createTestRectangle("R16",150,370,40,40);
    const R17 = createTestRectangle("R17",150,430,40,40);
    const R18 = createTestRectangle("R18",80,360,120,120);
    const R19 = createTestRectangle("R19",240,0,40,40);
    const R20 = createTestRectangle("R20",0,0,40,40);
    // assert(root);
    // assert(R0);
    root.appendChild(R0);
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
}
