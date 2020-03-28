function getNewsCountry(){
    fetch('https://newsapi.org/v2/top-headlines?country='+selectCountry.value+'&apiKey=09f3023e7b154f1582dbf07379774e0a')
     .then(response =>{
         if (!response.ok) {
             throw Error("ERROR")
             
         } return response.json();
     })
     .then(data =>{
          console.log(data)

         const html = data.articles

         .map(articles => {

            // console.log(articles);

             return `

             <div class="newsContainer">
        <div class="newsHeader">
            <li>
                 <img src="${articles.urlToImage}">
            </li>
         </div>
         <div class="newsBody">
             <li>
               <h4>${articles.title}</h4>
             </li>
             <li>
                ${articles.source.name}
             </li>
            <li>
                <p>${articles.content}</p>
            </li>
             <div class="newsUtility">
                <a href="${articles.url}">Go to this Page</a>
                
                
               <button style="border: none;"><i class="fa fa-bookmark" aria-hidden="true"></i></button>
             </div>
         </div>
         <div class="newsFooter">
            <li>
                 <p>Published at ${articles.publishedAt}</p>
            </li>
        </div>
    </div>
             `
             
         }) 
         .join(" ");
         document.querySelector(".containers").insertAdjacentHTML("afterbegin", html)
        
     })
     .catch(error => {
         console.log(error);
     })
}