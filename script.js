const getCountries=()=>{
    const xhr=new XMLHttpRequest();
    xhr.open("GET","https://restcountries.com/v3.1/all");
    xhr.send();

    xhr.responseType="json";//data format
    xhr.onload=()=>{
        const countries=xhr.response;
        //Get all the countries from Asia continent /region using Filter function
        var asiaregion=countries.filter((a)=>
            a.region=="Asia");
        console.log("Asiaregion:",asiaregion);

        //Get all the countries with a population of less than 2 lakhs using Filter function
var populationunder2L=countries.filter((b)=>
b.population<"200000");
console.log("Population:",populationunder2L);

//Print the following details name, capital, flag using forEach function
countries.forEach(c=>console.log(`Country : ${c.name.common},Capital : ${c.capital},flag: ${c.flag}`));

//Print the total population of countries using reduce function
var totalpopulation = countries.map((d)=>d.population).reduce((sum,i)=>sum+i,0);
console.log(totalpopulation);

//Print the country which uses US Dollars as currency
var usdcurrency=countries.filter((e)=>e.currencies=="USD");
console.log("usdcurrency:",usdcurrency);
    };


};
getCountries();