function skillsmember() {
  return {
    name: 'John Doe',
    skills: ['JavaScript', 'React', 'Node'],
    // Method
    getSkills: function() {
      return this.skills;
    }
  }
}

module.exports = skillsmember;