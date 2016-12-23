/**
 * Created by shikh on 16-Dec-16.
 */

var current = "body1";
var description = document.getElementById("description");
loadBody1();


function remove(mesh) {
    scene.remove(mesh);
}

function load() {
    if (current === "body1") {
        loadBody2();
        current = "body2";
    } else if (current === "body2") {
        loadBody3();
        current = "body3";
    } else if (current === "body3") {
        loadBody4();
        current = "body4";
    } else if (current === "body4") {
        loadBody1();
        current = "body1";
    }
}

function previousload() {
    if (current === "body1") {
        loadBody4();
        current = "body4";
    } else if (current === "body2") {
        loadBody1();
        current = "body1";
    } else if (current === "body3") {
        loadBody2();
        current = "body2";
    } else if (current === "body4") {
        loadBody3();
        current = "body3";
    }
}


function loadBody1() {

    description.innerHTML = "Skeletal and Digestive System";

    if (body4 !== undefined) {
        remove(body4);
        console.log("body 4 is removed");
    } else {
        console.log("body 4 is not removed");
    }

    if (body2 !== undefined) {
        remove(body2);
        console.log("body 2 is removed");
    } else {
        console.log("body 2 is not removed");
    }

    loader.load("models/skeleton.dae", function (collada) {
        body1 = collada.scene;
        body1.name = "body1";
        body1.rotation.y = -1.2;
        setScale(body1, 4);
        setPosition(body1, 10, -25, 0);
        scene.add(body1);
    });
}

function loadBody2() {

    description.innerHTML = "Muscular System";

    if (body1 !== undefined) {
        remove(body1);
        console.log("body 1 is removed");
    } else {
        console.log("body 1 is not removed");
    }

    if (body3 !== undefined) {
        remove(body3);
        console.log("body 3 is removed");
    } else {
        console.log("body 3 is not removed");
    }


    loader.load("models/musb.dae", function (collada) {
        body2 = collada.scene;
        body2.name = "body2";
        setScale(body2, 0.3);
        setPosition(body2, 10, -25, 0);
        scene.add(body2);
    });
}

function loadBody3() {

    description.innerHTML = "Body without clothes";

    if (body2 !== undefined) {
        remove(body2);
        console.log("body 2 is removed");
    } else {
        console.log("body 2 is not removed");
    }

    if (body4 !== undefined) {
        remove(body4);
        console.log("body 4 is removed");
    } else {
        console.log("body 4 is not removed");
    }

    loader.load("models/standard-male-figure.dae", function (collada) {
        body3 = collada.scene;
        body3.name = "body3";
        setScale(body3, 3.5);
        setPosition(body3, 10, -25, 0);
        scene.add(body3);
    });
}

function loadBody4() {

    description.innerHTML = "Body with clothes";


    if (body3 !== undefined) {
        remove(body3);
        console.log("body 3 is removed");
    } else {
        console.log("body 3 is not removed");
    }

    if (body1 !== undefined) {
        remove(body1);
        console.log("body 1 is removed");
    } else {
        console.log("body 1 is not removed");
    }

    loader.load("models/avatar.dae", function (collada) {
        body4 = collada.scene;
        body4.name = "body";
        setScale(body4, 41);
        setPosition(body4, 10, -25, 0);
        scene.add(body4);
    });


}


function adjustZoom(event) {

    var value = Math.abs(event.target.value);
    camera.position.set(10, 10, value);

}