/*
Using Javascript, because the .ts file extension for Typescript got the server confused about MIME types.
 */

function createTestRectangle(id, top, left, height, width){
    const R = document.createElement("div");
    R.setAttribute("position","absolute");
    R.setAttribute("top",top);
    R.setAttribute("left", left);
    R.setAttribute("height", height);
    R.setAttribute("width",width);
    return R;
}

function CreateTestRectangles(root){
    const R1 = createTestRectangle("R1",10,10,10,10);
    root.appendChild(R1);
}
