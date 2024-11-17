document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    
    // Get the search query from the input field
    const query = document.getElementById("query").value;

   
    // Display "Results" heading
    document.getElementById("resultsHeading").style.display = "block";

    // Send the search query to superheroes.php via AJAX (GET request)
    fetch(`superheroes.php?query=${encodeURIComponent(query)}`)
        .then(response => response.text())  // Expecting HTML as response
        .then(data => {
            // Insert the result into the 'result' div
            document.getElementById("result").innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching superhero data:', error);
            document.getElementById("result").innerHTML = "An error occurred while fetching the data.";
        });
});
