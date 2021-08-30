var images = ["https://post.healthline.com/wp-content/uploads/2020/09/689574-the-family-book.png", "https://www.nicepng.com/png/detail/155-1555152_grandpa-png-file-happy-old-man-cartoon.png", "https://www.nicepng.com/png/detail/300-3001684_cartoon-grandma-clipart-grandma-clipart-black-and-white.png", "https://www.nicepng.com/png/full/42-427203_hand-drawn-cartoon-father-and-son-hug-decorative.png", "https://www.nicepng.com/png/detail/35-351393_first-visit-mother-and-baby-cartoon-png.png", "https://www.nicepng.com/png/detail/731-7310129_big-brother-png.png"];
var names = ["Family Book", "Sasanka Shekhar Bera my grand father", "Chhabi Bera my grand mother", "Tirthankar Bera my father", "Debashree Bera my mother", "Me and my brother Abhrankar and Arkid Bera"];
var i = 0;
function update() {
  i++;
  var numbers_of_family_member_in_array = 5
  if (i > numbers_of_family_member_in_array) {
    i = 0;
  }
  var updatedImage = images[i];
  var updatedName = names[i];
  document.getElementById("family_member_image").src = updatedImage;
  document.getElementById("family_member_name").innerHTML = updatedName;
}