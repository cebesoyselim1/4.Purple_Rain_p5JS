let raindrops = [];

function setup(){
    createCanvas(600,600);
    for(let ct = 0; ct < 800; ct++){
        raindrops.push(new RainDrop());
    }
}

function draw(){
    background(200);

    raindrops.forEach((raindrop) => {
        raindrop.Move();
        raindrop.Show();
    })
}