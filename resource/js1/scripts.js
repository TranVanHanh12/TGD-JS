// Slider..............

var index = 0
const rightbtn = document.querySelector('.fa-chevron-right')
const leftbtn = document.querySelector('.fa-chevron-left')
const imgNuber = document.querySelectorAll('.slider-content-img img')
rightbtn.addEventListener("click", function () {
    index = index + 2
    if (index > imgNuber.length - 1) (
        index = 0
    )
    document.querySelector(".slider-content-img").style.transform = "translate3d(-" + index * 610 + "px, 0px, 0px)";
    document.querySelector(".slider-content-img").style.transition = "all 0.5s ease-in-out";
    // index = index + 1
    // if(index > imgNuber.length-1)(
    //     index = 0
    // )
    //  document.querySelector(".slider-content-img").style.right = index * 100 + "%"
})
leftbtn.addEventListener("click", function () {
    index = index - 2
    if (index < 0) (
        index = imgNuber.length - 2
    )
    document.querySelector(".slider-content-img").style.transform = "translate3d(-" + index * 610 + "px, 0px, 0px)";
    document.querySelector(".slider-content-img").style.transition = "all 0.5s ease-in-out";
    //     index = index - 1
    //     if(index <=0)(
    //         index = imgNuber.length - 1
    //     )
    //      document.querySelector(".slider-content-img").style.right = index * 100 + "%"
    //    console.log('ok')
})
// const rightbtn = document.querySelector('.fa-chevron-left')
// ...............
// const adressbtn = document.querySelector('#adress-form')
// // console.log (adressbtn)
// adressbtn.addEventListener("click", function(){
//     document.querySelector('.address-form').style.display = "flex"
// })


var listPhone = [
    
    {
        name: "Điện thoại iPhone 14 Pro 128GB",
        price : "19.230.000đ",
        newprice: "Giá sản phẩm mới: 27.090.000đ",
        discount: "Tiết kiệm: 7.860.000đ",
        imageURL: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75/https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-bac-thumb-200x200.jpg"
    },
    {
        name: "Điện thoại Samsung Galaxy Z Flip4 5G 128GB",
        price : "8.300.000đ",
        statuss: "Sản phẩm mới đã ngừng kinh doanh",
        imageURL: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75/https://cdn.tgdd.vn/Products/Images/42/258047/samsung-galaxy-z-flip4-5g-128gb-thumb-tim-200x200.jpg"
    },
    {
        name: "Điện thoại Samsung Galaxy S23 FE 5G 128GB - Màu Đặc Quyền",
        price: "8.320.000đ",
        pricenew: "14.890.000đ",
        discount: "6.570.000đ",
        imageURL: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75/https://cdn.tgdd.vn/Products/Images/42/306994/samsung-galaxy-s23-fe-mint-thumb-200x200.jpg"
    },
    {
        name: "Điện thoại Samsung Galaxy M54 5G",
        price: "5.840.000đ",
        newprice: "11.990.000đ",
        discount: "6.150.000đ",
        imageURL: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75/https://cdn.tgdd.vn/Products/Images/42/275953/samsung-galaxy-m54-5g-xanh-200x200.jpg"
    },
    {
        name: "Điện thoại OPPO Reno10 5G 256GB Xanh",
        price: "6.110.000đ",
        newprice: "10.990.000đ",
        discount: "4.880.000đ",
        imageURL: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75/https://cdn.tgdd.vn/Products/Images/42/305695/oppo-reno10-blue-thumb-1-200x200.jpg"
    },
    {
        name: "Điện thoại OPPO A77s",
        price: "3.440.000đ",
        newprice: "6.290.000đ",
        discount: "2.850.000đ",
        imageURL: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75/https://cdn.tgdd.vn/Products/Images/42/292780/oppo-a77s-den-thumb-2-200x200.jpg",
        statuss: "Sản phẩm mới đã ngừng kinh doanh"
    },
    {
        name: "Điện thoại OPPO A17",
        price: "2.180.000đ",
        newprice: "3.990.000đ",
        discount: "1.810.000đ",
        imageURL: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75/https://cdn.tgdd.vn/Products/Images/42/288401/oppo-a17-xanh-thumb-200x200.jpg",
        statuss: "Sản phẩm mới đã ngừng kinh doanh"
    },
    {
        name: "Điện thoại Xiaomi Redmi Note 12",
        price: "3.620.000đ",
        newprice: "7.190.000đ",
        discount: "3.570.000",
        imageURL: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75/https://cdn.tgdd.vn/Products/Images/42/299734/xiaomi-redmi-note-12-pro-4g-240423-051110-200x200.jpg",
        statuss: "Sản phẩm mới đã ngừng kinh doanh"
    },
    {
        name: "Điện thoại Xiaomi Redmi 12 8GB",
        price: "2.510.000đ",
        newprice: "3.790.000đ",
        discount: "1.280.000đ",
        imageURL: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75/https://cdn.tgdd.vn/Products/Images/42/307245/xiaomi-redmi-12-xanh-duong-thumb-1-200x200.jpg"
    },
    {
        name: "Điện thoại vivo V25E",
        price: "3.670.000đ",
        imageURL: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75/https://cdn.tgdd.vn/Products/Images/42/283828/vivo-v25e-vang-thumb-1-200x200.jpg",
        statuss: "Sản phẩm mới đã ngừng kinh doanh"
    },

    ]



var listdongho = [
    {
        name: "Đồng hồ CASIO 35 mm Unisex A168WG-9WDF",
        price: "824.000đ",
        pricenew: "2.062.000đ",
        discount: "1.238.000đ",
        imageURL: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75/https://cdn.tgdd.vn/Products/Images/7264/199514/casio-a168wg-9wdf-vang-thumb-200x200.jpg"
    },
    {
        name: "Đồng hồ thong minh realme Watch 3 45mm",
        price: "1.200.000đ",
        pricenew: "1.990.000đ",
        discount: "790.000đ",
        imageURL: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75/https://cdn.tgdd.vn/Products/Images/7077/287056/realme-watch-3-den-thumb-200x200.jpg"
    },
    {
        name: "Đồng hồ FOSSIL Carlie 35.7 mm Nữ ES3708",
        price: "1.123.000đ",
        pricenew: "3.750.000đ",
        discount: "2.625.000đ",
        imageURL: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75/https://cdn.tgdd.vn/Products/Images/7264/198455/fossil-es3708-nau-0-200x200.jpg"
    },
    {
        name: "Đồng hồ thông minh Samsung Glaxy Watch5 40mm",
        price: "3.610.000đ",
        pricenew: "5.990.000đ",
        discount: "2.380.000đ",
        imageURL: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75/https://cdn.tgdd.vn/Products/Images/7077/284932/samsung-galaxy-watch5-tn-200x200.jpg"
    },
    {
        name: "Đồng hồ CITIZEN 26.5 mm Nữ ER0205-80X",
        price: "1.596.000đđ",
        pricenew: "3.990.000đ",
        discount: "2.394.000đ",
        imageURL: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75/https://cdn.tgdd.vn/Products/Images/7264/201704/dong-ho-kim-nu-day-kim-loai-citizen-er0205-80x-hon-thumb-200x200.jpg"
    },
    {
        name: "Đồng hồ thong minh Befit WatchFit 46.7mm",
        price: "540.000đ",
        pricenew: "890.000đ",
        discount: "350.000đ",
        imageURL: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75/https://cdn.tgdd.vn/Products/Images/7077/306530/befit-watch-fit-vang-tn-1-200x200.jpg"
    },
    {
        name: "Đồng hồ KORLEX 36 mm Nữ KS015-01",
        price: "780.000đ",
        pricenew: "2.600.000đ",
        discount: "1.820.000đ",
        imageURL: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75/https://cdn.tgdd.vn/Products/Images/7264/217894/korlex-ks015-01-nu-1-200x200.jpg"
    },
    {
        name: "Đồng hồ thông minh Xiaomi Redmi Watch 3 42.6mm",
        price: "2.100.000đ",
        pricenew: "2.790.000đ",
        discount: "690.000đ",
        imageURL: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75/https://cdn.tgdd.vn/Products/Images/7077/304166/redmi-watch-3-den-tn-1-200x200.jpg"
    },
    {
        name: "Đồng hồ thông minh Befit Sporty 2 Pro 44.8mm",
        price: "1.200.000đ",
        pricenew: "1.990.000đ",
        discount: "790.000đ",
        imageURL: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75/https://cdn.tgdd.vn/Products/Images/7077/296858/befit-sporty-2-pro-den-tn-200x200.jpg"
    },
    {
        name: "Đồng hồ thông minh BeFit B3s 44mm",
        price: "600.000đ",
        pricenew: "990.000đ",
        discount: "390.000đ",
        imageURL: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75/https://cdn.tgdd.vn/Products/Images/7077/318519/befit-b3s-xam-thumb-1-200x200.jpg"
    },
    
]

function ChangeItem(listTMp) {
    var container2 = document.getElementById("phone");
    container2.replaceChildren([]);
    for (var i = 0; i < listTMp.length; i++) {
        var itemData = listTMp[i];
        var parent = document.createElement("div");
        parent.className = "product-item-content";
        
        var image = document.createElement("img");
        image.className = "product-item-content-img";
        image.src = itemData.imageURL;

        var des = document.createElement("div");
        des.className = "product-item-content-text1";

        var nameItem = document.createElement("li");
        nameItem.textContent  = itemData.name;

        var price = document.createElement("li");
        price.textContent  = "Từ: " +  itemData.price;

        var priceNew = document.createElement("li");
      

        var discount = document.createElement("li");
       

        var statuss = document.createElement("li");
      

        des.appendChild(nameItem);
        des.appendChild(price);
        if ("pricenew" in itemData) {
            var priceNew = document.createElement("li");
            priceNew.textContent = "Giá sản phẩm mới: " + itemData.pricenew;
            des.appendChild(priceNew);
        }
        if ("discount" in itemData) {
            var discount = document.createElement("li");
            discount.textContent = "Tiết kiệm: " + itemData.discount;
            des.appendChild(discount);
        }
        if ("statuss" in itemData) {
            var statuss = document.createElement("li");
            statuss.textContent =  itemData.statuss;
            des.appendChild(statuss);
        }
        parent.appendChild(image);
        parent.appendChild(des);
        container2.appendChild(parent);
    }
}





// .............onclick..........
function showProducts(id) {
    if (id === "1") {
        ChangeItem(listPhone)
    } else {
        ChangeItem(listdongho)
    }
}



// ............slider-product.......

const rightbtn2 = document.querySelector('.fa-chevron-right-2')
const leftbtn2 = document.querySelector('.fa-chevron-left-2')
const imgNuber2 = document.querySelectorAll('.product-item1-content')
var index1 = 0;

rightbtn2.addEventListener("click", function () {
    console.log("Right");
    index1 = index1 + 1
    if (index1 > imgNuber2.length - 1) {
        index1 = 0
    }
    document.querySelector(".slide-product").style.right = index1 * 100 + "%"
})

leftbtn2.addEventListener("click", function () {
    console.log("R")
    index1 = index1 - 1
    if (index1 < 0) {
        index1 = imgNuber2.length - 1
    }
    document.querySelector(".slide-product").style.right = index1 * 100 + "%"
})




ChangeItem(listPhone)


