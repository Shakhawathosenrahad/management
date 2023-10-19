let log = console.log;

// login page eye button 

const eye = document.querySelector(".login_input div > .fa-solid");
const password = document.querySelector(".login_input input[type='password']");

eye?.addEventListener("click", function () {
  if (password.type === "password") {
    this.classList.replace("fa-eye-slash", "fa-eye");
    password.type = "text";
  }
  else {
    this.classList.replace("fa-eye", "fa-eye-slash");
    password.type = "password";
  }
})

// login button loading spinner

const btn = document.querySelector(".switch button");


btn?.addEventListener("click", function () {
  this.innerHTML = `<span></span>`;

  let a = document.createElement("a");
  if(this.id === "home") {
    a.href = "./dashboard/dashboard.html";
  }
  else {
    a.href = "../index.html";
  }
  setTimeout(() => {
    a.click();
  }, 2000);
})




// Home page or Home Dashboard

var options = {
  series: [40, 23, 36],
  chart: {
    width: 380,
    type: 'pie',
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 400
      }
    }
  }]
};


if (document.querySelector(".startup_chart #chart")) {
  var chart = new ApexCharts(document.querySelector(".startup_chart #chart"), options);
  chart.render();
}


// business team report performance button

const management = document.querySelectorAll(".cards .card");

management.forEach((manage, index) => {
  manage.addEventListener("click", function() {
    let a = document.createElement("a");
    if (index === 0) {
      a.href = "../business/business.html";
    }

    else if (index === 1) {
      a.href = "../team_management/team.html";
    }

    else if (index === 2) {
      a.href = "../report_management/report.html";
    }

    else {
      a.href = "../performance_report/performance.html";
    }
    
    a.click();
  })
})


// business management

const business_arrow_left = document.querySelector("header > .fa-arrow-left");

business_arrow_left?.addEventListener("click", () => {
  business_arrow_left.style.transform = `translateX(-30px)`;

  setTimeout(() => {
    business_arrow_left.style.transform = `translateX(0)`;

    setTimeout(() => {
      history.back();
    }, 200);
  }, 200);
})


// enterprice details

var options = {
  series: [{
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
  chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: 'Product Trends by Month',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'],
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  }
};

if (document.querySelector(".profit_chart #chart")) {
  var chart = new ApexCharts(document.querySelector(".profit_chart #chart"), options);
  chart.render();
}

const enterprice = document.querySelectorAll(".list tr");

enterprice.forEach(tr => {
  tr.addEventListener("click", function () {
    localStorage.removeItem("name")
    localStorage.removeItem("activity")
    localStorage.removeItem("status")
    localStorage.removeItem("memberNo")

    let name = this.querySelector("td:first-child").innerText.trim();
    let type = this.querySelector("td:nth-child(2)").innerText.trim();
    let activity = this.querySelector("td:nth-child(3)").innerText.trim();

    localStorage.setItem("name", name)
    localStorage.setItem("type", type)
    localStorage.setItem("activity", activity)

    let a = document.createElement("a")
    a.href = "./business_details.html";
    a.click();
  })
})

const changeBtn = document.querySelector(".name .change");

changeBtn?.addEventListener("click", function () {
  let dialog = document.querySelector("dialog");
  dialog.showModal();

  dialog.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      dialog.close();
    })
  })
})



requestIdleCallback(() => {
  let name = document.querySelector(".enterprice_table tr:first-child td:last-child");
  let activity = document.querySelector(".enterprice_table tr:nth-child(2) td:last-child");
  let type = document.querySelector(".enterprice_table tr:nth-child(3) td:last-child");

  if (name) {
    name.innerText = localStorage.getItem("name");
  }
  if (activity) {
    activity.innerText = localStorage.getItem("type");
  }
  if (type) {
    type.innerText = localStorage.getItem("activity");
  }
})


// Team Management

const team = document.querySelectorAll(".team_list tr");

team.forEach(tr => {
  tr.addEventListener("click", function () {
    localStorage.removeItem("name")
    localStorage.removeItem("type")
    localStorage.removeItem("activity")

    let name = this.querySelector("td:first-child").innerText.trim();
    let activity = this.querySelector("td:nth-child(2)").innerText.trim();
    let foundDate = this.querySelector("td:nth-child(4)").innerText.trim();

    localStorage.setItem("name", name)
    localStorage.setItem("activity", activity)
    localStorage.setItem("status", "Active")
    localStorage.setItem("memberNo", "07/12/2014")

    let a = document.createElement("a")
    a.href = "./team_details.html";
    a.click();
  })
})


requestIdleCallback(() => {
  let name = document.querySelector(".team_table tr:first-child td:last-child");
  let foundDate = document.querySelector(".team_table tr:nth-child(2) td:last-child");
  let status = document.querySelector(".team_table tr:nth-child(3) td:last-child");
  let activity = document.querySelector(".team_table tr:nth-child(4) td:last-child");

  if (name) {
    name.innerText = localStorage.getItem("name");
  }
  if (foundDate) {
    foundDate.innerText = localStorage.getItem("memberNo");
  }
  if (activity) {
    activity.innerText = localStorage.getItem("activity");
  }
  if (status) {
    status.innerText = localStorage.getItem("status");
  }
})

const btns = document.querySelectorAll(".team .add_side button");

btns.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    if (index === 0) {
      const addTeam = document.querySelector(".addTeam");
      addTeam.showModal();
      addTeam.lastElementChild.querySelectorAll('button').forEach(btn => {
        btn.onclick = () => {
          addTeam.close();
        }
      })
    }
    else {
      const addTeam = document.querySelector(".addMember");
      addTeam.showModal();
      addTeam.lastElementChild.querySelectorAll('button').forEach(btn => {
        btn.onclick = () => {
          addTeam.close();
        }
      })
    }
  })
})


// report management

const reports = document.querySelectorAll(".btn");

reports.forEach((report, index) => {
  report.onclick = () => {
    if (index === 0) {
      const dialog = document.querySelector(".dialog")
      dialog.style.display = "block";

      dialog.lastElementChild.querySelectorAll("button").forEach(btn => {
        btn.onclick = () => {
          dialog.style.display = "none";
        }
      });
    }

    else {
      let a = document.createElement("a")
      a.href = "./report_archive.html";
      a.click();
    }
  }
})


const report_list = document.querySelectorAll(".report_list tr")

report_list.forEach(list => {
  list.onclick = () => {
    document.querySelector(".financial_report").style.display = "block";

    document.querySelector(".financial_report header .fa-solid").onclick = function() {
      this.style.transform = `translateX(-30px)`;
      setTimeout(() => {
        this.style.transform = `translateX(0)`;
        setTimeout(() => {
          document.querySelector(".financial_report").style.display = "none";
        }, 200);
      }, 200);
    }
  }
})


// Mentoring Session: Mavericks with Mentor

const mentoring_session = document.querySelector(".mentoring_session");
const compare = document.querySelector(".sales button:last-child");


compare?.addEventListener("click", () => {
  mentoring_session.style.display = "block";

  mentoring_session.firstElementChild.firstElementChild.onclick = function() {
    this.style.transform = `translateX(-30px)`;
      setTimeout(() => {
        this.style.transform = `translateX(0)`;
        setTimeout(() => {
          mentoring_session.style.display = "none";
        }, 200);
      }, 200);
  }
})


// performance

const issue = document.querySelectorAll(".issue > p");

issue.forEach(issue => {
  issue.addEventListener("click", function() {
    const topIssues = document.querySelector(".topIssues");
    topIssues.style.display = "block";
    topIssues.firstElementChild.firstElementChild.onclick = function() {
      
      this.style.transform = `translateX(-30px)`;
      setTimeout(() => {
        this.style.transform = `translateX(0)`;
        setTimeout(() => {
          topIssues.style.display = "none";
        }, 200);
      }, 200);
    }
  })
})


// performance

const print = document.querySelectorAll(".print");

print.forEach(btn => {
  btn.addEventListener("click", () => {
    window.print();
  })
})