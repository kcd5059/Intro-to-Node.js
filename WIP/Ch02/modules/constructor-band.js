module.exports = class Band {
    constructor(name, members) {
        this.name = name;
        this.members = members;
    }

    memberCount() {
        return this.members.length;
    }

    hasMember(member) {
        return this.members.includes(member);
    }
}