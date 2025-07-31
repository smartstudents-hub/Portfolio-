
 
 const roles = ['Web Developer', 'UI/UX Designer', 'SEO Expert'];
let i = 0;
let j = 0;
const roleElement = document.getElementById('role');

function typeWriter() {
  if (i < roles.length) {
    if (j < roles[i].length) {
      roleElement.innerText += roles[i].charAt(j);
      j++;
      setTimeout(typeWriter, 200);
    } else {
      setTimeout(() => {
        roleElement.innerText = '';
        j = 0;
        i = (i + 1) % roles.length;
        typeWriter();
      }, 2000);
    }
  }
}

typeWriter();
