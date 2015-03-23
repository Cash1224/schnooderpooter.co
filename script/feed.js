var currentRoom = "1a";
var currentRoomID = 0;
var animatestatic = 0;
var showrecord = false
// roomstates: 0 = default, 1 = different, etc.
var currRoomStates=[{name:"1a",roomstate:0},
{name:"1b",roomstate:0}
];

var rooms=[{name:"1a",movingcamera:true},
{name:"1b",movingcamera:false}
];

var animatronicStates = [{name:"Chica",currentRoom:"1a"},
{name:"Bonny",currentRoom:"1a"}
];

function searchForState(room){
    for (var i=0; i < currRoomStates.length; i++) {
        if (currRoomStates[i].name === room) {
            return currRoomStates[i].roomstate;
        }
    }
}

function searchForRoomID(roomname){
    for (var i=0; i < currRoomStates.length; i++) {
        if (rooms[i].name === roomname) {
            return i;
        }
    }
}

var updateRoomState = function(roomname,state){
	if(state=="") state = 1//parseInt(state);
	if((typeof roomname) != "string") return console.log("Room name not a string!");
	
	switch(roomname) {
		case "1a":
			currRoomStates[0].roomstate=state;
			if(currentRoom == roomname) updateRoomStateStatic() //document.getElementById('static').style.opacity="1";
			switch(state) {
				case 0: // normal
					setTimeout(function(){
						document.getElementById('room').src="graphics/rooms/1a/"+state+".png";
					}, 3000);
					break;
				case 1: // just freddy
					setTimeout(function(){
						document.getElementById('room').src="graphics/rooms/1a/"+state+".png";
					}, 3000);
					break;
				case 2: // missing bunny
					
					setTimeout(function(){
						document.getElementById('room').src="graphics/rooms/1a/"+state+".png";
					}, 3000);
					break;
				case 3: // missing chica
					setTimeout(function(){
						document.getElementById('room').src="graphics/rooms/1a/"+state+".png";
					}, 3000);
					break;
				case 4: // just freddy looking at camera
					setTimeout(function(){
						document.getElementById('room').src="graphics/rooms/1a/"+state+".png";
					}, 3000);
					break;
				case 5: // empty
					setTimeout(function(){
						document.getElementById('room').src="graphics/rooms/1a/"+state+".png";
					}, 3000);
					break;
				default:
					alert("penis");
			}
			if(leftornot==0) document.getElementById('room').style.left="0";
			break;
		case "1b":
			currRoomStates[1].roomstate=state;
			if(currentRoom == roomname) updateRoomStateStatic() //document.getElementById('static').style.opacity="1";
			switch(state) {
				case 0: // bonny
					setTimeout(function(){
						document.getElementById('room').src="graphics/rooms/1a/"+state+".png";
					}, 3000);
					break;
				default:
					alert("penis");
			}
			if(leftornot==0 && currentRoom==roomname) document.getElementById('room').style.left="0";
			break;
		default:
			alert("Invalid or no room name given!");
	}
	
	return console.log("Camera "+roomname+" updated");
};

var leftornot = 0
var leftpos="-=300px"
var staticanim=[];
var randomcheck=1

function updatecurrentRoom(roomparameter) {
	if(roomparameter=="") return console.log("updatecurrentRoom() error - No parameter given");
	currentroomstatetoset = searchForState(roomparameter);
	//alert(currentroomstatetoset);
	if(currentroomstatetoset== -1) return console.log("updatecurrentRoom() error - Invalid parameter given");
	currentRoom=roomparameter;
	currentRoomID=searchForRoomID(roomparameter)
	updateRoomStateStatic();
	document.getElementById('room').src="graphics/rooms/"+currentRoom+"/"+currRoomStates[currentroomstatetoset].roomstate+".png";
	if(currentRoom=="1b"){
		$("#room").stop();
		if(leftornot==1) {
			$("#room").css( "left", "300" );
			leftornot=1;
		}
		else {
			//$("#room").css( "left", "0" );
			$("#room").css( "left", "0" );
			leftornot=0;
		}
	}
}

for(x=1;x<9;x++){
	staticanim[0+x] = new Image();
	staticanim[0+x].src = "graphics/camera/static_"+x+".png";
}

function mainThread() {
//	tick();
//	camerapositionTick();
//	staticTick();
}

function recordTick() {
//	if($("#record").css("display")=="block") {
	if(showrecord==true) {
		$("#record").css("left", '-=9999px');
		showrecord=false;
	}
	else {
		$("#record").css("left", '+=9999px');
		showrecord=true;
	};
}

function playanimation(path_to_file,speed,frames){
	if(path_to_file=="") return console.log("No file specified!");
	if(speed=="") speed = 50;
	if(frames=="") return console.log("No frame length specified!");
	for(x=1;x<(frames+1);x++){
		setTimeout(fuckthatimageup[x], (speed*x));
	}
}

//mainThread();

camerapositionTick();
var mainThreadID = setInterval('mainThread()', 1000);
var cameraanimId = setInterval('camerapositionTick()', 8500);
var recordanimId = setInterval('recordTick()', 1000);
