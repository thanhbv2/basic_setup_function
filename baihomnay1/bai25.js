////// tìm  phần tử tài lớn nhất trong mảng

function Longest_Country_Name(country_name) {
    return country_name.reduce(function (lname, country) {
        //// ở đây e tạm hiểu là lấy tham số của longest trả ra một cái fuction có có 2 tham số được reduce() sau đó so sánh 2 tham số đó với 
        if (lname.length > country.length) {
            return lname
        }
        return country
    },
    //// return lname.length > country.length ? lname : country; code cũ e sửa theo ý hiểu
    );

}
console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));