
/*
document.getElementById('test-button').addEventListener('click', function(){
    console.log("link was clicked!")
}); */

  /* remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
}


const activeArticles = document.querySelectorAll('.post.active');
for(let activeArticle of activeArticles){
  activeArticle.classList.remove('active');
} 

  /* add class 'active' to the clicked link */
  
  const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    clickedElement.classList.add('active')
    console.log('link clicked')

  
          
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }

    clickedElement.classList.add('active')

    const activeArticles = document.querySelectorAll('.post.active')

    for(let activeArticle of activeArticles){
      activeArticle.classList.add('active'); 
  }



  /* remove class 'active' from all articles */

  /* get 'href' attribute from the clicked link */
  
  /* find the correct article using the selector (value of 'href' attribute) */
  /*
  const selector = clickedElement.getAttribute('href')
    
    const article = document.querySelector(selector)    
    article.classList.add('active') */

    const articleSelector = clickedElement.getAttribute("href");
  console.log("was clicked:", articleSelector);
   const targetArticle = document.querySelector(articleSelector);
    targetArticle.classList.add("active");
        
}

/* add class 'active' to the correct article */

    const links = document.querySelectorAll('.titles a');

    for(let link of links){
        link.addEventListener('click', titleClickHandler);
      }