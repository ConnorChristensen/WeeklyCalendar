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
    
    var assignments = [
        {   
            //- Assignment #1 Due Sunday 10/02 11:59pm
            number: 1,
            type: "project",
            assignedMonth: 0,
            assignedDay: 0,
            dueMonth: 10,
            dueDay: 2,
            dueHour: "11:59pm",
            submitionLocation: "teach"
        }, {
            //- Assignment #2 Due Sunday 10/09 11:59pm
            number: 2,
            type: "project",
            assignedMonth: 0,
            assignedDay: 0,
            dueMonth: 10,
            dueDay: 9,
            dueHour: "11:59pm",
            submitionLocation: "teach"
        }, {
            //- Assignment #3 Design Due Sunday 10/16 by 5pm on CANVAS
            number: 3,
            type: "design",
            assignedMonth: 0,
            assignedDay: 0,
            dueMonth: 10,
            dueDay: 16,
            dueHour: "5pm",
            submitionLocation: "canvas"
        },{
            //- Assignment #3 Due Sunday 10/23 11:59pm
            number: 3,
            type: "project",
            assignedMonth: 0,
            assignedDay: 0,
            dueMonth: 10,
            dueDay: 23,
            dueHour: "11:59pm",
            submitionLocation: "teach"
        }, {
            //- Assignment #4 Design Due Sunday 10/30 by 5pm on CANVAS
            number: 4,
            type: "design",
            assignedMonth: 0,
            assignedDay: 0,
            dueMonth: 10,
            dueDay: 30,
            dueHour: "5pm",
            submitionLocation: "canvas"
        }, {
            //- Assignment #4 Due Sunday 11/06 11:59pm
            number: 4,
            type: "project",
            assignedMonth: 0,
            assignedDay: 0,
            dueMonth: 11,
            dueDay: 6,
            dueHour: "11:59pm",
            submitionLocation: "teach"
        },{
            //- Assignment #5 Design Due Sunday 11/13 by 5pm on CANVAS
            number: 5,
            type: "design",
            assignedMonth: 0,
            assignedDay: 0,
            dueMonth: 11,
            dueDay: 13,
            dueHour: "5pm",
            submitionLocation: "canvas"
        },{
            //Assignment #5 Due Sunday 11/20 11:59pm
            number: 5,
            type: "project",
            assignedMonth: 0,
            assignedDay: 0,
            dueMonth: 11,
            dueDay: 20,
            dueHour: "11:59pm",
            submitionLocation: "teach"
        }, {
            //- Assignment #6 Design Due Sunday 11/27 by 5pm on CANVAS
            number: 6,
            type: "design",
            assignedMonth: 0,
            assignedDay: 0,
            dueMonth: 11,
            dueDay: 27,
            dueHour: "5pm",
            submitionLocation: "canvas"
        }, {
            //Assignment #6 Due Sunday 12/04 11:59pm
            number: 6,
            type: "design",
            assignedMonth: 0,
            assignedDay: 0,
            dueMonth: 12,
            dueDay: 4,
            dueHour: "11:59pm",
            submitionLocation: "teach"
        }
    ];
    
    var lecture = [
        {
            month: 9,
            day: 21,
            content: "Introduction and sylabus"
        }, {
            month: 9,
            day: 23,
            content: "What is computer programming?"
        }, {
            month: 9,
            day: 26,
            content: "Programming in C++/Data types, variables and constants"
        }, {
            month: 9,
            day: 28,
            content: "Introduction and sylabus"
        }, {
            month: 9,
            day: 30,
            content: "Introduction and sylabus"
        }, {
            month: 10,
            day: 3,
            content: "Introduction and sylabus"
        }, {
            month: 10,
            day: 5,
            content: "Introduction and sylabus"
        }, {
            month: 10,
            day: 7,
            content: "Introduction and sylabus"
        }, {
            month: 10,
            day: 10,
            content: "Introduction and sylabus"
        }, {
            month: 10,
            day: 12,
            content: "Introduction and sylabus"
        }, {
            month: 10,
            day: 14,
            content: "Introduction and sylabus"
        }, {
            month: 10,
            day: 17,
            content: "Introduction and sylabus"
        }, {
            month: 10,
            day: 19,
            content: "Introduction and sylabus"
        }, {
            month: 10,
            day: 24,
            content: "Introduction and sylabus"
        }, {
            month: 10,
            day: 26,
            content: "Introduction and sylabus"
        }, {
            month: 10,
            day: 28,
            content: "Introduction and sylabus"
        }, {
            month: 10,
            day: 31,
            content: "Introduction and sylabus"
        }, {
            month: 11,
            day: 2,
            content: "Introduction and sylabus"
        }, {
            month: 11,
            day: 4,
            content: "Introduction and sylabus"
        }, {
            month: 11,
            day: 7,
            content: "Introduction and sylabus"
        }, {
            month: 11,
            day: 9,
            content: "Introduction and sylabus"
        }, {
            month: 11,
            day: 14,
            content: "Introduction and sylabus"
        }, {
            month: 11,
            day: 16,
            content: "Introduction and sylabus"
        }, {
            month: 11,
            day: 18,
            content: "Introduction and sylabus"
        }, {
            month: 11,
            day: 21,
            content: "Introduction and sylabus"
        }, {
            month: 11,
            day: 23,
            content: "Introduction and sylabus"
        }, {
            month: 11,
            day: 28,
            content: "Introduction and sylabus"
        }, {
            month: 11,
            day: 30,
            content: "Introduction and sylabus"
        }, {
            month: 12,
            day: 2,
            content: "Introduction and sylabus"
        }
    ];
    
    for (var term = 8; term < 12; term++) {
        var startOfMonth = new Date(year, term, 1).getDay();
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
        
        var lectureCopy = lecture;
        for (var x = 0; x < lecture.length; x++) {
            if (lecture[x]["dueMonth"] < term) {
                console.log(lecture);
                lectureCopy.shift();
            }
        }


        var counter = 0;
        for (var x = 0; x < 6; x++) {
            table += "<tr>";
            for (var daysOfWeek = 0; daysOfWeek < 7; daysOfWeek++) {
                var numberInCal = ((x*7)+daysOfWeek+1);
                if (numberInCal > startOfMonth && counter < daysInMonth[term]) {
                    counter++;
                    if (counter == day && month-1 == term) {
                        table += '<td class="active" id="currentDate"><span>'+counter+"</span></td>";    
                    }
                    else if (counter == assignmentsCopy[0]["dueDay"] && term == assignmentsCopy[0]["dueMonth"]-1) {
                        table += '<td class="active" id="'+assignmentsCopy[0]["type"]+'"><span>'+counter+"</span></td>";
                        if (assignmentsCopy.length > 1) {
                            assignmentsCopy.shift();
                        }
                    }
                    else if (counter == lectureCopy[0]["day"] && term == lectureCopy[0]["month"]-1) {
                        console.log(counter, lectureCopy[0]["day"], term, lectureCopy[0]["month"]);
                        table += '<td class="active" id="lecture"><span>'+counter+"</span></td>";
                        if (lectureCopy.length > 1) {
                            lectureCopy.shift();
                        }
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
        $(".calanderContainer").append(table);
    }
});