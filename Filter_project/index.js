let productCount = 3;
let btn_container = document.querySelector(".btn-container");
let load_btn = document.querySelector(".load-btn");
load_btn.addEventListener("click", async () => {
  productCount += 3;
  await displayContent();
  let data = await fetch_data();
  if (productCount >= data.length) {
    btn_container.style.display = "none";
  }
});

let fetch_data = async () => {
  try {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

let displayContent = async (filterdata) => {
  try {
    let loader = document.querySelector(".loader");
    let btn = document.querySelector(".btn-container");
    let data = await fetch_data();
    if (data) {
      loader.style.display = "none";
      btn.style.display = "block";
    }
    let displaySpace = document.getElementById("products");
    let newElement = "";
    (filterdata || data.slice(0, productCount)).forEach((product) => {
      newElement += `<div class="product" id="${product.id}">
            <img src="${product.image}" alt="" class="image">
            <div class="rating">${product.rating.rate} | ${product.rating.count}</div>
            <div class="title">${product.title}</div>
            <div class="description">${product.description}
            <div class="read"  onclick = "readMore(${product.id})">Read More</div>
            </div>
            <div class="price">Rs ${product.price}</div>
            <div class="category">${product.category}</div>
        </div>`;
      displaySpace.innerHTML = newElement;
    });
    // let moreBtn = document.querySelectorAll('.read');
    // let title = document.querySelectorAll('.title');
    // let description = document.querySelectorAll('.description');
    // // for(i=0; i<moreBtn.length; i++)
    // {
    //   moreBtn[i].addEventListener('click', ()=>{
    //     title[i].classList.add('read-more');            
    //     description[i].classList.add('read-more');           
    //   })
    // }
  } catch (error) {
    console.error("Error while displaying content:", error);
  }
};

displayContent();


async function handleOnChange() {
  let inputText = document.querySelector(".input_data");
  let data = await fetch_data();
  inputText.addEventListener("input", (event) => {
    let filterdata = data.filter((product) => {
      return (
        product.title.toLowerCase().includes(event.target.value) ||
        product.price.toString().includes(event.target.value) ||
        product.category.toLowerCase().includes(event.target.value)
      );
    });
    displayContent(filterdata);
  });
}

handleOnChange();

window.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY;
  if (scrollPosition < 20) {
    goto_btn.style.display = "none";
  } else {
    goto_btn.style.display = "block";
  }
});
let goto_btn = document.querySelector(".goto-top");
goto_btn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});


function readMore(productId)
{
  let product = document.getElementById(productId);
  let moreBtn = product.querySelector('.read')
  let title = product.querySelector('.title');
  let description = product.querySelector('.description');
  title.classList.toggle('read-more');
  description.classList.toggle('read-more');

  if (description.classList.contains('read-more')) {
    moreBtn.textContent = 'Read Less';
  } else {
    moreBtn.textContent = 'Read More';
  }

  // let readMore= document.getElementById(productId);  
}