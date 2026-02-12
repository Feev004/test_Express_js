function fetchDataFromServer() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("--- จำลองว่า ข้อมูลสินค้ากำลังส่งมาจาก Server ---");
    }, 5000);
  });
}

function fetchDataFromServer2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("2: ทำงานอื่นต่อทันที ไม่รอฟังก์ชันข้างบน");
    }, 1000);
  });
}
function fetchDataFromServer3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("3: โปรแกรมหลักรันเสร็จสิ้น");
    }, 1000);
  });
}

function end() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("C: จบฟังก์ชัน startProcess");
    }, 1000);
  });
}
async function startProcess() {
  console.log("A: เริ่มต้นฟังก์ชัน startProcess");

  const data = await fetchDataFromServer();
  console.log("B:", data); 

  const data2 = await fetchDataFromServer2();
  console.log(data2);

  const data3 = await fetchDataFromServer3();
  console.log(data3);

  const endData = await end();
  console.log(endData);
}
console.log("1: เริ่มรันโปรแกรมหลัก");
startProcess();
