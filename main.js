import { LocalStorageImpl } from "./expensesRepository/LocalStorageImpl.js";

const store = new LocalStorageImpl();

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();

document.getElementById("year").textContent = `${year}년`;
document.getElementById("month").textContent = `${month}월`;
document.getElementById("date").textContent = `${date}일`;

// 금액과 설명을 입력한 후에 등록 버튼을 클릭시 DB 저장
document.getElementById("new-expenses-submit").addEventListener("click", () => {
    //금액, 설명을 db에 저장해준다.
    const cost = document.getElementById("expenses-cost").value;
    const descript = document.getElementById("expenses-descript").value;

    console.log(cost);
    console.log(descript);

    //store.save();
    console.log("등록되었습니다.");
});
