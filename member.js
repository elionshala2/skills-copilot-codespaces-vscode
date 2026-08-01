function skillsMember() {
    return {
        name: "John Doe",
        skills: ["JavaScript", "Node.js", "React"],
        addSkill: function(skill) {
            this.skills.push(skill);
        }
        
    }
}