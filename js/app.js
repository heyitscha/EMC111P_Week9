//Important Stuff
//Leonar & Liwanan

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(50, window.innerWidth/ window.innerHeight, 0.1, 1000); 
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
scene.background = new THREE.Color("#C4E3FF");
document.body.appendChild(renderer.domElement);  


///HOUSE EXTERIOR///
///Floor
let floorGeometry = new THREE.BoxGeometry( 14.9, -0.05, 13 );
let floor = new THREE.MeshLambertMaterial( {color: "#343131"} );
let cube = new THREE.Mesh(floorGeometry, floor);
scene.add(cube);

cube.position.y = -1.5
cube.position.x = 3.8
cube.position.z = -14
cube.rotation.y = 4


///West wall 
let westwallGeometry = new THREE.BoxGeometry( 15, 7, 0.1);
let westWall = new THREE.MeshLambertMaterial( {color: "#F2E3B6"} );
let cube2 = new THREE.Mesh(westwallGeometry, westWall);
scene.add(cube2);
cube2.position.y = 2
cube2.position.x = -1
cube2.position.z = -18.4
cube2.rotation.y = 4

///North wall 
let northwallGeometry = new THREE.BoxGeometry( 7, 7, 0.1);
let northWall = new THREE.MeshLambertMaterial( {color: "#7E7761"} );
let cube3 = new THREE.Mesh(northwallGeometry, northWall);
scene.add(cube3);

cube3.position.y = 2
cube3.position.x = 8.5
cube3.position.z = -19.6	
cube3.rotation.y = 2.4

let northTopGeometry = new THREE.BoxGeometry( 13,2, 0.1);
let northTop = new THREE.MeshLambertMaterial( {color: "#7E7761"} );
let cube4 = new THREE.Mesh(northTopGeometry, northTop);
scene.add(cube4);

cube4.position.y = 4.5
cube4.position.x = 8.6
cube4.position.z = -19.6	
cube4.rotation.y = 2.4

///South wall 
let southwall1Geometry = new THREE.BoxGeometry( 3, 7.2, 0.1);
let southWall1 = new THREE.MeshLambertMaterial( {color: "#7E7761"} );
let cube5 = new THREE.Mesh(southwall1Geometry, southWall1);
scene.add(cube5);

cube5.position.y = 2
cube5.position.x = -4.6
cube5.position.z = -11.4
cube5.rotation.y = 2.43

let southwall2Geometry = new THREE.BoxGeometry( 3, 7.2, 0.1);
let southWall2 = new THREE.MeshLambertMaterial( {color: "#7E7761"} );
let cube50 = new THREE.Mesh(southwall2Geometry, southWall2);
scene.add(cube50);

cube50.position.y = 2
cube50.position.x = 2.64
cube50.position.z = -5.24
cube50.rotation.y = 2.43

let southTopGeometry = new THREE.BoxGeometry( 10,1.4, 0.1);
let southTop = new THREE.MeshLambertMaterial( {color: "#514B3B"} );
let cube51 = new THREE.Mesh(southTopGeometry, southTop);
scene.add(cube51);

cube51.position.y = 4.8
cube51.position.x = -1.5
cube51.position.z = -8.9
cube51.rotation.y = 2.43

///East wall 
let eastwall1Geometry = new THREE.BoxGeometry( 3.5, 6.45, 0.05);
let eastWall1 = new THREE.MeshLambertMaterial( {color: "#7E7761"} );
let cube6 = new THREE.Mesh(eastwall1Geometry, eastWall1);
scene.add(cube6);

cube6.position.y = 2.28
cube6.position.x = 5
cube6.position.z = -4.9
cube6.rotation.y = 4

let eastwall2Geometry = new THREE.BoxGeometry( 5.8, 7, 0.04);
let eastWall2 = new THREE.MeshLambertMaterial( {color: "#514B3B"} );
let cube7 = new THREE.Mesh(eastwall2Geometry, eastWall2);
scene.add(cube7);

cube7.position.y = 2.3
cube7.position.x = 8.7
cube7.position.z = -9.3
cube7.rotation.y = 4

let eastwall3Geometry = new THREE.BoxGeometry( 3.7, 7, 0.04);
let eastWall3 = new THREE.MeshLambertMaterial( {color: "#7E7761"} );
let cube8 = new THREE.Mesh(eastwall3Geometry, eastWall3);
scene.add(cube8);

cube8.position.y = 2.3
cube8.position.x = 12.5
cube8.position.z = -13.8
cube8.rotation.y = 4

let eastTopGeometry = new THREE.BoxGeometry( 11, 3.2, 0.05);
let eastTop = new THREE.MeshLambertMaterial( {color: "#7E7761"} );
let cube9 = new THREE.Mesh(eastTopGeometry, eastTop);
scene.add(cube9);

cube9.position.y = 4.3
cube9.position.x = 8.2
cube9.position.z = -8.8
cube9.rotation.y = 4


///Big glass
let bigglassGeometry = new THREE.BoxGeometry( 9,6, 0.04);
let bigglass = new THREE.MeshPhongMaterial( {color: "white", transparent: true, opacity: 0.3} );
let cube10 = new THREE.Mesh(bigglassGeometry, bigglass);
scene.add(cube10);

cube10.position.y = 1.3
cube10.position.x = -1.1
cube10.position.z = -8.41	
cube10.rotation.y = 2.44


///Door
let doorGeometry = new THREE.BoxGeometry( 3.5, 4.5, 0.3);
let door = new THREE.MeshLambertMaterial( {color: "#2B2926"} );
let cube11 = new THREE.Mesh(doorGeometry, door);
scene.add(cube11);

cube11.position.y = 1.2
cube11.position.x = 8.6
cube11.position.z = -9.2
cube11.rotation.y = 4

///Glass small 1
let glass1Geometry = new THREE.BoxGeometry( 1.2, 5, 0.04);
let glass1 = new THREE.MeshPhongMaterial( {color: "white", transparent: true, opacity: 0.5} );
let cube12 = new THREE.Mesh(glass1Geometry, glass1);
scene.add(cube12);

cube12.position.y = 1.2
cube12.position.x = 6.5
cube12.position.z = -7    	
cube12.rotation.y = 4


///Glass small 2
let glass2Geometry = new THREE.BoxGeometry( 1.2, 5, 0.04);
let glass2 = new THREE.MeshPhongMaterial( {color: "white", transparent: true, opacity: 0.5} );
let cube13 = new THREE.Mesh(glass2Geometry, glass2);
scene.add(cube13);

cube13.position.y = 1.2
cube13.position.x =11
cube13.position.z = -11.9  	
cube13.rotation.y = 4


///Glass med 3
let glass3Geometry = new THREE.BoxGeometry( 2.4, 4.6, 0.04);
let glass3 = new THREE.MeshPhongMaterial( {color: "white", transparent: true, opacity: 0.5} );
let cube14 = new THREE.Mesh(glass3Geometry, glass3);
scene.add(cube14);

cube14.position.y = 2.95
cube14.position.x = 4.98
cube14.position.z = -18.1
cube14.rotation.y = 2.4

///Glass med 4
let glass4Geometry = new THREE.BoxGeometry( 3, 4.8, 0.04);
let glass4 = new THREE.MeshPhongMaterial( {color: "white", transparent: true, opacity: 0.5} );
let cube15 = new THREE.Mesh(glass4Geometry, glass4);
scene.add(cube15);

cube15.position.y = 1.6
cube15.position.x = 11.9
cube15.position.z = -15.4
cube15.rotation.y = 2.4


///Interior///
///Divider
let dividerGeometry = new THREE.BoxGeometry( 5,7, 0.4);
let divider = new THREE.MeshLambertMaterial( {color: "#38322B"} );
let cube16 = new THREE.Mesh(dividerGeometry, divider);
scene.add(cube16);

cube16.position.y = 1.8
cube16.position.x = 0.8 
cube16.position.z = -16	
cube16.rotation.y = 2.30


///roof base 1
let roofbase1Geometry = new THREE.BoxGeometry( 14.9, 0.2, 17 );
let roofbase1 = new THREE.MeshLambertMaterial( {color: "#282531"} );
let cube17 = new THREE.Mesh(roofbase1Geometry, roofbase1);
scene.add(cube17);

cube17.position.y = 5.6
cube17.position.x = 3.2
cube17.position.z = -14
cube17.rotation.y = 4


///roof base 2
let roofbase2Geometry = new THREE.BoxGeometry( 14.9, 0.2, 17 );
let roofbase2 = new THREE.MeshLambertMaterial( {color: "#282531"} );
let cube18 = new THREE.Mesh(roofbase2Geometry, roofbase2);
scene.add(cube18);

cube18.position.y = 6
cube18.position.x = 3.2
cube18.position.z = -14
cube18.rotation.y = 4


///roof base 3
let roofbase3Geometry = new THREE.BoxGeometry( 11, 0.6, 17 );
let roofbase3 = new THREE.MeshLambertMaterial( {color: "#282531"} );
let cube19 = new THREE.Mesh(roofbase3Geometry, roofbase3);
scene.add(cube19 );

cube19.position.y = 6.5
cube19.position.x = 3.2
cube19.position.z = -14
cube19.rotation.y = 4


///roof base 4
let roofbase4Geometry = new THREE.BoxGeometry( 8, 0.6, 17 );
let roofbase4 = new THREE.MeshLambertMaterial( {color: "#282531"} );
let cube20 = new THREE.Mesh(roofbase4Geometry, roofbase4);
scene.add(cube20);

cube20.position.y = 7
cube20.position.x = 3.2
cube20.position.z = -14
cube20.rotation.y = 4



///roof base 5
let roofbase5Geometry = new THREE.BoxGeometry( 4, 0.6, 17 );
let roofbase5= new THREE.MeshLambertMaterial( {color: "#282531"} );
let cube21 = new THREE.Mesh(roofbase5Geometry, roofbase5);
scene.add(cube21);

cube21.position.y = 7.5
cube21.position.x = 3.2
cube21.position.z = -14
cube21.rotation.y = 4



///EXTERIOR DESIGN
//brick wall
let b1Geometry = new THREE.BoxGeometry( 0.6, 0.3, 0.1);
let b1= new THREE.MeshLambertMaterial( {color: "#966633"} );
let cube22 = new THREE.Mesh(b1Geometry, b1);
scene.add(cube22);

cube22.position.y = 1.2
cube22.position.x = 7
cube22.position.z = -6.9    	
cube22.rotation.y = 4

let b2Geometry = new THREE.BoxGeometry( 0.6, 0.3, 0.1);
let b2 = new THREE.MeshLambertMaterial( {color: "#C57420"} );
let cube23 = new THREE.Mesh(b2Geometry, b2);
scene.add(cube23);

cube23.position.y = 4
cube23.position.x = 7
cube23.position.z = -6.9    	
cube23.rotation.y = 4

let b3Geometry = new THREE.BoxGeometry( 0.6, 0.3, 0.1);
let b3 = new THREE.MeshLambertMaterial( {color: "#5D4933"} );
let cube24 = new THREE.Mesh(b3Geometry, b3);
scene.add(cube24);

cube24.position.y = 3
cube24.position.x = 9.5
cube24.position.z = -7.8    	
cube24.rotation.y = 4

let b4Geometry = new THREE.BoxGeometry( 0.6, 0.3, 0.1);
let b4 = new THREE.MeshLambertMaterial( {color: "#816C56"} );
let cube25 = new THREE.Mesh(b4Geometry, b4);
scene.add(cube25);

cube25.position.y = 3.9
cube25.position.x = 7.2
cube25.position.z = -6.8	
cube25.rotation.y = 4

//line
let d1Geometry = new THREE.BoxGeometry( 0.3, 6, 0.04);
let d1 = new THREE.MeshLambertMaterial( {color: "#3E3A35", opacity: 0.9} );
let cube26 = new THREE.Mesh(d1Geometry, d1);
scene.add(cube26);

cube26.position.y = 1.88
cube26.position.x = 1.82
cube26.position.z = -5.20	
cube26.rotation.y = 2.44

let d2Geometry = new THREE.BoxGeometry( 0.3, 6, 0.04);
let d2 = new THREE.MeshLambertMaterial( {color: "#3E3A35", opacity: 0.9} );
let cube27 = new THREE.Mesh(d2Geometry, d2);
scene.add(cube27);

cube27.position.y = 1.8
cube27.position.x = -3.5
cube27.position.z = -9.9
cube27.rotation.y = 2.44

let dLineGeometry = new THREE.BoxGeometry( 0.05, 4.5, 0.4);
let doorLine = new THREE.MeshLambertMaterial( {color: "#0B0A09"} );
let cube28 = new THREE.Mesh(dLineGeometry, doorLine);
scene.add(cube28);

cube28.position.y = 1.2
cube28.position.x = 8.57
cube28.position.z = -9.2
cube28.rotation.y = 4

let doorknobGeometry = new THREE.BoxGeometry(0.2, 0.5, 0.08 );
let doorKnob = new THREE.MeshLambertMaterial( {color: "#FFD146"} );
let cube29 = new THREE.Mesh(doorknobGeometry, doorKnob);
scene.add(cube29);

cube29.position.y = 1.3
cube29.position.x = 8.8
cube29.position.z = -8.6
cube29.rotation.y = 4

let doorknob2Geometry = new THREE.BoxGeometry(0.2, 0.5, 0.08 );
let doorKnob2 = new THREE.MeshLambertMaterial( {color: "#FFD146"} );
let cube30 = new THREE.Mesh(doorknob2Geometry, doorKnob2);
scene.add(cube30);

cube30.position.y = 1.1
cube30.position.x = 8.5
cube30.position.z = -8.6
cube30.rotation.y = 4


let gL1Geometry = new THREE.BoxGeometry( 0.08, 5.7, 0.04);
let gL1 = new THREE.MeshLambertMaterial( {color: "#3E3A35"} );
let cube31 = new THREE.Mesh(gL1Geometry, gL1);
scene.add(cube31);

cube31.position.y = 1.47
cube31.position.x = 6.15
cube31.position.z = -6.2   	
cube31.rotation.y = 4

let gL2Geometry = new THREE.BoxGeometry( 0.08, 5.7, 0.04);
let gL2 = new THREE.MeshLambertMaterial( {color: "#3E3A35"} );
let cube32 = new THREE.Mesh(gL2Geometry, gL2);
scene.add(cube32);

cube32.position.y = 1.47
cube32.position.x = 10.6
cube32.position.z = -11.4
cube32.rotation.y = 4

let gL3Geometry = new THREE.BoxGeometry( 0.08, 5.7, 0.04);
let gL3 = new THREE.MeshLambertMaterial( {color: "#3E3A35"} );
let cube33 = new THREE.Mesh(gL3Geometry, gL3);
scene.add(cube33);

cube33.position.y = 1.47
cube33.position.x = 11.25
cube33.position.z = -12.15
cube33.rotation.y = 4

let gL4Geometry = new THREE.BoxGeometry( 0.08, 5.7, 0.04);
let gL4 = new THREE.MeshLambertMaterial( {color: "#3E3A35"} );
let cube34 = new THREE.Mesh(gL4Geometry, gL4);
scene.add(cube34);

cube34.position.y = 1.47
cube34.position.x = 6.8
cube34.position.z = -7
cube34.rotation.y = 4

let d3Geometry = new THREE.BoxGeometry( 5.75, 0.3, 0.04);
let d3 = new THREE.MeshLambertMaterial( {color: "#3E3A35", opacity: 0.9} );
let cube35 = new THREE.Mesh(d3Geometry, d3);
scene.add(cube35);

cube35.position.y = 7.2
cube35.position.x = 0.40
cube35.position.z = -3.2
cube35.rotation.y = 2.44


//Furnitures & Miscs, Bedroom

let tableGeometry = new THREE.BoxGeometry(2,0.1,1.5);
let table = new THREE.MeshLambertMaterial( {color: "#BF9000"});
let cube36 = new THREE.Mesh(tableGeometry, table);
scene.add(cube36);

cube36.position.y = 2.2
cube36.position.x = 10
cube36.position.z = -12
cube36.rotation.y = 8.7

//table legs
let leg1Geometry = new THREE.CylinderGeometry(0.1,0.1,1.3,32);
let leg1 = new THREE.MeshLambertMaterial({color: "#BF9000"});
let cylinder1 = new THREE.Mesh(leg1Geometry, leg1);
scene.add(cylinder1);

cylinder1.position.y = 1.5
cylinder1.position.x = 9
cylinder1.position.z = -12.4

let leg2Geometry = new THREE.CylinderGeometry(0.1,0.1,1.3,32);
let leg2 = new THREE.MeshLambertMaterial({color: "#BF9000"});
let cylinder2 = new THREE.Mesh(leg2Geometry, leg2);
scene.add(cylinder2);

cylinder2.position.y = 1.5
cylinder2.position.x = 9.5
cylinder2.position.z = -12.8

let leg3Geometry = new THREE.CylinderGeometry(0.1,0.1,1.3,32);
let leg3 = new THREE.MeshLambertMaterial({color: "#BF9000"});
let cylinder3 = new THREE.Mesh(leg3Geometry, leg3);
scene.add(cylinder3);

cylinder3.position.y = 1.5
cylinder3.position.x = 11
cylinder3.position.z = -11.6


let leg4Geometry = new THREE.CylinderGeometry(0.1,0.1,1.3,32);
let leg4 = new THREE.MeshLambertMaterial({color: "#BF9000"});
let cylinder4 = new THREE.Mesh(leg4Geometry, leg4);
scene.add(cylinder4);

cylinder4.position.y = 1.5
cylinder4.position.x = 10.4
cylinder4.position.z = -11

//Bed
let bedGeometry = new THREE.BoxGeometry(5,1,3);
let bed = new THREE.MeshLambertMaterial( {color: "white"});
let cube40 = new THREE.Mesh(bedGeometry, bed);
scene.add(cube40);

cube40.position.y = 1
cube40.position.x = 5
cube40.position.z = -16
cube40.rotation.y = 8.7

let bed1Geometry = new THREE.BoxGeometry(3.8, 1.2, 3);
let bed1 = new THREE.MeshLambertMaterial( {color: "#D5A6BD"});
let cube41 = new THREE.Mesh(bed1Geometry, bed1);
scene.add(cube41);

cube41.position.y = 1
cube41.position.x = 5.6
cube41.position.z = -15.4
cube41.rotation.y = 8.7

//Kitchen Counter
let refGeometry = new THREE.BoxGeometry(2.5,4,1.5);
let refrigerator = new THREE.MeshLambertMaterial( {color: "#283747"});
let cube42 = new THREE.Mesh(refGeometry, refrigerator);
scene.add(cube42);

cube42.position.y = 0.5
cube42.position.x = -4
cube42.position.z = -12
cube42.rotation.y = 8.7

let ktableGeometry = new THREE.BoxGeometry(2.2,1.8,4.3);
let kTable = new THREE.MeshLambertMaterial( {color: "#444444"});
let cube43 = new THREE.Mesh(ktableGeometry, kTable);
scene.add(cube43);

cube43.position.y = 0
cube43.position.x = -1.2
cube43.position.z = -13.4
cube43.rotation.y = 8.7

let drawerGeometry = new THREE.BoxGeometry( 2.5, 1.5, 4);
let drawer = new THREE.MeshLambertMaterial( {color: "#999999"});
let cube44 = new THREE.Mesh(drawerGeometry, drawer);
scene.add(cube44);

cube44.position.y = 0
cube44.position.x = -1.2
cube44.position.z = -13.4
cube44.rotation.y = 8.7

let drawer1Geometry = new THREE.BoxGeometry( 0.04, 1.5, 2);
let drawer1 = new THREE.MeshLambertMaterial( {color: "black"} );
let cube45 = new THREE.Mesh(drawer1Geometry, drawer1);
scene.add(cube45);

cube45.position.y = 0
cube45.position.x = -0.9
cube45.position.z = -13.2
cube45.rotation.y = 4


let refLineGeometry = new THREE.BoxGeometry( 1.5, 4.12, 0.01);
let rLine = new THREE.MeshLambertMaterial( {color: "black"} );
let cube46 = new THREE.Mesh(refLineGeometry, rLine);
scene.add(cube46);

cube46.position.y = 0.5
cube46.position.x = -3.45
cube46.position.z = -11.6
cube46.rotation.y = 4


let handleGeometry = new THREE.BoxGeometry( 0.08, 1.6, 0.05);
let handle = new THREE.MeshLambertMaterial( {color: "black"} );
let cube47 = new THREE.Mesh(handleGeometry, handle);
scene.add(cube47);

cube47.position.y = 0.8
cube47.position.x = -2.4
cube47.position.z = -10.8
cube47.rotation.y = 4



///grass
let grassGeometry = new THREE.BoxGeometry( 150, -0.05, 150 );
let grass = new THREE.MeshLambertMaterial( {color: "green"} );
let cube49 = new THREE.Mesh(grassGeometry, grass);
scene.add(cube49);

cube49.position.y = -2
cube49.position.x = 3.8
cube49.position.z = -14
cube49.rotation.y = 4

let rugGeometry = new THREE.BoxGeometry( 5, 7,0.2);
let rug1 = new THREE.MeshLambertMaterial( {color: "#983A3A"} );
let cube53 = new THREE.Mesh(rugGeometry, rug1);
scene.add(cube51);

cube53.position.y = 1
cube53.position.x = 3.8
cube53.position.z = -14
cube53.rotation.y = 4

//PLANTS
let branchGeometry = new THREE.CylinderGeometry(0.2,0.2,5,32);
let pBranch = new THREE.MeshLambertMaterial({color: "#402D1A"});
let cylinder5 = new THREE.Mesh(branchGeometry, pBranch);
scene.add(cylinder5);

cylinder5.position.y = 1.5
cylinder5.position.x = -8
cylinder5.position.z = -12

let p1Geometry = new THREE.SphereGeometry(2, 7, 6 );
let p1 = new THREE.MeshLambertMaterial( {color: "#315432"} );
let sphere1 = new THREE.Mesh(p1Geometry, p1);
scene.add(sphere1);

sphere1.position.y = 4
sphere1.position.x = -8
sphere1.position.z = -12


let p2Geometry = new THREE.BoxGeometry(1, 1.3, 5 );
let p2 = new THREE.MeshLambertMaterial( {color: "#294229"} );
let cube54 = new THREE.Mesh(p2Geometry, p2);
scene.add(cube54);

cube54.position.y = -0.3
cube54.position.x = 5.87
cube54.position.z = -5.2
cube54.rotation.y = 8.7




///Light
let light1 = new THREE.AmbientLight( "#FFFFFF" );
scene.add( light1 );

let light2 = new THREE.PointLight( "#FFFFFF", 1, 100);
light2.position.set( 5, 5, 3 );
scene.add( light2 );



///Camera
camera.position.z= 13;
camera.position.y= 16;
camera.position.x= 5;
camera.rotation.x= -0.5;
renderer.render(scene, camera); 