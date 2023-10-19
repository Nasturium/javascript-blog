
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
      articleTags = 'data-tags';  

      function generateTitleLinks(customSelector = ''){
    
      /* remove contents of titleList */

      const titleList = document.querySelector(optTitleListSelector);

      titleList.innerHTML='';
    
      /* for each article */
      const articles = document.querySelectorAll(optArticleSelector + customSelector)

      for(let article of articles){

        /* get the article id */
        const articleId = article.getAttribute("id");
      
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

        const createTags = article.getAttribute(articleTags)
            
        /* split tags into array */
        const createTagsArray = createTags.split(' ');
        
        /* START LOOP: for each tag */
        for(let tag of createTagsArray){
          console.log(createTagsArray)
          /* generate HTML of the link */
          const linkHTML = '<li> <a href="#tag-' + tag + '"><span>' + tag + '</span></a> </li> ';
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
    function tagClickHandler(event){
      /* prevent default action for this event */
      event.preventDefault();
      const clickedElement = this;
      clickedElement.classList.add('active')
     
      /* make new constant named "clickedElement" and give it the value of "this" */
    
      /* make a new constant "href" and read the attribute "href" of the clicked element */
      const href = clickedElement.getAttribute('href')    
    
      /* make a new constant "tag" and extract tag from the "href" constant */
      const tag = href.replace('#tag-', '');
    
      /* find all tag links with class active */
      const tagLinks = document.querySelectorAll('a.active[href^="#tag-"]')
      /* START LOOP: for each active tag link */
          for(let tagLink of tagLinks){
        /* remove class active */
        tagLink.classList.remove('active');

      /* END LOOP: for each active tag link */
    }
      /* find all tag links with "href" attribute equal to the "href" constant */
      const hashTags = document.querySelectorAll('a[href^="#tag-' + href + '"]')
      /* START LOOP: for each found tag link */
    for(let hashTag of hashTags){
    
        /* add class active */
        hashTag.classList.add('active');
      /* END LOOP: for each found tag link */
    }
      /* execute function "generateTitleLinks" with article selector as argument */
      generateTitleLinks('[data-tags~="' + tag + '"]');
    }
    
    function addClickListenersToTags(){
      /* find all links to tags */
     const tagLinks = document.querySelectorAll('a[href^="#tag-"]')
      /* START LOOP: for each link */
        for(let tagLink of tagLinks){
        /* add tagClickHandler as event listener for that link */
          tagLink.addEventListener('click', tagClickHandler);
          console.log('clicked')
      /* END LOOP: for each link */
        }
    }
    
    addClickListenersToTags();

    optArticleAuthorSelector = ".data-authors"

    function generateAuthors(){

      const articles = document.querySelectorAll(optArticleSelector)

      for(let article of articles){

        const authorList = article.querySelector(optArticleTagsSelector);

        /* make html variable with empty string */
        authorList.innerHTML='';

      const author = article.getAttribute(optArticleAuthorSelector)
      
      }

    }

    generateAuthors();

      function addClickListenersToAuthors(){

      author.addEventListener('click', authorClickHandler);

    }
    addClickListenersToAuthors();