const recipes = {
  cremeBrulee: {
    ingredients: [
      "Zucker",
      "Wasser",
      "Milch",
      "Vollrahm",
      "Zucker",
      "Eier, gerührt",
      "Zucker",
    ],
    amounts: ["20", "0.1", "0.4", "0.4", "0.66", "0.5", "1"],
    quantities: ["g", "l", "l", "l", "g", "g", "g"],
  },
  türkischeLinsensuppe: {
    ingredients: [
      "Gemüsebrühe",
      "Rote Linsen",
      "Knoblauchzehe(n)",
      "Kartoffel(n)",
      "Zwiebel(n)",
      "Tomatenmark",
      "Kreuzkümmelpulver (Cumin)",
      "geräuchertes Paprikapulver",
      "Rohrohrzucker",
      "Salz und Pfeffer",
      "Blattpetersilie",
    ],
    amounts: ["0.5", "125", "1", "0.5", "0.5", "1", "0.75", "0.5", "0.25"],
    quantities: ["l", "g", "", "", "", "EL", "TL", "TL", "", "", ""],
  },
  ungarischeGulaschsuppe: {
    ingredients: [
      "Rinderbein",
      "Lorbleerblatt",
      "Zwiebeln",
      "Pfeffer",
      "Karotten",
      "Tomaten",
      "Wurzelpetersilie",
      "Paprika Gelb",
      "Sellerie",
      "Knoblauchzehe",
      "Kartoffel",
      "Schweinefett",
      "Paprikapulver",
      "Petersilie",
      "scharf Paprikapulver",
      "Sellerieblätter",
      "Salz",
      "Wasser",
      "Kümmel",
    ],

    amounts: [
      "100",
      "0.3335",
      "50",
      "0.1665",
      "0.3335",
      "0.16665",
      "0.16",
      "0.16665",
      "0.16665",
      "0.5",
      "66.6665",
      "0.33335",
      "0.5",
      "0.083",
      "0.25",
      "0.83",
      "0.5",
      "4.16665",
      "0.16",
    ],
    quantities: [
      "g",
      "",
      "g",
      "TL",
      "",
      "",
      "",
      "",
      "",
      "",
      "g",
      "TL",
      "TL",
      "Bund",
      "TL",
      "",
      "TL",
      "dl",
      "TL",
    ],
  },
  quarkPfannkuchen: {
    ingredients: [
      "Quark (20% Fettanteil)",
      "Ei",
      "Mehl (plus etwas zum Wälzen)",
      "Zucker",
      "Salz",
      "Vanillezucker oder Vanilleextrakt",
      "Pflanzenöl zum Braten",
    ],
    amounts: ["250", "1", "3", "2", "1", "1"],
    quantities: ["g", "", "EL", "EL", "Prise", "Pck.", ""],
  },
  // Weitere Rezepte hier hinzufügen
};

function init(recipe) {
  const results = document.getElementById("results");
  const selectedRecipe = recipes[recipe];
  let input = document.getElementById("input_crowd").value.trim();

  if (
    input === "" ||
    isNaN(input) ||
    parseInt(input) < 1 ||
    parseInt(input) > 20
  ) {
    results.innerHTML =
      "<div class='wrong_number'>Bitte geben Sie eine Zahl zwischen 1 und 20 ein!</div>";
    return;
  }

  results.innerHTML = "";
  for (let ingredient in selectedRecipe.ingredients) {
    let amount = selectedRecipe.amounts[ingredient] * input;
    let quantity = selectedRecipe.quantities[ingredient];

    if (Number.isInteger(amount)) {
      amount = Number(amount);
    } else {
      amount = Number(amount.toFixed(1));
    }

    if (isNaN(amount)) {
      amount = "";
    }

    results.innerHTML += `
      <tr>
        <td class="td-left"><span>${amount} ${quantity}</span></td>
        <td class="td-right"><span>${selectedRecipe.ingredients[ingredient]}</span></td>
      </tr>
    `;
  }
}

function toggleRespMenu() {
  let menu = document.getElementById("resp_menu");
  menu.classList.toggle("resp_menu_closed");
  menu.classList.toggle("resp_menu_open");
}
