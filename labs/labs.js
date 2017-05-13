$(document).ready(function () {
var times = [
        {
            Section: 10,
            Day: "T",
            StartTime: 1600,
            Type: "Lab",
            TAs: ["Alex Niebur", "Natalie Suderman", "Xiaomeng Li"]
        },
        {
            Section: 11,
            Day: "W",
            StartTime: 1800,
            Type: "Lab",
            TAs: ["Louis Duvoisin", "Megan McCormick", "Josh Diedrich"]
        },
        {
            Section: 12,
            Day: "R",
            StartTime: 800,
            Type: "Lab",
            TAs: ["Daniel Grocki", "Lucas Campos-Davis", ""]
        },
        {
            Section: 13,
            Day: "R",
            StartTime: 1000,
            Type: "Lab",
            TAs: ["Courtney Miller", "Ernie Bodle", "Jia Chen"]
        },
        {
            Section: 14,
            Day: "T",
            StartTime: 1200,
            Type: "Lab",
			TAs: ["Carl Beery", "Zoe Steine-Hanson", "Lucas Campos-Davis"]
        },
        {
            Section: 15,
            Day: "T",
            StartTime: 1000,
            Type: "Lab",
            TAs: ["Kyle Nichols", "Courtney Miller", "Zoe Steine-Hanson"]
        },
        {
            Section: 16,
            Day: "F",
            StartTime: 1400,
            Type: "Lab",
            TAs: ["Alex Niebur", "Katherine Bajno", "Aidan Carson"]
        },
        {
            Section: 17,
            Day: "W",
            StartTime: 1600,
            Type: "Lab",
            TAs: ["Jake Fenger", "Cierra Shawe", "Chongxian Chen"]
        },
        {
            Section: 18,
            Day: "W",
            StartTime: 1200,
            Type: "Lab",
            TAs: ["Kyle Nichols", "Ernie Bodle", "Cierra Shawe"]
        },
        {
            Section: 19,
            Day: "R",
            StartTime: 1600,
            Type: "Lab",
            TAs: ["Jake Fenger", "Natalie Suderman", "Xiaomeng Li"]
        },
        {
            Section: 20,
            Day: "R",
            StartTime: 1400,
            Type: "Lab",
            TAs: ["Megan McCormick", "Louis Duvoisin", "Dan Van Horn"]
        },
        {
            Section: 21,
            Day: "F",
            StartTime: 1100,
            Type: "Lab",
            TAs: ["Matthew Lohr", "Daniel Grocki", "Chongxian Chen"]
        }
];
    
    function convert24to12hour(hour) {
        var twelveHour = hour;
        var ampm = "";
        if (hour > 1300) {
            twelveHour -= 1200;
            ampm = "pm";
        } else if (hour <= 1300 && hour >= 1200) {
            ampm = "pm";
        } else {
            ampm = "am";
        }
        var hours = Math.floor(twelveHour / 100)
        var minutes = twelveHour - (hours * 100);
        if (minutes === 0) {
            return (hours).toString() + ":00" + ampm;
        }
        return (hours).toString() + ":" + minutes + ampm;
    }
    
    var table = '<table class="labsTable">';
    table += "<tr><th>Section</th><th>Day</th><th>Time</th><th colspan='3'>TA's</th></tr>";

    for (var x = 0; x < times.length; x++) {
        table += "<tr>";
        table += "<td>" + times[x]["Section"] + "</td>";
        table += "<td>" + times[x]["Day"] + "</td>";
        table += "<td>" + convert24to12hour(times[x]["StartTime"]) + " - ";
        table += convert24to12hour(times[x]["StartTime"] + 150) + "</td>";
//        table += '<td>';
        for (var y = 0; y < (times[x]["TAs"].length); y++) {
            table += "<td>" + times[x]["TAs"][y] + "</td>";
        }
//        table += "</td>";
        table += "</tr>";
    }
    table += "</table>";
    $(".labs").append(table);
});