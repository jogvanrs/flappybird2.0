/*
Using Javascript, because the .ts file extension for Typescript got the server confused about MIME types.
 */

function createTestRectangle(id, top, left, height, width){
    const R = document.createElement("div");
    R.setAttribute("position","absolute");
}

function CreateTestRectangles(root){
    createTestRectangle("R1",10,10,10,10);
    const R1 = document.createElement("div");
    R1.setAttribute("position","absolute");
    root.appendChild(R1);
}
