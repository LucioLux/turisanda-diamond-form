 // Shrink Navbar on Scroll
window.onload = function() {MainSectionPadding()};

function MainSectionPadding(){
  let h = document.getElementById("header").clientHeight;
  document.getElementById("main").style.paddingTop = h +"px";
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  if (document.body.scrollTop > 48 || document.documentElement.scrollTop > 48) {
    document.getElementById("header").classList.add("py-1");
    document.getElementById("header").classList.remove("py-5");
    document.getElementById("TU-logo").style.height = "24px";
    document.getElementById("diamond-head").style.opacity = 1;

  } else {
    document.getElementById("header").classList.add("py-5");
    document.getElementById("header").classList.remove("py-1");
    document.getElementById("TU-logo").style.height = "32px";
    document.getElementById("diamond-head").style.opacity = 0;
  }
}


// Partial result product 1
function partResult1 () {
  
  let price1 = Number(30);
  let quote1 = document.getElementById("q1").value;
  let result1 = price1 * quote1;
  
  document.getElementById("r1").innerHTML = result1; 
  
  if (quote1 == 0) {
    document.getElementById("check1").checked = false;
    document.getElementById("check1").disable = true;
  } else {
    document.getElementById("check1").checked = true;
  }

  return result1;

}

// Partial result product 2
function partResult2() {
  
  let price2 = Number(17);
  let quote2Usa = document.getElementById("q2-usa").value;
  let quote2Mau = document.getElementById("q2-mau").value;
  let quote2Mal = document.getElementById("q2-mal").value;
  let quote2Sey = document.getElementById("q2-sey").value;
  let quote2Mad = document.getElementById("q2-mad").value;
  let quote2Tha = document.getElementById("q2-tha").value;
  let quote2Gia = document.getElementById("q2-gia").value;
  let quote2Sud = document.getElementById("q2-sud").value;
  let quote2Emi = document.getElementById("q2-emi").value;
  let quote2Car = document.getElementById("q2-car").value;
  let quote2Pol = document.getElementById("q2-pol").value;
  let quote2Aus = document.getElementById("q2-aus").value;
  let quote2Nil = document.getElementById("q2-nil").value;
  let quote2Per = document.getElementById("q2-per").value;

  let result2 = (price2 * quote2Usa) + 
                (price2 * quote2Mau) +
                (price2 * quote2Mal) +
                (price2 * quote2Sey) +
                (price2 * quote2Mad) +
                (price2 * quote2Tha) +
                (price2 * quote2Gia) +
                (price2 * quote2Sud) + 
                (price2 * quote2Emi) +
                (price2 * quote2Car) +
                (price2 * quote2Pol) +
                (price2 * quote2Aus) +
                (price2 * quote2Nil) +
                (price2 * quote2Per); 
  
  document.getElementById("r2").innerHTML = result2;

  if (quote2Usa == 0) {
    document.getElementById("p2-check-usa").checked = false;
    document.getElementById("p2-check-usa").disable = true;
  } else {
    document.getElementById("p2-check-usa").checked = true;
  }

  if (quote2Mau == 0) {
    document.getElementById("p2-check-mau").checked = false;
    document.getElementById("p2-check-mau").disable = true;
  } else {
    document.getElementById("p2-check-mau").checked = true;
  }

  if (quote2Mal == 0) {
    document.getElementById("p2-check-mal").checked = false;
    document.getElementById("p2-check-mal").disable = true;
  } else {
    document.getElementById("p2-check-mal").checked = true;
  }

  if (quote2Sey == 0) {
    document.getElementById("p2-check-sey").checked = false;
    document.getElementById("p2-check-sey").disable = true;
  } else {
    document.getElementById("p2-check-sey").checked = true;
  }

  if (quote2Mad == 0) {
    document.getElementById("p2-check-mad").checked = false;
    document.getElementById("p2-check-mad").disable = true;
  } else {
    document.getElementById("p2-check-mad").checked = true;
  }

  if (quote2Tha == 0) {
    document.getElementById("p2-check-tha").checked = false;
    document.getElementById("p2-check-tha").disable = true;
  } else {
    document.getElementById("p2-check-tha").checked = true;
  }

  if (quote2Gia == 0) {
    document.getElementById("p2-check-gia").checked = false;
    document.getElementById("p2-check-gia").disable = true;
  } else {
    document.getElementById("p2-check-gia").checked = true;
  }

  if (quote2Sud == 0) {
    document.getElementById("p2-check-sud").checked = false;
    document.getElementById("p2-check-sud").disable = true;
  } else {
    document.getElementById("p2-check-sud").checked = true;
  }

  if (quote2Emi == 0) {
    document.getElementById("p2-check-emi").checked = false;
    document.getElementById("p2-check-emi").disable = true;
  } else {
    document.getElementById("p2-check-emi").checked = true;
  }

  if (quote2Car == 0) {
    document.getElementById("p2-check-car").checked = false;
    document.getElementById("p2-check-car").disable = true;
  } else {
    document.getElementById("p2-check-car").checked = true;
  }

  if (quote2Pol == 0) {
    document.getElementById("p2-check-pol").checked = false;
    document.getElementById("p2-check-pol").disable = true;
  } else {
    document.getElementById("p2-check-pol").checked = true;
  }

  if (quote2Aus == 0) {
    document.getElementById("p2-check-aus").checked = false;
    document.getElementById("p2-check-aus").disable = true;
  } else {
    document.getElementById("p2-check-aus").checked = true;
  }

  if (quote2Nil == 0) {
    document.getElementById("p2-check-nil").checked = false;
    document.getElementById("p2-check-nil").disable = true;
  } else {
    document.getElementById("p2-check-nil").checked = true;
  }

  if (quote2Per == 0) {
    document.getElementById("p2-check-per").checked = false;
    document.getElementById("p2-check-per").disable = true;
  } else {
    document.getElementById("p2-check-per").checked = true;
  }
  
  return result2;

}

// Partial result product 3
function partResult3() {
  
  let price3 = Number(20);
  let q3A = Number(0);
  let q3B= Number(0);
 
  let checkA = document.getElementById("text-area-A-p3");
  
  if (checkA.value != "") {
    document.getElementById("checkA-p3").checked = true;
    document.getElementById("checkA-p3").disable = true;
    q3A = 1;
  } else {
    document.getElementById("checkA-p3").checked = false;
  }

  let checkB = document.getElementById("text-area-B-p3");

  if (checkB.value != "") {
    document.getElementById("checkB-p3").checked = true;
    document.getElementById("checkB-p3").disable = true;
    q3B = 1;
  } else {
    document.getElementById("checkB-p3").checked = false;
  }

  let result3 = (q3A + q3B) * price3;

  document.getElementById("r3").innerHTML = result3;

  return result3;
  
}

// Partial result product 4
function partResult4() {
  
  let price4 = Number(3);

  let s1 = 0, s2 = 0, s3 = 0, s4 = 0, s5 = 0, s6 = 0, s7 = 0, s8 = 0, s9 = 0;

  let c1 = document.getElementById("check-s1");
  let c2 = document.getElementById("check-s2");
  let c3 = document.getElementById("check-s3");
  let c4 = document.getElementById("check-s4");
  let c5 = document.getElementById("check-s5");
  let c6 = document.getElementById("check-s6");
  let c7 = document.getElementById("check-s7");
  let c8 = document.getElementById("check-s8");
  let c9 = document.getElementById("check-s9");
 

  if (c1.checked) {
    s1 = 1;
  } else {
    s1 = 0;
  }

  if (c2.checked) {
    s2 = 1;
  } else {
    s2 = 0;
  }

  if (c3.checked) {
    s3 = 1;
  } else {
    s3 = 0;
  }

  if (c4.checked) {
    s4 = 1;
  } else {
    s4 = 0;
  }

  if (c5.checked) {
    s5 = 1;
  } else {
    s5 = 0;
  }

  if (c6.checked) {
    s6 = 1;
  } else {
    s6 = 0;
  }

  if (c7.checked) {
    s7 = 1;
  } else {
    s7 = 0;
  }

  if (c8.checked) {
    s8 = 1;
  } else {
    s8 = 0;
  }

  if (c9.checked) {
    s9 = 1;
  } else {
    s9 = 0;
  }

  let result4 = (s1 + s2 + s3 + s4 + s5 + s6 + s7 + s8 + s9) * price4;
  document.getElementById("r4").innerHTML = result4;

  return result4;

}

// Partial result product 5
function partResult5() {

  let price5 = document.getElementById("price5").value;
  let result5 = Number(price5);

  document.getElementById("diamondP5-A").innerHTML = result5;
  document.getElementById("diamondP5-B").innerHTML = result5;

  if (result5 > 0) {
    document.getElementById("checkP5").checked = true;
    document.getElementById("checkP5").disable = true;
  } else {
    document.getElementById("checkP5").checked = false;
    document.getElementById("diamondP5-A").innerHTML = "-";
    document.getElementById("diamondP5-B").innerHTML = "0";
  }

  return result5;
  
}
// Validate product 5
function validateArt5() {
  let a = document.getElementById("floatingTextarea");
  let b = document.getElementById("price5");

  if (a.value != "" && b.value <= 0) {
    b.classList.add("is-invalid");
    b.required = true;
    b.value = "";
  } else {
    b.classList.remove("is-invalid");
    b.required = false;
    b.classList.remove("is-valid");
    
  }

  if (b.value != 0 && a.value =="") {
    a.classList.add("is-invalid");
    a.required = true
  } else {
    a.classList.remove("is-invalid");
    a.required = false;
  }

}

function countTotal (){

  let r1 = partResult1();
  let r2 = partResult2();
  let r3 = partResult3();
  let r4 = partResult4();
  let r5 = partResult5();  
  let T = Number(r1 + r2 + r3 + r4 + r5);
  let W = Number(500);
  let residual = Number(W - T);
  let gem = [' <i class="bi bi-gem"></i>'];
  let debt = Number(T - W);

  document.getElementById("walletValue").innerHTML = "/ " + W;

  document.getElementById("residual").innerHTML = residual;

  if (T == 0){
    document.getElementById("alert").innerHTML = "Hai il portafoglio pieno!";
    document.getElementById("walletValue").innerHTML = "";
    document.getElementById("sub-btn").disabled = true;
  } else if ( T >= Number(1) && T <= Number(W-1)) {
    document.getElementById("alert").innerHTML = "Hai speso " + T + gem + " in totale.";
    document.getElementById("alert").classList.remove("alert-success");
    document.getElementById("alert").classList.remove("alert-danger")
    document.getElementById("alert").classList.add("alert-turisanda")
    document.getElementById("sub-btn").classList.add("btn-light");
    document.getElementById("sub-btn").classList.remove("btn-danger");
    document.getElementById("sub-btn").disabled = false;
  } else if (T === W) {
    document.getElementById("alert").innerHTML = "Hai usato tutti i " + gem + " a tua disposizione!";
    document.getElementById("alert").classList.add("alert-success");
    document.getElementById("alert").classList.remove("alert-turisanda")
    document.getElementById("alert").classList.remove("alert-danger")
    document.getElementById("sub-btn").classList.add("btn-light");
    document.getElementById("sub-btn").classList.remove("btn-danger");
    document.getElementById("sub-btn").disabled = false;
  } else {
    document.getElementById("alert").innerHTML = "Hai speso troppo! Recupera almeno " + debt + gem + " per inviare.";
    document.getElementById("residual").innerHTML = "0";
    document.getElementById("alert").classList.add("alert-danger");
    document.getElementById("alert").classList.remove("alert-turisanda")
    document.getElementById("sub-btn").classList.remove("btn-light");
    document.getElementById("sub-btn").classList.add("btn-danger");
    document.getElementById("sub-btn").disabled = true;
    
  }
  
}

// Bootstrap validation
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  let forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
// End Bootstrap validation


// SLIDER
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 16,
  autoplay: {
    delay: 3000,
  },
  // init: false,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.next-btn',
    prevEl: '.prev-btn',
  },

  breakpoints: {
    576: {
      slidesPerView: 1,
      spaceBetween: 16,
      autoplay: {
        delay: 3000,
      },
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 16,
      autoplay: {
        delay: 5000,
      },
    },

    992: {
      slidesPerView: 4,
      spaceBetween: 16,
      autoplay: {
        delay: 5000,
      },
    },

  }
});
