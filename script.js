document.addEventListener("DOMContentLoaded", function () {
    let countdownElement = document.getElementById("countdown");
  
    setTimeout(() => {
      countdownElement.innerText = "10";
      countdownElement.className = "chakra size"
      setTimeout(() => {
        countdownElement.innerText = "9";
        countdownElement.className = "chakra size"
        setTimeout(() => {
          countdownElement.innerText = "8";
          countdownElement.className = "chakra size"
          setTimeout(() => {
            countdownElement.innerText = "7";
            countdownElement.className = "chakra size"
            setTimeout(() => {
              countdownElement.innerText = "6";
              countdownElement.className = "chakra size"
              setTimeout(() => {
                countdownElement.innerText = "5";
                countdownElement.className = "chakra size"
                setTimeout(() => {
                  countdownElement.innerText = "4";
                  countdownElement.className = "chakra size"
                  setTimeout(() => {
                    countdownElement.innerText = "3";
                    countdownElement.className = "chakra size"
                    setTimeout(() => {
                      countdownElement.innerText = "2";
                      countdownElement.className = "chakra size"
                      setTimeout(() => {
                        countdownElement.innerText = "1";
                        countdownElement.className = "chakra size"
                        setTimeout(() => {
                          countdownElement.innerText = "";
                          document.getElementById("flag").style.opacity = "1";
                        }, 1000);
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  });