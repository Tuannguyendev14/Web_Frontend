
var arrayProductStore = [];

var Product = [
    {
        name_product: 'Đồng Hồ Tissot 6.7',
        price: 2.562000,
        quantity: 100,
        code: 'EFV-540L-1AVUDF'
    },
    {
        name_product: 'Đồng Hồ Tissot 8.',
        price: 2.562000,
        quantity: 100,
        code: 'EFV-540L-2AVUDF'
    }
]
// sessionStorage.setItem('arrayProduct', JSON.stringify(arrProduct));
// var list = sessionStorage.getItem('arrProduct');





//mua
var arrProduct = [];


// thêm sản phẩm
function addProduct(i) {

    var name_product = document.getElementsByName("namProduct")[i].innerHTML;

    var quantity = document.getElementsByName("quant[3]")[i].value;
    var code = document.getElementsByName("code")[i].innerHTML
    var price = document.getElementsByName("price")[i].innerHTML;

    var byProduct = {
        name_product: name_product,
        price: price,
        quantity: quantity,
        code: code
    }
    arrProduct.push(byProduct);


    sessionStorage.setItem('arrProduct', JSON.stringify(arrProduct));
    var list = sessionStorage.getItem('arrProduct');
    var arr = JSON.parse(list);
    sessionStorage.setItem('list1', JSON.stringify(arr));

    var sl = parseInt(document.getElementById("cart").innerHTML);
    var productOld = parseInt(document.getElementById("sl").value);

    document.getElementById("cart").innerHTML = sl + productOld;

    sessionStorage.setItem('soluong', sl + productOld);
    var soluong2 = sessionStorage.getItem('soluong');
    var test = JSON.parse(soluong2);

    sessionStorage.setItem('SLpage2', JSON.stringify(test));

}
// tăng số lượng
function plus(i) {

    var productOld = parseInt(document.getElementsByName("quant[3]")[i].value);
    productOld = productOld + 1;
    document.getElementsByName("quant[3]")[i].value = productOld;

}
// giảm số lượng
function minus(i) {
    var productOld = parseInt(document.getElementsByName("quant[3]")[i].value);
    productOld = productOld - 1;
    document.getElementsByName("quant[3]")[i].value = productOld;
}







