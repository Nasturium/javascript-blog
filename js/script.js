
/*
document.getElementById('test-button').addEventListener('click', function(){
    console.log("link was clicked!")
}); */


  const activeLinks = document.querySelectorAll('.titles a.active');

for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
}


const activeArticles = document.querySelectorAll('.post.active');
for(let activeArticle of activeArticles){
  activeArticle.classList.remove('active');
} 
  
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
      activeArticle.classList.remove('active'); 
  }

     const articleSelector = clickedElement.getAttribute("href");
  console.log("was clicked:", articleSelector);
   const targetArticle = document.querySelector(articleSelector);
    targetArticle.classList.add("active");
        
}

    const links = document.querySelectorAll('.titles a');

    for(let link of links){
        link.addEventListener('click', titleClickHandler);
      

      const optArticleSelector = '.post',
      optTitleSelector = '.post-title',
      optTitleListSelector = '.titles';
    
    function generateTitleLinks(){
    
      /* remove contents of titleList */

      const titleList = document.querySelector(optTitleListSelector).innerHTML='';
    
      /* for each article */
      const articles = document.querySelectorAll(optArticleSelector)

      for(let article of articles)
         
        /* get the article id */
        const articleId = clickedElement.getElementById("article-1");
      
        /* find the title element */
        const title = document.querySelectorAll
    
        /* get the title from the title element */
        const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    
        /* create HTML of the link */
        const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
        /* insert link into titleList */
    }
    generateTitleLinks();