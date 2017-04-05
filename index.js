$(document).ready(function () {
    var times = [
        {
            Section: 9,
            Day: "T",
            StartTime: 1600,
            Type: "Lab",
            TAs: ["Taz Thenell", "Lily Shellhammer", "Xiaomeng Li"]
        },
        {
            Section: 10,
            Day: "T",
            StartTime: 800,
            Type: "Lab",
            TAs: ["Aidan Carson", "Katherine Bajno", "Alex Niebur"]
        },
        {
            Section: 11,
            Day: "W",
            StartTime: 800,
            Type: "Lab",
            TAs: ["Shannon Ernst", "Austin Row", "Mason Sidebottom"]
        },
        {
            Section: 12,
            Day: "W",
            StartTime: 1200,
            Type: "Lab",
            TAs: ["Megan McCormick", "Daniel Grocki", "Xiaomeng Li"]
        },
        {
            Section: 13,
            Day: "R",
            StartTime: 1000,
            Type: "Lab",
            TAs: ["Austin Row", "Nathan Burnett", "Kyle Nichols"]
        },
        {
            Section: 14,
            Day: "R",
            StartTime: 1200,
            Type: "Lab",
            TAs: ["Jeff Wentz", "Zoe Steine-Hanson", "Austin Row"]
        },
        {
            Section: 15,
            Day: "R",
            StartTime: 800,
            Type: "Lab",
            TAs: ["Philip Carroll", "Katherine Bajno", "Steven Gloyd"]
},
        {
            Section: 16,
            Day: "W",
            StartTime: 1000,
            Type: "Lab",
            TAs: ["Jake Fenger", "Ernie Bodle","Cierra Shawe"]
        },
        {
            Section: 17,
            Day: "F",
            StartTime: 800,
            Type: "Lab",
            TAs: ["Billy Buffum", "Shannon Ernst", "Jia Chen"]
        },
        {
            Section: 18,
            Day: "F",
            StartTime: 1000,
            Type: "Lab",
            TAs: ["Connor Christensen", "Louis Duvoisin", "Lucas Campos-Davis"]
        },
        {
            Section: 19,
            Day: "M",
            StartTime: 800,
            Type: "Lab",
            TAs: ["Robert Rosenberger", "Courtney Miller", "Dan Van Horn"]
        },
        {
            Section: 20,
            Day: "M",
            StartTime: 1000,
            Type: "Lab",
            TAs: ["Kyle Nichols", "Courtney Miller", "Connor Christensen"]
        },
        {
            Section: 21,
            Day: "M",
            StartTime: 1200,
            Type: "Lab",
            TAs: ["Mikky Cecil", "Seth Gipe", "Daniel Grocki"]
        },
        {
            Section: 22,
            Day: "M",
            StartTime: 1400,
            Type: "Lab",
            TAs: ["Mikky Cecil", "Matthew Lohr", "Billy Buffum"]
        },
        {
            Section: 23,
            Day: "M",
            StartTime: 1600,
            Type: "Lab",
            TAs: ["Matthew Lohr", "Zoe Steine-Hanson", "Louis Duvoisin"]
        }
];

    function convert24to12hour(hour) {
        var twelveHour = hour;
        var ampm = "";
        if (hour > 1200) {
            twelveHour -= 1200;
            ampm = "pm";
        } else if (hour == 1200) {
            twelveHour = 1200;
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
    table += "<tr><td>Section</td><td>Day</td><td>Time</td><td colspan='3'>TA's</td></tr>";

    for (var x = 0; x < times.length; x++) {
        table += "<tr>";
        table += "<td>" + times[x]["Section"] + "</td>";
        table += "<td>" + times[x]["Day"] + "</td>";
        table += "<td>" + convert24to12hour(times[x]["StartTime"]) + " - ";
        table += convert24to12hour(times[x]["StartTime"] + 150) + "</td>";
        table += '<td class="taNames">';
        for (var y = 0; y < (times[x]["TAs"].length); y++) {
            table += "<div>" + times[x]["TAs"][y] + "</div>";
        }
        table += "</td>";
        table += "</tr>";
    }
    table += "</table>";
    $(".labs").append(table);
});