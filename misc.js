/*Include css*/
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'style.css';
document.head.appendChild(link);

function createContent(path,cost,name,num){
    const newContainer = document.createElement('a');
    newContainer.className = "image-container";
    newContainer.href = "https://youtu.be/xvFZjo5PgG0?si=Xzr1TI-aQQYIYt8f";
    newContainer.target = 'blank';

    const newImg = document.createElement('img');
    newImg.src = path;
    newContainer.appendChild(newImg);

    const newCost = document.createElement('p');
    const newBold = document.createElement('b');
    newCost.textContent = cost;
    newCost.id = "contentCost";
    newBold.appendChild(newCost);
    newContainer.appendChild(newBold);

    const newName = document.createElement('p');
    newName.id = "contentName";
    newName.textContent = name;
    newContainer.appendChild(newName);
    
    const parentDiv = document.querySelectorAll(`.content`); // Select the div by class
    parentDiv[num-1].appendChild(newContainer); // Append the parent div if the target class is found
}