function initialize() {
  var today = new Date(Date.now()).toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  document.getElementById("currDateTime").innerHTML = today;
  // var t = setInterval(initialize, 1000);
}

function showSrchExamineeScr2() {
  document.getElementById("searchExaminee2").style.display = "block";
  document.getElementById("searchExaminee").style.display = "none";
  document.getElementById("addExaminee").style.display = "none";
  document.getElementById("srchEditExaminee").style.display = "none";
  document.getElementById("setCurrACKstud").style.display = "none";
  document.getElementById("setGradACKstud").style.display = "none";
}

function showSrchExamineeScr() {
  document.getElementById("searchExaminee2").style.display = "none";
  document.getElementById("searchExaminee").style.display = "block";
  document.getElementById("addExaminee").style.display = "none";
  document.getElementById("srchEditExaminee").style.display = "none";
  document.getElementById("setCurrACKstud").style.display = "none";
  document.getElementById("setGradACKstud").style.display = "none";
}

function showAddExamineeScr() {
  document.getElementById("searchExaminee2").style.display = "none";
  document.getElementById("searchExaminee").style.display = "none";
  document.getElementById("addExaminee").style.display = "block";
  document.getElementById("srchEditExaminee").style.display = "none";
  document.getElementById("setCurrACKstud").style.display = "none";
  document.getElementById("setGradACKstud").style.display = "none";
}

function showEditExamineeScr() {
  document.getElementById("searchExaminee2").style.display = "none";
  document.getElementById("searchExaminee").style.display = "none";
  document.getElementById("addExaminee").style.display = "none";
  document.getElementById("srchEditExaminee").style.display = "block";
  document.getElementById("setCurrACKstud").style.display = "none";
  document.getElementById("setGradACKstud").style.display = "none";
}

function showSetCurrACKScr() {
  document.getElementById("searchExaminee2").style.display = "none";
  document.getElementById("searchExaminee").style.display = "none";
  document.getElementById("addExaminee").style.display = "none";
  document.getElementById("srchEditExaminee").style.display = "none";
  document.getElementById("setCurrACKstud").style.display = "block";
  document.getElementById("setGradACKstud").style.display = "none";
}

function showSetGradACKScr() {
  document.getElementById("searchExaminee2").style.display = "none";
  document.getElementById("searchExaminee").style.display = "none";
  document.getElementById("addExaminee").style.display = "none";
  document.getElementById("srchEditExaminee").style.display = "none";
  document.getElementById("setCurrACKstud").style.display = "none";
  document.getElementById("setGradACKstud").style.display = "block";
}

function showSrchScheduleScr() {
  document.getElementById("searchSchedule").style.display = "block";
  document.getElementById("addSchedule").style.display = "none";
  document.getElementById("srchEditSchedule").style.display = "none";
  document.getElementById("deleteSchedule").style.display = "none";
}

function showAddScheduleScr() {
  document.getElementById("searchSchedule").style.display = "none";
  document.getElementById("addSchedule").style.display = "block";
  document.getElementById("srchEditSchedule").style.display = "none";
  document.getElementById("deleteSchedule").style.display = "none";
}

function showEditScheduleScr() {
  document.getElementById("searchSchedule").style.display = "none";
  document.getElementById("addSchedule").style.display = "none";
  document.getElementById("srchEditSchedule").style.display = "block";
  document.getElementById("deleteSchedule").style.display = "none";
}

function showDeleteScheduleScr() {
  document.getElementById("searchSchedule").style.display = "none";
  document.getElementById("addSchedule").style.display = "none";
  document.getElementById("srchEditSchedule").style.display = "none";
  document.getElementById("deleteSchedule").style.display = "block";
}

function showSrchExamScr() {
  document.getElementById("searchExam").style.display = "block";
  document.getElementById("exportResults").style.display = "none";
  document.getElementById("SrchXmnee").style.display = "none";
  document.getElementById("QAnalysis").style.display = "none";
  document.getElementById("iFeedback").style.display = "none";
}

function showExportExamScr() {
  document.getElementById("searchExam").style.display = "none";
  document.getElementById("exportResults").style.display = "block";
  document.getElementById("SrchXmnee").style.display = "none";
  document.getElementById("QAnalysis").style.display = "none";
  document.getElementById("iFeedback").style.display = "none";
}

function showSrchXmneeScr() {
  document.getElementById("searchExam").style.display = "none";
  document.getElementById("exportResults").style.display = "none";
  document.getElementById("SrchXmnee").style.display = "block";
  document.getElementById("QAnalysis").style.display = "none";
  document.getElementById("iFeedback").style.display = "none";
}

function showQAnalysisScr() {
  document.getElementById("searchExam").style.display = "none";
  document.getElementById("exportResults").style.display = "none";
  document.getElementById("SrchXmnee").style.display = "none";
  document.getElementById("QAnalysis").style.display = "block";
  document.getElementById("iFeedback").style.display = "none";
}

function showFeedbackScr() {
  document.getElementById("searchExam").style.display = "none";
  document.getElementById("exportResults").style.display = "none";
  document.getElementById("SrchXmnee").style.display = "none";
  document.getElementById("QAnalysis").style.display = "none";
  document.getElementById("iFeedback").style.display = "block";
}

function moduleIDAddScr(selectObj) {
  var moduleName = new Array();
  moduleName = [
    "MATHEMATICS",
    "PHYSICS",
    "ELECTRICAL FUNDAMENTALS",
    "ELECTRONIC FUNDAMENTALS",
    "ELECTRONIC FUNDAMENTALS",
    "DIGITAL TECHNIQUES",
    "DIGITAL TECHNIQUES",
    "MATERIALS AND HARDWARE",
    "MAINTENANCE PRACTICES",
    "MAINTENANCE PRACTICES",
    "BASIC AERODYNAMICS",
    "HUMAN FACTORS",
    "AVIATION LEGISLATION",
    "AVIATION LEGISLATION",
    "AVIATION LEGISLATION",
    "AVIATION LEGISLATION",
    "TURBINE AEROPLANE AERODYNAMICS, STRUCTURES AND SYSTEMS",
    "AIRCRAFT AERODYNAMICS, STRUCTURES AND SYSTEMS",
    "AIRCRAFT AERODYNAMICS, STRUCTURES AND SYSTEMS",
    "AIRCRAFT AERODYNAMICS, STRUCTURES AND SYSTEMS",
    "AIRCRAFT AERODYNAMICS, STRUCTURES AND SYSTEMS",
    "AIRCRAFT AERODYNAMICS, STRUCTURES AND SYSTEMS",
    "PROPULSION",
    "GAS TURBINE ENGINE",
    "PROPELLER",
  ];
  var p66Cat = new Array();
  p66Cat = [
    "B1/B2",
    "B1/B2",
    "B1/B2",
    "B1",
    "B2",
    "B1.1",
    "B2",
    "B1/B2",
    "B1/B2",
    "B2",
    "B1/B2",
    "B1/B2",
    "B1/B2",
    "B1/B2",
    "B1/B2",
    "B1/B2",
    "B1.1",
    "B2",
    "B2",
    "B2",
    "B2",
    "B2",
    "B2",
    "B1",
    "B1",
  ];
  var idx = selectObj.selectedIndex;
  var selectedModule = moduleName[idx];
  var selectedCat = p66Cat[idx];
  document.getElementById("modulenameAdd").innerHTML = selectedModule;
  document.getElementById("modulenameAdd").value = selectedModule;
  document.getElementById("categoryAdd").innerHTML = selectedCat;
  document.getElementById("categoryAdd").value = selectedCat;
}
