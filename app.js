const api_url = "https://restcountries.com/v3/all";
async function getData(url) {

  await fetch(url)
        .then(res => res.json())
        .then(data => countries(data));        
  
}
getData(api_url);
const countries = (data) => {
    var html = 
     '<table id = "filterTable" class="table table-bordered"><thead><tr> <th>Country Name</th><th> Capital</th><th> Region</th><th>Population</th><th>Independent</th><th>Flag</th><th>Edit</th></tr></thead><tbody class="btgccolor">';
    console.log(data);
    data.forEach(country => {
        html += '<tr><td>' + country.name.common + '</td><td>' + country.capital + '</td><td>' + country.region + '</td><td>' + country.population + '</td><td>' + country.independent + '</td><td>' + country.flag + 
        '<td><a id="btn-detail" class="btn btn-info" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Edit</a ></td> </td></tr>';    
       
    });
    html += '</tbody></table>';
    document.getElementById('countryTable').innerHTML = html;
};

function searchCountry() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("countryInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("filterTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}




