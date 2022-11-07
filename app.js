/*
window.addEventListener('load', function() {

    //Using a fetch API method
    let searchbtn = document.querySelector('#searchbtn');

    searchbtn.addEventListener('click', function(element) {
        element.preventDefault();

        fetch("superheroes.php")
            .then(response => {
                if (response.ok) {
                    return response.text()
                } else {
                    return Promise.reject('something went wrong!')
                }
            })
            .then(data => {
                alert(data)
            })
            .catch(error => console.log('There was an error: ' + error));
    }); 
});
*/

// Plain JavaScript AJAX
window.onload = function() {

    var searchbtn = document.querySelector('#searchbtn');
    var httpRequest;
  
    searchbtn.addEventListener('click', function(element) {
      element.preventDefault();
  
      httpRequest = new XMLHttpRequest();
  
      // GET Request
      var url = `superheroes.php?search=${document.getElementById('search').value}`;
      // var url = "superheroes.php ";
      httpRequest.onreadystatechange = load_superlist;
      httpRequest.open('GET', url, true);
      httpRequest.send();
    });
  
    function load_superlist() {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          let response = httpRequest.responseText;
          let list = document.querySelector('#result');
          list.innerHTML = response;
        } else {
          alert('There was a problem with the request.');
        }
      }
    }
  
  };
  