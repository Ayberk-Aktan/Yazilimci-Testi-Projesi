const scores = {
    1: { "18 Yaş Altı": 10, "18 Yaş Üstü": 10 },
    2: { "Çok İyi": 10, "İyi": 5, "Kötü": 3, "Çok Kötü": 2 },
    3: { "Gergin": 3, "Kendinden Emin": 10, "Gergindir Fakat Problemi Çözebilir": 5, "Boşvermiş": 2 },
    4: { "İyi Geçinen": 10, "Normal": 6, "Asosyal": 4 },
    5: { "Para": 0, "Sevgi": 20 },
    6: { "Araştırıp Soruştururum": 8, "Kendi Kafama Göre Giderim": 3, "Bilen Birine Danışırım": 7, "Daha Baştan Vazgeçerim": 2 }
  };
  
  let totalScore = 0;
  let selectedOptions = {}; 
  let resultBtn = document.querySelector("#resultBtn");
  
  function selectOption(option, questionNumber) {
    const selectedOptionText = option.textContent;
    const questionScores = scores[questionNumber];
  
    if (selectedOptions[questionNumber]) {
      selectedOptions[questionNumber].classList.remove("selected");
    }
  
    option.classList.add("selected"); 
    selectedOptions[questionNumber] = option;
  
    if (questionScores && questionScores[selectedOptionText] !== undefined) {
      totalScore += questionScores[selectedOptionText];
    }
  }
  
  function calculateTotalScore() {
    return totalScore;
  }
  
  resultBtn.addEventListener("click", () => {
    const totalScore = calculateTotalScore();

    var status;
  
    if (totalScore >= 30) {
      status = "Süper! Yazılıma Yatkınlığın Daha İyi Tebrik Ederim.";
    } else if (totalScore < 30 && totalScore >= 17) {
      status = "Biraz Daha Çalışabilirsin Başarabilirsin!";
    } else if (totalScore < 17 && totalScore >= 0) {
      status = "Üzgünüm Maalesef Yazılıma Yatkın Değilsin";
    }
  
    alert(
      `Merhabalar Ben Ayberk Aktan. \n Bu Testi Çözdüğünüz İçin Teşekkür Ederim. \n Fakat Unutmayın Ki Yazılım Kolay Değildir ve Pes Etmeyenler Kazanır. \n Ey Meraklı Dost Umarım Bu Yolda Pes Etmezsin ve Kariyerin İyi Olur. \n Test Skorunuz : ${totalScore} ve Durumunuz : ${status} İyi Çalışmalar Diliyorum Hoşçakalın. `
    );
  });
  