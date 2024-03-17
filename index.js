console.log(
  "Hello Google, Do you enjoy Apple Vision Pro and ready to release your glasses?"
);

addEventListener("copy", (event) => {
  navigator.clipboard.readText().then((text) => {
    console.log(text);
    getSponsorshipCompanies(text);
  });
});

function getSponsorshipCompanies(name) {
  const url = "https://suica.dev/api/sponsorship/" + name;
  fetch(url, {
    mode: "no-cors",
  })
    .then((response) => {
      console.log(response);
      response
        .json()
        .then((json) => {
          console.log(json);
          appendPage(json.data);
        })
        .catch((error) => {
          console.error(error);
        });
    })
    .catch((error) => {
      console.error(error);
    });
}

const e = document.createElement("div");
e.innerHTML = `
<div id="sponsorship-button" style="position: fixed; right: 20px; top: 20px; width: 50px; height: 50px; border-radius: 50%; border: 1px solid #ddd; background-color: #818384; display: flex; justify-content: center; align-items: center; color: #fff; opacity: .7; cursor: pointer; z-index: 51;">
    Toogle
</div>

<div id="company-view" style="display: none; position: fixed; right: 20px; top: 70px; padding: 10px; padding-right: 50px; width: 300; height: 500px; flex-wrap: wrap; background-color: #818384; color: #fff; border-radius: 1rem; z-index: 50;">
    <div id="company-list" style="margin-bottom: 1rem; width: 275px; height: 100%; word-wrap:break-word; overflow: scroll;"></div>
</div>
`;
document.body.appendChild(e);
const button = document.getElementById("sponsorship-button");
const companyView = document.getElementById("company-view");
const companyListView = document.getElementById("company-list");
button.addEventListener("click", () => {
  if (companyView.style.display === "none") {
    companyView.style.display = "flex";
  } else {
    companyView.style.display = "none";
  }
});

function appendPage(companies) {
  let companyList = "<div>";
  if (companies.length > 0) {
    companies.forEach((company) => {
      companyList += `
            <div style="margin: 1rem;">
                <h3 style="color: white;">${company.name}</h3>
                <p style="color: white;">${company.county} ${company.city}</p>
                <p style="color: white;">${company.rate}</p>
                <p style="color: white;">${company.type}</p>
                <p style="color: white;">${company.route}</p>
            </div>
        `;
    });
    companyList += "</div>";
  } else {
    companyList += `<div style="margin: 1rem; color: white;">No Data at all</div>`;
  }
  console.log(companyList.length);
  companyListView.innerHTML = companyList;
  companyView.style.display = "flex";
}
