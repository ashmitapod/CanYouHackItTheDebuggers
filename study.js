const study_technique=[
    "Spaced Repetition",
    "Active Recall",
    "Interleaved Practice",
    "Pomodoro Technique",
    "Dual Coding",
    "Self-Explanation",
    "Elaborative Interrogation",
    "Mind Mapping",
    "Retrieval Practice",
    "Metacognitive Strategies",
    "Contextual Learning",
    "Focus and Attention Management",
    "Study Group Collaboration",
    "Learning by Teaching"
]
const study_technique_explain=[
    "This technique involves reviewing information at increasing intervals over time to improve long-term retention and combat forgetting.",
    "Active recall is the practice of retrieving information from memory, rather than passively reviewing notes. It enhances memory consolidation and recall.",
    "Interleaved practice involves mixing different types of problems or subjects during study sessions to improve problem-solving skills and learning transfer.",
    "This time management method uses a timer to break work into intervals, traditionally 25 minutes, followed by short breaks. It helps maintain focus and productivity.",
    "Dual coding involves combining verbal and visual information to enhance learning. By presenting material in both text and images, learners can better understand and remember it.",
    "Self-explanation involves explaining the material to oneself or others, which helps deepen understanding and uncover gaps in knowledge.",
    "This technique involves asking why the information is true and how it relates to what you already know, fostering deeper understanding and integration of new information.",
    "Mind mapping uses diagrams to represent words, ideas, tasks, or other concepts linked around a central concept. It helps organize information visually and improves recall.",
    "Retrieval practice involves repeatedly testing oneself on the material to strengthen memory and learning, rather than just reviewing notes.",
    "Metacognitive strategies involve planning, monitoring, and evaluating one's own learning processes. This self-awareness helps improve learning efficiency and effectiveness.",
    "Contextual learning emphasizes learning through experience and reflection. It involves applying knowledge to real-world situations to deepen understanding.",
    "This technique involves managing distractions and focusing attention to improve learning efficiency. Strategies include mindfulness and task prioritization.",
    "Collaborative learning in study groups promotes discussion and exchange of ideas, enhancing understanding through social interaction and peer feedback.",
    "Teaching others what you have learned reinforces your own understanding and identifies gaps in knowledge. This technique is based on the concept that teaching enhances learning."
]
const todo=function(){
    const randomIndex = Math.floor(Math.random() * study_technique.length);
    document.getElementById('studytechnique').textContent = study_technique[randomIndex];
    document.getElementById('techniqueDescription').textContent = study_technique_explain[randomIndex];
}
todo()