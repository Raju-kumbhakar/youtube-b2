const apiUrl = 'https://jsonplaceholder.typicode.com/users';

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Response from the API:');
    console.log(data);
    // You can process the data further or display it in a more user-friendly way here
  })
  .catch(error => {
    console.error('Error:', error);
  });
