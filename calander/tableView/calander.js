$(document).ready(function () {
    var times = [
        {
            Section: 10,
            Day: "M",
            StartTime: 1600,
            Type: "Lab",
            TAs: ["Louis Duvoisin", "Mikky Cecil", "Henry Peterson"]
    }, {
            Section: 11,
            Day: "M",
            StartTime: 1800,
            Type: "Lab",
            TAs: ["Cierra Shawe", "Ernie Bodle", "Mason Sidebottom"]
    }, {
            Section: 12,
            Day: "M",
            StartTime: 1200,
            Type: "Lab",
            TAs: ["Jake Fenger", "Megan McCormick", "Louis Duvoisin"]
    }, {
            Section: 13,
            Day: "W",
            StartTime: 1200,
            Type: "Lab",
            TAs: ["Billy Buffum", "Connor Christensen", "Cierra Shawe"]
    }, {
            Section: 14,
            Day: "W",
            StartTime: 1800,
            Type: "Lab",
            TAs: ["Mason Sidebottom", "Mikky Cecil", "Xiaomeng Li"]
    }, {
            Section: 15,
            Day: "W",
            StartTime: 800,
            Type: "Lab",
            TAs: ["Dan VanHorn", "Natalie Suderman", "Dan Grocki"]
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

    var table = "<table>";
    table += "<tr><td>Section</td><td>Day</td><td>Start Time</td><td>End Time</td><td colspan='3'>TA's</td></tr>";

    for (var x = 0; x < times.length; x++) {
        table += "<tr>";
        table += "<td>" + times[x]["Section"] + "</td>";
        table += "<td>" + times[x]["Day"] + "</td>";
        table += "<td>" + convert24to12hour(times[x]["StartTime"]) + "</td>";
        table += "<td>" + convert24to12hour(times[x]["StartTime"] + 150) + "</td>";
        table += '<td class="taNames">';
        for (var y = 0; y < (times[x]["TAs"].length); y++) {
            table += "<div>"+times[x]["TAs"][y]+"</div>";
        }
        table += "</td>";
        table += "</tr>";
    }
    table += "</table>";
    $("body").append(table);
});