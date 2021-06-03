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
    return R;
}

function CreateTestRectangles(root){
    const R1 = createTestRectangle("R1",40,40,40,40);
    root.appendChild(R1);
}
