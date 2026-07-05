const shippingRates = {
  "1": { label: "أدرار", home: 1100, desk: 600 },
  "2": { label: "الشلف", home: 650, desk: 400 },
  "3": { label: "الأغواط", home: 900, desk: 550 },
  "4": { label: "أم البواقي", home: 800, desk: 500 },
  "5": { label: "باتنة", home: 800, desk: 500 },
  "6": { label: "بجاية", home: 800, desk: 400 },
  "7": { label: "بسكرة", home: 900, desk: 500 },
  "8": { label: "بشار", home: 1300, desk: 600 },
  "9": { label: "البليدة", home: 550, desk: 400 },
  "10": { label: "البويرة", home: 800, desk: 400 },
  "11": { label: "تمنراست", home: 1400, desk: 800 },
  "12": { label: "تبسة", home: 950, desk: 500 },
  "13": { label: "تلمسان", home: 450, desk: 250 },
  "14": { label: "تيارت", home: 700, desk: 400 },
  "15": { label: "تيزي وزو", home: 800, desk: 400 },
  "16": { label: "الجزائر", home: 500, desk: 300 },
  "17": { label: "الجلفة", home: 900, desk: 500 },
  "18": { label: "جيجل", home: 800, desk: 400 },
  "19": { label: "سطيف", home: 800, desk: 400 },
  "20": { label: "سعيدة", home: 700, desk: 400 },
  "21": { label: "سكيكدة", home: 900, desk: 400 },
  "22": { label: "سيدي بلعباس", home: 600, desk: 400 },
  "23": { label: "عنابة", home: 900, desk: 500 },
  "24": { label: "قالمة", home: 900, desk: 400 },
  "25": { label: "قسنطينة", home: 800, desk: 400 },
  "26": { label: "المدية", home: 700, desk: 400 },
  "27": { label: "مستغانم", home: 600, desk: 400 },
  "28": { label: "المسيلة", home: 900, desk: 500 },
  "29": { label: "معسكر", home: 600, desk: 400 },
  "30": { label: "ورقلة", home: 900, desk: 500 },
  "31": { label: "وهران", home: 600, desk: 400 },
  "32": { label: "البيض", home: 700, desk: 500 },
  "33": { label: "إليزي", home: 1300, desk: 600 },
  "34": { label: "برج بوعريريج", home: 800, desk: 400 },
  "35": { label: "بومرداس", home: 700, desk: 400 },
  "36": { label: "الطارف", home: 900, desk: 500 },
  "37": { label: "تندوف", home: 1300, desk: 600 },
  "38": { label: "تيسمسيلت", home: 700, desk: 400 },
  "39": { label: "الوادي", home: 1000, desk: 500 },
  "40": { label: "خنشلة", home: 900, desk: 500 },
  "41": { label: "سوق أهراس", home: 900, desk: 500 },
  "42": { label: "تيبازة", home: 700, desk: 400 },
  "43": { label: "ميلة", home: 800, desk: 400 },
  "44": { label: "عين الدفلى", home: 650, desk: 400 },
  "45": { label: "النعامة", home: 700, desk: 400 },
  "46": { label: "عين تموشنت", home: 600, desk: 400 },
  "47": { label: "غرداية", home: 1000, desk: 500 },
  "48": { label: "غليزان", home: 600, desk: 400 },
  "49": { label: "تيميمون", home: 1300, desk: 600 },
  "50": { label: "برج باجي مختار", home: 900, desk: 500 },
  "51": { label: "أولاد جلال", home: 1300, desk: 600 },
  "52": { label: "بني عباس", home: 1300, desk: 600 },
  "53": { label: "عين صالح", home: 1300, desk: 600 },
  "54": { label: "عين قزام", home: 1300, desk: 600 },
  "55": { label: "تقرت", home: 900, desk: 500 },
  "56": { label: "الجانت", home: 1300, desk: 600 },
  "57": { label: "المغير", home: 900, desk: 500 },
  "58": { label: "المنيعة", home: 1000, desk: 500 }
};

function formatCurrency(value) {
  return `${Number(value).toLocaleString("ar-DZ")} دج`;
}

function populateWilayas() {
  const wilayaSelect = document.getElementById("wilaya");
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "اختر الولاية";
  wilayaSelect.appendChild(placeholder);

  Object.entries(shippingRates).forEach(([id, data]) => {
    const option = document.createElement("option");
    option.value = id;
    option.textContent = data.label;
    wilayaSelect.appendChild(option);
  });
}

function calculateTotal() {
  const qty = document.getElementById("quantity").value;
  const productPrice = qty === "2" ?  5500 : 2800;
  const wilayaId = document.getElementById("wilaya").value;
  const deliveryType = document.querySelector("input[name='delivery_type']:checked").value;
  const shippingPrice = wilayaId && shippingRates[wilayaId] ? shippingRates[wilayaId][deliveryType] : 0;
  const totalPrice = productPrice + shippingPrice;

  document.getElementById("summary-product-price").textContent = formatCurrency(productPrice);
  document.getElementById("summary-shipping-price").textContent = formatCurrency(shippingPrice);
  document.getElementById("summary-total-price").textContent = formatCurrency(totalPrice);
}

document.addEventListener("DOMContentLoaded", () => {
  populateWilayas();
  document.getElementById("order-form").addEventListener("submit", (event) => {
    event.preventDefault();
  });
  calculateTotal();
});
