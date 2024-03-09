let number = document.querySelectorAll(".getNumber");
let display = document.querySelector(".displayInput");
let back = document.querySelector("#back");
let ok = document.querySelector("#ok");
let modal = document.querySelector(".modal");
let remBlur = document.querySelector(".addBlur");
let IamAgree = document.querySelector("#IamAgree");

let numberOfAttempts = null;
let maxOfNumber = null;
let numberOfAttemptsValue = null;
let random = null;

let count = 1;

const alertFun = (alertInnerHTML, type, load) => {
  const alert = document.querySelector(".alert");
  const span = document.querySelector(".span");

  span.innerHTML = alertInnerHTML;

  alert.classList.add("d-block", "show", type);

  setTimeout(() => {
    alert.classList.remove("d-block", "show", type);

    load ? window.location.reload() : "";

    span.innerHTML = "";
  }, 3000);
};

const thinkRandomNumber = (max) => Math.floor(Math.random() * max);

for (let i of number) {
  i.addEventListener("click", () => {
    if (display.innerText.length < 3) {
      display.innerText += i.textContent.trim();
    }
  });
}

back.addEventListener("click", () => {
  display.innerText = display.innerText.slice(0, -1);
});

IamAgree.addEventListener("click", () => {
  modal.classList.remove("show", "d-block");
  remBlur.classList.remove("blur");

  numberOfAttempts = document.querySelector("#numberOfAttempt").value;
  maxOfNumber = document.querySelector("#maxOfNumber").value;
  numberOfAttemptsValue = numberOfAttempts;

  random = thinkRandomNumber(Number(maxOfNumber));
});

ok.addEventListener("click", () => {
  numberOfAttempts--;


  if (numberOfAttempts == 0 && random != display.textContent) {
    alertFun(
      `<strong>You lose!</strong> Siz men oylagan soni topa olmadiz, men oylagan son ${random}`,
      `alert-danger`,
      true
    );
  } else {
    if (display.textContent == random) {
      alertFun(
        `<strong>You won!</strong> Siz yutingiz ${count}ta urinishda `,
        `alert-success`,
        true
      );
    } else if (display.textContent > random) {
      alertFun(
        `<strong>You have not found!</strong> Sizni kiritgan soniz katta men o'ylagan sondan urinishlar soni ${count}/${numberOfAttemptsValue}ta`,
        `alert-warning`,
        false
      );
    } else if (display.textContent < random) {
      alertFun(
        `<strong>You have not found!</strong> Sizni kiritgan soniz kikchik men o'ylagan sondan urinishlar soni ${count}/${numberOfAttemptsValue}ta`,
        `alert-warning`,
        false
      );
    }
  }

  count++;
  display.textContent = "";
});
