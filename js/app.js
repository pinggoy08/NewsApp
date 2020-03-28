const API_KEY = '09f3023e7b154f1582dbf07379774e0a'
const COUNTRY_CODE = document.querySelector('#selectCountry')
const CATEGORY_CODE = document.querySelector('#selectCategory')
const KEYWORDS = document.querySelector('#Search')
const containers = document.querySelector('.containers')
const results = document.querySelector('.results')
const search = document.querySelector('#btnSearch')



async function getNewsCountry(){
    const newsList = await fetch('https://newsapi.org/v2/top-headlines?country='+selectCountry.value+'&apiKey=09f3023e7b154f1582dbf07379774e0a')
                        .then(res => res.json())
                        .then(data => data)

                        console.log(newsList)

    const { articles , totalResults } = newsList
    let li = ''
    let result = `You have a total result of ${totalResults}`
    
    articles.forEach(article => {
        li += ` 
        <div class="newsContainer">
            <div class="newsHeader">
                <li>
                    <img src="${article.urlToImage}">
                </li>
            </div>
            <div class="newsBody">
                <li>
                    <h4>${article.title}</h4>
                </li>
                <li>
                    ${article.source.name}
                </li>
                <li>
                    <p>${article.content}</p>
                </li>
                <div class="newsUtility">
                    <a href="${article.url}">Go to this Page</a>
                    
                    <button style="border: none;"><i class="fa fa-bookmark" aria-hidden="true"></i></button>
                </div>
            </div>
            <div class="newsFooter">
                <li>
                    <p>Published at ${article.publishedAt}</p>
                </li>
            </div>
        </div>
        `
    });

    results.innerHTML = result
    containers.innerHTML = li

}




async function getNewsCountryAndCategory(){
    const newsList = await fetch('https://newsapi.org/v2/top-headlines?country='+selectCountry.value+'&category='+selectCategory.value+'&apiKey=09f3023e7b154f1582dbf07379774e0a')
                        .then(res => res.json())
                        .then(data => data)

                        console.log(newsList)

    const { articles , totalResults } = newsList
    let li = ''
    let result = `You have a total result of ${totalResults}`
    
    articles.forEach(article => {
        li += ` 
        <div class="newsContainer">
            <div class="newsHeader">
                <li>
                    <img src="${article.urlToImage}">
                </li>
            </div>
            <div class="newsBody">
                <li>
                    <h4>${article.title}</h4>
                </li>
                <li>
                    ${article.source.name}
                </li>
                <li>
                    <p>${article.content}</p>
                </li>
                <div class="newsUtility">
                    <a href="${article.url}">Go to this Page</a>
                    
                    <button style="border: none;"><i class="fa fa-bookmark" aria-hidden="true"></i></button>
                </div>
            </div>
            <div class="newsFooter">
                <li>
                    <p>Published at ${article.publishedAt}</p>
                </li>
            </div>
        </div>
        `
    });

    results.innerHTML = result
    containers.innerHTML = li
}



search.addEventListener("click", e=> {

    if(((document.querySelector('#selectCountry').value !=" ")||(document.querySelector('#selectCountry').value !=null)) && ((document.querySelector('#selectCategory').value ==" ") ||(document.querySelector('#selectCategory').value ==null))){

        getNewsCountry(e)
    }
    else if(((document.querySelector('#selectCountry').value!=" ")||(document.querySelector('#selectCountry').value !=null)) &&((document.querySelector('#selectCategory').value !=" ") ||(document.querySelector('#selectCategory').value !=null)) ) {
        getNewsCountryAndCategory(e)
    }

    // getNewsCountryAndCategory(e)
})


selectCountry.addEventListener('change', e =>{
    console.log(selectCountry.value)
})

selectCategory.addEventListener('change', e =>{
    console.log(selectCategory.value)
})