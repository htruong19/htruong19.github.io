/* Add any JavaScript you need to this file. */
var textbook = [
  /*images obtained from self photography*/
  {
    Code: 'EDc',
    Name: 'Introduction to Electrodynamics: Fourth Edition',
    Desc:
      'By David J Griffiths, a junior/senior level undergraduate textbook on Electricity and Magnetism',
    Category: 'Physics',
    Price: 100
  },
  {
    Code: 'QMc',
    Name: 'Introduction to Quantum Mechanics: Second Edition',
    Desc:
      'By David J Griffiths, a textbook that introduces you how to use quantum mechanics through basic theory and applications',
    Category: 'Physics',
    Price: 80
  },
  {
    Code: 'PATHc',
    Name: 'Basic Pathology: Ninth Edition',
    Desc:
      "By the team who expanded on Nelson Fausto's textbook, the textbook teaches you the basis of pathology",
    Category: 'Biology',
    Price: 20
  },
  {
    Code: 'CMBc',
    Name: 'Cell and Molecular Biology: Sixth Edition',
    Desc:
      'By Gerald Karp, this textbook informs the readers on the concepts within cellular and molecular biology',
    Category: 'Biology',
    Price: 20
  },
  {
    Code: 'MVCc',
    Name: 'Multiivariable Calculus: Seventh Edition',
    Desc:
      'By James Stewart, this textbook teaches you how to perform multivariable calculus through application of theories taught',
    Category: 'Math',
    Price: 50
  },
  {
    Code: 'MPc',
    Name: 'Modern Physics for Scientists and Engineers: Second Edition',
    Desc:
      'By John R. Taylor and colleagues, this textbook introduces you into different fields within modern physics, from quantum mechanics to relativistic mechanics',
    Category: 'Physics',
    Price: 80
  },
  {
    Code: 'Ec',
    Name: 'Electronics, A Physical Approach',
    Desc:
      'By David W. Snoke, this textbook informs the reader on the different concepts found in the electronics field',
    Category: 'Physics',
    Price: 100
  },
  {
    Code: 'TPc',
    Name: 'Concepts in Themal Physics: Second Edition',
    Desc:
      'By Stephen J and Katherine M Blundell, this textbook explores the concepts within Thermal Physics',
    Category: 'Physics',
    Price: 40
  },
  {
    Code: 'APDEc',
    Name: 'Applied Partial Differential Equations: Fifth Edition',
    Desc:
      'By Richard Haberman, this textbook shows the application of using partial differential equations',
    Category: 'Math',
    Price: 40
  },
  {
    Code: 'CLFc',
    Name: 'Calculus for the Life Science',
    Desc: 'By Greenwell and colleagues, this textbook introduces calculus to biologists',
    Category: 'Math',
    Price: 20
  },
  {
    Code: 'UPc',
    Name: 'University Physics: 13th Edition Vol 1 + 2',
    Desc:
      'By Young and Freedman, this textbook acts as the link between what is needed to be learnt towards undergrad physics',
    Category: 'Physics',
    Price: 30
  }
];

var cat = 'All'; //initialize category to all

function catelog() {
  //function to populate grid with items that fits the category
  var grd = document.querySelector('#grid'); //select query to grid and store into variable grd
  grd.innerHTML = ''; //resets table to empty

  for (var i = 0; i < textbook.length; i++) {
    if (cat === 'All' || cat === textbook[i].Category) {
      let div = document.createElement('div');

      let img = document.createElement('img');
      let pimg = document.createElement('p');
      img.src = './images/' + textbook[i].Code + '.jpg';
      img.alt = '';

      let hname = document.createElement('h');
      let pdesc = document.createElement('p');
      let pprice = document.createElement('p');

      let name = document.createTextNode(textbook[i].Name);
      let desc = document.createTextNode(textbook[i].Desc);
      let price = document.createTextNode('$' + textbook[i].Price + ' CAD');

      pimg.appendChild(img);
      hname.appendChild(name);
      pdesc.appendChild(desc);
      pprice.appendChild(price);

      div.appendChild(pimg);
      div.appendChild(hname);
      div.appendChild(pdesc);
      div.appendChild(pprice);

      grd.appendChild(div);
    }
  }
}

function formValidation() {
  var name = document.forms['contactForm']['Name'].value;
  var comment = document.forms['contactForm']['comment'].value;
  var conttype = document.forms['contactForm']['contacttype'].value;
  var address = document.forms['contactForm']['Address'].value;
  var city = document.forms['contactForm']['city'].value;
  var PC = document.forms['contactForm']['Postcode'].value;
  var ON = document.forms['contactForm']['orderNumber'].value;

  if (name.length === 0) {
    alert('No Input, please enter your full name');
    return false;
  }
  if (address.length === 0) {
    alert('No Input, please enter your address.');
    return false;
  }
  if (city.length === 0) {
    alert('No city selected, please select your city');
    return false;
  }
  if (PC.length === 0) {
    alert('No Input, please enter your postal code.');
    return false;
  }

  if (conttype.length === 0) {
    alert('No type selected, please pick a type');
    return false;
  }
  if (comment.length === 0) {
    alert('No Input, please enter a comment');
    return false;
  }
  if (document.getElementById('OrderProb').style.display === 'block') {
    if (ON.length === 0) {
      alert('No Input, please enter your Order Number');
    }
    return false;
  }

  return true;
}

function orderProbShow() {
  document.getElementById('OrderProb').style.display = 'block';
}
function orderProbHide() {
  document.getElementById('OrderProb').style.display = 'none';
}

window.onload = function() {

  var all = document.querySelector('#All');
  var phys = document.querySelector('#Physics');
  var math = document.querySelector('#Math');
  var bio = document.querySelector('#Biology');
  var title = document.querySelector('#Title');
  var loc = location.href;

  if(loc.match("index")){
    catelog(); //initially populate with default category: "All"
  }

  function catall() {
    //Category: "All"
    cat = 'All';
    catelog();
    document.getElementById('sortname').innerHTML = 'All Selections of Textbooks';
  }

  all.addEventListener('click', catall);
  title.addEventListener('click', catall);

  function catphys() {
    //Category: "Physics"
    cat = 'Physics';
    catelog();
    document.getElementById('sortname').innerHTML = 'Physics Textbooks';
  }

  phys.addEventListener('click', catphys);

  function catmath() {
    //Category: "Math"
    cat = 'Math';
    catelog();
    document.getElementById('sortname').innerHTML = 'Math Textbooks';
  }

  math.addEventListener('click', catmath);

  function catbio() {
    //Category: "Biology"
    cat = 'Biology';
    catelog();
    document.getElementById('sortname').innerHTML = 'Biology Textbooks';
  }

  bio.addEventListener('click', catbio);
};
