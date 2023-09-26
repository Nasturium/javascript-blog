
/*
document.getElementById('test-button').addEventListener('click', function(){
    console.log("link was clicked!")
}); */

  /* remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
}

  /* add class 'active' to the clicked link */
  
  /* get 'href' attribute from the clicked link */
  
  /* find the correct article using the selector (value of 'href' attribute) */
  const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    clickedElement.classList.add('active')
    console.log('link clicked')

    const selector= clickedElement.getAttribute('href')
    console.log(selector)

    const articleSelector= document.querySelectorAll('selector')
    
    clickedElement.getAttribute('articleSelector');

    const targetArticle= document.querySelector(selector) 
    console.log(targetArticle)

     }

  /* remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.post .post.active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }
/* add class 'active' to the correct article */

    const links = document.querySelectorAll('.titles a');

    for(let link of links){
        link.addEventListener('click', titleClickHandler);
      }
  ;
  