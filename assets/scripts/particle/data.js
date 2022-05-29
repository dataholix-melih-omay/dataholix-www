// import { swarmBackground } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'
import { swarmBackground } from '/dataholix-www/assets/scripts/particle/threejs-toys.module.cdn.min.js';

const bg = swarmBackground({
    el: document.getElementById('about'),
    eventsEl: undefined,
    gpgpuSize: 256,
    color: [Math.random() * 0xffffff, Math.random() * 0xffffff],
    geometry: 'default'
});

bg.three.camera.position.set(0, 0, 200);
// https://stackoverflow.com/questions/27410219/orbitcontrols-can-i-enable-disable-zooming-dynamicall
// https://github.com/klevron/threejs-toys/
// https://davidwalsh.name/css-variables-javascript
document.body.addEventListener('click', () => {
    bg.setColors([
        Math.random() * 0xffffff,
        Math.random() * 0xffffff,
    ]);
});
