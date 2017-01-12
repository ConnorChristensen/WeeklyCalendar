$(document).ready(function () {
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var monthNames = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var twoLetterDays = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
    var daysInMonthDictionary = {
        jan: 31,    feb: 28,    march: 31,  april: 30,
        may: 31,    june: 30,   july: 31,   aug: 31,
        sept: 30,   oct: 31,    nov: 30,    dec: 31
    };
    var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
    
    var date = new Date();
    var day = date.getDate();
    var nameOfDay = date.getDay();
    var month = date.getMonth()+1; //January is 0
    var year = date.getFullYear();
    var startOfMonth = new Date(year+"-"+month+"-01").getDay();
    console.log(startOfMonth);
    
    
    var assignments = [
        {
            number: 3,
            type: "design",
            assignedMonth: 0,
            assignedDay: 0,
            dueMonth: 1,
            dueDay: 20,
            dueHour: "5pm",
            submitionLocation: "canvas"
        }, {
            number: 4,
            type: "design",
            assignedMonth: 0,
            assignedDay: 0,
            dueMonth: 11,
            dueDay: 6,
            dueHour: "5pm",
            submitionLocation: "canvas"
        }, {
            number: 4,
            type: "project",
            assignedMonth: 0,
            assignedDay: 0,
            dueMonth: 11,
            dueDay: 13,
            dueHour: "5pm",
            submitionLocation: "canvas"
        },{
            number: 5,
            type: "design",
            assignedMonth: 0,
            assignedDay: 0,
            dueMonth: 11,
            dueDay: 20,
            dueHour: "5pm",
            submitionLocation: "canvas"
        },{
            number: 5,
            type: "project",
            assignedMonth: 0,
            assignedDay: 0,
            dueMonth: 11,
            dueDay: 27,
            dueHour: "5pm",
            submitionLocation: "canvas"
        }, {
            number: 6,
            type: "design",
            assignedMonth: 0,
            assignedDay: 0,
            dueMonth: 12,
            dueDay: 4,
            dueHour: "5pm",
            submitionLocation: "canvas"
        }
    ];
    
    for (var term = 9; term < 12; term++) {
        var table = '<table class="calendar">';
        table += "<th colspan='7'>"+monthNames[term]+"</th>";
        table += "<tr>";
        for (var daysOfWeek = 0; daysOfWeek < 7; daysOfWeek++) {
            table += "<td>"+twoLetterDays[daysOfWeek]+"</td>";
        }
        table += "</tr>";

        var assignmentsCopy = assignments;
        for (var checkAssignments = 0; checkAssignments < assignments.length; checkAssignments++) {
            if (assignments[checkAssignments]["dueMonth"] < term) {
                assignmentsCopy.shift();
            }
        }


        var counter = 0;
        for (var x = 0; x < 5; x++) {
            table += "<tr>";
            for (var daysOfWeek = 0; daysOfWeek < 7; daysOfWeek++) {
                var numberInCal = ((x*7)+daysOfWeek+1);
                if (numberInCal > startOfMonth+1 && counter < daysInMonth[term-1]) {
                    counter++;
                    if (numberInCal == day) {
                        table += '<td class="active" id="currentDate"><span>'+counter+"</span></td>";    
                    }
                    else if (counter == assignmentsCopy[0]["dueDay"] && month == assignmentsCopy[0]["dueMonth"]) {
                        table += '<td class="active" id="'+assignmentsCopy[0]["type"]+'"><span>'+counter+"</span></td>";
                        assignmentsCopy.shift();
                    }
                    else {
                        table += '<td class="active">'+counter+"</td>";
                    }
                }
                else {
                    table += '<td></td>';
                }
            }
            table += "</tr>";
        }

        table += "</table>";
    }
    $(".right").append(table);
});