var canvasWidth = 800;
var canvasHeight = 700;

function setCanvasSize() {
    document.getElementById("render").width = canvasWidth.toString();
    document.getElementById("render").height = canvasHeight.toString();
}

function run() {
    //set the height of the top bar that shows the days
    var topHeight = 40;
    //set the width of the sidebar that holds the hours
    var hourWidth = 50;
    
    //set the start hour on the calandar
    var startTime = 8;
    //set the end hour on the calandar
    var endTime = 23;
    
    //get the canvas element
    var element = document.getElementById("render");
    
    var canvas = {
        width: canvasWidth,
        height: canvasHeight,
        context: element.getContext("2d"),
        
        top: {
            startx: 0,
            starty: 0,
            
            height: topHeight,
            width: canvasWidth,
            
            color: "#3b7ce5"
        },
        
        hour: {
            startx: 0,
            starty: topHeight,
            
            width: hourWidth,
            height: canvasHeight,
            
            color: "#3b7ce5",
            textColor: "#ffffff",
            font: "100 10px Arial"
        },
        
        cal: {
            startx: hourWidth,
            starty: topHeight,
            
            height: canvasHeight - topHeight,
            width: canvasWidth - hourWidth,
            
            dayWidth: (canvasWidth-hourWidth)/5,
            minutesPerPx: (canvasHeight - topHeight) / ((endTime-startTime) * 60),
            
            font: "100 13px Arial"
        }
    };
    
    setHours(canvas, startTime, endTime);
    setHeader(canvas);
    setLines(canvas, startTime, endTime);
    
    var plan = [
        {
            startHour: 9,
            endHour: 11,
            day: 0,
            name: "Connor Christensen",
            location: "KEC",
            color: "rgba(60, 134, 152, 0.7)"
        }
    ];
    
    schedule(canvas, plan);
}

function schedule(canvas, plan) {
    var margin = 4;
    
    for (var x = 0; x < plan.length; x++) {
        canvas.context.fillStyle = plan[x].color;
        
        var xPoint = (canvas.cal.startx + (plan[x].day * canvas.cal.dayWidth)) + margin;
//        canvas.context.fillRect(xPoint, 100, canvas.cal.dayWidth-(margin*2), 100);
        canvas.context.fillRect(xPoint, (((plan[x].startHour - 8)*60) * canvas.cal.minutesPerPx) , canvas.cal.dayWidth-(margin*2), 100);
        console.log(((plan[x].startHour - 8)*60),  canvas.cal.minutesPerPx);
        
        canvas.context.fillStyle = canvas.hour.textColor;
        canvas.context.font = canvas.cal.font;
        canvas.context.fillText(plan[x].name, xPoint+10, 120, canvas.cal.dayWidth-20);
        canvas.context.fillText(plan[x].location+"  "+plan[x].startHour+" - "+plan[x].endHour, xPoint+10, 140, canvas.cal.dayWidth-20);
    }
}



function setHours(canvas, startTime, endTime) {
    canvas.context.fillStyle = canvas.hour.color;
    canvas.context.fillRect(canvas.hour.startx, 0, canvas.hour.width, canvas.hour.height);
    
    canvas.context.fillStyle = canvas.hour.textColor;
    canvas.context.font = canvas.hour.font;
    
    var startPoint = canvas.cal.starty + 3;
    printHours(canvas, startPoint, startTime, endTime);
}
function printHours(canvas, startPoint, startTime, endTime) {
    var numHours = endTime - startTime;
    for (var x = startPoint; x < canvas.height; x += (canvas.cal.height/numHours)) {
        canvas.context.fillText(convertToTime(startTime), 5, x, 40);
        startTime++;
    }
}
function convertToTime(hour) {
    if (hour < 12) {
        return hour.toString()+":00am";
    }
    else if (hour === 12) {
        return hour.toString()+":00pm";
    }
    else {
        return (hour-12).toString()+":00pm";
    }
}
function setHeader(canvas) {
    //set the lines and backgrounds
    canvas.context.fillStyle = canvas.top.color;
    canvas.context.fillRect(canvas.hour.width, canvas.top.starty, canvas.width, canvas.top.height);
    
    canvas.context.fillStyle = "#ffffff";
    canvas.context.font = "15px Arial";
    
    var daysOfWeek = ["M", "T", "W", "R", "F"];
    
    var startPoint = (canvas.hour.width + (canvas.cal.dayWidth/2)) - 10;
    for (var x = 0; x < 5; x++) {
        canvas.context.fillText(daysOfWeek[x], (x*(canvas.cal.dayWidth))+startPoint, canvas.top.height/1.6);
    }
}
function setLines(canvas, startTime, endTime) {
    canvas.context.fillStyle = "#969696";
    
    for (var x = 0; x < 5; x++) {
        canvas.context.fillRect(x*canvas.cal.dayWidth+(canvas.hour.width), canvas.top.height, 1, canvas.cal.height);
    }
    
    var numHours = endTime - startTime;
    for (var y = canvas.cal.starty; y < canvas.cal.height+canvas.top.height; y += canvas.cal.height/numHours) {
        canvas.context.fillRect(canvas.cal.startx, y, canvas.cal.width, 1);
    }
}