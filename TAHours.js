$(document).ready(function () {
    var TAinfo = [
    {
        name: "Billy Buffum",
        userName: "buffumw",
        officeHours: "Wednesday 1:00 pm - 3:00 pm",
        demoHours: "",
        doodleLink: "TBD"
    },
    {

        name: "Lily Shellhammer",
        userName: "shellhal",
        officeHours: "Friday 2:30pm-4:30pm (2:30-4 Week 1) &amp; by appt.",
        demoHours: "",
        doodleLink: "http://doodle.com/poll/ufkhg85hi5s5z353"
    },
    {

        name: "Ernie Bodle",
        userName: "bodleer",
        officeHours: "Tuesday 10:00 am - 11:50 am",
        demoHours: "Monday 9:00 am - 10:50 am",
        doodleLink: "http://doodle.com/poll/2k7qpchatk4si2b9"
    },
    {

        name: "Courtney Miller",
        userName: "millcour",
        officeHours: "Tuesday &amp; Thursday 12-1",
        demoHours: "Wed 3-5pm & Fri 9-11am",
        doodleLink: "http://doodle.com/poll/uyrks347dak8ym7s"
    },
    {

        name: "Jia Chen",
        userName: "chenj2",
        officeHours: "Wed 12am to 2pm",
        demoHours: "Click Here",
        doodleLink: "http://doodle.com/poll/ug8hyakrfb69k4hv"
    },
    {

        name: "Aidan Carson",
        userName: "carsonai",
        officeHours: "Tuesday 10:00 - 12:00 pm",
        demoHours: "Tuesday 12:00 - 1:50 pm",
        doodleLink: "http://doodle.com/poll/5kzp6wg5dctpk3tfkarbhb2b/admin"
    },
    {

        name: "Katherine Bajno",
        userName: "bajnok",
        officeHours: "Tuesday 10-11:50 am",
        demoHours: "",
        doodleLink: ""
    },
    {

        name: "Megan McCormick",
        userName: "mccormeg",
        officeHours: "Wednesday 4pm-6pm",
        demoHours: "Wednesday 11am-1pm",
        doodleLink: "http://doodle.com/poll/far6c99y9yuxxvve"
    },
    {

        name: "Shannon Ernst",
        userName: "ernstsh",
        officeHours: "Thursday 10 am - 12 pm and by appointment",
        demoHours: "Monday 9 am - 11 am",
        doodleLink: "http://doodle.com/poll/3vspnd6uzugz26tc"
    },
    {

        name: "Jake Fenger",
        userName: "fengerj",
        officeHours: "Tuesday 4:00 pm - 6:00 pm",
        demoHours: "Friday 2:00 pm - 4:00 pm",
        doodleLink: "https://doodle.com/poll/zq3qk9mnfwzw7h23"
    },
    {

        name: "Daniel Grocki",
        userName: "grockid",
        officeHours: "Thur &amp; Fri 10-11",
        demoHours: " Monday 10 AM - 12 PM   Wednesday 11 AM - 1 PM",
        doodleLink: "http://doodle.com/poll/gcemmgucmxd6qhzw"
    },
    {

        name: "Matthew Lohr",
        userName: "lohrm",
        officeHours: "Thursday: 2 - 4 PM",
        demoHours: "Wednesday: 10 AM - 12 PM",
        doodleLink: "http://doodle.com/poll/wytu44pwwscyt4ty"
    },
    {

        name: "Lucas Campos-Davis",
        userName: "camposdl",
        officeHours: "Mon &amp; Wed: 12-1",
        demoHours: "Tues: 10-11:45 & Fri: 10-12",
        doodleLink: "https://doodle.com/poll/fuv7we7gvdn2yv9t"
    },
    {

        name: "Alex Niebur",
        userName: "niebura",
        officeHours: "Monday 4:00pm-6:00pm",
        demoHours: "Monday & Friday 10:00am-11:30am",
        doodleLink: "http://doodle.com/poll/zhwxmcc9kei4b5cr"
    },
    {

        name: "Zoe Steine-Hanson",
        userName: "steinehz",
        officeHours: "Friday 2:00 - 3:00 pm",
        demoHours: "Tuesday & Wednesday  2:00 - 3:00 pm",
        doodleLink: "http://doodle.com/poll/p98mrfthpnvabry2"
    },
    {

        name: "Xiaomeng Li (Leo)",
        userName: "lixiaome",
        officeHours: "Wednesday/Thursday 1:30pm-3:30pm in ILLC first floor",
        demoHours: "Friday<br>3:00pm-5:00pm in ILLC",
        doodleLink: "http://doodle.com/poll/5y7pprny3nk2aiup"
    },
    {

        name: "Louis Duvoisin",
        userName: "duvoisil",
        officeHours: "Monday 10:00 am - 12:00 pm",
        demoHours: "Tues 3:00 pm - 5:00 pm    Thur 12:30 pm - 2:00 pm, 4:00 pm -6:00pm",
        doodleLink: "http://doodle.com/poll/deqsv7debxpbq25a"
    },
    {

        name: "Cierra Shawe",
        userName: "shawec",
        officeHours: "Monday 12-1:50 pm and by appointment",
        demoHours: "",
        doodleLink: ""
    },
    {

        name: "Kyle Nichols",
        userName: "nichokyl",
        officeHours: "Monday 12-2pm",
        demoHours: "Thursday 2-4pm",
        doodleLink: "http://doodle.com/poll/xvzcd7wc9z6wm76i"
    },
    {

        name: "Taz Thenell",
        userName: "thenellt",
        officeHours: "Tuesday 1:30pm - 3pm",
        demoHours: "",
        doodleLink: "http://doodle.com/ez755hdrpi8ewezc"
    },
    {

        name: "Joshua Diedrich",
        userName: "diedricj",
        officeHours: "Monday 3:00pm - 4:00pm   Thursday 1:00pm - 2:00pm",
        demoHours: "Wednesday 10am-12pm",
        doodleLink: "https://doodle.com/poll/zzirnz939cg7st9m"
    },
    {

        name: "Chongxian Chen",
        userName: "chencho",
        officeHours: "Wednesday 10am-12pm",
        demoHours: "Wednesday 2pm-4pm",
        doodleLink: "http://doodle.com/poll/52e72a92fqgnvf42"
    },
    {

        name: "Henry Peterson",
        userName: "peterhen",
        officeHours: "Thursday 2:00pm - 4:00pm",
        demoHours: "",
        doodleLink: ""
    },
    {

        name: "Carl Beery",
        userName: "beeryt",
        officeHours: "Tuesday 10am - 12pm",
        demoHours: "Thursday 10am-12pm",
        doodleLink: "http://doodle.com/poll/6n2iunxa8x6bt784"
    },
    {

        name: "Natalie Suderman",
        userName: "suderman",
        officeHours: "Monday 3:00-5:00pm",
        demoHours: "Monday 12:00-2:00pm",
        doodleLink: "http://doodle.com/tukbatpshxtiyh7a"
    },
    {

        name: "Amber Horvath",
        userName: "horvatha",
        officeHours: "Monday/Wednesday/Thursday 2:00 - 4:00 pm in JOHNSON 220",
        demoHours: "",
        doodleLink: ""
    }
    ];

    var table = '<table class="TAHoursInfo">';
    table += "<tr><th>Name</th><th>Email</th><th>Office Hours (KEC 1174)</th><th>Grading Hours (KEC 1174)</th></tr>";

    for (var x = 0; x < TAinfo.length; x++) {
        table += "<tr>";
        table += "<td>" + TAinfo[x]["name"] + "</td>";
        table += '<td><a href="mailto:' + TAinfo[x]["userName"] + '@oregonstate.edu">' + TAinfo[x]["userName"] + "</a></td>";
        table += "<td>" + TAinfo[x]["officeHours"] + "</td>";
        table += '<td><a href="' + TAinfo[x]["doodleLink"] + '">' + TAinfo[x]["demoHours"] + "</a></td>";
        table += "</tr>";
    }
    table += "</table>";
    $(".TAHours").append(table);
});
