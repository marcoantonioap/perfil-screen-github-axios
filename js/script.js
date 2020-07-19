var container = document.getElementById('container');
container.style.visibility='hidden';
var button = document.getElementById('buttoneditperfil2');
var inputElement = document.querySelector('input');
var h1Element = document.getElementById('titleH1');
var h1Element2 = document.getElementById('title2H1');
var h1Element20 = document.getElementById('titleH2');
var h1Element22 = document.getElementById('title2H2');
var h1Element3 = document.getElementById('titleH3');
var h1Element33 = document.getElementById('title2H3');
var repoDiv = document.getElementById('repo');
var repoDiv1 = document.getElementById('repo1');
var repoDiv2 = document.getElementById('repo2');
var repoDiv3 = document.getElementById('repo3');
var repoDiv4 = document.getElementById('repo4');
var repoDiv5 = document.getElementById('repo5');

var aLinkedin = document.getElementById('linkedin'); 
var a1 = document.getElementById('linkao'); 
var a2 = document.getElementById('linkao1');
var a3 = document.getElementById('linkao2'); 
var a4 = document.getElementById('linkao3');
var a5 = document.getElementById('linkao4'); 
var a6 = document.getElementById('linkao5');

var theImg = document.getElementById('theimg');
var namePerfil = document.getElementById('nameperfil');
var bioPerfil = document.getElementById('bioperfil');
var followersPerfil = document.getElementById('followersperfil');
var followingPerfil = document.getElementById('followingperfil');
var blogPerfil = document.getElementById('blogperfil');
var companyPerfil = document.getElementById('companyperfil');
var locationPerfil = document.getElementById('locationperfil');
var emailPerfil = document.getElementById('emailperfil');
function limpar(){
    document.getElementById("titleH1").innerHTML="";
    document.getElementById("title2H1").innerHTML="";
    document.getElementById("titleH2").innerHTML="";    
    document.getElementById("title2H2").innerHTML="";
    document.getElementById("titleH3").innerHTML="";
    document.getElementById("title2H3").innerHTML="";

    a1.innerHTML = '<a href="' + "" + '">Link</a>';
    a2.innerHTML = '<a href="' + "" + '">Link</a>';
    a3.innerHTML = '<a href="' + "" + '">Link</a>';
    a4.innerHTML = '<a href="' + "" + '">Link</a>';
    a5.innerHTML = '<a href="' + "" + '">Link</a>';
    a6.innerHTML = '<a href="' + "" + '">Link</a>';

    a1.innerHTML = "";
    a2.innerHTML = "";
    a3.innerHTML = "";
    a4.innerHTML = "";
    a5.innerHTML = "";
    a6.innerHTML = "";
    

    theImg.src = "";
    
    document.getElementById('nameperfil').innerHTML="";
    document.getElementById('bioperfil').innerHTML="";
    document.getElementById('followersperfil').innerHTML="";
    document.getElementById('followingperfil').innerHTML="";
    document.getElementById('blogperfil').innerHTML="";
    document.getElementById('companyperfil').innerHTML="";
    document.getElementById('locationperfil').innerHTML="";
    document.getElementById('emailperfil').innerHTML="";
    container.style.visibility='hidden';
}
function renderRepositories(repositories) {   
    container.style.visibility='visible';           
                for (repo of repositories) {
                    const textElement = document.createTextNode(repo.name);
                    const linkElement = repo.html_url;

                    if(repo == repositories[0]){
                        h1Element.appendChild(textElement);
                        var abc = linkElement;
                        document.getElementById('linkao').innerHTML = '<a href="' + abc + '">Link</a>';
                        
                    }else if(repo == repositories[1]){
                        h1Element20.appendChild(textElement);
                        var abc = linkElement;
                        document.getElementById('linkao1').innerHTML = '<a href="' + abc + '">Link</a>';
                    }
                    else if(repo == repositories[2]){
                        h1Element2.appendChild(textElement);                        
                        var abc = linkElement;
                        document.getElementById('linkao3').innerHTML = '<a href="' + abc + '">Link</a>';
                    }else if(repo == repositories[3]){
                        h1Element33.appendChild(textElement);
                        var abc = linkElement;
                        document.getElementById('linkao5').innerHTML = '<a href="' + abc + '">Link</a>';
                    }else if(repo == repositories[4]){
                        h1Element3.appendChild(textElement);
                        var abc = linkElement;
                        document.getElementById('linkao2').innerHTML = '<a href="' + abc + '">Link</a>';
                    }else if(repo == repositories[5]){ 
                        h1Element22.appendChild(textElement);
                        var abc = linkElement;
                        document.getElementById('linkao4').innerHTML = '<a href="' + abc + '">Link</a>';
                    }
                  }                  
  }
  function renderUsers(data){
    container.style.visibility='visible'
    //image
    var avatar = data.avatar_url;
    theImg.src = avatar;//property of <img src=""/>

    //name/login
    var loginValue = data.login;
    var loginNode = document.createTextNode(loginValue);
    namePerfil.appendChild(loginNode);

    //bio
    var bioValue = data.bio;
    var bioNode = document.createTextNode(bioValue);
    bioPerfil.appendChild(bioNode);

    //followers
    var followersValue = data.followers;
    var followersNode = document.createTextNode(followersValue);
    followersPerfil.innerHTML = "Following: ";
    followersPerfil.appendChild(followersNode);

    //following
    var followingValue = data.following;
    var followingNode = document.createTextNode(followingValue);
    followingPerfil.innerHTML = "Followers: ";
    followingPerfil.appendChild(followingNode);

    //blog
    var blogValue = data.blog;
    var blogNode = document.createTextNode(blogValue);
    blogPerfil.appendChild(blogNode);

    //company
    var companyValue = data.company;
    var companyNode = document.createTextNode(companyValue);
    companyPerfil.appendChild(companyNode);

    //location
    var locationValue = data.location;
    var locationNode = document.createTextNode(locationValue);
    locationPerfil.appendChild(locationNode);
    
    //email
    var emailValue = data.email;
    var emailNode = document.createTextNode(emailValue);
    emailPerfil.appendChild(emailNode);
  }

function listRepositories() {
    var user = inputElement.value;

    if (!user) return;

    axios.get('https://api.github.com/users/' + user + '/repos')
      .then(function (response) {
        renderRepositories(response.data);
            axios.get('https://api.github.com/users/' + user)
            .then(function (response) {
                renderUsers(response.data);
            })
            .catch(function(error){
            alert(error);
            })
      })
      .catch(function(error){
          alert(error);
      })
  }


   



    




