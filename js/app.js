//The code for the backend off this project.


//Initialitation/Define variables
const API_KEY = '09f3023e7b154f1582dbf07379774e0a'
const COUNTRY_CODE = document.querySelector('#selectCountry')
const CATEGORY_CODE = document.querySelector('#selectCategory')
const KEYWORDS = document.querySelector('#searchKeyword')
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

async function getNewsCategory(){
    const newsList = await fetch('https://newsapi.org/v2/top-headlines?category='+selectCategory.value+'&apiKey=09f3023e7b154f1582dbf07379774e0a')
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

async function getNewsKeyword(){
    const newsList = await fetch('https://newsapi.org/v2/top-headlines?q='+searchKeyword.value+'&apiKey=09f3023e7b154f1582dbf07379774e0a')
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

async function getNewsCountryAndCategoryAndKeyword(){
    const newsList = await fetch('https://newsapi.org/v2/top-headlines?country='+selectCountry.value+'&category='+selectCategory.value+'&q='+searchKeyword.value+'&apiKey=09f3023e7b154f1582dbf07379774e0a')
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

async function getNewsCountryAndKeyword(){
    const newsList = await fetch('https://newsapi.org/v2/top-headlines?country='+selectCountry.value+'&q='+searchKeyword.value+'&apiKey=09f3023e7b154f1582dbf07379774e0a')
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

async function getNewsCategoryAndKeyword(){
    const newsList = await fetch('https://newsapi.org/v2/top-headlines?&category='+selectCategory.value+'&q='+searchKeyword.value+'&apiKey=09f3023e7b154f1582dbf07379774e0a')
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


//Eventlistener for the search button.
search.addEventListener("click", e=> {

   if(((document.querySelector('#selectCountry').value !=" ")||(document.querySelector('#selectCountry').value !=null)) && ((document.querySelector('#selectCategory').value !=" ")||(document.querySelector('#selectCategory').value !=null)) && ((document.querySelector('#searchKeyword').value !=" ")||(document.querySelector('#searchKeyword').value !=null))){

    getNewsCountryAndCategoryAndKeyword(e)
    console.log("gotNewsCountryAndCategoryAndKeyword!")
   }

   else if(((document.querySelector('#selectCountry').value !=" ")||(document.querySelector('#selectCountry').value !=null)) && ((document.querySelector('#searchKeyword').value !=" ")||(document.querySelector('#searchKeyword').value !=null))){

    getNewsCountryAndKeyword(e)
    console.log("gotNewsCountryAndKeyword!")
   }

   else if(((document.querySelector('#selectCountry').value !=" ")||(document.querySelector('#selectCountry').value !=null)) && ((document.querySelector('#selectCategory').value !=" ")||(document.querySelector('#selectCategory').value !=null))){

    getNewsCountryAndCategory(e)
    console.log("gotNewsCountryAndCategory!")

   }

   else if(((document.querySelector('#selectCountry').value !=" ")||(document.querySelector('#selectCountry').value !=null))){

    getNewsCountry(e)
    console.log("gotNewsCountry!")

   }

   else if(((document.querySelector('#selectCountry').value ==" ")||(document.querySelector('#selectCountry').value ==null)) && ((document.querySelector('#selectCategory').value !=" ")||(document.querySelector('#selectCategory').value !=null)) && ((document.querySelector('#searchKeyword').value !=" ")||(document.querySelector('#searchKeyword').value !=null))){

    getNewsCategoryAndKeyword(e)
    console.log("gotNewsCategoryAndKeyword!")
   }

   else if(((document.querySelector('#searchKeyword').value !=" ")||(document.querySelector('#searchKeyword').value !=null))){

    getNewsKeyword(e)
    console.log("gotNewsKeyword!")

   }


   else if(((document.querySelector('#selectCategory').value !=" ")||(document.querySelector('#selectCategory').value !=null))){

    getNewsCategory(e)
    console.log("gotNewsCategory!")
   }
   
    
})


selectCountry.addEventListener('change', e =>{
    console.log(selectCountry.value)
})

selectCategory.addEventListener('change', e =>{
    console.log(selectCategory.value)
})

searchKeyword.addEventListener('change', e =>{
    console.log(searchKeyword.value)
})