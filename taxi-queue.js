function TaxiQueue(passengerQue,taxiQue) {
	//create a variable for passengers joining queue
	//create a variable for taxis joining queue
	var Passengers = passengerQue || 0;
	var taxis = taxiQue ||0;
	

	function joinQueue() {
		//add passengers to the queue
		Passengers++;
	}

	function leaveQueue() {
		//minus passengers to the queue
		if(Passengers > 0){
			Passengers--;
		}

	}

	function joinTaxiQueue() {
		//add taxis to the queue when passengers are more than one.
		
		if(Passengers >= 0){
			taxis++;
		}

	}

	function queueLength() {
		//return the counter for both joinQueue and leaveQueue
		if(Passengers >= 0){

			return Passengers;
		}

	}

	function taxiQueueLength() {
		//return the number of taxis in a queue
		return taxis;

	}

	function taxiDepart(){
		//if passengers are more than 12 taxi should depart(minus 12 passengers in queue and minus 1 taxi in taxi queue)
		if(Passengers >= 12 && taxis != 0){

			Passengers-= 12
			taxis--
		}
	}

	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart
	}
}