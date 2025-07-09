
function showRoadmap() {
  const selectedClass = document.getElementById("classSelect").value;
  const output = document.getElementById("roadmapOutput");
  const roadmaps = {
    5: "Focus on basic subjects, start exploring interests.",
    6: "Introduce logical thinking and communication.",
    7: "Encourage project-based learning.",
    8: "Explore early career talks and hobbies.",
    9: "Start skill development and career awareness.",
    10: "Career awareness sessions, explore streams after 10th."
  };
  output.innerText = roadmaps[selectedClass] || "Select a valid class.";
}

function showDepartments() {
  const selected = document.getElementById("streamSelect").value;
  const departments = {
    science: ["Engineering", "MBBS", "BSc Physics", "Biotech"],
    commerce: ["BCom", "CA", "BBA", "Economics"],
    arts: ["BA History", "Psychology", "Sociology"]
  };
  const output = document.getElementById("deptOutput");
  output.innerHTML = (departments[selected] || []).join("<br>");
}
