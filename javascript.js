const footer = document.querySelector('.footer');
const footerPara = document.createElement('p');
footerPara.textContent = "(c) heinohen 2022 "
footer.appendChild(footerPara);
const footerGitLink = document.createElement('a');
footerGitLink.href = "https://www.github.com/heinohen"
const footerGitImg = document.createElement('img');
footerGitImg.src = "./images/GitHub-Mark-32px.png";
footerGitImg.alt = "Gitcat";
footerGitLink.appendChild(footerGitImg);
footer.appendChild(footerGitLink);