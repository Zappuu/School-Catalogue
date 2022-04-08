class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
  
    get name() {
      return this._name;
    }
    get level() {
      return this._level;
    }
    get numberOfStudents() {
      return this._numberOfStudents;
    }
  
    set numberOfStudents(value) {
      if (value.isNan()) {
        console.log('value should be a number')
      } else {
        this._numberOfStudents = value;
      }
    }
  
    quickFacts() {
      console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level`);
    }
  
    static pickSubstituteTeacher(value) {
      const random = Math.floor(Math.random() * value.length);
      return value[random];
    }
  }
  
  class primarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, 'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
  
    get policy() {
      return this._pickupPolicy;
    }
  }
  
  class highSchool extends School {
    constructor(name, numberOfStudents, sportsTeam) {
      super(name, 'high', numberOfStudents);
      this._sportsTeam = sportsTeam;
    }
  
    get team() {
      console.log(`${this._sportsTeam}`)
    }
  }
  
  class middleSchool extends School {
    constructor(name, numberOfStudents, averageTestScore) {
      super(name, 'middle', numberOfStudents)
      this._averageTestScore = averageTestScore;
    }
  }
  
  
  const alSmith = new highSchool('Al E. Smith', 415, ['Baseball', ' Basketball' , ' Volleyball' , ' Track and Field'])
  
  const lorraineHansbury = new primarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13');
  lorraineHansbury.quickFacts();
  School.pickSubstituteTeacher('Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli');
  
  alSmith.team;