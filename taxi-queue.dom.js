// write your DOM code here.


// DOM element references
var passengerCount = document.querySelector(".passenger_queue_count");
var passengerJoinBtn = document.querySelector(".join_queue");
var passengerLeaveBtn = document.querySelector(".leave_queue");

var taxiCount = document.querySelector(".taxi_queue_count");
var taxiJoinQue = document.querySelector(".join_taxi_queue");
var taxiDeparture = document.querySelector(".depart");



// create Factory Function instance

const taxiQueue = TaxiQueue();
// DOM events

passengerJoinBtn.addEventListener('click',function() {
 
    taxiQueue.joinQueue();
 
    passengerCount.innerHTML = taxiQueue.queueLength(); 
});

passengerLeaveBtn.addEventListener('click',function() {
 
    taxiQueue.leaveQueue();
 
    passengerCount.innerHTML = taxiQueue.queueLength(); 
});

taxiJoinQue.addEventListener('click',function() {
 
    taxiQueue.joinTaxiQueue();
 
    taxiCount.innerHTML = taxiQueue.taxiQueueLength(); 
});

taxiDeparture.addEventListener('click',function() {
 
    taxiQueue.taxiDepart();
    taxiQueue.queueLength(); 
 
    taxiCount.innerHTML = taxiQueue.taxiQueueLength(); 
    passengerCount.innerHTML = taxiQueue.queueLength(); 
});


