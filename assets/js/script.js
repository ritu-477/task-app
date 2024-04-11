

const taskinput = document.querySelector(".taskinput");
const addtask = document.querySelector(".addbtn");
const ul = document.querySelector(".myul");

function tasktodo() {
    if (taskinput.value === "") {
        alert("you must write something!")
    }
    else {
        taskinput.value === ''
        const li = document.createElement("li")
        li.innerHTML = taskinput.value;
        li.className = "list"
        li.innerHTML = `
    <div class="items active d-flex justify-content-between align-items-center mb-2">
<p class="mb-0 active break-word">${taskinput.value}</p>
<div class="d-flex align-items-center justify-content-center gap-3">
<div class="circle d-flex align-items-center justify-content-center cursor" onclick="click()"><svg width="11" height="9"
        viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M3.99909 5.58697L1.70009 3.29197L0.288086 4.70797L4.00109 8.41297L10.7071 1.70697L9.29309 0.292969L3.99909 5.58697Z"
            fill="#808080" />
    </svg>
</div>
<span><svg class="cursor" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.5">
<path d="M5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22H17C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20V8H21V6H17V4C17 3.46957 16.7893 2.96086 16.4142 2.58579C16.0391 2.21071 15.5304 2 15 2H9C8.46957 2 7.96086 2.21071 7.58579 2.58579C7.21071 2.96086 7 3.46957 7 4V6H3V8H5V20ZM9 4H15V6H9V4ZM8 8H17V20H7V8H8Z" fill="black"/>
<path d="M9 10H11V18H9V10ZM13 10H15V18H13V10Z" fill="black"/>
</g>
</svg>
</span>
</div>
</div>
`
        // saveData();
        ul.appendChild(li)
        // delete task
        li.querySelector("span").addEventListener("click", remove);
        function remove() {
            li.remove()
        }
    }
    taskinput.value = ''
};
// task checked
ul.addEventListener("click", (e) => {
    if (e.target.classList.contains("circle")) {
        e.target.parentElement.parentElement.classList.toggle("linethro");
    }
    // saveData();
});
















