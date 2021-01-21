//

//First Problem
function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        console.log("This kinda parameter can never be negative");
        return 0;
    }
    else {
        var meter = kilometer * 1000;
        return meter;
    }

}
var result = kilometerToMeter(12.5);
console.log(result);


//Second Problem
function budgetCalculator(clock, phone, laptop) {
    if (clock < 0 || phone < 0 || laptop < 0) {
        console.log("This kinda parameters can never be negative")
        return 0;
    }
    else {
        var clockPrice = clock * 50;
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 500;
        var totalPrice = clockPrice + phonePrice + laptopPrice;
        return totalPrice;
    }
}
var result = budgetCalculator(2, 10.5, 0);
console.log(result);



// Third Problem
function hotelCost(daysToStay) {
    if (daysToStay < 0) {
        console.log("This kinda parameter can never be negative");
        return 0;
    }
    else if (daysToStay >= 0 && daysToStay <= 10) {
        var firstPartPrice = daysToStay * 100;
        return firstPartPrice;
    }
    else if (daysToStay >= 11 && daysToStay <= 20) {
        var daysRemaining = daysToStay - 10;
        var firstPartPrice = 100 * 10;
        var secondPartPrice = daysRemaining * 80;
        var totalPrice = secondPartPrice + firstPartPrice;
        return totalPrice;
    }
    else {
        var daysRemaining = daysToStay - 20;
        var firstPartPrice = 100 * 10;
        var secondPartPrice = 80 * 10;
        var thirdPartPrice = 50 * daysRemaining;
        var totalPrice = firstPartPrice + secondPartPrice + thirdPartPrice;
        return totalPrice;
    }
}
var result = hotelCost(45);
console.log(result);




//Fourth Problem
function megaFriend(friendsName) {
    if (friendsName.length == 0) {
        console.log("Error!");

    }
    else {
        var length = 0;
        for (var i = 0; i < friendsName.length; i++) {
            if (friendsName[i].length > length) {
                length = friendsName[i].length;
                var largest = friendsName[i];
            }
        }
        return largest;
    }
}
var friendsList = ["Moina", "Koinaa", "Shoynaa", "Toyniaaa", "Deonah", "Poinaa"];
var result = megaFriend(friendsList);
console.log(result);