/* Main.js */
//"use strict";

var someEntries = {
    entries: ["pick up son", "phone friend", "do groceries", "finish project"],
    getRand: function() { return this.entries[Math.ceil((Math.random() * this.entries.length-1))] }
};

function randItem(itemArray) {
    return Math.floor(Math.random() * itemArray.length);
}

var count = function(obj) {
    var i = 0;
    for(var key in obj) {
        if(obj.hasOwnProperty(key)) i++;
    }
    return i;
};

$(document).ready(function() {
    var dayArr = {};
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var colors1 = ["#DAF1A0", "#CB6571", "#6BA198", "#246C60"];
    
    var color2 = ["#A33643","#F87685","#DA5867","#6C1C25","#350A0F","#246C60","#5CC2B1","#3A9081","#12473F","#07231E","#83A135","#D2F675","#B3D656","#556A1C","#28340A"];
    var color3 = ["#A33643","#F87685","#DA5867","#6C1C25","#350A0F","#246C60","#5CC2B1","#3A9081","#12473F","#07231E","#83A135","#D2F675","#B3D656","#556A1C","#28340A"];

    // removed base color (#A33643) from list
    color2.shift();
    color2.sort();

    dayArr = setDays(days, color2);

    setTimetable(days, dayArr, color2);


    console.log(color2.length);

    testColors(color3);
    testColors(color2);
});

function setTimetable(dayNames, days, colors) {
    console.log($(".daySlot")[0]);

    for (var n = 0, max = dayNames.length; n < max; n++) {
        $(".weekSlot").append($('<div>', { class: "daySlot", id: dayNames[n] }).append($('<div>', { class: "itemSlot", onclick: "doSomething(this)", text: dayNames[n] })));
    }
    
    for (var day in days) {
        console.dir(days[day]);
        addItem(days[day], colors);
    }
    
    $(".weekSlot").append($('<div>', { class: "clear" }));

}

function addItem(day, colors) {
    var slot = $("#"+ day.dayName);

    for(var n = 0, len = day.len(); n < len; n++) {
        var colorIndex = randItem(colors);
        var textColor = Math.floor((1 - (colorIndex/(colors.length)))*colors.length);// : Math.round(1 - (colorIndex/colors.length-1));
        console.log(textColor);
        slot.append($('<div>', 
        { 
            class: "itemSlot", 
            onclick: "doSomething(this)", 
            text: day.entries[n].description 
        })
        .css({ "background-color": colors[colorIndex], "color": colors[textColor]}));
    }


}

function doSomething(item) {
    item.style.backgroundColor = randItem(color2);
}

function testColors(colors) {
    for(var n = 0, len = colors.length; n < len; n++) {
        $(".page").append(
            $('<div>').append(
            $('<div>', { 
                css: { 
                    "width": 20, 
                    "height":"5.5em", 
                    "background-color":colors[n], 
                    "float": "left"
                } 
            })
        ));
    } 
    $(".page").append($('<div>', { class: "clear" }));
}

function setDays(dayNames, colors) {
    var dayObjArray = {};

    function Entry(entryName) { 
        this.timeStarted = Date();
        this.description = entryName;
        this.specifics = null;
        this.timeSlot = 0;
        this.active = true;
        this.colorScheme = colors[randItem(colors)];
        this.timeCompleted = "";
        return this;
    }

    //day is a specific day (ie. monday, tuesday, etc.)
    function DayObj(dayName) {
        this.entries= [];
        this.dayName = dayName;

        this.addEntry = function(entryName) {
            this.entries.push((new Entry(entryName)));
        };

        this.deleteEntry = function(entryName) {
            Array.prototype.pop.call(this, entryName);
        };

        this.getEntry = function(entryName, property) {
            return this.entries[entryName][property];
        };

        this.switchEntry = function(switchEntry, withThisEntry) {
            var nSwitchEntry = entries.indexOf(switchEntry);
            var nWithEntry = entries.indexOf(withThisEntry);
            var temp = entries[nWithEntry];

            entries[nWithEntry] = entries[nSwitchEntry];
            entries[nSwitchEntry] = temp;
        };

        this.len = function() {
            return this.entries.length;
        };
    }

    for(var i = 0, len = dayNames.length; i < len; i++) {
        dayObjArray[dayNames[i]] = new DayObj(dayNames[i]);
    }

    // add some random entries from an array of entries
    for(var day in dayObjArray) {
        var n = 0;
        while(n++ < 10) {
            dayObjArray[day].addEntry(someEntries.getRand());
        }
    }

    return dayObjArray;
}


// make a memoizing function that stores prime numbers from an array of numbers
// prime number is: p > 1, and it is only divisble by itself and 1.
// composite numbers are non-prime numbers, ie. have more than 2 divisors
function isPrime(value) {
    // 1. A cache to store numbers that exists the first time the function is called

    // 2. Check for cached value, if value already stored, return the cached value

    // 3. return the prime value

}

// JavaScript does not have a native array method to find max value,
// make one using Math.max() that returns the max value
// ie. Math.max(3,4,65) // returns 65
var arrNum = [3,45,75,23]; 

function findMax(arr) {
    return Math.max.apply(null, arrNum);
}


