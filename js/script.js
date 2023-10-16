
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

      const optArticleSelector = '.post',
      optTitleSelector = '.post-title',
      optTitleListSelector = '.titles',
      optArticleTagsSelector = '.post-tags .list',
      articleTags = '.data-tags';  

    function generateTitleLinks(){
    
      /* remove contents of titleList */

      const titleList = document.querySelector(optTitleListSelector);

      titleList.innerHTML='';
    
      /* for each article */
      const articles = document.querySelectorAll(optArticleSelector)

      for(let article of articles){

        /* get the article id */
        const articleId = article.getAttribute("Id");
      
        /* find the title element */
        const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    
        /* get the title from the title element */
      
    
        /* create HTML of the link */
        const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
        /* insert link into titleList */
        titleList.innerHTML += linkHTML;
        console.log(titleList)
    }

    const links = document.querySelectorAll('.titles a');

    for(let link of links){
      link.addEventListener('click', titleClickHandler);
  }
  }
    
    generateTitleLinks();

    function generateTags(){

      /* find all articles */
       const articles = document.querySelectorAll(optArticleSelector)

      for(let article of articles){
      /* START LOOP: for every article: */
    
        /* find tags wrapper */
        const tagList = article.querySelector(optArticleTagsSelector);

        /* make html variable with empty string */
        tagList.innerHTML='';
    
        /* get tags from data-tags attribute */

        const articleTags = article.getAttribute('data-tags')
            
        /* split tags into array */
        const articleTagsArray = articleTags.split(' ');
        
        /* START LOOP: for each tag */
        for(let tag of articleTagsArray){
          console.log(articleTagsArray)
          /* generate HTML of the link */
          const linkHTML = '<li><a href="#' + articleTags + '"><span>' + tagList + '</span></a></li>';
          /* add generated code to html variable */
          tagList.innerHTML += linkHTML;
          console.log(tagList)
          
        }
    
        /* END LOOP: for each tag */
    
        /* insert HTML of all the links into the tags wrapper */
    
      /* END LOOP: for every article: */
      }
    }
    
    generateTags();