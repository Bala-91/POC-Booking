import React, { useEffect } from 'react';


function Calendar() {

  useEffect(() => {
    // Your client credentials
    var your_client_id = "sbox1669848954";

    // Initialize OnSched.js with clientId and environment (sbox or live)
    var onsched = window.OnSched(your_client_id, "sbox");

    // Get instance of elements to use for creating elements
    var elements = onsched.elements();

    // Initialize availability parameters with serviceId (required), and
    // any additional optional parameters
    var availabilityParams = { locationId: 'fd1486d6-1af6-41c2-b53d-b4d2cdead9db', serviceId: '271796', roundRobin: 1 };

    // Include any additional options (optional)
    var availabilityOptions = {};

    // Create the availability element
    var availability = elements.create("availability", availabilityParams, availabilityOptions);

    // Mount the element (which triggers the API)
    availability.mount("availability");
    
  }, [])



  return (
    <div id="availability"></div>
  )
}
export default Calendar;
