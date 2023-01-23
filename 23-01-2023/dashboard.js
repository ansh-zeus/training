let display = document.getElementsByClassName("display")[0];
let courseNo = document.getElementById("selected__number");
let selectCourse = document.getElementById("courses");

fetch("card.json")
  .then((response) => response.json())
  .then((data) => showData(data))
  .catch((err) => {
    console.error("error : " + err);
    alert("Can't Fetch the Data");
  });

let showData = (data) => {
  courseNo.innerText = `${data.length}`;

  data.forEach((ele, i) => {
    let card = document.createElement("div");
    card.classList.add("card");
    display.appendChild(card);

    let cardHeader = document.createElement("div");
    cardHeader.classList.add("card__header");
    card.appendChild(cardHeader);

    if (ele.Expired) {
      let expire = document.createElement("div");
      expire.classList.add("expire");
      expire.innerText = "Expired";
      card.appendChild(expire);
    }

    let cardImg = document.createElement("img");
    cardImg.src = ele.ImageSrc;
    cardImg.alt = ele.Title;
    cardHeader.appendChild(cardImg);

    let cardDetails = document.createElement("div");
    cardDetails.classList.add("card__details");
    cardHeader.appendChild(cardDetails);

    let cardDetailsTitle = document.createElement("div");
    cardDetailsTitle.classList.add("card__details__title");
    cardDetails.appendChild(cardDetailsTitle);

    let titleHeader = document.createElement("h4");
    titleHeader.innerText = `${ele.Title}`;
    cardDetailsTitle.appendChild(titleHeader);

    let titleHeaderImg = document.createElement("img");
    titleHeaderImg.classList = ele.Favourite ? "favourite" : "";
    titleHeaderImg.id = ele.Favourite ? "" : "star";
    titleHeaderImg.src = ele.Favourite
      ? "./icons/favourite.svg"
      : "./icons/Star.svg";
    titleHeaderImg.addEventListener("click", () => {
      if (ele.Favourite) {
        titleHeaderImg.classList.add("favourite");
        titleHeaderImg.id = "";
        titleHeaderImg.src = "./icons/favourite.svg";
      } else {
        titleHeaderImg.id = "star";
        titleHeaderImg.classList = "";
        titleHeaderImg.src = "./icons/Star.svg";
      }
      ele.Favourite = !ele.Favourite;
    });
    titleHeaderImg.alt = "Favorite";
    cardDetailsTitle.appendChild(titleHeaderImg);

    let cardDetailsSubj = document.createElement("div");
    cardDetailsSubj.classList.add("card__details__subj-grade");
    cardDetails.appendChild(cardDetailsSubj);

    let cardDetailsSubjSpan = document.createElement("span");
    cardDetailsSubjSpan.classList.add("card__details__subj-grade__subject");
    cardDetailsSubjSpan.innerText = `${ele.Subject} `;
    cardDetailsSubj.appendChild(cardDetailsSubjSpan);

    let cardDetailsSubjSpan2 = document.createElement("span");
    cardDetailsSubjSpan2.innerText = `Grade ${ele.Grade} `;
    cardDetailsSubj.appendChild(cardDetailsSubjSpan2);

    let cardDetailsSubjSpan3 = document.createElement("span");
    cardDetailsSubjSpan3.classList.add("green-fonts");
    cardDetailsSubjSpan3.innerText = ` +${ele.GradePlus} `;
    cardDetailsSubj.appendChild(cardDetailsSubjSpan3);

    if (ele.Units !== null && ele.Lessons !== null && ele.Topics !== null) {
      let cardDetailsAbout = document.createElement("div");
      cardDetailsAbout.classList.add("card__details__about");
      cardDetails.appendChild(cardDetailsAbout);

      let cardDetailsAboutSpan1 = document.createElement("span");
      cardDetailsAboutSpan1.classList.add("bold-fonts");
      cardDetailsAboutSpan1.innerText = `${ele.Units} `;
      cardDetailsAbout.appendChild(cardDetailsAboutSpan1);

      let cardDetailsAboutSpan2 = document.createElement("span");
      cardDetailsAboutSpan2.innerText = `Units`;
      cardDetailsAbout.appendChild(cardDetailsAboutSpan2);

      let cardDetailsAboutDiv = document.createElement("div");
      cardDetailsAboutDiv.classList.add("six-pixel-box");
      cardDetailsAbout.appendChild(cardDetailsAboutDiv);

      let cardDetailsAboutSpan3 = document.createElement("span");
      cardDetailsAboutSpan3.classList.add("bold-fonts");
      cardDetailsAboutSpan3.innerText = `${ele.Lessons} `;
      cardDetailsAbout.appendChild(cardDetailsAboutSpan3);

      let cardDetailsAboutSpan4 = document.createElement("span");
      cardDetailsAboutSpan4.innerText = `Lessons`;
      cardDetailsAbout.appendChild(cardDetailsAboutSpan4);

      let cardDetailsAboutDiv2 = document.createElement("div");
      cardDetailsAboutDiv2.classList.add("six-pixel-box");
      cardDetailsAbout.appendChild(cardDetailsAboutDiv2);

      let cardDetailsAboutSpan5 = document.createElement("span");
      cardDetailsAboutSpan5.classList.add("bold-fonts");
      cardDetailsAboutSpan5.innerText = `${ele.Topics} `;
      cardDetailsAbout.appendChild(cardDetailsAboutSpan5);

      let cardDetailsAboutSpan6 = document.createElement("span");
      cardDetailsAboutSpan6.innerText = `Topics`;
      cardDetailsAbout.appendChild(cardDetailsAboutSpan6);
    }

    let cardDetailsSelect = document.createElement("select");
    cardDetailsSelect.name = "classes";
    cardDetailsSelect.disabled = ele.Classes ? false : true;
    if (ele.Expired) {
      cardDetailsSelect.id = "classes_expire";
    } else {
      cardDetailsSelect.id = "classes";
    }
    cardDetails.appendChild(cardDetailsSelect);

    let cardDetailsSelectOption = document.createElement("option");
    cardDetailsSelectOption.value = ele.classes;
    cardDetailsSelectOption.innerText =
      ele.Classes === null ? "No Classes" : ele.Classes;
    cardDetailsSelect.appendChild(cardDetailsSelectOption);

    let cardDetailsInfo = document.createElement("div");
    cardDetailsInfo.classList.add("card__details__info");
    cardDetails.appendChild(cardDetailsInfo);

    if (ele.Students !== null) {
      let cardDetailsInfoSpan1 = document.createElement("span");
      cardDetailsInfoSpan1.classList =
        ele.StartDate !== null && ele.EndDate !== null ? "number-students" : "";
      cardDetailsInfoSpan1.innerText = `${ele.Students} Students`;
      cardDetailsInfo.appendChild(cardDetailsInfoSpan1);
    }

    if (ele.StartDate !== null && ele.EndDate !== null) {
      let cardDetailsInfoSpan2 = document.createElement("span");
      cardDetailsInfoSpan2.classList.add("dates");
      cardDetailsInfoSpan2.innerText = `${ele.StartDate} - ${ele.EndDate}`;
      cardDetailsInfo.appendChild(cardDetailsInfoSpan2);
    }

    let cardFooter = document.createElement("div");
    cardFooter.classList.add("card__footer");
    card.appendChild(cardFooter);

    let cardFooterImg1 = document.createElement("img");
    cardFooterImg1.src = "icons/preview.svg";
    cardFooter.appendChild(cardFooterImg1);

    let cardFooterImg2 = document.createElement("img");
    cardFooterImg2.src = "icons/manage course.svg";
    cardFooter.appendChild(cardFooterImg2);

    let cardFooterImg3 = document.createElement("img");
    cardFooterImg3.src = "icons/grade submissions.svg";
    cardFooter.appendChild(cardFooterImg3);

    let cardFooterImg4 = document.createElement("img");
    cardFooterImg4.src = "icons/reports.svg";
    cardFooter.appendChild(cardFooterImg4);
  });
};
