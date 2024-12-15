document.addEventListener('DOMContentLoaded', function() {

    document.body.classList.add('dark-theme');
    const themeIcon = document.getElementById('theme-toggle');
    const backgroundVideo = document.getElementById('background-video');
    const backgroundVideoLight = document.getElementById('background-video-light');

    backgroundVideoLight.style.opacity = 0;
    backgroundVideo.style.opacity = 1;

    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
});

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    const themeIcon = document.getElementById('theme-toggle');
    const backgroundVideo = document.getElementById('background-video');
    const backgroundVideoLight = document.getElementById('background-video-light');

    if (document.body.classList.contains('dark-theme')) {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');

        backgroundVideoLight.style.opacity = 0;
        backgroundVideo.style.opacity = 1;
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');

        backgroundVideo.style.opacity = 0;
        backgroundVideoLight.style.opacity = 1;
    }
});
document.getElementById('get-gift-btn').addEventListener('click', function() {
    const gifts = [
        "Akıllı telefon", "Kablosuz kulaklık", "Akıllı saat", "Bluetooth hoparlör", "Oyun konsolu",
        "Dijital fotoğraf makinesi", "VR gözlük", "Giyilebilir kamera", "Akıllı ev sistemi", "Dijital çerçeve",
        "Beyaz gömlek", "Kışlık kaban", "Ceket", "Tişört seti", "Deriden çanta", "Kışlık bere ve eldiven takımı",
        "Sneaker ayakkabılar", "Kadın elbisesi", "Erkek takım elbise", "Takı seti (kolye, küpe, bilezik)",
        "Yılbaşı temalı masa lambası", "Duvar saati", "Dekoratif mum", "Duvar posteri", "Yastık seti", "Eviniz için bitki",
        "Farklı desenli halı", "Güzel bir duvar tablosu", "Yılbaşı temalı yastıklar", "Banyo seti (havlu, sabunluk)",
        "Yılbaşı süslemeleri", "Yılbaşı temalı çorap", "Noel Baba figürleri", "Yılbaşı takıları", "Yılbaşı temalı hediye kutusu",
        "Kışlık atkı ve bereler", "Yılbaşı temalı kupa", "Yılbaşı kartları", "Yılbaşı temalı tepsi", "Yeni yıl takvimi",
        "Best-seller kitap", "Bilim kurgu romanı", "Psikoloji üzerine kitap", "Klasik edebiyat eserleri", "Kendi hikayenizi yazabileceğiniz bir defter",
        "Zeka oyunları", "Kapsül zaman kutusu", "Puzzle seti", "Yaratıcı renkli kalem seti", "Kitap okumayı sevenlere hediye okuma lambası",
        "Konser bileti", "Sinema bileti", "Yılbaşı gecesi için parti bileti", "SPA günü", "Tatlı bir restoran rezervasyonu",
        "Eğlence parkı bileti", "Kendi fotoğraf albümünüzü oluşturun", "Aile için hafta sonu kaçamağı", "Yılbaşı temalı etkinlikler",
        "Yemek yapma kursu", "Kendi tarzınızı yaratabileceğiniz aksesuarlar", "Gizli mesajlı not defteri", "Renk değiştiren LED lamba",
        "Süper kahraman kostümü", "Gizli odaklı zeka oyunları", "Vintage retro oyuncaklar", "Yılbaşı temalı örgü oyuncaklar",
        "Kendin yap proje seti", "Ev yapımı reçel seti", "Muzik aleti (gitar, ukulele vb.)", "Bir kutu kaliteli çikolata",
        "Yılbaşı temalı kurabiye seti", "Şarap seti", "Kahve seti (kahve, bardak, termos)", "Gourmet kahve", "Tatlılar için bir kutu",
        "Yılbaşı için zengin kek ve pasta", "Gourmet peynir seti", "Bir kutu özel çaylar", "Ev yapımı reçel ve marmelat seti",
        "Fitness bilekliği", "Yoga matı", "Dış mekan sporları seti", "Koşu ayakkabıları", "Trekking çantası", "Bisiklet", 
        "Sırt çantası", "Kamp malzemeleri", "Eğitim seti (ağırsiklet, halter vb.)", "Golf seti", "Eğitici oyuncaklar", 
        "Lego seti", "Renkli yapbozlar", "Çocuklar için kitap seti", "Oyuncak bebek", "Yılbaşı temalı oyuncaklar", 
        "Oyun halısı", "Çocuklara özel takılar", "Çocuk odası için dekoratif süsler", "Çocuklara özel eğlenceli kıyafetler", 
        "Seyahat çantası", "Yolculuk için şık valiz", "Yılbaşı için sürpriz seyahat paketi", "Seyahat için fotoğraf makinesi", 
        "Yolculuk için kabin boy valiz", "Taşınabilir şarj cihazı", "Seyahat şapkası", "Seyahat kitapları", "Yolculuk için göz maskesi", 
        "Seyahat seti (maskara, sabun, şampuan vb.)", "Evcil hayvanlar için oyuncak", "Evcil hayvanlar için yatak", "Köpek maması", 
        "Kedi kum kabı", "Evcil hayvanlar için giyim", "Evcil hayvanlar için takılar", "Kuşlar için kafes aksesuarları", 
        "Evcil hayvanlar için taşıma çantası", "Evcil hayvanlar için banyo seti", "Evcil hayvanlar için oyun seti"
    ];

    const randomGift = gifts[Math.floor(Math.random() * gifts.length)];
    const giftResult = document.getElementById('gift-result');
    giftResult.textContent = `Hediye Öneriniz: ${randomGift}`;
});
