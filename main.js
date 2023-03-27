var elForm = document.querySelector(".form");
var elCompanyInput = document.querySelector(".Company-input");
var elJobInput = document.querySelector(".Job-input");
var elSalaryInput = document.querySelector(".Salary-input");
var elCreateButton = document.querySelector(".input-btn");
var elJobListContainer = document.querySelector(".Job-list");

var elJobs = [
  { id: 1, text: "Frontend Developer", company: "Google", salary: "4000$" },
  { id: 2, text: "Frontend Developer", company: "Facebook", salary: "3000$" },
];

function renderJobList() {
  elJobListContainer.innerHTML = null;
  for (var i = 0; i < elJobs.length; i++) {
    var elJobItem = document.createElement("li");
    elJobItem.innerHTML = ` <div class="job-card">
      <div class="Job-item-header">${elJobs[i].text}</div>
      <div class="Job-item-body">
        <p class="company-name">Company: <b>${elJobs[i].company}</b></p>
        <p class="company-salary">Salary: <b>${elJobs[i].salary}</b></p>
      </div>
    </div>`;
    elJobListContainer.appendChild(elJobItem);
  }
}

function onSubmit(evt) {
  evt.preventDefault();

  var newJob = {
    id: elJobs.length + 1,
    text: elJobInput.value.trim(),
    company: elCompanyInput.value.trim(),
    salary: elSalaryInput.value.trim(),
  };

  elJobs.push(newJob);

  var elJobItem = document.createElement("li");
  elJobItem.innerHTML = ` <div class="job-card">
    <div class="Job-item-header">${newJob.text}</div>
    <div class="Job-item-body">
      <p class="company-name">Company: <b>${newJob.company}</b></p>
      <p class="company-salary">Salary: <b>${newJob.salary}</b></p>
    </div>
  </div>`;
  elJobListContainer.appendChild(elJobItem);

  elJobInput.value = "";
  elCompanyInput.value = "";
  elSalaryInput.value = "";
}

elForm.addEventListener("submit", onSubmit);
renderJobList();
