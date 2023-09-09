//Test Calculating Result Functions

let selectedOption = null;
let totalScore = 0;
let option = document.querySelector(".ansBtn");
let resultBtn = document.querySelector("#resultBtn");

function selectedOption(option , questionNumber)
{
    if(selectedOption)
    {
        selectedOption.classList.remove("selected");
    }

    option.classList.add("selected");
    selectedOption = option;

    //First Question
    if(questionNumber === 1 && option.textContent === "18 Yaş Altı"){
        totalScore += 10;
        
        if(questionNumber === 1 && option.textContent == "18 Yaş Üstü"){
            totalScore += 10;
        }
    }

    //Second Question
    else if(questionNumber === 2 && option.textContent === "Çok İyi"){
        totalScore += 10;

        if(questionNumber === 2 && option.textContent === "İyi"){
            totalScore += 5;

            if(questionNumber === 2 && option.textContent === "Kötü"){
                totalScore += 3;

                if(questionNumber === 2 && option.textContent === "Çok Kötü"){
                    totalScore += 2;
                }
            }
        }
    }

    //Third Question
    else if(questionNumber === 3 && option.textContent === "Gergin"){
        totalScore += 3;

        if(questionNumber === 3 && option.textContent === "Kendinden Emin"){
            totalScore += 10;

            if(questionNumber === 3 && option.textContent === "Gergindir Fakat Problemi Çözebilir"){
                totalScore += 5;

                if(questionNumber === 3 && option.textContent === "Boşvermiş"){
                    totalScore += 2;
                }
            }
        }
    }

    //Fourth Question
    else if(questionNumber === 4 && option.textContent === "İyi Geçinen"){
        totalScore += 10;

        if(questionNumber === 4 && option.textContent === "Normal"){
            totalScore += 6;

            if(questionNumber === 4 && option.textContent === "Asosyal"){
                totalScore += 4;
            }
        }
    }

    //Fifth Question 
    else if(questionNumber === 5 && option.textContent === "Para"){
        totalScore += 0;

        if(questionNumber === 5 && option.textContent === "Sevgi"){
            totalScore += 20;
        }
    }

    //Sixth Question 
    else if(questionNumber === 6 && option.textContent === "Araştırıp Soruştururum"){
        totalScore += 8;

        if(questionNumber === 6 && option.textContent === "Kendi Kafama Göre Giderim"){
            totalScore += 3;

            if(questionNumber === 6 && option.textContent === "Bilen Birine Danışırım"){
                totalScore += 7;

                if(questionNumber === 6 && option.textContent === "Daha Baştan Vazgeçerim"){
                    totalScore += 2;
                }
            }
        }
    }

    //Results 
    resultBtn.addEventListener("click" , () => {
       const percent = (totalScore / 68) * 100;

       alert(`Merhabalar Ben Ayberk Aktan. \n Bu Testi Çözdüğünüz İçin Teşekkür Ederim. \n Fakat Unutmayın Ki Yazılım Kolay Değildir ve Pes Etmeyenler Kazanır. \n Ey Meraklı Dost Umarım Bu Yolda Pes Etmezsin ve Kariyerin İyi Olur. \n Test Skorunuz %${percent} İyi Günler. `);
    });
}
