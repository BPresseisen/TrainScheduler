// Initialize Firebase
var config = {
        
// Initialize Firebase
    apiKey: "AIzaSyBYRjP-d8cc9QsyS53tdykXBL2jkd0cEHM",
    authDomain: "trainscheduler-b442a.firebaseapp.com",
    databaseURL: "https://trainscheduler-b442a.firebaseio.com",
    projectId: "trainscheduler-b442a",
    storageBucket: "trainscheduler-b442a.appspot.com",
    messagingSenderId: "848887994801"
};

firebase.initializeApp(config);
    
var database = firebase.database();
    
database.ref().on("child_added", function(snapshot) {
    
// add table rows
var tr = $("<tr>")
    .append($("<td>").text(snapshot.val().train))
    .append($("<td>").text(snapshot.val().destination))
    .append($("<td>").text(snapshot.val().frequency))
    .append($("<td>").text(snapshot.val().nextTrain))
    .append($("<td>").text(snapshot.val().minutesAway))
                    
    $("tbody").append(tr);
});
    
$(document).ready(function () {
    
    $("#submit-button").on("click", (event) => {
    event.preventDefault();
    
    var train = $("#train-name").val();
    var destination = $("#destination").val();
    var firstTrain = $("#firstTrain-time").val();
    var frequency = $("#frequency").val();
    
    // var nextTrain is a calculated field
    
    console.log("TRAIN NAME IS: " + train);
    console.log("DESTINATION IS: " + destination);
    console.log("FIRST TRAIN IS: " + firstTrain);
    console.log("FREQUENCY IS: " + frequency);
    
    // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(firstTrain, "HH:mm").subtract(1, "years");
    console.log("FIRST TIME CONVERTED IS: " + firstTimeConverted);
    
    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
    
    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);
    
    // Time apart (remainder)
    var remainder = diffTime % frequency;
    console.log("REMAINDER IS: " + remainder);
    
    // Minute Until Train
    var tMinutesTillTrain = frequency - remainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
    
    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes").format("hh:mm");
    console.log("NEXT TRAIN ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
    
    database.ref().push({
    
        train: train,
        destination: destination,
        frequency: frequency,
        nextTrain: nextTrain,
        minutesAway : tMinutesTillTrain
    
        });
    
    // form empty method??
    //$(".form-group")
    
    resetAllValues();
    });
    
   

    // $("train-name").val()="";
    // $("destination").val()="";
    // $("firstTrain-time").val()="";
    // $("frequency").val()="";
    
});

function resetAllValues() {
    // $('.fetch_results').find('input:text').val('');
    $('.fetch_results').val('');
  }
