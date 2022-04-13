let cats = `{
   "title": "Cat Families",
   "intro": "This is a list of cats and their mother that we are breeding. If you are interested in adopting please contact us",
   "cats": [
     {
         "Mother":"",
       "name": "Lindy",
       "breed": "Cymric",
       "color": "white",
       "imageLink": "images/Lindy.png",
       "kittens": [
         {
           "name": "Percy",
           "gender": "m"
         },
         {
           "name": "Thea",
           "gender": "f"
         },
         {
           "name": "Annis",
           "gender": "f"
         }
       ]
     },
     {
                  "Mother":"",
       "name": "Mina",
       "breed": "Aphrodite Giant",
       "color": "ginger",
       "kittens": [
         {
           "name": "Doris",
           "gender": "f"
         },
         {
           "name": "Pickle",
           "gender": "f"
         },
         {
           "name": "Max",
           "gender": "m"
         }
       ]
     },
     {
                  "Mother":"",
       "name": "Antonia",
       "breed": "Ocicat",
       "color": "leopard spotted",
       "kittens": [
         {
           "name": "Bridget",
           "gender": "f"
         },
         {
           "name": "Randolph",
           "gender": "m"
         }
       ]
     }
   ]
}`

cats = JSON.parse(cats)

document.getElementById("title").innerHTML = cats.title
document.getElementById("subTitle").innerHTML = cats.intro


const createCat = (cat, status) => {
    const profile = document.createElement("div");
    profile.classList.add(status);
    const image = document.createElement("img");
    profile.appendChild(image);
    for (let i of Object.keys(cat)) {
        const info = document.createElement("p");
        if (i != "kittens" && i != "imageLink") {
            if (cat[i] == "") {
                info.textContent = `${i}`
            } else {
                info.textContent = `${i} : ${cat[i]}`;
            }
            profile.appendChild(info);
        }
    }
    return profile;
}

const catList = cats.cats;
for (let i in catList) {

    let family = document.createElement("div");
    family.classList.add("family");

    family.appendChild(createCat(catList[i], "mother"));

    let seperator = document.createElement("h3");
    seperator.textContent = "KITTENS";
    family.appendChild(seperator);

    let kittens = document.createElement("div");
    kittens.classList.add("kittens");
    let kittenList = catList[i]["kittens"];
    for (let j in kittenList) {
        kittens.appendChild(createCat(kittenList[j], "kitten"))
    };
    family.appendChild(kittens);

    document.getElementById(`cat${i}`).appendChild(family);
}