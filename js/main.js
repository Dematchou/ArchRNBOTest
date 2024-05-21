import * as THREE from 'three';
//import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );



const renderer = new THREE.WebGLRenderer( { alpha: true, antialias: true} ); 
//renderer.setClearAlpha = 1;
renderer.setClearColorHex = (0xFAA700, 1)
const docCanvas = document.getElementById("threeCanvas")
renderer.setSize( (window.innerWidth/3), (window.innerHeight/3) );
//renderer.setSize(width = 120,height = 90);
//document.body.appendChild( renderer.domElement );
docCanvas.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
const cube = new THREE.Mesh( geometry, material );

const wireframe = new THREE.WireframeGeometry( geometry );

const line = new THREE.LineSegments( wireframe );
line.material.depthTest = false;
line.material.opacity = 1.;
line.material.transparent = true;
line.material.color = ( {color: 0x00ff00})

scene.add( line );


const geometryPlane = new THREE.PlaneGeometry( 1, 1, 1 );
const materialB = new THREE.MeshBasicMaterial( { color: 0x000000 } );
const plane2 = new THREE.Mesh( geometryPlane, materialB );
//scene.add( plane2 );

camera.position.z = 1.5;

function animate() {
	requestAnimationFrame( animate );

	line.rotation.x += 0.01;
	line.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();



/* import * as THREE from 'three';

			import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
			import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

			let camera, scene, renderer;

			let object;

			init();


			function init() {

				camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 20 );
				camera.position.z = 2.5;

				// scene

				scene = new THREE.Scene();

				const ambientLight = new THREE.AmbientLight( 0xffffff );
				scene.add( ambientLight );

				const pointLight = new THREE.PointLight( 0xffffff, 15 );
				camera.add( pointLight );
				scene.add( camera );

				// manager

				function loadModel() {

					object.traverse( function ( child ) {

						if ( child.isMesh ) child.material.map = texture;

					} );

					object.position.y = - 0.95;
					object.scale.setScalar( 0.01 );
					scene.add( object );

					render();

				}

				const manager = new THREE.LoadingManager( loadModel );

				// texture

                const width = 512;
                const height = 512;
                
                const size = width * height;
                const data = new Uint8Array( 4 * size );
                const color = new THREE.Color( 0x000000 );
                
                const r = Math.floor( color.r * 255 );
                const g = Math.floor( color.g * 255 );
                const b = Math.floor( color.b * 255 );
                
                for ( let i = 0; i < size; i ++ ) {
                    const stride = i * 4;
                    data[ stride ] = r;
                    data[ stride + 1 ] = g;
                    data[ stride + 2 ] = b;
                    data[ stride + 3 ] = 255;
                }
                
                // used the buffer to create a DataTexture
                const texture = new THREE.DataTexture( data, width, height, render );
                texture.needsUpdate = true;

				/* const textureLoader = new THREE.TextureLoader( manager );
				const texture = textureLoader.load( 'textures/uv_grid_opengl.jpg', render );
				texture.colorSpace = THREE.SRGBColorSpace; 

				// model

				function onProgress( xhr ) {

					if ( xhr.lengthComputable ) {

						const percentComplete = xhr.loaded / xhr.total * 100;
						console.log( 'model ' + percentComplete.toFixed( 2 ) + '% downloaded' );

					}

				}

				function onError() {}

				const loader = new OBJLoader( manager );
				loader.load( 'dependencies/otto02.obj', function ( obj ) {

					object = obj;

				}, onProgress, onError );

				//

				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				document.body.appendChild( renderer.domElement );

				//

				const controls = new  OrbitControls( camera, renderer.domElement );
				controls.minDistance = 2;
				controls.maxDistance = 5;
				controls.addEventListener( 'change', render );

				//

				window.addEventListener( 'resize', onWindowResize );

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			function render() {

				renderer.render( scene, camera );

			}
*/