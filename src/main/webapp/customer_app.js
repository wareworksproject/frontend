document.getElementById('customerForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent the default form submission

  // Create a FormData object to capture the form data
  const formData = new FormData(event.target);

  // Convert the FormData to a JSON object
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  // Send the data to the REST API using fetch()
  fetch('http://localhost:8080/customers', {  // Replace with your actual API endpoint
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'  // Tell the server you're sending JSON
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email
    })  // Convert data to a JSON string
  })
  .then(response => response.json())
  .then(responseData => {
    // Handle the response from the API
    console.log('Success:', responseData);
    alert('Customer added successfully!');
  })
  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
    alert('Failed to add customer.');
  });
});
